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
          Swal.fire({
            title: "Đổi mật khẩu không thành công",
            text: res.data.message,
            icon: "error",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok!",
          });
        } else {
          // thành công
          Swal.fire({
            title: "Đổi mật khẩu thành công",
            text: "Vui lòng đăng nhập lại",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok!",
          }).then((result) => {
            if (result.value) {
              localStorage.clear();

              // history.push("/login");
              window.location.href = "./login";
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Đổi mật khẩu không thành công",
          text: "Đã xảy ra lỗi kết nối",
          icon: "error",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok!",
        });
      });
  };

  function request() {
    return {
      type: "CHANGE_PW_REQUEST",
    };
  }
};
