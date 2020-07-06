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
  doGetResultTransactions,
  doSendtransferMoneyMomoToF2L,
  doSendAcceptApplicant,
  doSendRejectApplicant,
  doEndJob,
  getReviewList,
  doReportUser,
  doReviewEmployee,
  doStopApply,
  doReviewEmployer,
} from "../services/job.services";
import Swal from "sweetalert2";
import { history } from "../ultis/history/history";

//#region load job
export const loadJobList = (page, take, isASC, query) => {
  return (dispatch) => {
    dispatch(loading());
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
        dispatch(failure());
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
  function loading() {
    return {
      type: "LOADING_JOB_LIST",
    };
  }
  function failure() {
    return {
      type: "LOAD_JOB_LIST_FAILURE",
    };
  }
};

export const loadApplyingJobsForEmployer = (page, take, isASC) => {
  return (dispatch) => {
    dispatch(loading());
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
        dispatch(failure());
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
  function loading() {
    return {
      type: "EMPLOYER_APPLYING_JOBS_LOADING",
    };
  }
  function failure() {
    return {
      type: "EMPLOYER_APPLYING_JOBS_FAILURE",
    };
  }
};

export const loadProcessingJobsForEmployer = (page, take, isASC) => {
  return (dispatch) => {
    dispatch(loading());
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
        dispatch(failure());
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
  function loading() {
    return {
      type: "EMPLOYER_PROCESSING_JOBS_LOADING",
    };
  }
  function failure() {
    return {
      type: "EMPLOYER_PROCESSING_JOBS_FAILURE",
    };
  }
};

export const loadFinishedJobsForEmployer = (page, take, isASC) => {
  return (dispatch) => {
    dispatch(loading());
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
        dispatch(failure());
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
  function loading() {
    return {
      type: "EMPLOYER_FINISHED_JOBS_LOADING",
    };
  }
  function failure() {
    return {
      type: "EMPLOYER_FINISHED_JOBS_FAILURE",
    };
  }
};

export const loadApplyingJobsForApplicant = (page, take, isASC) => {
  return (dispatch) => {
    dispatch(loading());
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
        dispatch(failure());
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
  function loading() {
    return {
      type: "APPLICANT_APPLYING_TASK_LOADING",
    };
  }
  function failure() {
    return {
      type: "APPLICANT_APPLYING_TASK_FAILURE",
    };
  }
};

export const loadProcessingJobsForApplicant = (page, take, isASC) => {
  return (dispatch) => {
    dispatch(loading());
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
        dispatch(failure());
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
  function loading() {
    return {
      type: "APPLICANT_PROCESSING_TASK_LOADING",
    };
  }
  function failure() {
    return {
      type: "APPLICANT_PROCESSING_TASK_FAILURE",
    };
  }
};

export const loadFinishedJobsForApplicant = (page, take, isASC) => {
  return (dispatch) => {
    dispatch(loading());
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
        dispatch(failure());
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
  function loading() {
    return {
      type: "APPLICANT_FINISHED_TASK_LOADING",
    };
  }
  function failure() {
    return {
      type: "APPLICANT_FINISHED_TASK_FAILURE",
    };
  }
};
//#endregion load job

//#region load job detail
export const loadJobDetail = (jobId) => {
  return (dispatch) => {
    dispatch(loading());
    getJobsDetail(jobId)
      .then((res) => {
        if (res.data.data.id_job) {
          dispatch(success(res.data.data));
          //loadSimilarJobs
          dispatch(loadSimilarJobs(res.data.data.jobTopic));
        } else {
          history.push("not-found");
        }
      })
      .catch((err) => {
        dispatch(failure());
        console.log(err);
      });
  };

  function success(jobDetail) {
    return {
      type: "JOB_DETAIL_LOAD",
      jobDetail,
    };
  }
  function loading() {
    return {
      type: "JOB_DETAIL_LOADING",
    };
  }
  function failure() {
    return {
      type: "JOB_DETAIL_LOAD_FAILURE",
    };
  }
};

export const loadEmployer = (employerId) => {
  return (dispatch) => {
    dispatch(loading());
    getEmployerDetail(employerId)
      .then((res) => {
        dispatch(success(res.data.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(failure());
      });
  };

  function success(employerDetail) {
    return {
      type: "JOB_DETAIL_EMPLOYER_LOAD",
      employerDetail,
    };
  }
  function loading() {
    return {
      type: "JOB_DETAIL_EMPLOYER_LOADING",
    };
  }
  function failure() {
    return {
      type: "JOB_DETAIL_EMPLOYER_LOAD_FAILURE",
    };
  }
};

export const loadSimilarJobs = (jobTopic) => {
  return (dispatch) => {
    dispatch(loading());
    getSimilarJobs(jobTopic)
      .then((res) => {
        dispatch(success(res.data.data));
      })
      .catch((err) => {
        dispatch(failure());
        console.log(err);
      });
  };

  function success(similarJobs) {
    return {
      type: "SIMILAR_JOB_LOAD",
      similarJobs,
    };
  }
  function loading() {
    return {
      type: "SIMILAR_JOB_LOADING",
    };
  }
  function failure() {
    return {
      type: "SIMILAR_JOB_LOAD_FAILURE",
    };
  }
};

export const applyJob = (id_user, id_job, proposed_price, attachment) => {
  return (dispatch) => {
    dispatch(loading());
    doApplyJob(id_user, id_job, proposed_price, attachment)
      .then((res) => {
        dispatch(success());
        //show success
        Swal.fire({
          title: "Đăng kí thành công, xin vui lòng đợi duyệt",
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.value) {
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
  function success() {
    return {
      type: "APPLY_JOB_SUCCESS",
    };
  }
  function loading() {
    return {
      type: "APPLY_JOB_SENDING",
    };
  }
};

//#endregion load job detail

//#region applying job for employer
export const cancelRecruit = (jobId, page, take, isASC) => {
  return (dispatch) => {
    doCancelRecruit(jobId)
      .then((res) => {
        dispatch(loadApplyingJobsForEmployer(page, take, isASC));
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

export const loadApplyingApplicantsForEmployer = (jobId, page, take) => {
  return (dispatch) => {
    dispatch(loading());
    getApplicantsByJobId(jobId, page, take, 0)
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
        dispatch(failure());
      });
  };

  function success(applicantsList, page, total) {
    return {
      type: "EMPLOYER_APPLYING_APPLICANTS_UPDATE",
      applicantsList,
      total,
      page,
    };
  }
  function loading() {
    return {
      type: "EMPLOYER_APPLYING_APPLICANTS_LOADING",
    };
  }
  function failure() {
    return {
      type: "EMPLOYER_APPLYING_APPLICANTS_FAILURE",
    };
  }
};

export const selectJobApplying = (jobId, title) => {
  return {
    type: "EMPLOYER_SELECT_JOB_APPLYING",
    jobId,
    title,
  };
};

const GetResultTransactions = (
  jobId,
  userId,
  email,
  applicantId,
  job_title,
  page,
  jobPage,
  take
) => {
  return (dispatch) => {
    doGetResultTransactions(applicantId)
      .then((res) => {
        if (res.data.code == 202) {
          //thanh toan thanh cong thi se duyet
          doSendAcceptApplicant(jobId, userId, email, job_title)
            .then((res) => {
              dispatch(loadApplyingApplicantsForEmployer(jobId, page, take));
              dispatch(loadApplyingJobsForEmployer(jobPage, 4, 0));
              Swal.fire("Thành công!", "Đã chấp nhận ứng viên!!", "success");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          setTimeout(() => {
            dispatch(
              GetResultTransactions(
                jobId,
                userId,
                email,
                applicantId,
                job_title,
                page,
                jobPage,
                take
              )
            );
          }, 3000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const sendAcceptApplicant = (
  jobId,
  userId,
  email,
  applicantId,
  job_title,
  page,
  jobPage,
  take
) => {
  return (dispatch) => {
    doSendAcceptApplicant(jobId, userId, email, job_title)
      .then((res) => {
        dispatch(loadApplyingApplicantsForEmployer(jobId, page, take));
        dispatch(loadApplyingJobsForEmployer(jobPage, 4, 0));
        Swal.fire("Thành công!", "Đã chấp nhận ứng viên!!", "success");
      })
      .catch((err) => {
        console.log(err);
      });

    //TODO: enable momo here
    // doSendtransferMoneyMomoToF2L(applicantId)
    //   .then((res) => {
    //     if (res.data.code == 200) {
    //       dispatch(
    //         GetResultTransactions(
    //           jobId,
    //           userId,
    //           email,
    //           applicantId,
    //           job_title,
    //           page,
    //           jobPage,
    //           take
    //         )
    //       );
    //       window.open(res.data.data);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
};

export const sendRejectApplicant = (
  jobId,
  userId,
  email,
  job_title,
  page,
  jobPage,
  take
) => {
  return (dispatch) => {
    doSendRejectApplicant(jobId, userId, email, job_title)
      .then((res) => {
        dispatch(loadApplyingApplicantsForEmployer(jobId, page, take));
        dispatch(loadApplyingJobsForEmployer(jobPage, 4, 0));
        Swal.fire("Thành công!", "Đã Từ chối ứng viên!!", "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//#endregion applying job for employer

//#region doing job for employer
export const endJob = (jobId, title, page, take, isASC) => {
  return (dispatch) => {
    doEndJob(jobId, title)
      .then((res) => {
        dispatch(loadProcessingJobsForEmployer(page, take, isASC));
        Swal.fire("Thành công!", "Công việc của bạn đã kết thúc", "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const loadDoingApplicantsForEmployer = (jobId, page, take) => {
  return (dispatch) => {
    dispatch(loading());
    getApplicantsByJobId(jobId, page, take, 1)
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
        dispatch(failure());
      });
  };

  function success(applicantsList, page, total) {
    return {
      type: "EMPLOYER_DOING_APPLICANTS_UPDATE",
      applicantsList,
      total,
      page,
    };
  }
  function loading() {
    return {
      type: "EMPLOYER_DOING_APPLICANTS_LOADING",
    };
  }
  function failure() {
    return {
      type: "EMPLOYER_DOING_APPLICANTS_FAILURE",
    };
  }
};

export const selectJobDoing = (jobId) => {
  return {
    type: "EMPLOYER_SELECT_JOB_DOING",
    jobId,
  };
};

export const selectReportedUser = (userId, applicantId) => {
  return {
    type: "EMPLOYER_SELECT_REPORTED_USER",
    userId,
    applicantId
  };
};

export const selectFiredUser = (userId, applicantId) => {
  return {
    type: "EMPLOYER_SELECT_FIRED_USER",
    userId,
    applicantId
  };
};

export const reportUser = (content, reporterId, role, type, applicantId) => {
  return (dispatch) => {
    doReportUser(content, reporterId, role, type, applicantId)
      .then((res) => {
        if (type == 0) {
          Swal.fire({
            title: "Báo cáo người dùng thành công",
            text: "Vui lòng đợi quản trị viên xử lý",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
        else if (type == 1) {
          Swal.fire({
            title: "Gửi yêu cầu sa thải thành công",
            text: "Vui lòng đợi quản trị viên xử lý",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
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
//#endregion doing job for employer

//#region done job for employer
export const loadDoneApplicantsForEmployer = (jobId, page, take) => {
  return (dispatch) => {
    dispatch(loading());
    getApplicantsByJobId(jobId, page, take, 1)
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
        dispatch(failure());
      });
  };

  function success(applicantsList, page, total) {
    return {
      type: "EMPLOYER_DONE_APPLICANTS_UPDATE",
      applicantsList,
      total,
      page,
    };
  }
  function loading() {
    return {
      type: "EMPLOYER_DONE_APPLICANTS_LOADING",
    };
  }
  function failure() {
    return {
      type: "EMPLOYER_DONE_APPLICANTS_FAILURE",
    };
  }
};

export const loadReviewList = (jobId, page, take) => {
  return (dispatch) => {
    dispatch(loading());
    getReviewList(jobId, page, take)
      .then((res) => {
        dispatch(
          success(res.data.data.list, res.data.data.page, res.data.data.total)
        );
      })
      .catch((err) => {
        console.log(err);
        dispatch(failure());
      });
  };

  function success(list, page, total) {
    return {
      type: "EMPLOYER_REVIEW_LIST_UPDATE",
      list,
      total,
      page,
    };
  }
  function loading() {
    return {
      type: "EMPLOYER_REVIEW_LIST_LOADING",
    };
  }
  function failure() {
    return {
      type: "EMPLOYER_REVIEW_LIST_FAILURE",
    };
  }
};

export const selectJobDone = (jobId) => {
  return {
    type: "EMPLOYER_SELECT_JOB_DONE",
    jobId,
  };
};

export const selectReviewUser = (applicantId) => {
  return {
    type: "EMPLOYER_SELECT_REVIEW_USER",
    applicantId,
  };
};

export const reviewEmployee = (applicantId, jobId, feedback, rating) => {
  return (dispatch) => {
    doReviewEmployee(applicantId, jobId, feedback, rating)
      .then((res) => {
        Swal.fire({
          title: "Đánh giá người làm thành công",
          icon: "success",
          confirmButtonText: "OK",
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
//#endregion done job for employer

//#region jobs for applicant
export const stopApply = (userId, jobId, page, take, isASC) => {
  return (dispatch) => {
    doStopApply(userId, jobId)
      .then((res) => {
        dispatch(loadApplyingJobsForApplicant(page, take, isASC));
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

export const selectReportedEmployer = (userId, applicantId) => {
  return {
    type: "APPLICANT_SELECT_REPORTED_USER",
    userId,
    applicantId
  };
};

export const selectReviewEmployer = (applicantId, jobId) => {
  return {
    type: "APPLICANT_SELECT_REVIEW_USER",
    applicantId,
    jobId,
  };
};

export const reviewEmployer = (applicantId, jobId, feedback, rating) => {
  return (dispatch) => {
    doReviewEmployer(applicantId, jobId, feedback, rating)
      .then((res) => {
        Swal.fire({
          title: "Đánh giá người thuê thành công",
          icon: "success",
          confirmButtonText: "OK",
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

export const loadReviewFromEmployer = (jobId) => {
  return (dispatch) => {
    dispatch(loading());
    getReviewList(jobId, 1, 9999)
      .then((res) => {
        dispatch(
          success(res.data.data.list)
        );
      })
      .catch((err) => {
        console.log(err);
        dispatch(failure())
      });
  };

  function success(list) {
    return {
      type: "APPLICANT_REVIEW_UPDATE",
      list,
    };
  }
  function loading() {
    return {
      type: "APPLICANT_REVIEW_LOADING",
    };
  }
  function failure() {
    return {
      type: "APPLICANT_REVIEW_FAILURE",
    };
  }
};
//#endregion jobs for applicant
