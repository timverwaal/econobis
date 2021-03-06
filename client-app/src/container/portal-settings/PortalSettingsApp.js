import React, { Component } from 'react';

import PortalSettingsForm from './PortalSettingsForm';
import Panel from '../../components/panel/Panel';
import PanelBody from '../../components/panel/PanelBody';
import PortalSettingsToolbar from './PortalSettingsToolbar';
import PortalSettingsAPI from '../../api/portal-settings/PortalSettingsAPI';

// import { fetchPortalSettings, clearPortalSettings } from '../../../actions/portal-settings/PortalSettingsActions';

class PortalSettingsApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            portalSettings: {},
            isLoading: false,
            hasError: false,
        };
    }

    componentDidMount() {
        this.callFetchPortalSettings();
    }

    callFetchPortalSettings = () => {
        this.setState({ isLoading: true, hasError: false });
        const keys =
            '?keys[]=portalName' +
            '&keys[]=cooperativeName' +
            '&keys[]=portalWebsite' +
            '&keys[]=portalUrl' +
            // '&keys[]=defaultTextColor' +
            '&keys[]=backgroundColor' +
            '&keys[]=backgroundTextColor' +
            '&keys[]=backgroundImageColor' +
            '&keys[]=backgroundImageTextColor' +
            '&keys[]=backgroundSecondaryColor' +
            '&keys[]=backgroundSecondaryTextColor' +
            '&keys[]=buttonColor' +
            '&keys[]=buttonTextColor' +
            '&keys[]=responsibleUserId' +
            '&keys[]=checkContactTaskResponsibleUserId' +
            '&keys[]=checkContactTaskResponsibleTeamId' +
            '&keys[]=contactResponsibleOwnerUserId' +
            '&keys[]=emailTemplateNewAccountId' +
            '&keys[]=linkPrivacyPolicy' +
            '&keys[]=showNewAtCooperativeLink';
        PortalSettingsAPI.fetchPortalSettings(keys)
            .then(payload => {
                this.setState({
                    isLoading: false,
                    portalSettings: {
                        ...payload.data,
                        showNewAtCooperativeLink: payload.data.showNewAtCooperativeLink == 'true',
                    },
                });
            })
            .catch(error => {
                this.setState({ isLoading: false, hasError: true });
            });
    };

    updateState = portalSettings => {
        this.setState({ portalSettings });
    };

    render() {
        return (
            <div className="row">
                <div className="col-md-9">
                    <div className="col-md-12 margin-10-top">
                        <Panel>
                            <PanelBody className={'panel-small'}>
                                <PortalSettingsToolbar />
                            </PanelBody>
                        </Panel>
                    </div>

                    <div className="col-md-12 margin-10-top">
                        <PortalSettingsForm
                            portalSettings={this.state.portalSettings}
                            isLoading={this.state.isLoading}
                            hasError={this.state.hasError}
                            updateState={this.updateState}
                        />
                    </div>
                </div>
                <div className="col-md-3" />
            </div>
        );
    }
}

export default PortalSettingsApp;
