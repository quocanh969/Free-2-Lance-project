import {
  getJobsList,
  getJobsDetail,
  doApplyJob,
  getEmployerDetail,
} from "../services/job.services";
import Swal from "sweetalert2";

export const loadJobList = (page, take, isASC, query) => {
  return (dispatch) => {
    getJobsList(page, take, isASC, query)
      .then((res) => {
        console.log(res.data.data);
        dispatch(
          success(
            res.data.data.jobList,
            res.data.data.page,
            res.data.data.total
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

export const loadEmployer = (employerId) => {
  return (dispatch) => {
    getEmployerDetail(employerId)
      .then((res) => {
        dispatch(success(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function success(employerDetail) {
    return {
      type: "JOB_DETAIL_EMPLOYER_LOAD",
      employerDetail,
    };
  }
};

export const applyJob = (id_user, id_job, proposed_price, attachment) => {
  return (dispatch) => {
    doApplyJob(id_user, id_job, proposed_price, attachment)
      .then((res) => {
        //reload data
        // loadJobDetail(id_job);
        //show success
        Swal.fire({
          title: "Đăng kí thành công, xin vui lòng đợi duyệt",
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.value) {
            //close form and reload data :(
            window.location.reload();
          }
        });
      })
      .catch((err) => {
        console.log(err);
        //show error;
        Swal.fire({
          title: "Đã xảy ra lỗi, vui lòng thử lại sau",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };
};
