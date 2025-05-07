import actions from '@actions';
import {reducerDefault} from 'redux/common/reducers';
export const sendOTP = (...props) => {
  return reducerDefault(...props, actions.SEND_OTP);
};
export const entranceTest = (...props) => {
  return reducerDefault(...props, actions.ENTRANCE_TEST);
};
