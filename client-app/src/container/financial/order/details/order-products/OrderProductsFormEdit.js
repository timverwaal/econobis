import React from 'react';

import InputText from '../../../../../components/form/InputText';
import ButtonText from '../../../../../components/button/ButtonText';
import Panel from '../../../../../components/panel/Panel';
import PanelBody from '../../../../../components/panel/PanelBody';
import InputDate from '../../../../../components/form/InputDate';
import moment from 'moment/moment';

moment.locale('nl');

const OrderProductsFormEdit = props => {
    const {
        product,
        description,
        amount,
        amountReduction,
        percentageReduction,
        dateStart,
        dateEnd,
        dateLastInvoice,
        datePeriodStartFirstInvoice,
        variablePrice,
    } = props.orderProduct;

    return (
        <div>
            <form className="form-horizontal" onSubmit={props.handleSubmit}>
                <Panel className={'panel-grey'}>
                    <PanelBody>
                        <div className="row">
                            <InputText
                                label={'Ordernummer'}
                                name={'order'}
                                value={props.orderDetails ? props.orderDetails.number : ''}
                                readOnly={true}
                            />
                            <InputText
                                label={'Product'}
                                name={'product'}
                                value={product ? product.name : ''}
                                readOnly={true}
                            />
                        </div>

                        <div className="row">
                            <InputText
                                label={'Omschrijving'}
                                id={'description'}
                                name={'description'}
                                value={description}
                                readOnly={true}
                            />
                            <InputText
                                label={'Aantal'}
                                type={'number'}
                                id={'amount'}
                                name={'amount'}
                                value={amount}
                                onChangeAction={props.handleInputChange}
                                required={'required'}
                                error={props.errors.amount}
                            />
                        </div>

                        <div className="row">
                            <InputText
                                label={'Kortingspercentage'}
                                type={'number'}
                                id={'percentageReduction'}
                                name={'percentageReduction'}
                                value={percentageReduction}
                                onChangeAction={props.handleInputChange}
                            />
                            {variablePrice !== null ? (
                                <InputText
                                    label={'Prijs ex. BTW'}
                                    name={'variablePrice'}
                                    type={'number'}
                                    value={variablePrice}
                                    onChangeAction={props.handleInputChangeVariablePrice}
                                    error={props.errors.variablePrice}
                                    required={variablePrice !== null && 'required'}
                                />
                            ) : (
                                <InputText
                                    label={
                                        props.orderProduct.product.currentPrice.inputInclVat
                                            ? 'Prijs incl. BTW'
                                            : 'Prijs excl. BTW'
                                    }
                                    name={'price'}
                                    value={
                                        props.orderProduct.product.currentPrice.inputInclVat
                                            ? '€' +
                                              props.orderProduct.product.currentPrice.priceInclVat.toLocaleString(
                                                  'nl',
                                                  {
                                                      minimumFractionDigits: 2,
                                                      maximumFractionDigits: 2,
                                                  }
                                              )
                                            : '€' +
                                              props.orderProduct.product.currentPrice.price.toLocaleString('nl', {
                                                  minimumFractionDigits: 2,
                                                  maximumFractionDigits: 2,
                                              })
                                    }
                                    readOnly={true}
                                />
                            )}
                        </div>

                        <div className="row">
                            <InputText
                                label={'Kortingsbedrag'}
                                type={'number'}
                                id={'amountReduction'}
                                name={'amountReduction'}
                                value={amountReduction}
                                onChangeAction={props.handleInputChange}
                            />
                            <InputText
                                label={'Totaalbedrag'}
                                name={'totalPrice'}
                                value={
                                    '€' +
                                    props.totalPrice.toLocaleString('nl', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    })
                                }
                                readOnly={true}
                            />
                        </div>

                        <div className="row">
                            <InputDate
                                label="Begin datum"
                                name="dateStart"
                                value={dateStart}
                                onChangeAction={props.handleInputChangeStartDate}
                                required={'required'}
                                error={props.errors.dateStart}
                            />
                            <InputDate
                                label="Eind datum"
                                name="dateEnd"
                                readOnly={product.durationId === 'none'}
                                value={dateEnd}
                                onChangeAction={props.handleInputChangeDate}
                                error={props.errors.dateEnd}
                            />
                        </div>

                        {!dateLastInvoice && product.durationId !== 'none' && (
                            <div className="row">
                                <InputDate
                                    label="1ste factuurperiode start op"
                                    name="datePeriodStartFirstInvoice"
                                    value={datePeriodStartFirstInvoice}
                                    onChangeAction={props.handleInputChangeDate}
                                />
                            </div>
                        )}
                        <div className="pull-right btn-group" role="group">
                            <ButtonText
                                buttonClassName={'btn-default'}
                                buttonText={'Annuleren'}
                                onClickAction={props.cancelEdit}
                            />
                            <ButtonText
                                buttonText={'Opslaan'}
                                onClickAction={props.handleSubmit}
                                type={'submit'}
                                value={'Submit'}
                            />
                        </div>
                    </PanelBody>
                </Panel>
            </form>
        </div>
    );
};

export default OrderProductsFormEdit;
