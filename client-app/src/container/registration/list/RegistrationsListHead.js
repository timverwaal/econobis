import React from 'react';
import { connect } from 'react-redux';

import DataTableHeadTitleAndSort from '../../../components/dataTable/DataTableHeadTitleAndSort';
import { setRegistrationsSortsFilter } from '../../../actions/registration/RegistrationsSortsActions';

const RegistrationsListHead = (props) => {
    const setSorts = (field, order) => {
        props.setRegistrationsSortsFilter(field, order);

        setTimeout(() => {
            props.refreshRegistrationsData();
        }, 100);
    };

    return (
        <tr className="thead-title">
            <DataTableHeadTitleAndSort sortColumn={'fullName'} title={'Naam'} width={'20%'} setSorts={setSorts} />
            <DataTableHeadTitleAndSort sortColumn={'createdAt'} title={'Aanmelddatum'} width={'15%'} setSorts={setSorts} />
            <DataTableHeadTitleAndSort sortColumn={'sourceId'} title={'Aanmeldingsbron'} width={'15%'} setSorts={setSorts} />
            <DataTableHeadTitleAndSort sortColumn={'statusId'} title={'Status'} width={'15%'} setSorts={setSorts} />
            <DataTableHeadTitleAndSort sortColumn={'measureRequestedId'} title={'Maatregelen'} width={'30%'} setSorts={setSorts} />
            <th width="5%" />
        </tr>
    );
};

const mapDispatchToProps = dispatch => ({
    setRegistrationsSortsFilter: (field, order) => {
        dispatch(setRegistrationsSortsFilter(field, order));
    },
});

export default connect(null, mapDispatchToProps)(RegistrationsListHead);