import React, {Component} from 'react';
import {connect} from 'react-redux';

import Panel from '../../../../components/panel/Panel';
import PanelBody from '../../../../components/panel/PanelBody';

import DocumentTemplateFormEdit from './DocumentTemplateFormEdit';
import DocumentTemplateFormView from './DocumentTemplateFormView';

class DocumentTemplateFormGeneral extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showEdit: false,
            activeDiv: '',
        };
    }

    switchToEdit = () => {
        this.setState({
            showEdit: true,
        })
    };

    switchToView = () => {
        this.setState({
            showEdit: false,
            activeDiv: '',
        })
    };

    onDivEnter() {
        this.setState({
            activeDiv: 'panel-grey',
        });
    };

    onDivLeave() {
        this.setState({
            activeDiv: '',
        });
    };

    render() {
        return (
            <Panel className={this.state.activeDiv} onMouseEnter={() => this.onDivEnter()}
                   onMouseLeave={() => this.onDivLeave()} >
                <PanelBody>
                {
                    this.state.showEdit /*&& this.props.permissions.manageOpportunity*/ ?
                        <DocumentTemplateFormEdit switchToView={this.switchToView}/>
                        :
                        <DocumentTemplateFormView switchToEdit={this.switchToEdit}/>
                }
                </PanelBody>
            </Panel>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        documentTemplate: state.documentTemplate,
        // permissions: state.meDetails.permissions
    }
};

export default connect(mapStateToProps)(DocumentTemplateFormGeneral);