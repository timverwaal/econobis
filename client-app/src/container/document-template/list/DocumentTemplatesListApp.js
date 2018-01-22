import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchDocumentTemplates, clearDocumentTemplates } from '../../../actions/document-templates/DocumentTemplatesActions';
import DocumentTemplatesList from './DocumentTemplatesList';
import DocumentTemplatesListToolbar from './DocumentTemplatesListToolbar';

class DocumentTemplatesListApp extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDocumentTemplates();
    };

    componentWillUnmount() {
        this.props.clearDocumentTemplates();
    };

    refreshDocumentTemplatesData = () => {
        this.props.clearDocumentTemplates();
        this.props.fetchDocumentTemplates();
    };

    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="col-md-12 extra-space-above">
                            <DocumentTemplatesListToolbar
                                refreshDocumentTemplatesData={() => this.refreshDocumentTemplatesData()}
                            />
                        </div>

                        <div className="col-md-12 extra-space-above">
                            <DocumentTemplatesList
                                emailTemplates={this.props.emailTemplates}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        emailTemplates: state.emailTemplates,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchDocumentTemplates: () => {
        dispatch(fetchDocumentTemplates());
    },
    clearDocumentTemplates: () => {
        dispatch(clearDocumentTemplates());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentTemplatesListApp);