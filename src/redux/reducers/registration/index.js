import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    fetching: false,
    error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case actionTypes.REGISTRATION_USER:
          return {...state, fetching: true, error: null};
      case actionTypes.REGISTRATION_USER_SUCCESS:
          return {...state, fetching: false, file: action.file};
      case actionTypes.REGISTRATION_USER_FAIL:
          return {...state, fetching: false, error: action.error};
      default:
          return state;
  }
};

export default reducer;
