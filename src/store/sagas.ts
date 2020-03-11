import { put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';

function* getProgramsFree() {
  try {
    const url =
      'https://iawake-backend-devel.dokku.f17y.com/api/v1/programs/free';

    const response = yield fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = yield response.json();

    if (!response.ok) {
      throw data;
    }

    yield put(actions.getProgramsFreeSuccess(data));
  } catch (err) {
    const msg = err?.message || 'Fail on loading free programs list';
    yield put(actions.getProgramsFreeFailure(msg));
  }
}

export default function*() {
  yield takeLatest(actions.getProgramsFreeRequest, getProgramsFree);
}
