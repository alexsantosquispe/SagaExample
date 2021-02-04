import { call, put, takeLatest } from 'redux-saga/effects';
import * as Api from '../../services/api/placeholder';
import * as ApiConst from '../../services/contants';
import * as Actions from '../actions/posts.action';
import * as TypesConts from '../actionTypes';

// Worker saga
function* getData() {
  try {
    yield put(Actions.loadingPosts(true));
    const response = yield call(Api.get, ApiConst.POSTS);
    const { success, data, error } = response;

    if (success) {
      yield put(Actions.successPosts(data));
    } else {
      yield put(Actions.errorPosts(error));
    }
  } catch (error) {
    yield put(Actions.errorPosts(error));
  }
}

// Watcher saga
function* fetchPosts() {
  yield takeLatest(TypesConts.FETCH_POSTS, getData);
}

export default fetchPosts;
