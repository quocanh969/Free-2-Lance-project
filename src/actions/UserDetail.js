import { loadOtherUserDetail, loadReviewByEmployerId, loadReviewByEmployeeId } from "../services/user.services";

export const loadUserDetail = (userId) => {
  return (dispatch) => {
    loadOtherUserDetail(userId)
      .then((res) => {
        dispatch(success(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function success(userDetail) {
    return {
      type: "USER_DETAIL_LOAD",
      userDetail,
    };
  }
};

export const getReviewJobUserDetail = (page, take, employer) => {
  return (dispatch) => {
    loadReviewByEmployerId(page, take, employer)
      .then((res) => {
        if(res.data.code === '200') {
          dispatch(success(res.data.data.list, res.data.data.total, res.data.data.page));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function success(list, total, page) {
    return {
      type: "JOB_USER_DETAIL_LOAD",
      list, 
      total, 
      page,
    };
  }
};

export const getReviewTaskUserDetail = (page, take, employee) => {
  return (dispatch) => {
    loadReviewByEmployeeId(page, take, employee)
      .then((res) => {
        if(res.data.code === '200') {
          dispatch(success(res.data.data.list, res.data.data.total, res.data.data.page));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function success(list, total, page) {
    return {
      type: "TASK_USER_DETAIL_LOAD",
      list, 
      total, 
      page,
    };
  }
};