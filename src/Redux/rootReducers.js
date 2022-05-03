import { combineReducers } from "redux";
import  getDataReducer  from "./getDataReducer";

const rootReducers = combineReducers({
  // auth: AuthReducer,
  data: getDataReducer,
});

export default rootReducers;
