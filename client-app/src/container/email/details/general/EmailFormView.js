import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
moment.locale('nl');

import ViewText from '../../../../components/form/ViewText';
import ViewHtmlAsText from '../../../../components/form/ViewHtmlAsText';

const createMarkup = (value) => {
    return {__html: value};
};

const EmailFormView = props => {
    const {from, to, cc, bcc, contact, subject, htmlBody, createdAt, dateSent, folder, status, closedBy, dateClosed} = props.email;

    return (
        <div>
            <div className="row" onClick={props.switchToEdit}>
                <ViewText
                    label={"Van"}
                    value={from}
                />
                <ViewText
                    label={"Ontvangen datum tijd"}
                    value={createdAt ? moment(createdAt.date).format('DD-MM-YYYY HH:mm') : ''}
                />
            </div>
            <div className="row" onClick={props.switchToEdit}>
                <ViewText
                    label={"Aan"}
                    value={to && to.map((to) => to).join(', ')}
                />
                <ViewText
                    label={"Verzonden datum tijd"}
                    value={dateSent ? moment(dateSent.date).format('DD-MM-YYYY HH:mm') : ''}
                />
            </div>
            <div className="row" onClick={props.switchToEdit}>
                <ViewText
                    label={"Cc"}
                    value={cc && cc.map((cc) => cc).join(', ')}
                />
                <ViewText
                    label={"Contact"}
                    value={contact ? contact.fullName : ''}
                    link={contact ? 'contact/' + contact.id : ''}
                />
            </div>

            <div className="row margin-10-top" onClick={props.switchToEdit}>
                <div className='col-sm-12'>
                    <div className="row">
                        <div className="col-sm-3">
                            <label className="col-sm-12">Onderwerp</label>
                        </div>
                        <div className="col-sm-9">
                            {subject}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row" onClick={props.switchToEdit}>
                <ViewHtmlAsText label={"Tekst"} value={htmlBody}/>
            </div>
            {folder == 'inbox' &&
            <div>
                <div className="row" onClick={props.switchToEdit}>
                    <ViewText
                        label={"Status"}
                        value={status ? status.name : ''}
                    />
                    <ViewText
                        label={"Datum afgehandeld"}
                        value={dateClosed ? moment(dateClosed.date).format('DD-MM-YYYY HH:mm') : ''}
                    />
                </div>
                <div className="row" onClick={props.switchToEdit}>
                    <ViewText
                        label={"Door"}
                        value={closedBy ? closedBy.fullName : ''}
                        link={closedBy ? 'gebruiker/' + closedBy.id : ''}
                    />
                </div>
            </div>
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        email: state.email,
    }
};

export default connect(mapStateToProps)(EmailFormView);