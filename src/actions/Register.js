import { register } from "../services/account.services";
import Swal from "sweetalert2";
import { history } from "../ultis/history/history";

export const sendRegister = (account) => {
  return (dispatch) => {
    dispatch(request());
    register(account)
      .then((res) => {
        console.log(res);
        if (res.data.code === "-103") {
          // thất bại
          Swal.fire({
            title: "Đăng kí tài khoản không thành công",
            text:
              res.data.message === "Email is already used"
                ? "Email đã được sử dụng"
                : res.data.message,
            icon: "error",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok!",
          });
        } else {
          // thành công
          Swal.fire({
            title: "Đăng kí thành công",
            text: "Vui lòng kiểm tra email để kích hoạt tài khoản",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok!",
          }).then((result) => {
            if (result.value) {
              localStorage.clear();
              history.push("/login");
            }
          });
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
