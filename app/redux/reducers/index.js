import { combineReducers } from 'redux';
import postReducers from './post.reducer';
import todoReducers from './todo.reducer';
import userReducers from './user.reducer';
import postDetailReducer from './postDetail.reducer';

const rootReducer = combineReducers({
  postReducers,
  todoReducers,
  userReducers,
  postDetailReducer
});

export default rootReducer;
