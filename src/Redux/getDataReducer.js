const getDataReducer = (state = {}, action) => {
  // console.log("In getReducer : ", action)
  switch (action.type) {
    case "GET_DATA":
      return { ...state, ...action.payload };
    case "STORE_USER":
      return { ...state, user: action.payload };
    case "STORE_SECRET":
      return { ...state, secretKey: action.payload };
    default:
      return { ...state };
  }
};

export default getDataReducer;
