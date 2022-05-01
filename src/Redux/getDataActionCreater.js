import axios from "axios";
import { actions } from "./getDataAction";
const { getDataAction } = actions;

const getData = async () => {
  try {
    const response = await axios.get("/portfolio/get");
    console.log("Data : ", response.data);

    let data = response.data.reduce((ans, ele) => {
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

    console.log("Data After reduce : ", data);

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getDataActionCreater = () => {
  return async (dispatch) => {
    try {
      let data = await getData();
      console.log("In getDataActionCreater : ", data);
      dispatch(getDataAction(data));
    } catch (err) {
      console.log(err.message);
    }
  };
};