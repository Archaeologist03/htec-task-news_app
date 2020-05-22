import { takeLatest, put, call } from 'redux-saga/effects';

import { fetchTopNewsService } from '../../services/newsService';
import newsTypes from './newsTypes';

// On Country change / inital load
// Payload is obj with type and country(gb initially)
export function* fetchTopNewsSaga(payload) {
  try {
    const articles = yield call(fetchTopNewsService, payload.country);

    yield put({
      type: newsTypes.FETCH_TOP_NEWS_SUCCESS,
      payload: articles,
    });
  } catch (error) {
    yield put({ type: newsTypes.FETCH_TOP_NEWS_FAIL, payload: error });
  }
}

// Watcher Saga
export function* newsSagas() {
  yield takeLatest(newsTypes.FETCH_TOP_NEWS, fetchTopNewsSaga);
}
