import { loadOtherUserDetail, loadReviewByEmployerId, loadReviewByEmployeeId, loadTransactionByUserId } from "../services/user.services";

export const loadUserDetail = (userId) => {
  return (dispatch) => {
    dispatch(loading());
    loadOtherUserDetail(userId)
      .then((res) => {
        dispatch(success(res.data.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(failure());
      });
  };

  function success(userDetail) {
    return {
      type: "USER_DETAIL_LOAD",
      userDetail,
    };
  }
  function loading() {
    return {
      type: "USER_DETAIL_LOADING"
    };
  }
  function failure() {
    return {
      type: "USER_DETAIL_LOAD_FAILURE"
    };
  }
};

export const getReviewJobUserDetail = (page, take, employer) => {
  return (dispatch) => {
    dispatch(loading());
    loadReviewByEmployerId(page, take, employer)
      .then((res) => {
        if (res.data.code === '200') {
          dispatch(success(res.data.data.list, res.data.data.total, res.data.data.page));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(failure());
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
  function loading() {
    return {
      type: "JOB_USER_DETAIL_LOADING"
    };
  }
  function failure() {
    return {
      type: "JOB_USER_DETAIL_LOAD_FAILURE"
    };
  }
};

export const getReviewTaskUserDetail = (page, take, employee) => {
  return (dispatch) => {
    dispatch(loading());
    loadReviewByEmployeeId(page, take, employee)
      .then((res) => {
        if (res.data.code === '200') {
          dispatch(success(res.data.data.list, res.data.data.total, res.data.data.page));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(failure());
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
  function loading() {
    return {
      type: "TASK_USER_DETAIL_LOADING"
    };
  }
  function failure() {
    return {
      type: "TASK_USER_DETAIL_LOAD_FAILURE"
    };
  }
};

export const getTransactionByUserId = (page, take) => {
  return (dispatch) => {
    dispatch(loading());
    loadTransactionByUserId(page, take)
      .then((res) => {
        if (res.data.code === '200') {
          dispatch(success(res.data.data.list, res.data.data.total, res.data.data.page, res.data.data.sum));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(failure());
      });
  };

  function success(list, total, page, sum) {
    return {
      type: "USER_TRANSACTION_LOAD",
      list,
      total,
      page,
      sum,
    };
  }
  function loading() {
    return {
      type: "USER_TRANSACTION_LOADING"
    };
  }
  function failure() {
    return {
      type: "USER_TRANSACTION_LOAD_FAILURE"
    };
  }
};