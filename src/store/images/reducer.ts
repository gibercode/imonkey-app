import { GET_IMAGES, GET_IMAGES_ASYNC } from './action-types';
import { AnyAction } from 'redux';

const initialState: any = {
    images: null
}

export default (state: any = initialState, { type, payload }: AnyAction) => {

  switch(type) {
    case GET_IMAGES_ASYNC:
      return { ...state, ...payload }

    default:
    return state;
  }
}
