import { combineReducers } from "redux";
import registerReducer from "./register";
import loginReducer from "./login";

const rootReducer = combineReducers({
  registerReducer,
  loginReducer
});

export default rootReducer;
