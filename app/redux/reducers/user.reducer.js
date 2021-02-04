import * as TypesConts from '../actionTypes';

const initialState = {
  loading: false,
  users: [],
  error: null
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case TypesConts.LOADING_USERS:
      return {
        ...state,
        loading: action.payload
      };
    case TypesConts.SUCCESS_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case TypesConts.ERROR_USERS:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default userReducers;
