const actions = {
  startLoader: (status) => {
    // console.log("2. startLoader", status);
    return {
      type : "start",
    };
  },
  endLoader: (status) => {
    // console.log("2. endLoader", status);
    return {
      type : "end"
    };
  },
};

export default actions;
