import React, {Component} from 'react';
import { hashHistory } from 'react-router';
import validator from 'validator';
import * as ibantools from "ibantools";

import InputText from '../../../components/form/InputText';
import ButtonText from '../../../components/button/ButtonText';
import PanelBody from "../../../components/panel/PanelBody";
import Panel from "../../../components/panel/Panel";
import AdministrationDetailsAPI from '../../../api/administration/AdministrationDetailsAPI';
import {connect} from "react-redux";
import InputSelect from "../../../components/form/InputSelect";
import AdministrationLogoNew from "./AdministrationLogoNew";

class AdministrationNewForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newLogo: false,
            administration: {
                name: '',
                administrationNumber: '',
                address: '',
                postalCode: '',
                city: '',
                countryId: 'NL',
                kvkNumber: '',
                btwNumber: '',
                IBAN: '',
                email: '',
                website: '',
                bic: '',
                sepaContractName: '',
                sepaCreditorId: '',
                rsinNumber: '',
                defaultPaymentTerm: '',
                attachment: ''
            },
            errors: {
                name: false,
                postalCode: false,
                kvkNumber: false,
                btwNumber: false,
                IBAN: false,
                email: false,
                website: false,
            },
        };
    };

    toggleNewLogo = () => {
        this.setState({
            newLogo: !this.state.newLogo,
        })
    };

    addAttachment = (file) =>  {
        this.setState({
            ...this.state,
            administration: {
                ...this.state.administration,
                attachment: file[0],
                filename: file[0].name,
            },
        });
    };

    handleInputChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            ...this.state,
            administration: {
                ...this.state.administration,
                [name]: value
            },
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        const {administration} = this.state;

        // Validation
        let errors = {};
        let hasErrors = false;

        if (validator.isEmpty(administration.name)) {
            errors.name = true;
            hasErrors = true;
        }


        if (!validator.isEmpty(administration.postalCode) && !validator.isPostalCode(administration.postalCode, 'any')) {
            errors.postalCode = true;
            hasErrors = true;
        }

        if (!validator.isEmpty(administration.kvkNumber)) {
            if (!validator.isInt(administration.kvkNumber + '')) {
                errors.kvkNumber = true;
                hasErrors = true;
            }
        }

        if (validator.isEmpty(administration.btwNumber)) {
            errors.btwNumber = true;
            hasErrors = true;
        }

        if (!ibantools.isValidIBAN(administration.IBAN)) {
            errors.IBAN = true;
            hasErrors = true;
        }

        if (!validator.isEmpty(administration.email)) {
            if (!validator.isEmail(administration.email)) {
                errors.email = true;
                hasErrors = true;
            }
        }

        if (!validator.isEmpty(administration.website)) {
            if (!validator.isFQDN(administration.website)) {
                errors.website = true;
                hasErrors = true;
            }
        }

        this.setState({...this.state, errors: errors});

        // If no errors send form
        if(!hasErrors) {
            const data = new FormData();

            data.append('name', administration.name);
            data.append('administrationNumber', administration.administrationNumber);
            data.append('address', administration.address);
            data.append('postalCode', administration.postalCode);
            data.append('city', administration.city);
            data.append('countryId', administration.countryId);
            data.append('kvkNumber', administration.kvkNumber);
            data.append('btwNumber', administration.btwNumber);
            data.append('IBAN', administration.IBAN);
            data.append('email', administration.email);
            data.append('website', administration.website);
            data.append('bic', administration.bic);
            data.append('sepaContractName', administration.sepaContractName);
            data.append('sepaCreditorId', administration.sepaCreditorId);
            data.append('rsinNumber', administration.rsinNumber);
            data.append('defaultPaymentTerm', administration.defaultPaymentTerm);
            data.append('attachment', administration.attachment);

        AdministrationDetailsAPI.newAdministration(data).then((payload) => {
            hashHistory.push(`/administratie/${payload.data.id}`);
        }).catch(function (error) {
            console.log(error)
        });
    }
    };

    render() {
        const { name, administrationNumber, address, postalCode, city, countryId, kvkNumber, btwNumber, IBAN, email, website, bic, sepaContractName, sepaCreditorId, rsinNumber, defaultPaymentTerm, attachment} = this.state.administration;

        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <Panel>
                    <PanelBody>
                        <div className="row">
                            <InputText
                                label="Naam"
                                name={"name"}
                                value={name}
                                onChangeAction={this.handleInputChange}
                                required={"required"}
                                error={this.state.errors.name}
                            />
                            <InputText
                                label="Administratie nummer"
                                name={"administrationNumber"}
                                value={administrationNumber}
                                onChangeAction={this.handleInputChange}
                            />
                        </div>

                        <div className="row">
                            <InputText
                                label="Adres"
                                name={"address"}
                                value={address}
                                onChangeAction={this.handleInputChange}
                            />
                            <InputText
                                label="Postcode"
                                name={"postalCode"}
                                value={postalCode}
                                onChangeAction={this.handleInputChange}
                                error={this.state.errors.postalCode}
                            />
                        </div>

                        <div className="row">
                            <InputText
                                label="Plaats"
                                name={"city"}
                                value={city}
                                onChangeAction={this.handleInputChange}
                            />
                            <InputSelect
                                label={"Land"}
                                id="countryId"
                                size={"col-sm-6"}
                                name={"countryId"}
                                options={this.props.countries}
                                value={countryId}
                                onChangeAction={this.handleInputChange}
                            />
                        </div>

                        <div className="row">
                            <InputText
                                label="KvK"
                                name={"kvkNumber"}
                                value={kvkNumber}
                                onChangeAction={this.handleInputChange}
                                error={this.state.errors.kvkNumber}
                            />
                            <InputText
                                label="BTW nummer"
                                name={"btwNumber"}
                                value={btwNumber}
                                required={"required"}
                                onChangeAction={this.handleInputChange}
                                error={this.state.errors.btwNumber}
                            />
                        </div>

                        <div className="row">
                            <InputText
                                label="IBAN"
                                name={"IBAN"}
                                value={IBAN}
                                required={"required"}
                                onChangeAction={this.handleInputChange}
                                error={this.state.errors.IBAN}
                            />
                            <InputText
                                label="E-mail"
                                name={"email"}
                                value={email}
                                onChangeAction={this.handleInputChange}
                                error={this.state.errors.email}
                            />
                        </div>

                        <div className="row">
                            <InputText
                                label="Website"
                                name={"website"}
                                value={website}
                                onChangeAction={this.handleInputChange}
                                error={this.state.errors.website}
                            />
                            <InputText
                                label="Bic"
                                name={"bic"}
                                value={bic}
                                onChangeAction={this.handleInputChange}
                            />
                        </div>

                        <div className="row">
                            <InputText
                                label="Sepa contractnaam"
                                name={"sepaContractName"}
                                value={sepaContractName}
                                onChangeAction={this.handleInputChange}
                            />
                            <InputText
                                label="Sepa crediteur id"
                                name={"sepaCreditorId"}
                                value={sepaCreditorId}
                                onChangeAction={this.handleInputChange}
                            />
                        </div>

                        <div className="row">
                            <InputText
                                label="RSIN nummer"
                                name={"rsinNumber"}
                                value={rsinNumber}
                                onChangeAction={this.handleInputChange}
                            />
                            <InputText
                                label="Standaard betalingstermijn(dagen)"
                                type={"number"}
                                min={'0'}
                                max={'9999'}
                                name={"defaultPaymentTerm"}
                                value={defaultPaymentTerm}
                                onChangeAction={this.handleInputChange}
                            />

                        </div>

                        <div className="row">
                            <div className="form-group col-sm-6">
                                <label className="col-sm-6">Kies logo</label>
                                <div className="col-sm-6">
                                    <input
                                        type="text"
                                        className="form-control input-sm col-sm-6"
                                        value={attachment && attachment.name}
                                        onClick={this.toggleNewLogo}
                                    />
                                </div>
                            </div>
                        </div>

                        {this.state.newLogo &&
                        <AdministrationLogoNew toggleShowNew={this.toggleNewLogo}
                                               addAttachment={this.addAttachment}/>
                        }
                    </PanelBody>

                    <PanelBody>
                        <div className="pull-right btn-group" role="group">
                            <ButtonText buttonText={"Opslaan"} onClickAction={this.handleSubmit} type={"submit"} value={"Submit"}/>
                        </div>
                    </PanelBody>
                </Panel>
            </form>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        countries: state.systemData.countries,
    };
};

export default connect(mapStateToProps)(AdministrationNewForm);