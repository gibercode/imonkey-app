import { combineReducers } from 'redux';
import images from './images/reducer';
import selectedImage from './selectedImage/reducer';
import page from './page/reducer'

const reducers = combineReducers({
   images,
   selectedImage,
   page
});

export default reducers;
