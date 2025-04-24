import api from 'utils/api';
import {URL_API} from '../common';
import {put, takeLatest} from 'redux-saga/effects';
import actions, {_onFail, _onSuccess} from '@actions';
function* sendOTP(action) {
  const body = yield action.body;
  try {
    const res = yield api.post(URL_API.employee.send_otp, body);
    console.log(res.data.otp_code);

    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
    action.onSuccess?.(res);
  } catch (error) {
    action.onFail?.(error);
    yield put({type: _onFail(action.type)});
  }
}
export default function* watchEmployeeSaga() {
  yield takeLatest(actions.SEND_OTP, sendOTP);
}
