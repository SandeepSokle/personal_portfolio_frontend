const getDataReducer = (state = {}, action) => {
  // console.log("In getReducer : ", action)
  switch (action.type) {
    case "GET_DATA":
      return { ...state, ...action.payload };
    case "LOG_IN":
      return { ...state, user: action.payload };
    case "SECRET_KEY":
      return { ...state, secret: action.payload };
    case "LOG_OUT":
      return { ...state, user: null };
    default:
      return { ...state };
  }
};

export default getDataReducer;
