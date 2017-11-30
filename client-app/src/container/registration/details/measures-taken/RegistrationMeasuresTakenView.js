import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import GetNameByIdHelper from '../../../../helpers/GetNameByIdHelper';

const RegistrationMeasuresTakenView = props => {
    const {name, measureDate, energyLabelId} = props.measureTaken;

    return (
        <div className={`row border ${props.highlightLine}`} onMouseEnter={() => props.onLineEnter()} onMouseLeave={() => props.onLineLeave()}>
          <div>
            <div className="col-sm-4">
                { name }
            </div>
            <div className="col-sm-3">
                { measureDate && moment(measureDate.date).format('d-M-Y') }
            </div>
            <div className="col-sm-4">
                <GetNameByIdHelper id={energyLabelId} items={props.energyLabels} />
            </div>
          </div>
          <div className="col-sm-1">
              {(props.showActionButtons ? <a role="button" onClick={props.toggleDelete}><span className="glyphicon glyphicon-trash mybtn-danger"  /> </a> : '')}
          </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        energyLabels: state.systemData.energyLabels,
    };
};

export default connect(mapStateToProps, null)(RegistrationMeasuresTakenView);