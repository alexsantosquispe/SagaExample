import { call, put, takeLatest } from 'redux-saga/effects';
import * as Api from '../../services/api/placeholder';
import * as ApiConst from '../../services/contants';
import * as Actions from '../actions/todo.action';
import * as TypesConts from '../actionTypes';

// Worker saga
function* getTodos() {
  try {
    yield put(Actions.loadingTodo(true));
    const response = yield call(Api.get, ApiConst.TODOS);
    const { success, data, error } = response;

    if (success) {
      yield put(Actions.successTodo(data));
    } else {
      yield put(Actions.errorTodo(error));
    }
  } catch (err) {
    yield put(Actions.errorTodo(err));
  }
}

// Watcher saga
function* fetchTodos() {
  yield takeLatest(TypesConts.FETCH_TODO, getTodos);
}

export default fetchTodos;
