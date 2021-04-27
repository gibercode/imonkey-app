import { SELECTED_IMAGE } from './action-types';
import { AnyAction } from 'redux';

const initialState: any= {
    selectedImage: null
}

export default (state: any = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case SELECTED_IMAGE:
    return { ...state, ...payload  };

    default:
    return state;
  }
}
