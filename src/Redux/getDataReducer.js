export const getDataReducer = (state = {}, action) => {
  // console.log("In getReducer : ", action)
  switch (action.type) {
    case "GET_DATA":
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};

// module.exports = getDataReducer;
