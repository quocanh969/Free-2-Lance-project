const initState = {
  // =====
  isLoadingApplyingJobsList: false,
  applyingJobsList: [],
  totalApplyingJobs: 0,
  currentApplyingPage: 0,
  // for list applicants of applying job list
  selectedApplyingJobId: null,
  selectedApplyingJobTitle: null,
  isLoadingApplicantsList: false,
  isAcceptingApplicant: false,
  totalNeedApplicants: 0, //Số lượng người cần tuyển
  applicantsList: [],
  totalApplicants: 0,
  currentApplicantsPage: 0,

  selectedApplyingUserId: null,
  selectedApplyingJobById: null,
  // =====
  isLoadingProcessingJobsList: false,
  processingJobsList: [],
  totalProcessingJobs: 0,
  currentProcessingPage: 0,
  // for list applicants of doing job list
  selectedDoingJobId: null,
  selectedReportedUser: null,
  selectedReportType: 0,
  selectedReportedIdApplicant: null,
  isLoadingDoingApplicantsList: false,
  doingApplicantsList: [],
  totalDoingApplicants: 0,
  currentDoingApplicantsPage: 0,
  // =====
  isLoadingFinishedJobsList: false,
  finishedJobsList: [],
  totalFinishedJobs: 0,
  currentFinishedPage: 0,

  selectedProccessingJobById: null,
  // for list applicants of done job list
  selectedDoneJobId: null,
  selectedReviewApplicantId: null,
  isLoadingDoneApplicantsList: false,
  doneApplicantsList: [],
  totalDoneApplicants: 0,
  currentDoneApplicantsPage: 0,

  // for review list
  isLoadingreviewList: false,
  reviewList: [],
  totalReviews: 0,
  currentReviewPage: 0,

  isWaitingForMomo: false,
};

const EmployerReducer = (state = initState, action) => {
  switch (action.type) {
    // applying job cases
    case "EMPLOYER_APPLYING_JOBS_UPDATE":
      return {
        ...state,
        isLoadingApplyingJobsList: false,
        applyingJobsList: action.jobList,
        totalApplyingJobs: action.total,
        currentApplyingPage: action.page,
      };
    case "EMPLOYER_APPLYING_JOBS_LOADING":
      return {
        ...state,
        isLoadingApplyingJobsList: true,
      };
    case "EMPLOYER_APPLYING_JOBS_FAILURE":
      return {
        ...state,
        isLoadingApplyingJobsList: false,
      };
    case "EMPLOYER_APPLYING_JOBS_RESET":
      return {
        ...state,
        isLoadingApplyingJobsList: false,
        applyingJobsList: [],
        totalApplyingJobs: 0,
        currentApplyingPage: 0,
      };
    case "EMPLOYER_APPLYING_APPLICANTS_UPDATE":
      return {
        ...state,
        isLoadingApplicantsList: false,
        applicantsList: action.applicantsList,
        totalApplicants: action.total,
        currentApplicantsPage: action.page,
      };
    case "EMPLOYER_APPLYING_APPLICANTS_LOADING":
      return {
        ...state,
        isLoadingApplicantsList: true,
      };
    case "EMPLOYER_APPLYING_APPLICANTS_FAILURE":
      return {
        ...state,
        isLoadingApplicantsList: false,
      };
    case "EMPLOYER_SELECT_JOB_APPLYING":
      return {
        ...state,
        selectedApplyingJobId: action.jobId,
        selectedApplyingJobTitle: action.title,
        totalNeedApplicants: action.number,
      };
    case "EMPLOYER_ACCEPT_APPLICANT_SUCCESS":
      return {
        ...state,
        totalNeedApplicants: state.totalNeedApplicants - 1,
      };
    case "EMPLOYER_APPLYING_APPLICANTS_RESET":
      return {
        ...state,
        selectedApplyingJobId: null,
        selectedApplyingJobTitle: null,
        isLoadingApplicantsList: false,
        totalNeedApplicants: 0,
        applicantsList: [],
        totalApplicants: 0,
        currentApplicantsPage: 0,
      };
    case "EMPLOYER_APPLYING_SELECT_USER": 
      return {
        ...state,
        selectedApplyingUserId: action.id_user,
        isWaitingForMomo: true,
      };
    case "EMPLOYER_APPLYING_SELECT_JOB": 
      return {
        ...state,
        selectedApplyingJobById: action.id_job,
      };
    
      // doing job cases
    case "EMPLOYER_PROCESSING_JOBS_UPDATE":
      return {
        ...state,
        isLoadingProcessingJobsList: false,
        processingJobsList: action.jobList,
        totalProcessingJobs: action.total,
        currentProcessingPage: action.page,
      };
    case "EMPLOYER_PROCESSING_JOBS_LOADING":
      return {
        ...state,
        isLoadingProcessingJobsList: true,
      };
    case "EMPLOYER_PROCESSING_JOBS_FAILURE":
      return {
        ...state,
        isLoadingProcessingJobsList: false,
      };
    case "EMPLOYER_PROCESSING_JOBS_RESET":
      return {
        ...state,
        isLoadingProcessingJobsList: false,
        processingJobsList: [],
        totalProcessingJobs: 0,
        currentProcessingPage: 0,
      };
    case "EMPLOYER_DOING_APPLICANTS_UPDATE":
      return {
        ...state,
        isLoadingDoingApplicantsList: false,
        doingApplicantsList: action.applicantsList,
        totalDoingApplicants: action.total,
        currentDoingApplicantsPage: action.page,
      };
    case "EMPLOYER_DOING_APPLICANTS_LOADING":
      return {
        ...state,
        isLoadingDoingApplicantsList: true,
      };
    case "EMPLOYER_DOING_APPLICANTS_FAILURE":
      return {
        ...state,
        isLoadingDoingApplicantsList: false,
      };
    case "EMPLOYER_SELECT_JOB_DOING":
      return {
        ...state,
        selectedDoingJobId: action.jobId,
      };
    case "EMPLOYER_SELECT_REPORTED_USER":
      return {
        ...state,
        selectedReportedUser: action.userId,
        selectedReportedIdApplicant: action.applicantId,
        selectedReportType: 0,
        selectedDoingJobId: action.jobId,    
      };
    case "EMPLOYER_SELECT_FIRED_USER":
      return {
        ...state,
        selectedReportedUser: action.userId,
        selectedReportedIdApplicant: action.applicantId,
        selectedReportType: 1,
        selectedDoingJobId: action.jobId, 
      };
    case "EMPLOYER_DOING_APPLICANTS_RESET":
      return {
        ...state,
        selectedDoingJobId: null,
        selectedReportedUser: null,
        selectedReportType: 0,
        selectedReportedIdApplicant: null,
        isLoadingDoingApplicantsList: false,
        doingApplicantsList: [],
        totalDoingApplicants: 0,
        currentDoingApplicantsPage: 0,
      };
    
    case "EMPLOYER_PROCCESSING_SELECT_JOB": 
      return {
        ...state,
        selectedProccessingJobById: action.id_job,
      };
  
    
      // done job cases
    case "EMPLOYER_FINISHED_JOBS_UPDATE":
      return {
        ...state,
        isLoadingFinishedJobsList: false,
        finishedJobsList: action.jobList,
        totalFinishedJobs: action.total,
        currentFinishedPage: action.page,
      };
    case "EMPLOYER_FINISHED_JOBS_LOADING":
      return {
        ...state,
        isLoadingFinishedJobsList: true,
      };
    case "EMPLOYER_FINISHED_JOBS_FAILURE":
      return {
        ...state,
        isLoadingFinishedJobsList: false,
      };
    case "EMPLOYER_FINISHED_JOBS_RESET":
      return {
        ...state,
        isLoadingFinishedJobsList: false,
        finishedJobsList: [],
        totalFinishedJobs: 0,
        currentFinishedPage: 0,
      };
    case "EMPLOYER_DONE_APPLICANTS_UPDATE":
      return {
        ...state,
        isLoadingDoneApplicantsList: false,
        doneApplicantsList: action.applicantsList,
        totalDoneApplicants: action.total,
        currentDoneApplicantsPage: action.page,
      };
    case "EMPLOYER_DONE_APPLICANTS_LOADING":
      return {
        ...state,
        isLoadingDoneApplicantsList: true,
      };
    case "EMPLOYER_DONE_APPLICANTS_FAILURE":
      return {
        ...state,
        isLoadingDoneApplicantsList: false,
      };
    case "EMPLOYER_SELECT_JOB_DONE":
      return {
        ...state,
        selectedDoneJobId: action.jobId,
      };
    case "EMPLOYER_SELECT_REVIEW_USER":
      return {
        ...state,
        selectedReviewApplicantId: action.applicantId,
      };
    case "EMPLOYER_DONE_APPLICANTS_RESET":
      return {
        ...state,
        selectedDoneJobId: null,
        selectedReviewApplicantId: null,
        isLoadingDoneApplicantsList: false,
        doneApplicantsList: [],
        totalDoneApplicants: 0,
        currentDoneApplicantsPage: 0,
      };

    case "EMPLOYER_REVIEW_LIST_UPDATE":
      return {
        ...state,
        isLoadingreviewList: false,
        reviewList: action.list,
        totalReviews: action.total,
        currentReviewPage: action.page,
      };
    case "EMPLOYER_REVIEW_LIST_LOADING":
      return {
        ...state,
        isLoadingreviewList: true,
      };
    case "EMPLOYER_REVIEW_LIST_FAILURE":
      return {
        ...state,
        isLoadingreviewList: false,
      };
    case "EMPLOYER_REVIEW_LIST_RESET":
      return {
        ...state,
        isLoadingreviewList: false,
        reviewList: [],
        totalReviews: 0,
        currentReviewPage: 0,
      };
      
    
    case "STOP_ACCEPT_EMPLOYER":
      return {
        ...state,
        isWaitingForMomo: false,
      };

    default:
    return state;
  }
};

export default EmployerReducer;
