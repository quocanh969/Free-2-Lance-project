import { getJobsList, getJobsDetail } from "../services/job.services";

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
        console.log(res.data.data);
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
