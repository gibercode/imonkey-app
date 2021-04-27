import { SELECTED_IMAGE } from './action-types';
import { actionObject } from '../../utils/common';

export const selectedImage = (data: any) => actionObject(SELECTED_IMAGE, data);
