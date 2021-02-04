import * as TypesConts from '../actionTypes';

export const fetchTodo = () => ({
  type: TypesConts.FETCH_TODO
});

export const loadingTodo = (payload) => ({
  type: TypesConts.LOADING_TODO,
  payload
});

export const successTodo = (data) => ({
  type: TypesConts.SUCCESS_TODO,
  payload: data
});

export const errorTodo = (error) => ({
  type: TypesConts.ERROR_TODO,
  payload: error
});
