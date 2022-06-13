import * as actionTypes from "./actionTypes";

export const openSnackbar = (msg, severity) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.OPEN_SNACKBAR, msg: msg, severity: severity });
  };
};

export const closeSnackbar = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.CLOSE_SNACKBAR });
  };
};
