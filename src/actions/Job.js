import {
  getJobsList,
  getJobsDetail,
  doApplyJob,
} from "../services/job.services";

export const loadJobList = (page, take, isASC, query) => {
  return (dispatch) => {
    getJobsList(page, take, isASC, query)
      .then((res) => {
        console.log(res.data.data);
        dispatch(
          success(
            res.data.data.jobList,
            res.data.data.page,
            res.data.data.count
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function success(jobList, page, total) {
    return {
      type: "LOAD_JOB_LIST",
      jobList,
      page,
      total,
    };
  }
};

export const loadJobDetail = (jobId) => {
  return (dispatch) => {
    getJobsDetail(jobId)
      .then((res) => {
        dispatch(success(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function success(jobDetail) {
    return {
      type: "JOB_DETAIL_LOAD",
      jobDetail,
    };
  }
};

export const applyJob = (id_user, id_job, proposed_price, attachment) => {
  return (dispatch) => {
    doApplyJob(id_user, id_job, proposed_price, attachment)
      .then((res) => {
        dispatch(success());
      })
      .catch((err) => {
        console.log(err);
        dispatch(failure());
      });
  };

  function success() {
    return {
      type: "APPLY_JOB_SUCCESS",
    };
  }
  function failure() {
    return {
      type: "APPLY_JOB_FAILURE",
    };
  }
};
