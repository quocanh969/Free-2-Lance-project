import {
  activateAccount,
  resendActivationMail,
} from "../services/account.services";

import axios from "axios";
import { history } from "../ultis/history/history";
import Swal from "sweetalert2";

export const accountActivation = (token) => {
  return (dispatch) => {
    dispatch(request());

    activateAccount(token)
      .then((res) => {
        console.log(res);
        if (res.data.code === "104") {
          console.log(res);
          dispatch(success(res.data.data));

          Swal.fire({
            title: "Kích hoạt tài khoản thành công",
            text: "Vui lòng đăng nhập để sử dụng",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok!",
          }).then((result) => {
            if (result.value) {
              history.push("/login");
            }
          });
        } else {
          console.log(res);
          dispatch(failure(res.data.data));
          Swal.fire({
            title: "Kích hoạt tài khoản không thành công",
            text: res.data.message,
            icon: "error",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok!",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function request() {
    return {
      type: "ACTIVATION_REQUEST",
    };
  }
  function success(message) {
    console.log("success");
    return {
      type: "ACTIVATION_SUCCESS",
      message,
    };
  }
  function failure(message) {
    console.log("failure");
    return {
      type: "ACTIVATION_FAILURE",
      message,
    };
  }
};

export const resendActivation = (email) => {
  return (dispatch) => {
    dispatch(request());

    resendActivationMail(email)
      .then((res) => {
        console.log(res);
        if (res.data.code === "301") {
          console.log(res);
          dispatch(success("Mail sent to your email address!"));
        } else {
          console.log(res);
          dispatch(failure(res.data.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function request() {
    return {
      type: "REQUEST_NEW_ACTIVATION_REQUEST",
    };
  }
  function success(message) {
    console.log("success");
    return {
      type: "REQUEST_NEW_ACTIVATION_SUCCESS",
      message,
    };
  }
  function failure(message) {
    console.log("failure");
    return {
      type: "REQUEST_NEW_ACTIVATION_FAILURE",
      message,
    };
  }
};
