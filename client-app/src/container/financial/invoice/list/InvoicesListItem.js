import React, { Component } from 'react';

import { hashHistory } from 'react-router';
import moment from 'moment';
import InvoiceListSetPaid from "./InvoiceListSetPaid";
import InvoiceListSendNotification from "./InvoiceListSendNotification";
import InvoiceListSetIrrecoverable from "./InvoiceListSetIrrecoverable";
import InvoiceListSend from "./InvoiceListSend";
import {setCheckedInvoice} from '../../../../actions/invoice/InvoicesActions';
import {connect} from "react-redux";

class InvoicesListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showActionButtons: false,
            highlightRow: '',
            showSetChecked: false,
            showSend: false,
            showSetPaid: false,
            showSendNotification: false,
            reminderText: '',
            showSetIrrecoverable: false,
        };
    }

    componentDidMount() {
        if(this.props.dateReminder3){
            this.setState({
                reminderText: 'Wilt u de aanmaning sturen?',
            });
        }
        else if(this.props.dateReminder2){
            this.setState({
                reminderText: 'Wilt u de derde herinnering sturen?',
            });
        }
        else if(this.props.dateReminder1){
            this.setState({
                reminderText: 'Wilt u de tweede herinnering sturen?',
            });
        }
        else{
            this.setState({
                reminderText: 'Wilt u de eerste herinnering sturen?',
            });
        }
    };

    onRowEnter() {
        this.setState({
            showActionButtons: true,
            highlightRow: 'highlight-row',
        });
    };

    onRowLeave() {
        this.setState({
            showActionButtons: false,
            highlightRow: '',
        });
    };

    openItem(id) {
        hashHistory.push(`/factuur/${id}`);
    };

    viewItem(id) {
        hashHistory.push(`/factuur/inzien/${id}`);
    };


    showSetChecked = () => {
        this.setState({showSetChecked: !this.state.showSetChecked});
    };

    showSend = () => {
        this.setState({showSend: !this.state.showSend});
    };

    showSetPaid = () => {
        this.setState({showSetPaid: !this.state.showSetPaid});
    };

    showSendNotification = () => {
        this.setState({showSendNotification: !this.state.showSendNotification});
    };

    showSetIrrecoverable = () => {
        this.setState({showSetIrrecoverable: !this.state.showSetIrrecoverable});
    };

    setCheckedInvoice(id) {
        this.props.setCheckedInvoice(id);
    }

    render() {
        let hideRowClass = '';

        if(this.props.emailToAddress === 'Geen e-mail bekend' && this.props.onlyEmailInvoices){
            hideRowClass = 'hide';
        }

        if(this.props.emailToAddress !== 'Geen e-mail bekend' && this.props.onlyPostInvoices){
            hideRowClass = 'hide';
        }

        const { id, number, dateRequested, orderSubject, orderContactFullName, paymentType, status, daysToExpire, daysLastReminder, totalPriceInclVatAndReduction, amountOpen, emailToAddress, checked } = this.props;
        return (
            <tr className={`${this.state.highlightRow} ${hideRowClass}`} onDoubleClick={() => this.openItem(id)} onMouseEnter={() => this.onRowEnter()} onMouseLeave={() => this.onRowLeave()}>
                {this.props.showSelectInvoicesToSend && <td><input type="checkbox" checked={checked} onChange={() => this.setCheckedInvoice(id)} /></td>}
                <td>{number}</td>
                <td>{ dateRequested ? moment(dateRequested).format('DD-MM-Y') : ''}</td>
                <td className={(emailToAddress === 'Geen e-mail bekend') ? 'warning-td' :''}>{orderContactFullName ? orderContactFullName : ''}{(emailToAddress === 'Geen e-mail bekend') && ' (Geen e-mail bekend)'}</td>
                <td>{orderSubject ? orderSubject : ''}</td>
                <td>{daysToExpire}</td>
                <td>{daysLastReminder}</td>
                <td>{'€' + totalPriceInclVatAndReduction.toLocaleString('nl',{ minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                <td>{paymentType ? paymentType.name : ''}</td>
                <td>{status ? status.name : ''}</td>
                <td>
                    {(this.state.showActionButtons ? <a role="button" onClick={() => this.openItem(id)} title="Open factuur"><span className="glyphicon glyphicon-pencil mybtn-success" /> </a> : '')}
                    {(this.state.showActionButtons ? <a role="button" onClick={() => this.viewItem(id)} title="Preview factuur"><span className="glyphicon glyphicon-eye-open mybtn-success" /> </a> : '')}
                    {(this.state.showActionButtons && this.props.statusId === 'to-send' ? <a role="button" onClick={() => this.showSend()} title="Verstuur factuur"><span className="glyphicon glyphicon-envelope mybtn-success" /> </a> : '')}
                    {(this.state.showActionButtons && (this.props.statusId === 'sent' || this.props.statusId === 'exported') ? <a role="button" onClick={() => this.showSetPaid()} title="Zet op betaald"><span className="glyphicon glyphicon-euro mybtn-success" /> </a> : '')}
                    {(this.state.showActionButtons && (this.props.statusId === 'sent' || this.props.statusId === 'exported') && !this.props.dateExhortation ? <a role="button" onClick={() => this.showSendNotification()} title="Verstuur herinnering"><span className="glyphicon glyphicon-bullhorn mybtn-success" /> </a> : '')}
                    {(this.state.showActionButtons && (this.props.statusId !== 'paid' && this.props.statusId !== 'irrecoverable') ? <a role="button" onClick={() => this.showSetIrrecoverable()} title="Zet op oninbaar"><span className="glyphicon glyphicon-remove mybtn-success" /> </a> : '')}



                    {
                        this.state.showSend &&
                        <InvoiceListSend
                            paymentType={this.props.paymentTypeId}
                            closeModal={this.showSend}
                            invoiceId={id}
                            administrationId={this.props.administrationId}
                        />
                    }

                    {
                        this.state.showSetPaid &&
                        <InvoiceListSetPaid
                            closeModal={this.showSetPaid}
                            invoiceId={id}
                            amountOpen={amountOpen}
                            administrationId={this.props.administrationId}
                        />
                    }

                    {
                        this.state.showSendNotification &&
                        <InvoiceListSendNotification
                            reminderText={this.state.reminderText}
                            closeModal={this.showSendNotification}
                            invoiceId={id}
                            fetchInvoicesData={this.props.fetchInvoicesData}
                            administrationId={this.props.administrationId}
                        />
                    }

                    {
                        this.state.showSetIrrecoverable &&
                        <InvoiceListSetIrrecoverable
                            closeModal={this.showSetIrrecoverable}
                            invoiceId={id}
                            administrationId={this.props.administrationId}
                        />
                    }
                </td>
            </tr>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setCheckedInvoice: (id) => {
        dispatch(setCheckedInvoice(id));
    },
});

export default connect(null, mapDispatchToProps)(InvoicesListItem);