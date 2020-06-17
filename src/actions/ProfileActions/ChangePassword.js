import { changePassword } from "../../services/profile.services";
import Swal from "sweetalert2";

export const sendchangePassword = (oldPW, newPW) => {
  return (dispatch) => {
    dispatch(request());
    changePassword(oldPW, newPW)
      .then((res) => {
        console.log(res);
        if (res.data.code === "-105") {
          // thất bại
          dispatch(failure(res.data.message));
          Swal.fire({
            title: "Cập nhật mật khẩu thất bại",
            icon: "error",
            confirmButtonText: "OK",
          });          
        } else {
          // thành công
          dispatch(success(res.data.message));
          Swal.fire({
            icon: 'success',
            title: 'Cập nhật mật khẩu thành công',
            showConfirmButton: false,
            timer: 1500
          })
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
    return {
      type: "CHANGE_PW_FAILURE",
      message,
    };
  }
};
