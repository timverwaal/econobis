import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
moment.locale('nl');

import ViewText from '../../../../components/form/ViewText';

const QuotationRequestDetailsFormGeneralView = props => {
    const {organisation, dateRecorded, status, dateReleased, dateValid, quotationText, opportunity} = props.quotationRequestDetails;

    return (
        <div onClick={props.switchToEdit}>
            <div className="row">
                <ViewText
                    label={"Organisatie"}
                    value={organisation && organisation.name}
                />
                <ViewText
                    label={"Verzoek voor"}
                    value={opportunity.intake && opportunity.intake.contact.fullName}
                />
            </div>

            <div className="row">
                <ViewText
                    label={"Adres voor"}
                    value={opportunity.intake && opportunity.intake.fullAddress}
                />
                <ViewText
                    label={"Maatregel categorie"}
                    value={opportunity.measureCategory && opportunity.measureCategory.name}
                />
            </div>

            <div className="row">
                <ViewText
                    label={"Maatregelen specifiek"}
                    value={opportunity.measures && opportunity.measures.map((measure) => measure.name).join(', ')}
                />
                <ViewText
                    label={"Datum opname"}
                    value={dateRecorded ? moment(dateRecorded).format('L') : 'Onbekend'}
                />
            </div>

            <div className="row">
                <ViewText
                    label={"Offerte status"}
                    value={status && status.name}
                />
                <ViewText
                    label={"Offerte uitgebracht"}
                    value={dateReleased ? moment(dateReleased).format('L') : 'Onbekend'}
                />
            </div>

            <div className="row">
                <ViewText
                    label={"Offerte geldig tot"}
                    value={dateValid ? moment(dateValid).format('L') : 'Onbekend'}
                />
            </div>

            <div className="row">
                <div className="col-sm-3">
                    <label htmlFor="quotationText" className="col-sm-12">Offerte text</label>
                </div>
                <div className="col-sm-9" id="quotationText">
                    {quotationText}
                </div>
            </div>

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        quotationRequestDetails: state.quotationRequestDetails,
    };
};

export default connect(mapStateToProps)(QuotationRequestDetailsFormGeneralView);