import api from 'utils/api';
import {URL_API} from '../common';
import {put, takeLatest} from 'redux-saga/effects';
import actions, {_onFail, _onSuccess} from '@actions';
function* sendOtp(action) {
  const body = yield action.body;
  try {
    const res = yield api.post(URL_API.employee.send_otp, body);
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
    action.onSuccess?.(res);
  } catch (error) {
    yield put({
      type: _onFail(action.type),
    });
    action.onFail?.(error);
  }
}
function* entranceTest(action) {
  try {
    const res = yield api.get(URL_API.employee.entrance_test);
    console.log(res);

    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
    action.onSuccess?.(res);
  } catch (error) {
    yield put({
      type: _onFail(action.type),
    });
    action.onFail?.(error);
  }
}
export default function* watchEmployeeSagas() {
  yield takeLatest(actions.SEND_OTP, sendOtp);
  yield takeLatest(actions.ENTRANCE_TEST, entranceTest);
}
