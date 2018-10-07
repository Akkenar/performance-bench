import { SET_USER, REMOVE_USER, UserActions } from './user.actions';
import { User } from './user.type';

const DEFAULT_USER = {};

export function userReducer(
  state: User = DEFAULT_USER,
  action: UserActions
): User {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, action.user);
    case REMOVE_USER:
      return DEFAULT_USER;
    default:
      return state;
  }
}
