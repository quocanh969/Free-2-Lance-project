const initState = {
  userDetail: {},
};

const UserDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case "USER_DETAIL_LOAD":
      return {
        ...state,
        userDetail: action.userDetail,
      };
    default:
      return state;
  }
};

export default UserDetailReducer;
