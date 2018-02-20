import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import AuditTrailListApp from './container/audit-trail/list/AuditTrailListApp';
import CalendarApp from './container/calendar/CalendarApp';
import ConceptsInListApp from './container/email/concept-list/ConceptsInListApp';
import ConceptApp from './container/email/concept/ConceptApp';
import CampaignDetailsApp from './container/campaigns/details/CampaignDetailsApp';
import CampaignNewApp from './container/campaigns/new/CampaignNewApp';
import CampaignsListApp from './container/campaigns/list/CampaignsListApp';
import ContactDetailsApp from './container/contact/details/ContactDetailsApp';
import ContactGroupDetailsApp from './container/contact-groups/details/ContactGroupDetailsApp';
import ContactGroupNewApp from './container/contact-groups/new/ContactGroupNewApp';
import ContactGroupsListApp from './container/contact-groups/list-groups/ContactGroupsListApp';
import ContactNewApp from './container/contact/new/ContactNewApp';
import ContactsInGroupListApp from './container/contact-groups/list-contacts-in-group/ContactsInGroupListApp';
import ContactsListApp from './container/contact/list/ContactsListApp';
import DashboardApp from './container/dashboard/DashboardApp';
import DocumentsListApp from './container/document/list/DocumentsListApp';
import DocumentDetailsApp from './container/document/details/DocumentDetailsApp';
import DocumentNewApp from './container/document/new/DocumentNewApp';
import DocumentTemplatesListApp from './container/document-template/list/DocumentTemplatesListApp';
import DocumentTemplateDetailsApp from './container/document-template/details/DocumentTemplateDetailsApp';
import DocumentTemplateNewApp from './container/document-template/new/DocumentTemplateNewApp';
import EmailsInListApp from './container/email/list/EmailsInListApp';
import EmailNewApp from './container/email/new/EmailNewApp';
import EmailDetailsApp from './container/email/details/EmailDetailsApp';
import EmailTemplatesListApp from './container/email-templates/list/EmailTemplatesListApp';
import EmailTemplateDetailsApp from './container/email-templates/details/EmailTemplateDetailsApp';
import EmailTemplateNewApp from './container/email-templates/new/EmailTemplateNewApp';
import EmailAnswerApp from './container/email/answer/EmailAnswerApp';
import Forgot from './container/auth/Forgot';
import HousingFileDetailsApp from './container/housing-file/details/HousingFileDetailsApp';
import HousingFileNewApp from './container/housing-file/new/HousingFileNewApp';
import HousingFilesListApp from './container/housing-file/list/HousingFilesListApp';
import QuotationRequestDetailsApp from './container/quotation-request/details/QuotationRequestDetailsApp';
import QuotationRequestNewApp from './container/quotation-request/new/QuotationRequestNewApp';
import QuotationRequestsListApp from './container/quotation-request/list/QuotationRequestsListApp';
import Reset from './container/auth/Reset';
import Login from './container/auth/Login';
import Logout from './container/auth/Logout';
import MailboxDetailsApp from './container/mailbox/details/MailboxDetailsApp';
import MailboxNewApp from './container/mailbox/new/MailboxNewApp';
import MailboxesListApp from './container/mailbox/list/MailboxesListApp';
import Main from './container/global/Main';
import MeasuresListApp from './container/measures/list/MeasuresListApp';
import MeasureDetailsApp from './container/measures/details/MeasureDetailsApp';
import NotFoundedPage from './container/global/NotFoundedPage';
import OpportunitiesListApp from './container/opportunities/list/OpportunitiesListApp';
import OpportunityDetailsApp from './container/opportunities/details/OpportunityDetailsApp';
import OpportunityNewApp from './container/opportunities/new/OpportunityNewApp';
import PermissionHelper from './helpers/PermissionHelper';
import IntakeDetailsApp from './container/intake/details/IntakeDetailsApp';
import IntakeNewApp from './container/intake/new/IntakeNewApp';
import IntakesListApp from './container/intake/list/IntakesListApp';
import RequireAuth from './helpers/RequireAuth';
import TaskDetailsApp from './container/task/details/TaskDetailsApp';
import TaskNewApp from './container/task/new/TaskNewApp';
import TasksListApp from './container/task/list-tasks/TasksListApp';
import NotesListApp from './container/task/list-notes/NotesListApp';
import TeamsListApp from './container/team/list/TeamsListApp';
import TeamNewApp from './container/team/new/TeamNewApp';
import TeamDetailsApp from './container/team/details/TeamDetailsApp';
import UserDetailsApp from './container/users/details/UserDetailsApp';
import UserNewApp from './container/users/new/UserNewApp';
import UsersListApp from './container/users/list/UsersListApp';

const Routes = () => {
    return (
        <Router onUpdate={() => window.scrollTo(0, 0)} history={ hashHistory }>
            <Route path="login" component={ Login } />
            <Route path="loguit" component={ Logout } />
            <Route path='wachtwoord-vergeten' component={Forgot}/>
            <Route path='wachtwoord-wijzig/:token' component={Reset}/>
            <Route path="/" component={ RequireAuth(Main) }>
                <IndexRoute component={ DashboardApp } />

                /* Audit trail*/
                <Route path="audit-trail" component={ AuditTrailListApp } />

                /* Calender/agenda*/
                <Route path="agenda" component={CalendarApp} />

                /* Contact */
                <Route path="contact-groep/nieuw" component={ContactGroupNewApp} />
                <Route path="contact-groepen" component={ ContactGroupsListApp } />
                <Route path="contact/nieuw/:type" component={ ContactNewApp } />
                <Route path="contact/nieuw/:type/organisatie/:id" component={ ContactNewApp } />
                <Route path="contact/:id" component={ ContactDetailsApp } />
                <Route path="contacten" component={ ContactsListApp } />
                /* Contacts in group */
                <Route path="contact-groep/:id" component={ContactGroupDetailsApp} />
                <Route path="contacten-in-groep/:contactGroup" component={ ContactsInGroupListApp } />
                /* Campaign */
                <Route path="campagne/nieuw" component={CampaignNewApp} />
                <Route path="campagne/:id" component={CampaignDetailsApp} />
                <Route path="campagnes" component={CampaignsListApp} />
                <Route path="contacten/:filter/:value" component={ ContactsListApp } />
                /* Documents */
                <Route path="documenten" component={DocumentsListApp} />
                <Route path="document/nieuw/:type" component={DocumentNewApp} />
                <Route path="document/nieuw/:type/contact/:contactId" component={DocumentNewApp} />
                <Route path="document/nieuw/:type/contact-groep/:contactGroupId" component={DocumentNewApp} />
                <Route path="document/nieuw/:type/kans/:opportunityId" component={DocumentNewApp} />
                <Route path="document/nieuw/:type/intake/:intakeId" component={DocumentNewApp} />
                <Route path="document/:id" component={DocumentDetailsApp} />
                /* Document templates */
                <Route path="document-templates" component={DocumentTemplatesListApp} />
                <Route path="document-template/nieuw" component={DocumentTemplateNewApp} />
                <Route path="document-template/:id" component={DocumentTemplateDetailsApp} />
                /* Emails */
                <Route path="emails/concept" component={ConceptsInListApp} />
                <Route path="email/concept/:id" component={ConceptApp} />
                <Route path="emails/:folder" component={EmailsInListApp} />
                <Route path="email/nieuw" component={EmailNewApp} />
                <Route path="email/nieuw/groep/:groupId" component={EmailNewApp} />
                <Route path="email/:id" component={EmailDetailsApp} />
                <Route path="email/:id/:type" component={EmailAnswerApp} />
                /* Email templates */
                <Route path="email-templates" component={EmailTemplatesListApp} />
                <Route path="email-template/nieuw" component={EmailTemplateNewApp} />
                <Route path="email-template/:id" component={EmailTemplateDetailsApp} />
                /* Campagnes */
                <Route path="campagne/nieuw" component={CampaignNewApp} />
                <Route path="campagne/:id" component={CampaignDetailsApp} />
                <Route path="campagnes" component={CampaignsListApp} />
                /* Measures */
                <Route path="maatregelen" component={MeasuresListApp} />
                <Route path="maatregel/:id" component={MeasureDetailsApp} />
                /* Mailboxes */
                <Route path="mailbox/nieuw" component={MailboxNewApp} />
                <Route path="mailbox/:id" component={MailboxDetailsApp} />
                <Route path="mailboxen" component={MailboxesListApp} />
                /* Housing File */
                <Route path="woningdossier/nieuw/contact/:contactId/adres/:addressId" component={HousingFileNewApp} />
                <Route path="woningdossier/:id" component={HousingFileDetailsApp} />
                <Route path="woningdossiers" component={ HousingFilesListApp } />
                /* Quotation Request */
                <Route path="offerteverzoek/nieuw/kans/:opportunityId" component={QuotationRequestNewApp} />
                <Route path="offerteverzoek/:id" component={QuotationRequestDetailsApp} />
                <Route path="offerteverzoeken" component={QuotationRequestsListApp} />
                /* Intake */
                <Route path="intake/nieuw/contact/:contactId/adres/:addressId" component={IntakeNewApp} />
                <Route path="intake/:id" component={IntakeDetailsApp} />
                <Route path="intakes" component={ IntakesListApp } />
                /* User */
                <Route path="gebruiker/nieuw" component={UserNewApp} />
                <Route path="gebruiker/:id" component={UserDetailsApp} />
                <Route path="gebruikers" component={UsersListApp} />
                /* Opportunity */
                <Route path="kans/nieuw" component={OpportunityNewApp} />
                <Route path="kans/nieuw/intake/:intakeId/maatregel/:measureId" component={OpportunityNewApp} />
                <Route path="kans/:id" component={OpportunityDetailsApp} />
                <Route path="kansen" component={OpportunitiesListApp} />
                /* Task / notes */
                <Route path="taak/nieuw" component={TaskNewApp} />
                <Route path="taak/:id" component={TaskDetailsApp} />
                <Route path="taak/nieuw/:type/:id" component={TaskNewApp} />
                <Route path="taak/:id" component={TaskDetailsApp} />
                <Route path="taken" component={TasksListApp} />
                <Route path="notities" component={NotesListApp} />
                /* Teams */
                <Route path="teams" component={TeamsListApp} />
                <Route path="team/nieuw" component={TeamNewApp} />
                <Route path="team/:id" component={TeamDetailsApp} />
                /* 404 route */
                <Route path="*" component={ NotFoundedPage } />
            </Route>
        </Router>
    );
};

export default Routes;
