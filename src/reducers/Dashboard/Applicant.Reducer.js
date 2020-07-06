const initState = {
  // =====
  isLoadingApplyingTasksList: false,
  applyingTasksList: [],
  totalApplyingTasks: 0,
  currentApplyingPage: 0,
  // =====
  isLoadingProcessingTasksList: false,
  processingTasksList: [],
  totalProcessingTasks: 0,
  currentProcessingPage: 0,
  // =====
  isLoadingFinishedTasksList: false,
  finishedTasksList: [],
  totalFinishedTasks: 0,
  currentFinishedPage: 0,

  selectedReviewApplicantId: null,
  selectedReviewJobId: null,
  selectedReportedUser: null,
  reviewList: [],
};

const ApplicantReducer = (state = initState, action) => {
  switch (action.type) {
    case "APPLICANT_APPLYING_TASK_UPDATE":
      return {
        ...state,
        isLoadingApplyingTasksList: false,
        applyingTasksList: action.jobList,
        totalApplyingTasks: action.total,
        currentApplyingPage: action.page,
      };
    case "APPLICANT_APPLYING_TASK_LOADING":
      return {
        ...state,
        isLoadingApplyingTasksList: true,
      };
    case "APPLICANT_APPLYING_TASK_FAILURE":
      return {
        ...state,
        isLoadingApplyingTasksList: false,
      };
    case "APPLICANT_APPLYING_TASK_RESET":
      return {
        ...state,
        applyingTasksList: [],
        totalApplyingTasks: 0,
        currentApplyingPage: 0,
      };
    case "APPLICANT_PROCESSING_TASK_UPDATE":
      return {
        ...state,
        isLoadingProcessingTasksList: false,
        processingTasksList: action.jobList,
        totalProcessingTasks: action.total,
        currentProcessingPage: action.page,
      };
    case "APPLICANT_PROCESSING_TASK_LOADING":
      return {
        ...state,
        isLoadingProcessingTasksList: true,
      };
    case "APPLICANT_PROCESSING_TASK_FAILURE":
      return {
        ...state,
        isLoadingProcessingTasksList: false,
      };
    case "APPLICANT_PROCESSING_TASK_RESET":
      return {
        ...state,
        processingTasksList: [],
        totalProcessingTasks: 0,
        currentProcessingPage: 0,
      };
    case "APPLICANT_FINISHED_TASK_UPDATE":
      return {
        ...state,
        isLoadingFinishedTasksList: false,
        finishedTasksList: action.jobList,
        totalFinishedTasks: action.total,
        currentFinishedPage: action.page,
      };
    case "APPLICANT_FINISHED_TASK_LOADING":
      return {
        ...state,
        isLoadingFinishedTasksList: true,
      };
    case "APPLICANT_FINISHED_TASK_FAILURE":
      return {
        ...state,
        isLoadingFinishedTasksList: false,
      };
    case "APPLICANT_FINISHED_TASK_RESET":
      return {
        ...state,
        finishedTasksList: [],
        totalFinishedTasks: 0,
        currentFinishedPage: 0,
      };
    case "APPLICANT_SELECT_REPORTED_USER":
      return {
        ...state,
        selectedReportedUser: action.userId,
      };
    case "APPLICANT_SELECT_REVIEW_USER":
      return {
        ...state,
        selectedReviewApplicantId: action.applicantId,
        selectedReviewJobId: action.jobId,
      };
    case "APPLICANT_REVIEW_UPDATE":
      return {
        ...state,
        reviewList: action.list,
      };
    default:
      return state;
  }
};

export default ApplicantReducer;
