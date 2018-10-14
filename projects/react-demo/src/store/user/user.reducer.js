import { REMOVE_USER, SET_USER } from './user.actions';

const DEFAULT_STATE = {};

const userReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case REMOVE_USER:
      return DEFAULT_STATE;
    case SET_USER:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default userReducer;
