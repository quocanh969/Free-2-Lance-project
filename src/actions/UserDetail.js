import { loadOtherUserDetail } from "../services/user.services";

export const loadUserDetail = (userId) => {
  return (dispatch) => {
    loadOtherUserDetail(userId)
      .then((res) => {
        dispatch(success(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function success(userDetail) {
    return {
      type: "USER_DETAIL_LOAD",
      userDetail,
    };
  }
};
