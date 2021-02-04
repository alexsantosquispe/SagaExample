import { call, put, takeLatest } from 'redux-saga/effects';
import * as Api from '../../services/api/placeholder';
import * as ApiConst from '../../services/contants';
import * as Actions from '../actions/users.action';
import * as TypesConst from '../actionTypes';

// Worker
function* getUsers() {
  try {
    yield put(Actions.loadingUsers(true));
    const response = yield call(Api.get, ApiConst.USERS);
    const { success, data, error } = response;

    if (success) {
      yield put(Actions.successUsers(data));
    } else {
      yield put(Actions.errorUsers(error));
    }
  } catch (err) {
    yield put(Actions.errorUsers(err));
  }
}

// Watcher
function* fetchUsers() {
  yield takeLatest(TypesConst.FETCH_USERS, getUsers);
}

export default fetchUsers;
