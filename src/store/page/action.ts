import { SET_PAGE } from './action-types';
import { actionObject } from '../../utils/common';

export const setPage = (page: number) => actionObject(SET_PAGE, page);
