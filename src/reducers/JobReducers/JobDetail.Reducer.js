const initState = {
  isLoadingDetail: false,
  jobDetail: {},
  isLoadingEmployer: false,
  employer: {},
  similarJobs: [],
  isApplying: false,
  appliedStatus: 0, //havent send
};

const JobDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case "JOB_DETAIL_LOADING":
      return {
        ...state,
        isLoadingJobDetail: true,
      };
    case "JOB_DETAIL_LOAD":
      return {
        ...state,
        isLoadingJobDetail: false,
        appliedStatus: 0,
        jobDetail: action.jobDetail,
      };
    case "JOB_DETAIL_EMPLOYER_LOADING":
      return {
        ...state,
        isLoadingEmployer: true,
      };
    case "JOB_DETAIL_EMPLOYER_LOAD":
      return {
        ...state,
        isLoadingEmployer: false,
        employer: action.employerDetail,
      };
    case "SIMILAR_JOB_LOAD":
      return {
        ...state,
        similarJobs: action.similarJobs,
      };
    case "APPLY_JOB_SENDING":
      return {
        ...state,
        isApplying: true, //sending
      };
    case "APPLY_JOB_SUCCESS":
      return {
        ...state,
        isApplying: false,
        appliedStatus: 1, //success
      };
    case "APPLY_JOB_FAILURE":
      return {
        ...state,
        appliedStatus: 2, //failure
      };
    default:
      return state;
  }
};

export default JobDetailReducer;
