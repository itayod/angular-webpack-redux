import { SWITCH_IMAGE } from '../actions/images';

export default function images(state = {}, action) {
  switch (action.type) {
    case SWITCH_IMAGE:
      //update the state
      state.selectedImage = action.selectedImage;
      return state;
    default:
      return state;
  }
}
