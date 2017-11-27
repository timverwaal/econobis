<?php

namespace App\Http\Controllers\Api\ContactGroup;

use App\Eco\Contact\Contact;
use App\Eco\ContactGroup\ContactGroup;
use App\Helpers\RequestInput\RequestInput;
use App\Http\RequestQueries\ContactGroup\Grid\RequestQuery;
use App\Http\Resources\Contact\FullContact;
use App\Http\Resources\ContactGroup\FullContactGroup;
use App\Http\Resources\ContactGroup\GridContactGroup;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ContactGroupController extends Controller
{
    public function grid(RequestQuery $query)
    {
        return GridContactGroup::collection($query->get());
    }

    public function show(ContactGroup $contactGroup)
    {
        $contactGroup->load(['responsibleUser', 'createdBy', 'contacts']);
        return FullContactGroup::make($contactGroup);
    }

    public function getContactGroups(Contact $contact)
    {
        $groups = $contact->groups()->pluck('name');

        return $groups;
    }


    public function store(RequestInput $requestInput)
    {
        $data = $requestInput->string('name')->whenMissing('')->next()
            ->string('description')->whenMissing('')->next()
            ->boolean('closed')->validate('boolean')->whenMissing(false)->next()
            ->integer('responsibleUserId')->default(null)->validate('exists:users,id')->alias('responsible_user_id')->next()
            ->date('dateStarted')->default(null)->validate('date')->alias('date_started')->next()
            ->date('dateFinished')->default(null)->validate('date')->alias('date_finished')->next()
            ->get();

        $contactGroup = new ContactGroup($data);
        $contactGroup->save();

        return FullContactGroup::make($contactGroup->fresh());
    }

    public function update(RequestInput $requestInput, ContactGroup $contactGroup)
    {
        $data = $requestInput->string('name')->next()
            ->string('description')->next()
            ->boolean('closed')->validate('boolean')->next()
            ->integer('responsibleUserId')->onEmpty(null)->validate('exists:users,id')->alias('responsible_user_id')->next()
            ->date('dateStarted')->onEmpty(null)->validate('date')->alias('date_started')->next()
            ->date('dateFinished')->onEmpty(null)->validate('date')->alias('date_finished')->next()
            ->get();

        $contactGroup->fill($data);
        $contactGroup->save();

        return FullContactGroup::make($contactGroup->fresh());
    }

    public function destroy(ContactGroup $contactGroup)
    {
        $contactGroup->delete();
    }

    public function contacts(ContactGroup $contactGroup)
    {
        return FullContact::collection($contactGroup->contacts);
    }

    public function addContact(ContactGroup $contactGroup, Contact $contact)
    {
        $contactGroup->contacts()->attach($contact);
    }

    public function removeContact(ContactGroup $contactGroup, Contact $contact)
    {
        $contactGroup->contacts()->detach($contact);
    }

    public function addContacts(ContactGroup $contactGroup, Request $request)
    {
        $contactIds = json_decode($request->input('ids'));

        $contactGroup->contacts()->attach($contactIds);
    }
}
