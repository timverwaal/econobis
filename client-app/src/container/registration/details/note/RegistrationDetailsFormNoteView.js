import React from 'react';

import ViewText from "../../../../components/form/ViewText";
import {connect} from "react-redux";

const RegistrationDetailFormNoteView = props => {
    const { note, createdAt } = props.note;

    return (
        <div className={`row item-border ${props.highlightLine}`} onMouseEnter={() => props.onLineEnter()} onMouseLeave={() => props.onLineLeave()}>
            <div className="col-sm-8" onClick={props.openEdit}>
                {note}
            </div>
            <ViewText label={"Gemaakt op"} value={createdAt} className={"col-sm-3 h6"} />
            <div className="col-sm-1">
                {(props.permissions.manageRegistration && props.showActionButtons ? <a role="button" onClick={props.openEdit}><span className="glyphicon glyphicon-pencil mybtn-success" /> </a> : '')}
                {(props.permissions.manageRegistration && props.showActionButtons ? <a role="button" onClick={props.toggleDelete}><span className="glyphicon glyphicon-trash mybtn-danger"  /> </a> : '')}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        permissions: state.meDetails.permissions
    };
};

export default connect(mapStateToProps)(RegistrationDetailFormNoteView);

