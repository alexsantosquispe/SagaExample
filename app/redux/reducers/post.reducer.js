import * as TypesConts from '../actionTypes';

const initialState = {
  loading: false,
  posts: [],
  error: null
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case TypesConts.LOADING_POSTS:
      return {
        ...state,
        loading: action.payload
      };
    case TypesConts.SUCCESS_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case TypesConts.ERROR_POSTS:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default postReducer;
