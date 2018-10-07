import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectUser = (state: AppState) => state.user;
export const selectUserEmail = createSelector(
  selectUser,
  user => user.email,
);
export const user = createSelector(
  selectUser
);
