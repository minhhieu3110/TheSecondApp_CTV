import {all, fork} from 'redux-saga/effects';
import watchEmployeeSagas from './watchSagas/employeeSagas';

export default function* rootSaga() {
  yield all([fork(watchEmployeeSagas)]);
}
