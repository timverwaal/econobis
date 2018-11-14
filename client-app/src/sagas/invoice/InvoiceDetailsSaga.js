import { put, call } from 'redux-saga/effects';
import InvoiceDetailsAPI from '../../api/invoice/InvoiceDetailsAPI';
import {browserHistory} from "react-router";

export function* fetchInvoiceDetailsSaga({ id }) {
    try {
        const invoiceDetails = yield call(InvoiceDetailsAPI.fetchInvoiceDetails, id);
        yield put({ type: 'FETCH_INVOICE_DETAILS_SUCCESS',invoiceDetails });
    } catch (error) {
        yield put({ type: 'FETCH_INVOICE_DETAILS_ERROR', error });
    }
}

export function* deleteInvoiceSaga({ id }) {
    try {
        yield call(InvoiceDetailsAPI.deleteInvoice, id);
        yield put({ type: 'DELETE_INVOICE_SUCCESS', id });
        browserHistory.goBack();
    } catch (error) {
        yield put({ type: 'SET_ERROR', http_code: error.response.status, message: error.response.data.message });
        yield put({ type: 'DELETE_INVOICE_ERROR', error });
    }
}