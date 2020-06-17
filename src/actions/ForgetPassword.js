import { forgetPassword } from "../services/account.services";

export const sendforgetPassword = (email) => {
  return (dispatch) => {
    dispatch(request());
    forgetPassword(email)
      .then((res) => {
        console.log(res);
        if (res.data.code === 0) {
          // thất bại
          dispatch(failure(res.data.message));
        } else {
          // thành công
          dispatch(success(res.data.message));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(
          failure(
            "There was error with server connection. Error log on console"
          )
        );
      });
  };

  function request() {
    return {
      type: "FORGET_PW_REQUEST",
    };
  }
  function success(message) {
    console.log("success");
    return {
      type: "FORGET_PW_SUCCESS",
      message,
    };
  }
  function failure(message) {
    console.log("failure");
    return {
      type: "FORGET_PW_FAILURE",
      message,
    };
  }
};
