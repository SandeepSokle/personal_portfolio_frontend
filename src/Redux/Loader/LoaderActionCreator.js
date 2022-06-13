import actions from "./LoaderActions";

const { startLoader, endLoader } = actions;

export const loaderStartActionCreater = () => {
  return async (dispatch) => {
    try {
      // console.log("1. loaderActionCreater", );
      dispatch(startLoader());
    } catch (err) {
      console.log(err.response);
    }
  };
};

export const loaderEndActionCreater = () => {
  return async (dispatch) => {
    try {
      // console.log("1. loaderActionCreater", );
      dispatch(endLoader());
    } catch (err) {
      console.log(err.response);
    }
  };
};
