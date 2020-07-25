import { login, getUserInfo, forgetPassword } from "../services/account.services";
import Swal from "sweetalert2";

import { history } from "../ultis/history/history";

export const sendForgetPassword = (email) => {
  return (dispatch) => {
    dispatch(request());
    forgetPassword(email)
    .then(res => {
      if(res.data.code === '108') {
        dispatch(success('Vui lòng kiểm tra mail để nhận được thông tin mật khẩu mới'));
      }
      else {
        dispatch(failure(res.data.data.message));
      }
    })
  };

  function request() {
    return {
      type: "FORGET_PW_REQUEST",
    };
  }
  function success(message) {
    return {
      type: "FORGET_PW_SUCCESS",
      message,
    };
  }
  function failure(message) {
    return {
      type: "FORGET_PW_FAILURE",
      message,
    };
  }
};

export const sendLogin = (email, password) => {
  return (dispatch) => {
    dispatch(request());
    login(email, password)
      .then((res) => {
        if (res.data.code === "-101") {
          // thất bại
          dispatch(failure(res.data.message));
        } else {
          // thành công
          
          localStorage.setItem("client_token", JSON.stringify(res.data.data.token));
          localStorage.setItem("email",email);
          // lấy thông tin user
          getUserInfo()
            .then((res) => {
              if (res.data.code === "200") {
                dispatch(updateUser(res.data.data.personal));
                dispatch(success("Đăng nhập thành công"));
                //history.push('/'); // quay về trang chủ
                window.location.href = "./";
              } else {
                Swal.fire({
                  title: "Tải dữ liệu cá nhân thất bại",
                  icon: "error",
                  confirmButtonText: "OK",
                });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(failure("Đã có lỗi server, vui lòng thử lại sau"));
        Swal.fire({
          title: "Có lỗi trong quá trình đăng nhập",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  function request() {
    return {
      type: "LOG_IN_REQUEST",
    };
  }
  function success(message) {
    return {
      type: "LOG_IN_SUCCESS",
      message,
    };
  }
  function failure(message) {
    return {
      type: "LOG_IN_FAILURE",
      message,
    };
  }
  function updateUser(user) {
    return {
      type: "UPDATE_USER",
      user,
    };
  }
};

export const reset = () => {
  return (dispatch) => {
    dispatch(callAction());
  };

  function callAction() {
    return {
      type: "LOG_IN_RESET",
    };
  }
};
