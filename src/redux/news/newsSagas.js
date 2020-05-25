import { takeLatest, put, call } from 'redux-saga/effects';

import {
  fetchTopNewsService,
  fetchTopNewsByCategoryService,
  fetchTopNewsByTermService,
} from '../../services/newsService';
import newsTypes from './newsTypes';

// TOP NEWS
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

// CATEGORY News
// On Accordion openning
// Payload is obj with type, country and category
export function* fetchTopNewsByCategorySaga(payload) {
  try {
    const { country, category } = payload;

    const articles = yield call(
      fetchTopNewsByCategoryService,
      country,
      category,
    );

    const reducersPayload = {
      articles,
      category,
    };

    yield put({
      type: newsTypes.FETCH_TOP_NEWS_BY_CATEGORY_SUCCESS,
      payload: reducersPayload,
    });
  } catch (error) {
    yield put({
      type: newsTypes.FETCH_TOP_NEWS_BY_CATEGORY_FAIL,
      payload: error,
    });
  }
}

// SEARCH TERM News
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
  yield takeLatest(
    newsTypes.FETCH_TOP_NEWS_BY_CATEGORY,
    fetchTopNewsByCategorySaga,
  );
  yield takeLatest(newsTypes.FETCH_TOP_NEWS_BY_TERM, fetchTopNewsByTermSaga);
}
