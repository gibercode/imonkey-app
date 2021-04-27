import { AnyAction } from 'redux'
import { GET_IMAGES, GET_IMAGES_ASYNC } from './action-types';
import { call, takeLatest, put, select, delay } from 'redux-saga/effects';
import requestService  from '../../utils/requestService';
import { actionObject, showToast } from '../../utils/common';
import { getPage, getPreviousImage } from '../selectors'

function* getImagesAsync({ payload }: AnyAction): any {

  try {
    const images = yield call(requestService, 'GET', null);
    yield put(actionObject(GET_IMAGES_ASYNC, { images } ));
  }
  catch(error) {
    showToast('something went wrong!', 'danger')
  }
}

export function* watchGetImages() {
  yield takeLatest(GET_IMAGES, getImagesAsync);
}