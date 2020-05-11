import { register } from "../services/account.services";

export const sendRegister = (account) => {
  return (dispatch) => {
    dispatch(request());
    register(account)
      .then((res) => {
        console.log(res);
        if (res.data.code === 0) {
          // thất bại
          dispatch(failure(res.data.message));
        } else {
          // thành công
          dispatch(success(res.data.message));
          //   dispatch(updateUser(res.data.data));
          //   // Lưu vào localstorage
          //   localStorage.setItem("user", JSON.stringify(res.data.data));
          //   // Time out
          //   localStorage.setItem("timeOut", JSON.stringify(new Date()));
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
      type: "REGISTER_REQUEST",
    };
  }
  function success(message) {
    console.log("success");
    return {
      type: "REGISTER_SUCCESS",
      message,
    };
  }
  function failure(message) {
    console.log("failure");
    return {
      type: "REGISTER_FAILURE",
      message,
    };
  }
};

export const nextStep = () => {
  return {
    type: "REGISTER_NEXT_STEP",
  };
};

export const prevStep = () => {
  return {
    type: "REGISTER_PREV_STEP",
  };
};

export const updateProfile = (account) => {
  return {
    type: "REGISTER_UPDATE_PROFILE",
    account,
  };
};

export const changeAccountType = (isBusinessUser) => {
  return {
    type: "REGISTER_CHANGE_ACCOUNT_TYPE",
    isBusinessUser,
  };
};

export const resetRegister = () => {
  return {
    type: "REGISTER_RESET",
  };
};
