import { getJobsList } from "../services/job.services";

export const loadJobList = (page, take, query) => {
  return (dispatch) => {
    getJobsList(page, take, query)
      .then((res) => {
        console.log(res.data.data);
        dispatch(success(res.data.data.jobList, res.data.data.page, res.data.data.count));
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