const actions = {
  getDataAction: (data) => {
    // console.log("In getDataAction  : ", data)
    return {
      type: "GET_DATA",
      payload: data,
    };
  },
  loginUserAction : (data)=>{
    return {
      type: "LOG_IN",
      payload : data,
    };
  },

  logoutUserAction : ()=>{
    return {
      type: "LOG_OUT",
    };
  },

  addSecretKeyAction : (data)=>{
    return {
      type: "SECRET_KEY",
      payload : data,
    };
  }

};



module.exports = {
  actions,
};
