import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
moment.locale('nl');
import moneyPresenter from '../../../../helpers/MoneyPresenter';

import ViewText from '../../../../components/form/ViewText';
import Panel from '../../../../components/panel/Panel';
import PanelBody from '../../../../components/panel/PanelBody';

const ProjectGeneralFormViewOther = ({ project }) => {
    const { name, dateStart, projectStatus, amountOfLoanNeeded } = project;

    return (
        <Panel>
            <PanelBody>
                <div className="row">
                    <ViewText label={'Project'} value={name} />
                    <ViewText label={'Lening opgehaald'} value={moneyPresenter(100)} />
                </div>

                <div className="row">
                    <ViewText label={'Status'} value={projectStatus && projectStatus.name} />
                    <ViewText label={'Lening opgehaald in optie'} value={moneyPresenter(20)} />
                </div>

                <div className="row">
                    <ViewText label={'Start project'} value={dateStart ? moment(dateStart).format('L') : ''} />
                    <ViewText label={'Lening uit te geven'} value={moneyPresenter(300)} />
                </div>

                <div className="row">
                    <ViewText label={'Lening nodig'} value={amountOfLoanNeeded && moneyPresenter(amountOfLoanNeeded)} />
                </div>
            </PanelBody>
        </Panel>
    );
};

const mapStateToProps = state => {
    return {
        project: state.projectDetails,
        projectTypes: state.systemData.projectTypes,
    };
};

export default connect(mapStateToProps)(ProjectGeneralFormViewOther);
