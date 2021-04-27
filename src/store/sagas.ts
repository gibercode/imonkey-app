import { all, fork } from 'redux-saga/effects';
import { watchGetImages } from './images/saga';

export default function* rootSaga() {
  yield all([
    fork(watchGetImages)
  ]);
}