import {fork} from 'redux-saga/effects';
import watchEmployeeSaga from './watchSagas/employeeSagas';

export default function* rootSaga() {
  yield all([fork(watchEmployeeSaga)]);
}
