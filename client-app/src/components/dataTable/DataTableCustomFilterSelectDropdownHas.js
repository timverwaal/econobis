import React from 'react';

const DataTableBody = props => {
    return (
        <select
            disabled={props.readOnly}
            className="form-control input-sm"
            name={'type'}
            value={props.type}
            onChange={props.handleInputChange}
        >
            <option value="eq">heeft</option>
            <option value="neq">heeft geen</option>
        </select>
    );
};

export default DataTableBody;
