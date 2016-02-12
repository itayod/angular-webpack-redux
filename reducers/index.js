import { combineReducers } from 'redux';
import images from './images';

//combine all the reducers
const rootReducer = combineReducers({
  images
});

export default rootReducer;
