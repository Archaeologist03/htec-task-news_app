import { takeLatest, put, call } from 'redux-saga/effects';

import { fetchTopNews } from '../../services/newsService';
import newsTypes from './newsTypes';

export function* fetchTopNewsSaga(payload) {
  try {
    const data = yield call(fetchTopNews, payload);

    yield put({ type: newsTypes.FETCH_TOP_NEWS_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: newsTypes.FETCH_TOP_NEWS_FAIL, payload: err });
  }
}

export function* newsSagas() {
  yield takeLatest(newsTypes.FETCH_TOP_NEWS, fetchTopNewsSaga);
}
