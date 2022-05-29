const actions = {
  getDataAction: (data) => {
    // console.log("In getDataAction  : ", data)
    return {
      type: "GET_DATA",
      payload: data,
    };
  },

  storeUserAction: (data) => {
    // console.log("In getDataAction  : ", data)
    return {
      type: "STORE_USER",
      payload: data,
    };
  },
  storeUseSecretKeyAction : (data)=>{
    return {
      type: "STORE_SECRET",
      payload: data,
    };
  }


};

module.exports = {
  actions,
};
