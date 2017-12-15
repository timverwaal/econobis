import React from 'react';
import { connect } from 'react-redux';

import DataTableHeadTitleAndSort from '../../../components/dataTable/DataTableHeadTitleAndSort';
import { setTasksSortsFilter } from '../../../actions/task/TasksSortsActions';

const TasksListHead = (props) => {
    const setSorts = (field, order) => {
        props.setTasksSortsFilter(field, order);

        setTimeout(() => {
            props.refreshTasksData();
        }, 100);
    };

    return (
        <tr className="thead-title">
            <DataTableHeadTitleAndSort sortColumn={'createdAt'} title={'Datum'} width={'14%'} setSorts={setSorts} />
            <DataTableHeadTitleAndSort sortColumn={'name'} title={'Naam'} width={'15%'} setSorts={setSorts} />
            <DataTableHeadTitleAndSort sortColumn={'contactName'} title={'Contact'} width={'15%'} setSorts={setSorts} />
            <DataTableHeadTitleAndSort sortColumn={'datePlanned'} title={'Plandatum'} width={'14%'} setSorts={setSorts} />
            <DataTableHeadTitleAndSort sortColumn={'dateStarted'} title={'Gestart op'} width={'14%'} setSorts={setSorts} />
            <DataTableHeadTitleAndSort sortColumn={'statusId'} title={'Status'} width={'13%'} setSorts={setSorts} />
            <DataTableHeadTitleAndSort sortColumn={'responsibleUserName'} title={'Uitvoerder'} width={'15%'} setSorts={setSorts} />
            <th width="5%" />
        </tr>
    );
};

const mapDispatchToProps = dispatch => ({
    setTasksSortsFilter: (field, order) => {
        dispatch(setTasksSortsFilter(field, order));
    },
});

export default connect(null, mapDispatchToProps)(TasksListHead);