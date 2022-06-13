import { combineReducers } from "redux";
import getDataReducer from "./getDataReducer";
import SnackBarReducer from "./Snackbar/SnackBarReducer";
import { loaderReducer } from "./Loader/LoaderReducers";

const rootReducers = combineReducers({
  // auth: AuthReducer,
  data: getDataReducer,
  snackbar: SnackBarReducer,
  loader: loaderReducer,
});

export default rootReducers;
