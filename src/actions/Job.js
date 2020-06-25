import {
  getJobsList,
  getJobsForEmployer,
  getJobsForApplicant,
  getJobsDetail,
  getSimilarJobs,
  doApplyJob,
  getEmployerDetail,
  doCancelRecruit,
  getApplicantsByJobId,
  doSendAcceptApplicant,
  doSendRejectApplicant,
} from "../services/job.services";
import Swal from "sweetalert2";
import { history } from "../ultis/history/history";

export const loadJobList = (page, take, isASC, query) => {
  return (dispatch) => {
    getJobsList(page, take, isASC, query)
      .then((res) => {
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

export const loadApplyingJobsForEmployer = (page, take, isASC) => {
  return (dispatch) => {
    getJobsForEmployer(page, take, isASC, 1)
      .then((res) => {
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
      type: "EMPLOYER_APPLYING_JOBS_UPDATE",
      jobList,
      total,
      page,
    };
  }
};

export const loadProcessingJobsForEmployer = (page, take, isASC) => {
  return (dispatch) => {
    getJobsForEmployer(page, take, isASC, 2)
      .then((res) => {
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
      type: "EMPLOYER_PROCESSING_JOBS_UPDATE",
      jobList,
      total,
      page,
    };
  }
};

export const loadFinishedJobsForEmployer = (page, take, isASC) => {
  return (dispatch) => {
    getJobsForEmployer(page, take, isASC, 3)
      .then((res) => {
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
      type: "EMPLOYER_FINISHED_JOBS_UPDATE",
      jobList,
      total,
      page,
    };
  }
};

export const loadApplyingJobsForApplicant = (page, take, isASC) => {
  return (dispatch) => {
    getJobsForApplicant(page, take, isASC, 1)
      .then((res) => {
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
      type: "APPLICANT_APPLYING_TASK_UPDATE",
      jobList,
      total,
      page,
    };
  }
};

export const loadProcessingJobsForApplicant = (page, take, isASC) => {
  return (dispatch) => {
    getJobsForApplicant(page, take, isASC, 2)
      .then((res) => {
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
      type: "APPLICANT_PROCESSING_TASK_UPDATE",
      jobList,
      total,
      page,
    };
  }
};

export const loadFinishedJobsForApplicant = (page, take, isASC) => {
  return (dispatch) => {
    getJobsForApplicant(page, take, isASC, 3)
      .then((res) => {
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
      type: "APPLICANT_FINISHED_TASK_UPDATE",
      jobList,
      total,
      page,
    };
  }
};

export const loadJobDetail = (jobId) => {
  return (dispatch) => {
    getJobsDetail(jobId)
      .then((res) => {
        if (res.data.data.id_job) {
          dispatch(success(res.data.data));
          //loadSimilarJobs
          dispatch(loadSimilarJobs(res.data.data.jobTopic));
        } else {
          history.push("/not-found");
        }
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

export const loadSimilarJobs = (jobTopic) => {
  return (dispatch) => {
    getSimilarJobs(jobTopic)
      .then((res) => {
        dispatch(success(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function success(similarJobs) {
    return {
      type: "SIMILAR_JOB_LOAD",
      similarJobs,
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
            dispatch(loadJobDetail(id_job));
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

export const cancelRecruit = (jobId) => {
  return (dispatch) => {
    doCancelRecruit(jobId)
      .then((res) => {
        Swal.fire(
          "Thành công!",
          "Công việc của bạn đã được ngừng tuyển",
          "success"
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const loadApplicantsByJobId = (jobId, page, take) => {
  return (dispatch) => {
    getApplicantsByJobId(jobId, page, take)
      .then((res) => {
        dispatch(
          success(
            res.data.data.applicantsList,
            res.data.data.page,
            res.data.data.total
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function success(applicantsList, page, total) {
    return {
      type: "EMPLOYER_APPLICANTS_UPDATE",
      applicantsList,
      total,
      page,
    };
  }
};

export const selectJobApplying = (jobId) => {
  return {
    type: "EMPLOYER_SELECT_JOB_APPLYING",
    jobId,
  };
};

export const sendAcceptApplicant = (jobId, userId) => {
  return (dispatch) => {
    doSendAcceptApplicant(jobId, userId)
      .then((res) => {
        Swal.fire("Thành công!", "Đã chấp nhận ứng viên!!", "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const sendRejectApplicant = (jobId, userId) => {
  return (dispatch) => {
    doSendRejectApplicant(jobId, userId)
      .then((res) => {
        Swal.fire("Thành công!", "Đã Từ chối ứng viên!!", "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
