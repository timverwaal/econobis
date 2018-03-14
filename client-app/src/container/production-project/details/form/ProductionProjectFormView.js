import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
moment.locale('nl');

import ViewText from '../../../../components/form/ViewText';

const ProductionProjectFormView = props => {
    const {name, code, description, ownedBy, productionProjectStatus, dateStart,
        dateProduction, dateStartRegistrations, dateEndRegistrations, productionProjectType, postalCode, address,
        city, ean, eanManager, warrantyOrigin, eanSupply,
        participationWorth, powerKwhAvailable, maxParticipations, taxReferral, maxParticipationsYouth,
        totalParticipations, minParticipations, issuedParticipations, isMembershipRequired, participationsInOption,
        isParticipationTransferable, issuableParticipations} = props.productionProject;

    return (
        <div>
            <div className="row" onClick={props.switchToEdit}>
                <ViewText
                    label={"Naam"}
                    value={name}
                />
                <ViewText
                    label={"Project code"}
                    value={code}
                />
            </div>

            <div className="row" onClick={props.switchToEdit}>
                <div className="col-sm-3">
                    <label htmlFor="description" className="col-sm-12">Omschrijving</label>
                </div>
                <div className="col-sm-9" id="description">
                    {description}
                </div>
            </div>

            <div className="row" onClick={props.switchToEdit}>
                <ViewText
                    label={"Verantwoordelijke"}
                    value={ownedBy ? ownedBy.fullName : ''}
                />
                <ViewText
                    label={"Status"}
                    value={productionProjectStatus ? productionProjectStatus.name : ''}
                />
            </div>

            <div className="row" onClick={props.switchToEdit}>
                <ViewText
                    label={"Start project"}
                    value={dateStart ? moment(dateStart).format('L') : ''}
                />
                <ViewText
                    label={"Datum productie"}
                    value={dateProduction ? moment(dateProduction).format('L') : ''}
                />
            </div>

            <div className="row" onClick={props.switchToEdit}>
                <ViewText
                    label={"Start inschrijving"}
                    value={dateStartRegistrations ? moment(dateStartRegistrations).format('L') : ''}
                />
                <ViewText
                    label={"Eind inschrijving"}
                    value={dateEndRegistrations ? moment(dateEndRegistrations).format('L') : ''}
                />
            </div>

            <div className="row" onClick={props.switchToEdit}>
                <ViewText
                    label={"Type"}
                    value={productionProjectType ? productionProjectType.name : ''}
                />
                <ViewText
                    label={"Postcode"}
                    value={postalCode ? postalCode : ''}
                />
            </div>

            <div className="row" onClick={props.switchToEdit}>
                <ViewText
                    label={"Adres"}
                    value={address ? address : ''}
                />
                <ViewText
                    label={"Plaats"}
                    value={city ? city : ''}
                />
            </div>

            <div className="row" onClick={props.switchToEdit}>
                <ViewText
                    label={"EAN"}
                    value={ean ? ean : ''}
                />
                <ViewText
                    label={"EAN Netbeheer"}
                    value={eanManager ? eanManager : ''}
                />
            </div>

            <div className="row" onClick={props.switchToEdit}>
                <ViewText
                    label={"Garantie van oorsprong"}
                    value={warrantyOrigin ? warrantyOrigin : ''}
                />
                <ViewText
                    label={"Ean Levering"}
                    value={eanSupply ? eanSupply : ''}
                />
            </div>

            <div className="row" onClick={props.switchToEdit}>
                <ViewText
                    label={"Waarde per participatie"}
                    value={participationWorth ? '€ ' + participationWorth : ''}
                />
                <ViewText
                    label={"Opgesteld vermogen kWh"}
                    value={powerKwhAvailable ? powerKwhAvailable : ''}
                />
            </div>

            <div className="row" onClick={props.switchToEdit}>
                <ViewText
                    label={"Max aantal part. p/p"}
                    value={maxParticipations ? maxParticipations : ''}
                />
                <ViewText
                    label={"Aanwijzing belastingdienst"}
                    value={taxReferral ? taxReferral : ''}
                />
            </div>

            <div className="row" onClick={props.switchToEdit}>
                <ViewText
                    label={"Max aantal part. jeugd"}
                    value={maxParticipationsYouth ? maxParticipationsYouth : ''}
                />
                <ViewText
                    label={"Totaal aantal participaties"}
                    value={totalParticipations ? totalParticipations : ''}
                />
            </div>

            <div className="row" onClick={props.switchToEdit}>
                <ViewText
                    label={"Min. aantal participaties"}
                    value={minParticipations ? minParticipations : ''}
                />
                <ViewText
                    label={"Uitgegeven participaties"}
                    value={issuedParticipations ? issuedParticipations : ''}
                />
            </div>

            <div className="row" onClick={props.switchToEdit}>
                <ViewText
                    label={"Lidmaatschap verplicht"}
                    value={isMembershipRequired ? 'Ja' : 'Nee'}
                />
                <ViewText
                    label={"Participaties in optie"}
                    value={participationsInOption ? participationsInOption : ''}
                />
            </div>

            <div className="row" onClick={props.switchToEdit}>
                <ViewText
                    label={"Participatie overgedragen"}
                    value={isParticipationTransferable ? 'Ja' : 'Nee'}
                />
                <ViewText
                    label={"Uit te geven participaties"}
                    value={issuableParticipations ? issuableParticipations : ''}
                />
            </div>


        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        productionProject: state.productionProjectDetails,
    }
};

export default connect(mapStateToProps)(ProductionProjectFormView);