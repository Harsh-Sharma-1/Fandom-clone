import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import authReducer from "./authReducer";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
});
