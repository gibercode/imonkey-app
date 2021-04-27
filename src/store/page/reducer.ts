import { SET_PAGE } from './action-types';
import { AnyAction } from 'redux';

const initialState: any = {
    page: 1
}

export default (state: any = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case SET_PAGE:
    return { ...state, page: payload  };

    default:
    return state;
  }
}
