// reducers.js
import { combineReducers } from 'redux';
import authReducer from './AuthRedux/auth';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
