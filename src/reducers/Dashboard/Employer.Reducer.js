const initState = {
  // =====
  applyingJobsList: [],
  totalApplyingJobs: 0,
  currentApplyingPage: 0,
  // for list applicants of applying job list
  selectedApplyingJobId: null,
  selectedApplyingJobTitle: null,
  applicantsList: [],
  totalApplicants: 0,
  currentApplicantsPage: 0,
  // =====
  processingJobsList: [],
  totalProcessingJobs: 0,
  currentProcessingPage: 0,
  // =====
  finishedJobsList: [],
  totalFinishedJobs: 0,
  currentFinishedPage: 0,
};

const EmployerReducer = (state = initState, action) => {
  switch (action.type) {
    case "EMPLOYER_APPLYING_JOBS_UPDATE":
      return {
        ...state,
        applyingJobsList: action.jobList,
        totalApplyingJobs: action.total,
        currentApplyingPage: action.page,
      };
    case "EMPLOYER_APPLYING_JOBS_RESET":
      return {
        ...state,
        applyingJobsList: [],
        totalApplyingJobs: 0,
        currentApplyingPage: 0,
      };
    case "EMPLOYER_APPLICANTS_UPDATE":
      return {
        ...state,
        applicantsList: action.applicantsList,
        totalApplicants: action.total,
        currentApplicantsPage: action.page,
      };
    case "EMPLOYER_SELECT_JOB_APPLYING":
      return {
        ...state,
        selectedApplyingJobId: action.jobId,
        selectedApplyingJobTitle: action.title,
      };
    case "EMPLOYER_APPLICANTS_RESET":
      return {
        ...state,
        selectedApplyingJobId: null,
        selectedApplyingJobTitle: null,
        applicantsList: [],
        totalApplicants: 0,
        currentApplicantsPage: 0,
      };
    case "EMPLOYER_PROCESSING_JOBS_UPDATE":
      return {
        ...state,
        processingJobsList: action.jobList,
        totalProcessingJobs: action.total,
        currentProcessingPage: action.page,
      };
    case "EMPLOYER_PROCESSING_JOBS_RESET":
      return {
        ...state,
        processingJobsList: [],
        totalProcessingJobs: 0,
        currentProcessingPage: 0,
      };
    case "EMPLOYER_FINISHED_JOBS_UPDATE":
      return {
        ...state,
        finishedJobsList: action.jobList,
        totalFinishedJobs: action.total,
        currentFinishedPage: action.page,
      };
    case "EMPLOYER_FINISHED_JOBS_RESET":
      return {
        ...state,
        finishedJobsList: [],
        totalFinishedJobs: 0,
        currentFinishedPage: 0,
      };
    default:
      return state;
  }
};

export default EmployerReducer;
