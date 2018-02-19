<?php

use App\Eco\User\User;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('password/email','Auth\ForgotPasswordController@sendResetLinkEmail');
Route::post('password/reset','Auth\ResetPasswordController@reset');
Route::get('password/reset/{token}', [
    'as' => 'password.reset',
    'uses' => 'Auth\ResetPasswordController@showResetForm'
]);

Route::namespace('Api')
    ->middleware('auth:api')
    ->group(function () {

        Route::get('/me', 'User\UserController@me');

        Route::get('/system-data', 'SystemData\SystemDataController@get');

        Route::get('/contact/grid', 'Contact\GridController@index');
        Route::get('/contact/peek', 'Contact\ContactController@peek');
        Route::post('contact/{contact}/owner/{user}/associate', 'Contact\ContactController@associateOwner');
        Route::get('/contact/{contact}', 'Contact\ContactController@show');
        Route::get('/contact/{contact}/intakes', 'Contact\ContactController@intakes');
        Route::get('/contact/{contact}/housing-files', 'Contact\ContactController@housingFiles');
        Route::get('/contact/{contact}/groups', 'Contact\ContactController@groups');
        Route::post('/contact/{contact}/delete', 'Contact\ContactController@destroy');
        Route::get('/contact/{contact}/tasks', 'Contact\ContactController@tasks');

        Route::get('/intake/grid', 'Intake\IntakeController@grid');
        Route::get('/intake/amount-active', 'Intake\IntakeController@getAmountOfActiveIntakes');
        Route::get('/intake/peek', 'Intake\IntakeController@peek');
        Route::get('/contact/{contact}/intake', 'Intake\IntakeController@getStore');
        Route::post('/contact/intake', 'Intake\IntakeController@store');
        Route::get('/intake/{intake}', 'Intake\IntakeController@show');
        Route::post('/intake/{intake}/update', 'Intake\IntakeController@update');
        Route::post('/intake/{intake}/delete', 'Intake\IntakeController@destroy');

        Route::post('/intake/{intake}/{measure}/attach', 'Intake\IntakeController@attachMeasureRequested');
        Route::post('/intake/{intake}/{measure}/detach', 'Intake\IntakeController@detachMeasureRequested');

        Route::get('/intake/{intake}/tasks', 'Intake\IntakeController@tasks');
        Route::get('/intake/{intake}/notes', 'Intake\IntakeController@notes');
        Route::get('/intake/{intake}/documents', 'Intake\IntakeController@documents');
        Route::get('/intake/{intake}/emails', 'Intake\IntakeController@emails');

        Route::get('/housing-file/grid', 'HousingFile\HousingFileController@grid');
        Route::get('/housing-file/peek', 'HousingFile\HousingFileController@peek');
        Route::get('/contact/{contact}/housing-file', 'HousingFile\HousingFileController@getStore');
        Route::post('/contact/housing-file', 'HousingFile\HousingFileController@store');
        Route::get('/housing-file/{housingFile}', 'HousingFile\HousingFileController@show');
        Route::post('/housing-file/{housingFile}/update', 'HousingFile\HousingFileController@update');
        Route::post('/housing-file/{housingFile}/delete', 'HousingFile\HousingFileController@destroy');

        Route::post('/housing-file/measure-taken', 'HousingFile\HousingFileController@attachMeasureTaken');
        Route::post('/housing-file/{address}/{measure}/detach', 'HousingFile\HousingFileController@detachMeasureTaken');
        
        Route::get('/housing-file/{housingFile}/notes', 'HousingFile\HousingFileController@notes');
        Route::get('/housing-file/{housingFile}/documents', 'HousingFile\HousingFileController@documents');

        Route::get('/user/grid', 'User\GridController@index');
        Route::post('/user', 'User\UserController@store');
        Route::get('/user/{user}', 'User\UserController@show');
        Route::post('/user/{user}', 'User\UserController@update');
        Route::get('/user/with-permission/{permission}', 'User\UserController@withPermission');
        Route::post('/user/{user}/roles/add/{role}', 'User\UserController@addRole');
        Route::post('/user/{user}/roles/remove/{role}', 'User\UserController@removeRole');

        Route::post('/address', 'Address\AddressController@store');
        Route::post('/address/{address}', 'Address\AddressController@update');
        Route::post('/address/{address}/delete', 'Address\AddressController@destroy');

        Route::post('/occupation', 'Occupation\OccupationController@store');
        Route::post('/occupation/update', 'Occupation\OccupationController@update');
        Route::post('/occupation/delete', 'Occupation\OccupationController@destroy');

        Route::post('/email-address', 'EmailAddress\EmailAddressController@store');
        Route::post('/email-address/{emailAddress}', 'EmailAddress\EmailAddressController@update');
        Route::post('/email-address/{emailAddress}/delete', 'EmailAddress\EmailAddressController@destroy');

        Route::post('/phone-number', 'PhoneNumber\PhoneNumberController@store');
        Route::post('/phone-number/{phoneNumber}', 'PhoneNumber\PhoneNumberController@update');
        Route::post('/phone-number/{phoneNumber}/delete', 'PhoneNumber\PhoneNumberController@destroy');

        Route::post('/person', 'Person\PersonController@store');
        Route::post('/person/{person}', 'Person\PersonController@update');
        Route::get('/person/peek', 'Person\PersonController@peek');

        Route::post('/organisation', 'Organisation\OrganisationController@store');
        Route::post('/organisation/{organisation}', 'Organisation\OrganisationController@update');

        Route::post('/contact-note', 'ContactNote\ContactNoteController@store');
        Route::post('/contact-note/{contactNote}', 'ContactNote\ContactNoteController@update');
        Route::post('/contact-note/{contactNote}/delete', 'ContactNote\ContactNoteController@destroy');

        Route::get('/organisation/peek', 'Organisation\OrganisationController@peek');

        Route::get('contact-group/grid', 'ContactGroup\ContactGroupController@grid');
        Route::get('contact-group/peek', 'ContactGroup\ContactGroupController@peek');
        Route::get('contact-group/{contactGroup}', 'ContactGroup\ContactGroupController@show');
        Route::get('contact-group/{contactGroup}/name', 'ContactGroup\ContactGroupController@getName');
        Route::post('contact-group/', 'ContactGroup\ContactGroupController@store');
        Route::post('contact-group/{contactGroup}', 'ContactGroup\ContactGroupController@update');
        Route::post('contact-group/{contactGroup}/delete', 'ContactGroup\ContactGroupController@destroy');
        Route::get('contact-group/{contactGroup}/contacts', 'ContactGroup\ContactGroupController@contacts');
        Route::post('contact-group/{contactGroup}/contacts/add/{contact}', 'ContactGroup\ContactGroupController@addContact');
        Route::post('contact-group/{contactGroup}/contacts/remove/{contact}', 'ContactGroup\ContactGroupController@removeContact');
        Route::get('contact-group/{contactGroup}/contacts/grid', 'ContactGroup\ContactGroupController@gridContacts');
        Route::post('contact-group/{contactGroup}/contacts/add-many', 'ContactGroup\ContactGroupController@addContacts');


        Route::get('opportunity/grid', 'Opportunity\OpportunityController@grid');
        Route::get('opportunity/peek', 'Opportunity\OpportunityController@peek');
        Route::get('opportunity/amount-active', 'Opportunity\OpportunityController@getAmountOfActiveOpportunities');
        Route::get('opportunity/chart-data', 'Opportunity\OpportunityController@chartData');
        Route::get('opportunity/{opportunity}', 'Opportunity\OpportunityController@show');
        Route::post('opportunity/', 'Opportunity\OpportunityController@store');
        Route::post('opportunity/{opportunity}', 'Opportunity\OpportunityController@update');
        Route::post('opportunity/{opportunity}/delete', 'Opportunity\OpportunityController@destroy');

        Route::post('opportunity/{opportunity}/quotation', 'Opportunity\OpportunityQuotationController@store');
        Route::post('opportunity/quotation/{opportunityQuotation}', 'Opportunity\OpportunityQuotationController@update');
        Route::post('opportunity/quotation/{opportunityQuotation}/delete', 'Opportunity\OpportunityQuotationController@destroy');

        Route::get('contact-group/{contactGroup}/tasks', 'ContactGroup\ContactGroupController@tasks');

        Route::get('task/grid/tasks', 'Task\TaskController@gridTask');
        Route::get('task/grid/notes', 'Task\TaskController@gridNote');
        Route::get('task/peek', 'Task\TaskController@peek');
        Route::get('task/calendar', 'Task\TaskController@calendar');
        Route::get('task/amount-active', 'Task\TaskController@getAmountOfActiveTasks');
        Route::get('task/{task}', 'Task\TaskController@show');
        Route::post('task', 'Task\TaskController@store');
        Route::post('task/{task}', 'Task\TaskController@update');
        Route::post('task/{task}/duplicate', 'Task\TaskController@duplicate');
        Route::post('task/{task}/delete', 'Task\TaskController@destroy');
        Route::post('task/{task}/finish', 'Task\TaskController@finish');
        Route::post('task/{task}/properties', 'Task\TaskPropertyValueController@store');

        Route::post('task-property-value/{taskPropertyValue}', 'Task\TaskPropertyValueController@update');
        Route::post('task-property-value/{taskPropertyValue}/delete', 'Task\TaskPropertyValueController@destroy');

        Route::get('campaign/grid', 'Campaign\CampaignController@grid');
        Route::get('campaign/peek', 'Campaign\CampaignController@peek');
        Route::get('campaign/{campaign}', 'Campaign\CampaignController@show');
        Route::post('campaign/', 'Campaign\CampaignController@store');
        Route::post('campaign/{campaign}/opportunity/{opportunity}/associate', 'Campaign\CampaignController@associateOpportunity');
        Route::post('campaign/opportunity/{opportunity}/dissociate', 'Campaign\CampaignController@dissociateOpportunity');
        Route::post('campaign/{campaign}', 'Campaign\CampaignController@update');
        Route::post('campaign/{campaign}/delete', 'Campaign\CampaignController@destroy');
        Route::post('campaign/{campaign}/owner/{user}/associate', 'Campaign\CampaignController@associateOwner');
        Route::post('campaign/{campaign}/response/{contact}/attach', 'Campaign\CampaignController@attachResponse');
        Route::post('campaign/{campaign}/response/{contact}/detach', 'Campaign\CampaignController@detachResponse');
        Route::post('campaign/{campaign}/organisation/{organisation}/attach', 'Campaign\CampaignController@attachOrganisation');
        Route::post('campaign/{campaign}/organisation/{organisation}/detach', 'Campaign\CampaignController@detachOrganisation');

        Route::get('measure/grid', 'Measure\MeasureController@grid');
        Route::get('measure/peek', 'Measure\MeasureController@peek');
        Route::get('measure/{measure}', 'Measure\MeasureController@show');
        Route::post('measure/', 'Measure\MeasureController@store');
        Route::post('measure/faq/{measureFaq}/delete', 'Measure\MeasureController@destroyFaq');
        Route::post('measure/faq/{measureFaq}/update', 'Measure\MeasureController@updateFaq');
        Route::post('measure/{measure}/opportunity/{opportunity}/associate', 'Measure\MeasureController@associateOpportunity');
        Route::post('measure/{measure}/supplier/{organisation}/attach', 'Measure\MeasureController@attachSupplier');
        Route::post('measure/{measure}/supplier/{organisation}/detach', 'Measure\MeasureController@detachSupplier');
        Route::post('measure/{measure}/faq', 'Measure\MeasureController@storeFaq');
        Route::post('measure/{measure}', 'Measure\MeasureController@update');
        Route::post('measure/{measure}/delete', 'Measure\MeasureController@destroy');

        Route::get('mailbox/grid', 'Mailbox\MailboxController@grid');
        Route::get('mailbox/logged-in/email-peek', 'Mailbox\MailboxController@loggedInEmailPeek');
        Route::post('mailbox', 'Mailbox\MailboxController@store');
        Route::get('mailbox/{mailbox}', 'Mailbox\MailboxController@show');
        Route::post('mailbox/{mailbox}', 'Mailbox\MailboxController@update');
        Route::post('mailbox/{mailbox}/users/add/{user}', 'Mailbox\MailboxController@addUser');
        Route::post('mailbox/{mailbox}/users/remove/{user}', 'Mailbox\MailboxController@removeUser');
        Route::get('mailbox/{mailbox}/receive', 'Mailbox\MailboxController@receive');
        Route::get('mailbox/receive/from-mailboxes-user', 'Mailbox\MailboxController@receiveMailFromMailboxesUser');

        Route::get('email/grid/in-folder/{folder}', 'Email\EmailController@grid');
        Route::get('email/new/peek', 'Email\EmailController@peek');
        Route::get('email/amount-open', 'Email\EmailController@getAmountOfOpenEmails');
        Route::get('email/{email}', 'Email\EmailController@show');
        Route::get('email/{email}/reply', 'Email\EmailController@getReply');
        Route::get('email/{email}/reply-all', 'Email\EmailController@getReplyAll');
        Route::get('email/{email}/forward', 'Email\EmailController@getForward');
        Route::get('email/group/{contactGroup}', 'Email\EmailController@getEmailGroup');
        Route::post('email/{email}', 'Email\EmailController@update');
        Route::get('email/email-attachment/{emailAttachment}/download', 'Email\EmailController@downloadEmailAttachment');
        Route::post('email/email-attachment/{email}/store', 'Email\EmailController@storeEmailAttachment');
        Route::post('email/email-attachment/{emailAttachment}/delete', 'Email\EmailController@deleteEmailAttachment');
        Route::post('email/send/{mailbox}', 'Email\EmailController@send');
        Route::post('email/concept/{mailbox}/store', 'Email\EmailController@storeConcept');
        Route::post('email/concept/{email}/update', 'Email\EmailController@updateConcept');
        Route::post('email/concept/{email}/send', 'Email\EmailController@sendConcept');
        Route::post('email/{email}/{contact}', 'Email\EmailController@associateContact');
        Route::post('email/{email}/status/{emailStatusId}', 'Email\EmailController@setEmailStatus');

        Route::get('email-template/grid', 'EmailTemplate\EmailTemplateController@grid');
        Route::get('email-template/peek', 'EmailTemplate\EmailTemplateController@peek');
        Route::get('email-template/{emailTemplate}', 'EmailTemplate\EmailTemplateController@show');
        Route::get('email-template/with-user/{emailTemplate}', 'EmailTemplate\EmailTemplateController@showWithUser');
        Route::post('email-template', 'EmailTemplate\EmailTemplateController@store');
        Route::post('email-template/{emailTemplate}', 'EmailTemplate\EmailTemplateController@update');

        Route::get('document/grid', 'Document\DocumentController@grid');
        Route::get('document/{document}', 'Document\DocumentController@show');
        Route::get('document/{document}/download', 'Document\DocumentController@download');
        Route::post('document/{document}/delete', 'Document\DocumentController@destroy');
        Route::post('document', 'Document\DocumentController@store');
        Route::post('document/{document}', 'Document\DocumentController@update');

        Route::get('document-template/grid', 'DocumentTemplate\DocumentTemplateController@grid');
        Route::get('document-template/peekGeneral', 'DocumentTemplate\DocumentTemplateController@peekGeneral');
        Route::get('document-template/peekNotGeneral', 'DocumentTemplate\DocumentTemplateController@peekNotGeneral');
        Route::get('document-template/{documentTemplate}', 'DocumentTemplate\DocumentTemplateController@show');
        Route::post('document-template', 'DocumentTemplate\DocumentTemplateController@store');
        Route::post('document-template/{documentTemplate}/delete', 'DocumentTemplate\DocumentTemplateController@destroy');
        Route::post('document-template/{documentTemplate}', 'DocumentTemplate\DocumentTemplateController@update');

        Route::get('audit-trail/grid', 'AuditTrail\AuditTrailController@grid');
        Route::get('audit-trail/peek-models', 'AuditTrail\AuditTrailController@peekModels');

        Route::post('general-search', 'GeneralSearch\GeneralSearchController@search');

        Route::get('team/grid', 'Team\TeamController@grid');
        Route::get('team/peek', 'Team\TeamController@peek');
        Route::get('team/{team}', 'Team\TeamController@show');
        Route::post('team', 'Team\TeamController@store');
        Route::post('team/{team}', 'Team\TeamController@update');
        Route::post('team/{team}/delete', 'Team\TeamController@destroy');
        Route::post('team/{team}/{user}/attach', 'Team\TeamController@attachUser');
        Route::post('team/{team}/{user}/detach', 'Team\TeamController@detachUser');

        Route::get('/quotation-request/grid', 'QuotationRequest\QuotationRequestController@grid');
        Route::get('/quotation-request/peek', 'QuotationRequest\QuotationRequestController@peek');
        Route::get('/opportunity/{opportunity}/quotation-request', 'QuotationRequest\QuotationRequestController@getStore');
        Route::post('/quotation-request', 'QuotationRequest\QuotationRequestController@store');
        Route::get('/quotation-request/{quotationRequest}', 'QuotationRequest\QuotationRequestController@show');
        Route::post('/quotation-request/{quotationRequest}/update', 'QuotationRequest\QuotationRequestController@update');
        Route::post('/quotation-request/{quotationRequest}/delete', 'QuotationRequest\QuotationRequestController@destroy');
    }
);