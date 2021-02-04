import { all } from 'redux-saga/effects';
import { default as fetchPosts } from './posts.saga';
import { default as fetchTodos } from './todo.saga';
import { default as fetchUsers } from './user.saga';

export default function* rootSaga() {
  yield all([fetchPosts(), fetchTodos(), fetchUsers()]);
}
