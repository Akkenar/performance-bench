import { User } from './user/user.type';

/**
 * This class describes the information within the global state.
 */
export interface AppState {
  /**
   * The current user information.
   */
  user?: User;
}
