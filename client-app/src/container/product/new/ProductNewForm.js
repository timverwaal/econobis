import React, {Component} from 'react';
import { hashHistory } from 'react-router';
import validator from 'validator';

import InputText from '../../../components/form/InputText';
import ButtonText from '../../../components/button/ButtonText';
import PanelBody from "../../../components/panel/PanelBody";
import Panel from "../../../components/panel/Panel";
import ProductDetailsAPI from '../../../api/product/ProductDetailsAPI';
import {connect} from "react-redux";
import InputSelect from "../../../components/form/InputSelect";

class ProductNewForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errorMessage: false,
            product: {
                code: '',
                name: '',
                invoiceText: '',
                durationId: '',
                invoiceFrequencyId: '',
                paymentTypeId: '',
                administrationId: '',
            },
            errors: {
                code: false,
                name: false,
                administrationId: false,
            },
        };
    };

    handleInputChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            ...this.state,
            product: {
                ...this.state.product,
                [name]: value
            },
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        const {product} = this.state;

        // Validation
        let errors = {};
        let errorMessage = false;
        let hasErrors = false;

        let productCodeNotUnique = false;
        this.props.products.map((existingProduct) => ((existingProduct.code == product.code) && (productCodeNotUnique = true)));

        if (productCodeNotUnique) {
            errorMessage = "Productcode moet uniek zijn.";
            errors.code = true;
            hasErrors = true;
        }

        if (validator.isEmpty(product.code + '')) {
            errors.code = true;
            hasErrors = true;
        }

        let productNameNotUnique = false;
        this.props.products.map((existingProduct) => ((existingProduct.name == product.name) && (productNameNotUnique = true)));

        if (productNameNotUnique) {
            errorMessage = "Productnaam moet uniek zijn.";
            errors.name = true;
            hasErrors = true;
        }

        if(productCodeNotUnique && productNameNotUnique){
            errorMessage = "Productcode en productnaam moeten uniek zijn.";
        }

        if (validator.isEmpty(product.name + '')) {
            errors.name = true;
            hasErrors = true;
        }

        if (validator.isEmpty(product.administrationId + '')) {
            errors.administrationId = true;
            hasErrors = true;
        }

        this.setState({...this.state,
               errors: errors,
               errorMessage: errorMessage,
        });

        // If no errors send form
        if(!hasErrors) {
        ProductDetailsAPI.newProduct(product).then((payload) => {
            hashHistory.push(`/product/${payload.data.id}`);
        }).catch(function (error) {
            console.log(error)
        });
    }
    };

    render() {
        const { code, name, invoiceText, durationId, invoiceFrequencyId, paymentTypeId, administrationId } = this.state.product;

        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <Panel>
                    <PanelBody>
                        <div className="row">
                            <InputText
                                label="Productcode"
                                name={"code"}
                                value={code}
                                onChangeAction={this.handleInputChange}
                                required={"required"}
                                error={this.state.errors.code}
                            />
                            <InputText
                                label="Naam"
                                name={"name"}
                                value={name}
                                onChangeAction={this.handleInputChange}
                                required={"required"}
                                error={this.state.errors.name}
                            />
                        </div>

                        <div className="row">
                            <div className="form-group col-sm-12">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <label htmlFor="invoiceText" className="col-sm-12">Omschrijving</label>
                                    </div>
                                    <div className="col-sm-8">
                                <textarea name='invoiceText' value={invoiceText} onChange={this.handleInputChange}
                                          className="form-control input-sm"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <InputSelect
                                label={"Looptijd"}
                                id="durationId"
                                name={"durationId"}
                                options={this.props.productDurations}
                                value={durationId}
                                onChangeAction={this.handleInputChange}
                            />
                            <InputSelect
                                label={"Prijs per"}
                                id="invoiceFrequencyId"
                                name={"invoiceFrequencyId"}
                                options={this.props.productInvoiceFrequencies}
                                value={invoiceFrequencyId}
                                onChangeAction={this.handleInputChange}
                            />
                        </div>

                        <div className="row">
                            <InputSelect
                                label={"Betaalwijze"}
                                id="paymentTypeId"
                                name={"paymentTypeId"}
                                options={this.props.productPaymentTypes}
                                value={paymentTypeId}
                                onChangeAction={this.handleInputChange}
                            />
                            <InputSelect
                                label={"Administratie"}
                                id="administrationId"
                                name={"administrationId"}
                                options={this.props.administrations}
                                value={administrationId}
                                onChangeAction={this.handleInputChange}
                                required={"required"}
                                error={this.state.errors.administrationId}
                            />
                        </div>
                        {this.state.errorMessage &&
                        <div className="col-sm-10 col-md-offset-1 alert alert-danger">
                            {this.state.errorMessage}
                        </div>
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
        productDurations: state.systemData.productDurations,
        productInvoiceFrequencies: state.systemData.productInvoiceFrequencies,
        productPaymentTypes: state.systemData.productPaymentTypes,
        administrations: state.meDetails.administrations,
        products: state.systemData.products,
    };
};

export default connect(mapStateToProps)(ProductNewForm);
