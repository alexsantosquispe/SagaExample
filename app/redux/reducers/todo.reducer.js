import * as TypesConts from '../actionTypes';

const initialState = {
  loading: false,
  todo: [],
  error: null
};

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case TypesConts.LOADING_TODO:
      return {
        ...state,
        loading: action.payload
      };
    case TypesConts.SUCCESS_TODO:
      return {
        ...state,
        todo: action.payload,
        loading: false
      };
    case TypesConts.ERROR_TODO:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default todoReducers;
