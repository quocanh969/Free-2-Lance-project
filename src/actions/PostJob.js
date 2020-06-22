import { postJob, getAllTopics } from '../services/job.services';
import Swal from 'sweetalert2';
export const submitAddJobForm = (fields) => {
  return (dispatch) => {
    dispatch(request());
    postJob(fields)
      .then((res) => {
        console.log(res);
        if (res.data.code === '-204') {
          // thất bại
          dispatch(failure(res.data.message));
          Swal.fire({
            title: "Đăng việc thất bại",
            text: "Lỗi hệ thống",
            icon: "error",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK!",
          })
        } else {
          // thành công
          dispatch(success(res.data.message));
          Swal.fire({
            title: "Đăng tuyển thành công",
            text: "Ấn OK để chuyển qua xem công việc đã đăng",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok!",
          }).then((result) => {
            if (result.value) {
              localStorage.clear();
              window.location.href = "./dashboard/tab=4";
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
      type: "ADD_JOB_REQUEST",
    };
  }
  function success(message) {
    console.log("success");
    return {
      type: "ADD_JOB_SUCCESS",
      message,
    };
  }
  function failure(message) {
    console.log("failure");
    return {
      type: "ADD_JOB_FAILURE",
      message,
    };
  }
};

export const loadResources = () => {
  return (dispatch => {
    dispatch(request());
    getAllTopics().then(res => {
      if (res.data.code === 200) {
        // thất bại
        dispatch(success(res.data.message));
      } else {
        // thành công
        dispatch(failure(res.data.message));
      }
    });
  })
  function request() {
    return {
      type: "LOAD_RESOURCES_REQUEST",
    };
  }
  function success(message) {
    console.log("success");
    return {
      type: "LOAD_RESOURCES_SUCCESS",
      message,
    };
  }
  function failure(message) {
    console.log("failure");
    return {
      type: "LOAD_RESOURCES_FAILURE",
      message,
    };
  }
}