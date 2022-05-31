const actions = {
  getDataAction: (data) => {
    // console.log("In getDataAction  : ", data)
    return {
      type: "GET_DATA",
      payload : data,
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
  }

};



module.exports = {
  actions
}