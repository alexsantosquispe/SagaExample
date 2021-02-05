import * as TypesConst from '../actionTypes';

export const fetchPostById = (id) => ({
  type: TypesConst.FETCH_POST,
  payload: id
});

export const loadingPost = (visibility) => ({
  type: TypesConst.LOADING_POST,
  payload: visibility
});

export const successPost = (item) => ({
  type: TypesConst.SUCCESS_POST,
  payload: item
});

export const errorPost = (error) => ({
  type: TypesConst.ERROR_POST,
  payload: error
});
