import React from 'react';

import MailboxNewForm from './MailboxNewForm';
import MailboxNewToolbar from './MailboxNewToolbar';
import Panel from '../../../components/panel/Panel';
import PanelBody from '../../../components/panel/PanelBody';

const MailboxNewApp = () => {
    return (
        <div className="row">
            <div className="col-md-9">
                        <div className="col-md-12 extra-space-above">
                            <Panel>
                                <PanelBody className="panel-small">
                                    <MailboxNewToolbar />
                                </PanelBody>
                            </Panel>
                        </div>

                        <div className="col-md-12 extra-space-above">
                            <MailboxNewForm />
                        </div>
            </div>
            <div className="col-md-3" />
        </div>
    )
};

export default MailboxNewApp;