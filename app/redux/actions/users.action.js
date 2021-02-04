import * as TypesConts from '../actionTypes';

export const fetchUsers = () => ({
  type: TypesConts.FETCH_USERS
});

export const loadingUsers = (payload) => ({
  type: TypesConts.LOADING_USERS,
  payload
});

export const successUsers = (data) => ({
  type: TypesConts.SUCCESS_USERS,
  payload: data
});

export const errorUsers = (error) => ({
  type: TypesConts.ERROR_USERS,
  payload: error
});
