import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import FormLabel from 'react-bootstrap/FormLabel';
import MoneyPresenter from '../../../helpers/MoneyPresenter';
import TextBlock from '../../../components/general/TextBlock';
import Form from 'react-bootstrap/Form';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import InputText from '../../../components/form/InputText';

function StepOnePcr({ next, project, initialContact, initialRegisterValues, handleSubmitRegisterValues }) {
    const validationSchema = Yup.object({
        participationsOptioned: Yup.number()
            .typeError('Alleen nummers')
            .test(
                'participationsOptioned',
                'Minimum van ' + project.minParticipations + ' nodig',
                value => value >= project.minParticipations
            )
            .max(project.maxParticipations, 'Maximum van ${max} bereikt')
            .positive('Getal moet groter zijn dan 0')
            .required('Verplicht'),
        powerKwhConsumption: Yup.number()
            .typeError('Alleen nummers')
            .positive('Getal moet groter zijn dan 0')
            .required('Verplicht'),
        pcrPostalCode: Yup.string()
            .min(4, 'Minimum van ${min} postcode cijfers nodig')
            .required('Verplicht')
            .test(
                'pcrPostalCode',
                'Helaas je postcode ligt niet binnen het gebied van potentiele deelnemers',
                value => value && project.postalcodeLink.includes(value.substring(0, 4))
            ),
        pcrNumberOfSolarPanels: Yup.number().typeError('Alleen nummers'),
        pcrInputGeneratedNumberOfKwh: Yup.number().typeError('Alleen nummers'),
    });

    let pcrPostalCode = '';
    if (initialContact.typeId === 'organisation') {
        pcrPostalCode = initialContact.visitAddress ? initialContact.visitAddress.postalCode : '';
    } else {
        pcrPostalCode = initialContact.primaryAddress ? initialContact.primaryAddress.postalCode : '';
    }
    return (
        <Formik
            validationSchema={validationSchema}
            onSubmit={function(values, actions) {
                handleSubmitRegisterValues(values);
                next();
            }}
            initialValues={{
                ...initialRegisterValues,
                pcrPostalCode,
            }}
        >
            {({ handleSubmit, values, touched, errors, setFieldValue }) => {
                const PCR_GENERATING_CAPACITY_ONE_SOLAR_PANEL = 250;
                const PCR_POWER_KWH_CONSUMPTION_PERCENTAGE = 0.8;

                let pcrEstimatedGeneratedNumberOfKwh = values.pcrNumberOfSolarPanels
                    ? values.pcrNumberOfSolarPanels * PCR_GENERATING_CAPACITY_ONE_SOLAR_PANEL
                    : 0;

                let pcrPowerKwhConsumptionCalculated = values.powerKwhConsumption
                    ? values.powerKwhConsumption * PCR_POWER_KWH_CONSUMPTION_PERCENTAGE
                    : 0;

                let pcrGeneratedNumberOfKwh =
                    values.pcrInputGeneratedNumberOfKwh && values.pcrInputGeneratedNumberOfKwh > 0
                        ? values.pcrInputGeneratedNumberOfKwh
                        : pcrEstimatedGeneratedNumberOfKwh
                        ? pcrEstimatedGeneratedNumberOfKwh
                        : 0;

                let pcrAdviseMaxNumberOfParticipations =
                    pcrPowerKwhConsumptionCalculated - pcrGeneratedNumberOfKwh > 0
                        ? Math.ceil(
                              (pcrPowerKwhConsumptionCalculated - pcrGeneratedNumberOfKwh) /
                                  PCR_GENERATING_CAPACITY_ONE_SOLAR_PANEL
                          )
                        : 0;

                if (pcrAdviseMaxNumberOfParticipations < project.minParticipations) {
                    pcrAdviseMaxNumberOfParticipations = project.minParticipations;
                } else if (pcrAdviseMaxNumberOfParticipations > project.maxParticipations) {
                    pcrAdviseMaxNumberOfParticipations = project.maxParticipations;
                }

                return (
                    <>
                        <Form>
                            <Row>
                                <Col xs={12} md={6}>
                                    <FormLabel className={'field-label'}>Minimale aantal participaties</FormLabel>
                                    <TextBlock>{project.minParticipations}</TextBlock>
                                </Col>
                                <Col xs={12} md={6}>
                                    <FormLabel className={'field-label'}>Maximale aantal participaties</FormLabel>
                                    <TextBlock>{project.maxParticipations}</TextBlock>
                                </Col>

                                <Col xs={12} md={6}>
                                    <FormLabel className={'field-label'}>Nominale waarde per participatie</FormLabel>
                                    <TextBlock>{MoneyPresenter(project.participationWorth)}</TextBlock>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12} md={6}>
                                    <Form.Label className={'field-label'}>Je postcode</Form.Label>
                                    <Field
                                        name="pcrPostalCode"
                                        render={({ field }) => (
                                            <InputText
                                                field={field}
                                                errors={errors}
                                                touched={touched}
                                                id="pcr_postal_code"
                                            />
                                        )}
                                    />
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Label className={'field-label'}>Deelnemende postcodes</Form.Label>
                                    <TextBlock>{project.postalcodeLink}</TextBlock>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Label className={'field-label'}>
                                        Je (geschatte) jaarlijks verbruik (in kWh)
                                    </Form.Label>
                                    <Field
                                        name="powerKwhConsumption"
                                        render={({ field }) => (
                                            <InputText
                                                field={field}
                                                errors={errors}
                                                touched={touched}
                                                id="power_kwh_consumption"
                                            />
                                        )}
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12} md={10}>
                                    <Form.Label className={'field-label'}>
                                        Heb je al zonnepanelen op je eigen dak of doe je mee in een ander project?
                                    </Form.Label>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12} md={10}>
                                    <Field
                                        name="pcrHasSolarPanels"
                                        render={({ field }) => (
                                            <>
                                                <div className="form-check form-check-inline">
                                                    <label className="radio-inline">
                                                        <input
                                                            type="radio"
                                                            {...field}
                                                            id="pcr_has_solar_panels_yes"
                                                            checked={field.value === 'Y'}
                                                            value={'Y'}
                                                            onChange={() => setFieldValue('pcrHasSolarPanels', 'Y')}
                                                        />
                                                        &nbsp;Ja
                                                    </label>
                                                    &nbsp;&nbsp;
                                                    <label className="radio-inline">
                                                        <input
                                                            type="radio"
                                                            {...field}
                                                            id="pcr_has_solar_panels_no"
                                                            checked={field.value === 'N'}
                                                            value={'N'}
                                                            onChange={() => {
                                                                setFieldValue('pcrHasSolarPanels', 'N');
                                                                setFieldValue('pcrNumberOfSolarPanels', 0);
                                                            }}
                                                        />
                                                        &nbsp;Nee
                                                    </label>
                                                </div>
                                            </>
                                        )}
                                    />
                                </Col>
                            </Row>

                            {values.pcrHasSolarPanels === 'Y' ? (
                                <Row>
                                    <Col xs={12} md={6}>
                                        <Form.Label className={'field-label'}>
                                            Hoeveel zonnepanelen wekken al stroom voor je op
                                        </Form.Label>
                                        <Field
                                            name="pcrNumberOfSolarPanels"
                                            render={({ field }) => (
                                                <InputText
                                                    field={field}
                                                    errors={errors}
                                                    touched={touched}
                                                    id="pcr_number_of_solar_panels"
                                                />
                                            )}
                                        />
                                    </Col>
                                </Row>
                            ) : (
                                ''
                            )}
                            <Row>
                                <Col xs={12} md={6}>
                                    <Form.Label className={'field-label'}>
                                        Wij schatten in dat je panelen jaarlijks opwekken
                                    </Form.Label>
                                    <TextBlock id="pcr_input_estimated_generated_number_of_kwh">
                                        {pcrEstimatedGeneratedNumberOfKwh} kWh
                                    </TextBlock>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12} md={10}>
                                    <Form.Label className={'field-label'}>Klopt het geschatte opbrengst?</Form.Label>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12} md={10}>
                                    <Field
                                        name="pcrEstimatedRevenueOk"
                                        render={({ field }) => (
                                            <>
                                                <div className="form-check form-check-inline">
                                                    <label className="radio-inline">
                                                        <input
                                                            type="radio"
                                                            {...field}
                                                            id="pcr_estimated_revenue_ok_yes"
                                                            checked={field.value === 'Y'}
                                                            value={'Y'}
                                                            onChange={() => {
                                                                setFieldValue('pcrEstimatedRevenueOk', 'Y');
                                                                setFieldValue('pcrInputGeneratedNumberOfKwh', 0);
                                                            }}
                                                        />
                                                        &nbsp;Ja
                                                    </label>
                                                    &nbsp;&nbsp;
                                                    <label className="radio-inline">
                                                        <input
                                                            type="radio"
                                                            {...field}
                                                            id="pcr_estimated_revenue_ok_no"
                                                            checked={field.value === 'N'}
                                                            value={'N'}
                                                            onChange={() => setFieldValue('pcrEstimatedRevenueOk', 'N')}
                                                        />
                                                        &nbsp;Nee
                                                    </label>
                                                </div>
                                            </>
                                        )}
                                    />
                                </Col>
                            </Row>

                            {values.pcrEstimatedRevenueOk === 'N' ? (
                                <>
                                    <Row>
                                        <Col xs={12} md={6}>
                                            <Form.Label className={'field-label'}>
                                                Wat is de jaarlijkse opbrengst van jouw panelen (in kWh)
                                            </Form.Label>
                                            <Field
                                                name="pcrInputGeneratedNumberOfKwh"
                                                render={({ field }) => (
                                                    <InputText
                                                        field={field}
                                                        errors={errors}
                                                        touched={touched}
                                                        id="pcr_input_generated_number_of_kwh"
                                                    />
                                                )}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} md={6}>
                                            <p>
                                                We adviseren tot 80% van je jaarlijks verbruik minus de jaarlijkse
                                                opbrengsten te dekken met participaties. In het veld hier direct onder
                                                is voor je uitgerekend hoeveel participaties dat zijn. Het is een
                                                advies, je mag er ook meer kopen. Dit kan echter slecht zijn voor je
                                                rendement.
                                            </p>
                                        </Col>
                                    </Row>
                                </>
                            ) : (
                                ''
                            )}

                            <Row>
                                <Col xs={12} md={6}>
                                    <Form.Label className={'field-label'}>
                                        Advies maximaal aantal participaties
                                    </Form.Label>
                                    <TextBlock>{pcrAdviseMaxNumberOfParticipations}</TextBlock>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12} md={6}>
                                    <Form.Label className={'field-label'}>Gewenst aantal participaties</Form.Label>
                                    <Field
                                        name="participationsOptioned"
                                        render={({ field }) => (
                                            <InputText
                                                field={field}
                                                errors={errors}
                                                touched={touched}
                                                id="participations_optioned"
                                            />
                                        )}
                                    />
                                </Col>
                                <Col xs={12} md={6}>
                                    <FormLabel className={'field-label'}>Te betalen bedrag</FormLabel>
                                    <TextBlock>
                                        {MoneyPresenter(values.participationsOptioned * project.participationWorth)}
                                    </TextBlock>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <ButtonGroup aria-label="Steps" className="float-right">
                                        <Button className={'w-button'} size="sm" onClick={handleSubmit}>
                                            Ga naar gegevens
                                        </Button>
                                    </ButtonGroup>
                                </Col>
                            </Row>
                        </Form>
                    </>
                );
            }}
        </Formik>
    );
}

export default StepOnePcr;