import { takeLatest, put, call } from 'redux-saga/effects';

import {
  fetchTopNewsService,
  fetchTopNewsByTermService,
} from '../../services/newsService';
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

// On typing to input field on search page
// Payload is obj with type, country and searchTerm
export function* fetchTopNewsByTermSaga(payload) {
  try {
    const { country, searchTerm } = payload;

    const articles = yield call(fetchTopNewsByTermService, country, searchTerm);

    yield put({
      type: newsTypes.FETCH_TOP_NEWS_BY_TERM_SUCCESS,
      payload: articles,
    });
  } catch (error) {
    yield put({ type: newsTypes.FETCH_TOP_NEWS_BY_TERM_FAIL, payload: error });
  }
}

// Watcher Saga
export function* newsSagas() {
  yield takeLatest(newsTypes.FETCH_TOP_NEWS, fetchTopNewsSaga);
  yield takeLatest(newsTypes.FETCH_TOP_NEWS_BY_TERM, fetchTopNewsByTermSaga);
}
