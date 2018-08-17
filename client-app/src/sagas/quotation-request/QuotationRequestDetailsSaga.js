import { put, call } from 'redux-saga/effects';
import QuotationRequestDetailsAPI from '../../api/quotation-request/QuotationRequestDetailsAPI';
import {hashHistory} from "react-router";

export function* fetchQuotationRequestDetailsSaga({ payload }) {
    try {
        const quotationRequestDetails = yield call(QuotationRequestDetailsAPI.fetchQuotationRequestDetails, payload);
        yield put({ type: 'FETCH_QUOTATION_REQUEST_DETAILS_SUCCESS', quotationRequestDetails });
    } catch (error) {
        yield put({ type: 'FETCH_QUOTATION_REQUEST_DETAILS_ERROR', error });
    }
}

export function* deleteQuotationRequestSaga({ id }) {
    try {
        yield call(QuotationRequestDetailsAPI.deleteQuotationRequest, id);
        yield put({ type: 'DELETE_QUOTATION_REQUEST_SUCCESS', id });
        hashHistory.push(`/offerteverzoeken`);
    } catch (error) {
        yield put({ type: 'SET_ERROR', http_code: error.response.status, message: error.response.data.message });
        yield put({ type: 'DELETE_QUOTATION_REQUEST_ERROR', error });
    }
}