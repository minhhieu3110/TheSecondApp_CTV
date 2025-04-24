import {combineReducers} from 'redux';
import * as employeeReducer from './combineReducers/employeeReducers';
const rootReducers = combineReducers({
  ...employeeReducer,
});
export default rootReducers;
