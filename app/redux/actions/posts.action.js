import * as TypesConts from '../actionTypes';

export const fetchPosts = () => ({
  type: TypesConts.FETCH_POSTS
});

export const loadingPosts = (payload) => ({
  type: TypesConts.LOADING_POSTS,
  payload
});

export const successPosts = (data) => ({
  type: TypesConts.SUCCESS_POSTS,
  payload: data
});

export const errorPosts = (error) => ({
  type: TypesConts.ERROR_POSTS,
  payload: error
});
