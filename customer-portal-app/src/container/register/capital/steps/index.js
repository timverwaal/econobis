import React from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

function Steps({ currentStep, previous, next, initialValues, energySuppliers }) {
    switch (currentStep) {
        case 1:
            return <StepOne next={next} />;
        case 2:
            return (
                <StepTwo
                    previous={previous}
                    next={next}
                    initialValues={initialValues}
                    energySuppliers={energySuppliers}
                />
            );
        case 3:
            return <StepThree previous={previous} next={next} />;
        case 4:
            return <StepFour previous={previous} />;
    }
}

export default Steps;
