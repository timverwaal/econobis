<?php

namespace App\Http\Controllers\Api\Task;

use App\Eco\Task\Jobs\DeleteTask;
use App\Eco\Task\Task;
use App\Eco\Task\TaskAttachment;
use App\Eco\Task\TaskStatus;
use App\Helpers\RequestInput\RequestInput;
use App\Http\Controllers\Api\Task\Grid\RequestQuery;
use App\Http\Resources\Intake\GridTask;
use App\Http\Resources\Task\CalendarTask;
use App\Http\Resources\Task\FullTask;
use App\Http\Resources\Task\FullTaskAttachment;
use App\Http\Resources\Task\TaskPeek;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class TaskController extends Controller
{

    public function grid(RequestQuery $requestQuery)
    {
        $tasks = $requestQuery->get();

        return GridTask::collection($tasks)
            ->additional(['meta' => [
                'total' => $requestQuery->total(),
            ]
        ]);
    }

    public function calendar(Request $request)
    {
//        dd($request->startDate);
        $tasks = Task::whereBetween('date_planned', [$request->startDate, $request->endDate])->get();

        return CalendarTask::collection($tasks);
    }

    public function show(Task $task)
    {
        $task->load([
            'type',
            'contact',
            'intake',
            'contactGroup',
            'campaign',
            'responsibleUser',
            'createdBy',
            'finishedBy',
            'attachments',
            'opportunity.status',
            'opportunity.measure',
            'properties.property',
        ]);

        return FullTask::make($task);
    }

    public function store(RequestInput $input)
    {
        $this->authorize('manage', Task::class);

        $data = $input->string('name')->whenMissing('')->onEmpty('')->next()
            ->string('description')->whenMissing('')->onEmpty('')->next()
            ->integer('typeId')->validate(['required', 'exists:task_types,id'])->alias('type_id')->next()
            ->integer('contactId')->validate('exists:contacts,id')->whenMissing(null)->onEmpty(null)->alias('contact_id')->next()
            ->integer('statusId')->validate(['required', Rule::in(TaskStatus::ids())])->alias('status_id')->next()
            ->integer('intakeId')->validate('exists:intakes,id')->whenMissing(null)->onEmpty(null)->alias('intake_id')->next()
            ->integer('contactGroupId')->validate('exists:contact_groups,id')->whenMissing(null)->onEmpty(null)->alias('contact_group_id')->next()
            ->integer('campaignId')->validate('exists:campaigns,id')->whenMissing(null)->onEmpty(null)->alias('campaign_id')->next()
            ->date('datePlanned')->validate('date')->whenMissing(null)->onEmpty(null)->alias('date_planned')->next()
            ->string('startTimePlanned')->whenMissing(null)->onEmpty(null)->alias('start_time_planned')->next()
            ->string('endTimePlanned')->whenMissing(null)->onEmpty(null)->alias('end_time_planned')->next()
            ->date('dateFinished')->validate('date')->whenMissing(null)->onEmpty(null)->alias('date_finished')->next()
            ->integer('responsibleUserId')->validate(['required', 'exists:users,id'])->alias('responsible_user_id')->next()
            ->integer('finishedById')->validate('exists:users,id')->whenMissing(null)->onEmpty(null)->alias('finished_by_id')->next()
            ->integer('opportunityId')->validate('exists:opportunities,id')->onEmpty(null)->alias('opportunity_id')->next()
            ->get();

        $task = new Task($data);
        $task->created_by_id = Auth::id();
        if($task->getStatus()->equals(TaskStatus::finished())){
            $task->date_finished = Carbon::today();
            $task->finished_by_id = Auth::id();
        }
        $task->save();

        return $this->show($task);
    }

    public function update(Task $task, RequestInput $input)
    {
        $this->authorize('manage', Task::class);

        $data = $input->string('name')->next()
            ->string('description')->next()
            ->integer('typeId')->validate('exists:task_types,id')->alias('type_id')->next()
            ->integer('contactId')->validate('exists:contacts,id')->onEmpty(null)->alias('contact_id')->next()
            ->integer('statusId')->validate(Rule::in(TaskStatus::ids()))->alias('status_id')->next()
            ->integer('intakeId')->validate('exists:intakes,id')->onEmpty(null)->alias('intake_id')->next()
            ->integer('contactGroupId')->validate('exists:contact_groups,id')->onEmpty(null)->alias('contact_group_id')->next()
            ->integer('campaignId')->validate('exists:campaigns,id')->onEmpty(null)->alias('campaign_id')->next()
            ->date('datePlanned')->validate('date')->onEmpty(null)->alias('date_planned')->next()
            ->string('startTimePlanned')->whenMissing(null)->onEmpty(null)->alias('start_time_planned')->next()
            ->string('endTimePlanned')->whenMissing(null)->onEmpty(null)->alias('end_time_planned')->next()
            ->date('dateFinished')->validate('date')->onEmpty(null)->alias('date_finished')->next()
            ->integer('responsibleUserId')->validate('exists:users,id')->alias('responsible_user_id')->next()
            ->integer('finishedById')->validate('exists:users,id')->onEmpty(null)->alias('finished_by_id')->next()
            ->integer('opportunityId')->validate('exists:opportunities,id')->onEmpty(null)->alias('opportunity_id')->next()
            ->get();

        $task->fill($data);

        if($task->isDirty('status_id') && $task->getStatus()->equals(TaskStatus::finished())){
            $task->date_finished = Carbon::today();
            $task->finished_by_id = Auth::id();
        }
        $task->save();

        return $this->show($task);
    }

    public function destroy(Task $task)
    {
        $this->authorize('manage', Task::class);

        DeleteTask::single($task, true);
    }

    public function finish(Task $task)
    {
        $this->authorize('manage', Task::class);

        $task->date_finished = Carbon::today();
        $task->status_id = TaskStatus::finished()->id;
        $task->finished_by_id = Auth::id();
        $task->save();

        return $this->show($task->fresh());
    }

    public function attachments(Task $task)
    {
        return FullTaskAttachment::collection($task->attachments);
    }

    public function getAmountOfActiveTasks(){
        $taskIds = [TaskStatus::not_started()->id, TaskStatus::started()->id, TaskStatus::pending()->id];
        return Task::whereIn('status_id', $taskIds)->count();
    }


    public function peek()
    {
        return TaskPeek::collection(Task::orderBy('id')->get());
    }
}
