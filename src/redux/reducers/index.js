import { combineReducers } from "redux";

const initialState = {
  login: null,
  register: null,
};

const loginReducer = (state = initialState.login, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return action.payload;
    case "LOGIN_FAILURE":
      return null;
    default:
      return state;
  }
};

const registerReducer = (state = initialState.register, action) => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
      return action.payload;
    case "REGISTER_FAILURE":
      return null;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
});

export default rootReducer;
