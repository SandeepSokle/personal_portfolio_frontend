var initState = {
  status: true,
};

export const loaderReducer = (state = initState, action) => {
  const { type } = action;
  // console.log("3. loaderReducer", action);
  switch (type) {
    case "start":
      return { ...state, status: true };
    case "end":
      return { ...state, status: false };
    default:
      return state;
  }
};
