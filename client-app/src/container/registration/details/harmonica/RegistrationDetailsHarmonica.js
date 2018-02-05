import React, {Component} from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';

import Panel from "../../../../components/panel/Panel";
import PanelBody from '../../../../components/panel/PanelBody';
import OpportunityList from './OpportunityList';
import TaskList from './TaskList';
import DocumentHarmonica from "./DocumentHarmonica";

class RegistrationDetailsHarmonica extends Component {
    constructor(props){
        super(props);

        this.state = {
            toggleShowOpportunities: false,
            toggleShowTasks: false,
            toggleShowList: {
                documents: false,
            },
        };

        this.toggleShowList = this.toggleShowList.bind(this);
    };

    newOpportunity = () => {
        hashHistory.push(`/kans/nieuw/aanmelding/${this.props.id}`);
    };

    toggleOpportunity = () => {
        this.setState({
            toggleShowOpportunities: !this.state.toggleShowOpportunities
        });
    };

    newTask = () => {
        hashHistory.push(`/taak/nieuw/aanmelding/${this.props.id}`);
    };

    newDocument = (type) => {
        hashHistory.push(`/document/nieuw/${type}/aanmelding/${this.props.id}`);
    };

    toggleShowList(name) {
        this.setState({
            ...this.state,
            toggleShowList: {
                ...this.state.toggleShowList,
                [name]: !this.state.toggleShowList[name],
            }
        });
    };

    toggleTask = () => {
        this.setState({
            toggleShowTasks: !this.state.toggleShowTasks
        });
    };
    render(){
        const { permissions = {} } = this.props;
        return (
            <div className="col-md-12 margin-10-top">
                <Panel className={"harmonica-button"}>
                    <PanelBody>
                        <div className="col-sm-12" onClick={this.toggleOpportunity}>
                            <span className="">KANSEN <span className="badge">{ this.props.registrationDetails.opportunityCount }</span></span>
                            {permissions.manageOpportunity &&
                                <a role="button" className="pull-right" onClick={this.newOpportunity}><span
                                    className="glyphicon glyphicon-plus glyphicon-white"/></a>
                            }
                            { this.state.toggleShowOpportunities && <OpportunityList /> }
                        </div>
                    </PanelBody>
                </Panel>
                <Panel className={"harmonica-button"}>
                    <PanelBody>
                        <div className="col-sm-12" onClick={this.toggleTask}>
                            <span className="">TAKEN <span className="badge">{ this.props.registrationDetails.taskCount }</span></span>
                            {permissions.manageTask &&
                                <a role="button" className="pull-right" onClick={this.newTask}><span
                                    className="glyphicon glyphicon-plus glyphicon-white"/></a>
                            }
                            { this.state.toggleShowTasks && <TaskList /> }
                        </div>
                    </PanelBody>
                </Panel>
                <DocumentHarmonica
                    toggleShowList={() => this.toggleShowList('documents')}
                    showDocumentsList={this.state.toggleShowList.documents}
                    newDocument={this.newDocument}
                    documentCount={this.props.registrationDetails.documentCount}
                />
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        registrationDetails: state.registrationDetails,
        permissions: state.meDetails.permissions
    };
};

export default connect(mapStateToProps)(RegistrationDetailsHarmonica);
