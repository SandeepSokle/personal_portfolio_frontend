import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { connect } from "react-redux";
import { closeSnackbar } from "../../Redux/Snackbar/snackbarStore";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const MySnackbar = (props) => {
  return (
    <Snackbar
      variant="outlined"
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={props.open}
      onClose={props.handleClose}
      autoHideDuration={2000}
    >
      <Alert onClose={props.handleClose} severity={props.severity}>
        {props.msg}
      </Alert>
    </Snackbar>
  );
};

const mapStateToProps = (state) => {
  return {
    open: state.snackbar.showSnackbar,
    msg: state.snackbar.msg,
    severity: state.snackbar.severity,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClose: () => dispatch(closeSnackbar()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MySnackbar);


// openSnackbar(
//   "Password Reset Link sent on registered email! ",
//   "success"
// )
// dispatch(openSnackbar(e?.response?.data?.error, "error"));
