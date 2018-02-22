import React, {Component} from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';

import DocumentHarmonica from "./DocumentHarmonica";
import NoteHarmonica from "./NoteHarmonica";

class HousingFileDetailsHarmonica extends Component {
    constructor(props){
        super(props);

        this.state = {
            toggleShowList: {
                documents: false,
                notes: false,
            },
        };

        this.newTask = this.newTask.bind(this);
        this.newDocument = this.newDocument.bind(this);
        this.toggleShowList = this.toggleShowList.bind(this);
    };

    newTask() {
        hashHistory.push(`/taak/nieuw/woningdossier/${this.props.id}`);
    };

    newDocument(type) {
        hashHistory.push(`/document/nieuw/${type}/woningdossier/${this.props.id}`);
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
    render(){
        return (
            <div className="col-md-12 margin-10-top">
                <NoteHarmonica
                    toggleShowList={() => this.toggleShowList('notes')}
                    showNotesList={this.state.toggleShowList.notes}
                    newTask={this.newTask}
                    noteCount={this.props.housingFileDetails.noteCount}
                />
                <DocumentHarmonica
                    toggleShowList={() => this.toggleShowList('documents')}
                    showDocumentsList={this.state.toggleShowList.documents}
                    newDocument={this.newDocument}
                    documentCount={this.props.housingFileDetails.documentCount}
                />
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        housingFileDetails: state.housingFileDetails,
        permissions: state.meDetails.permissions
    };
};

export default connect(mapStateToProps)(HousingFileDetailsHarmonica);