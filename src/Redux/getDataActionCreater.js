import axios from "axios";
import { actions } from "./getDataAction";
const { getDataAction, storeUserAction,storeUseSecretKeyAction } = actions;

const getData = async () => {
  try {
    const add = process.env.PORTFOLIO_LOCAL_API;
    console.log(add);
    const response = await axios.get(
      "https://dynamic-portfolio-api.herokuapp.com/portfolio/get"
    );
    // console.log("Data : ", response.data);

    let data = response?.data?.reduce((ans, ele) => {
      return {
        ...ans,
        [`${ele.module}`]: {
          ...ans[`${ele?.module}`],
          [`${ele.type}`]:
            ans[`${ele?.module}`] &&
            ans[`${ele?.module}`][`${ele?.type}`] &&
            ans[`${ele?.module}`][`${ele?.type}`].length > 0
              ? [...ans[`${ele.module}`][`${ele.type}`], ele]
              : [ele],
        },
      };
    }, {});

    // console.log("Data After reduce : ", data);

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getDataActionCreater = () => {
  return async (dispatch) => {
    try {
      let data = await getData();
      // console.log("In getDataActionCreater : ", data);
      dispatch(getDataAction(data));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const storeUserActionCreater = (data) => {
  return async (dispatch) => {
    try {
      // let data = await getData();
      // console.log("In getDataActionCreater : ", data);
      dispatch(storeUserAction(data));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const storeUseSecretKeyActionCreater = (data) => {
  return async (dispatch) => {
    try {
      // let data = await getData();
      // console.log("In getDataActionCreater : ", data);
      dispatch(storeUseSecretKeyAction(data));
    } catch (err) {
      console.log(err.message);
    }
  };
};
