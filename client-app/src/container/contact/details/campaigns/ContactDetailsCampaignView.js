import React from 'react';
import moment from 'moment';
import { hashHistory } from 'react-router';

const ContactDetailsCampaignView = props => {
    const {id, number, name, startDate, endDate, taskCount } = props.campaign;

    return (

        <div className={`row border ${props.highlightLine}`} onMouseEnter={() => props.onLineEnter()} onMouseLeave={() => props.onLineLeave()}>
            <div onClick={() => hashHistory.push(`/campagne/${id}`)}>
                <div className="col-sm-2">{number}</div>
                <div className="col-sm-3">{name}</div>
                <div className="col-sm-3">{startDate ? moment(startDate).format('L') : ''}</div>
                <div className="col-sm-3">{endDate ? moment(endDate).format('L') : ''}</div>
                <div className="col-sm-1">{taskCount}</div>
            </div>
        </div>
    );
};

export default ContactDetailsCampaignView;
