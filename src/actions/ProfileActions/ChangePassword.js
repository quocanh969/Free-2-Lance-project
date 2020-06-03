import { changePassword } from "../services/profile.services";

export const sendchangePassword = (oldPW, newPW) => {
  return (dispatch) => {
    dispatch(request());
    changePassword(oldPW, newPW)
      .then((res) => {
        console.log(res);
        if (res.data.code === "-105") {
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
      type: "CHANGE_PW_REQUEST",
    };
  }
  function success(message) {
    console.log("success");
    return {
      type: "CHANGE_PW_SUCCESS",
      message,
    };
  }
  function failure(message) {
    console.log("failure");
    return {
      type: "CHANGE_PW_FAILURE",
      message,
    };
  }
};
