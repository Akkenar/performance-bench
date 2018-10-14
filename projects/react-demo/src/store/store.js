import { combineReducers, createStore } from 'redux';
import userReducer from './user/user.reducer';

export default createStore(combineReducers({ user: userReducer }));
