import { call, put, takeLatest } from 'redux-saga/effects';
import * as Api from '../../services/api/placeholder';
import * as ApiConst from '../../services/contants';
import * as Actions from '../actions/postDetail.action';
import * as TypesConst from '../actionTypes';
import * as Utils from '../../utils/network';

function* getData({ payload }) {
  try {
    yield put(Actions.loadingPost(true));
    const networkStatus = yield call(Utils.isNetworkAvailable);

    if (networkStatus) {
      const response = yield call(Api.get, ApiConst.POST_ID, payload);
      const { success, data, error } = response;

      if (success) {
        yield put(Actions.successPost(data));
      } else {
        yield put(Actions.errorPost(error));
      }
    } else {
      yield put(Actions.errorPost('Error Connection'));
    }
  } catch (err) {
    yield put(Actions.errorPost(err));
  }
}

function* fetchPostById() {
  yield takeLatest(TypesConst.FETCH_POST, getData);
}

export default fetchPostById;
