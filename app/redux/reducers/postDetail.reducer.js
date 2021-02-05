import * as TypesConst from '../actionTypes';

const initialState = {
  detail: null,
  loading: false,
  error: null
};

export default postDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case TypesConst.LOADING_POST:
      return {
        ...state,
        loading: action.payload
      };
    case TypesConst.SUCCESS_POST:
      return {
        ...state,
        detail: action.payload,
        loading: false
      };
    case TypesConst.ERROR_POST:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
