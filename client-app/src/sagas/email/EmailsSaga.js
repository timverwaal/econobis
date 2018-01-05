import { put, call } from 'redux-saga/effects';
import EmailAPI from '../../api/email/EmailAPI';

export function* fetchEmailsSaga() {
    try {
        const emails = yield call(EmailAPI.fetchEmails);

        yield [
            put({ type: 'FETCH_EMAILS_LOADING_SUCCESS'}),
            put({ type: 'FETCH_EMAILS_SUCCESS', emails }),
        ];
    } catch (error) {
        yield put({ type: 'FETCH_EMAILS_ERROR', error });
    }
}
