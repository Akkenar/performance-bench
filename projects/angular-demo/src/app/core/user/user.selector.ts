import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { USER_FEATURE } from './user.const';
import { User } from './user.type';

export const selectUser = createFeatureSelector<AppState, User>(USER_FEATURE);

export const selectUserEmail = createSelector(
  selectUser,
  user => (user ? user.email : '')
);
