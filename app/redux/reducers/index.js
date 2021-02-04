import { combineReducers } from 'redux';
import postReducers from './post.reducer';
import todoReducers from './todo.reducer';
import userReducers from './user.reducer';

const rootReducer = combineReducers({
  postReducers,
  todoReducers,
  userReducers
});

export default rootReducer;
