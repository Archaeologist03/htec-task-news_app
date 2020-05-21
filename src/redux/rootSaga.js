import { all, call } from 'redux-saga/effects';

import { newsSagas } from './news/newsSagas';

export default function* rootSaga() {
  yield all([call(newsSagas)]);
}
