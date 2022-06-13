import * as actionTypes from "./actionTypes";
import { updateObject } from "./utility";

const initialState = {
  showSnackbar: false,
  msg: "This is a snackbar",
  severity: "success",
};

const SnackBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_SNACKBAR:
      return updateObject(state, {
        showSnackbar: true,
        msg: action.msg,
        severity: action.severity,
      });

    case actionTypes.CLOSE_SNACKBAR:
      return updateObject(state, {
        showSnackbar: false,
      });

    default:
      return state;
  }
};

export default SnackBarReducer;
