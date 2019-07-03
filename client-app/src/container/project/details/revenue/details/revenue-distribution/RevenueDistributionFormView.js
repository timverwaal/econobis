import React from 'react';
import moment from 'moment/moment';
import MoneyPresenter from '../../../../../../helpers/MoneyPresenter';
moment.locale('nl');

const RevenueDistributionFormView = props => {
    const {
        id,
        contactName,
        contactType,
        contactPrimaryEmailAddress,
        deliveredTotal,
        kwhReturn,
        participationsAmount,
        payout,
        payoutType,
        datePayout,
        energySupplierName,
        status,
    } = props.participation;

    return (
        <div className={`row border ${status === 'processed' ? 'warning-row' : ''}`}>
            {props.showCheckboxList && props.checkedAll && (
                <div className="col-sm-1">
                    <input type="checkbox" checked />
                </div>
            )}
            {props.showCheckboxList && !props.checkedAll && contactPrimaryEmailAddress && (
                <div className="col-sm-1">
                    <input type="checkbox" name={id} onChange={props.toggleParticipantCheck} />
                </div>
            )}
            {props.showCheckboxList && !props.checkedAll && !contactPrimaryEmailAddress && (
                <div className="col-sm-1">
                    <input type="checkbox" name={id} onChange={props.toggleParticipantCheckNoEmail} />
                </div>
            )}

            <div className="col-sm-1">{contactType ? contactType.name : ''}</div>
            <div className="col-sm-2">{contactName}</div>
            <div className="col-sm-1">{participationsAmount}</div>
            <div className="col-sm-1">{payout ? MoneyPresenter(payout) : 0}</div>
            <div className="col-sm-1">{payoutType && payoutType}</div>
            <div className="col-sm-1">{datePayout ? moment(datePayout).format('L') : ''}</div>
            {props.projectRevenueCategoryCodeRef === 'revenueKwh' ? (
                <React.Fragment>
                    <div className="col-sm-2">{energySupplierName && energySupplierName}</div>
                    <div className="col-sm-1">{deliveredTotal && deliveredTotal}</div>
                    <div className="col-sm-1">
                        {kwhReturn
                            ? '€' +
                              kwhReturn.toLocaleString('nl', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                            : ''}
                    </div>
                </React.Fragment>
            ) : null}
        </div>
    );
};

export default RevenueDistributionFormView;
