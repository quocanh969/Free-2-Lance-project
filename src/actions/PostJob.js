import { postJob, getAllTopics } from '../services/job.services';

export const submitAddJobForm = (fields) => {
  return (dispatch) => {
    dispatch(request());
    postJob(fields)
      .then((res) => {
        console.log(res);
        if (res.data.code === '-204') {
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