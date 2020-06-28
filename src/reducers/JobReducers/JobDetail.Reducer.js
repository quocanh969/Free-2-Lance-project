const initState = {
  jobDetail: {},
  employer: {},
  similarJobs: [],
  appliedStatus: 0, //havent send
};

const JobDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case "JOB_DETAIL_LOAD":
      return {
        ...state,
        appliedStatus: 0,
        jobDetail: action.jobDetail,
      };
    case "JOB_DETAIL_EMPLOYER_LOAD":
      return {
        ...state,
        employer: action.employerDetail,
      };
    case "SIMILAR_JOB_LOAD":
      return {
        ...state,
        similarJobs: action.similarJobs,
      };
    case "APPLY_JOB_SUCCESS":
      return {
        ...state,
        appliedStatus: 1, //succes
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
