const initState = {
  userDetail: null,
  isLoadingUserDetail: false,

  numOfJob: null,
  numOfTask: null,
  numOfTransaction: null,

  jobs: [],
  totalJob: 0,
  currentJobPage: 0,
  isLoadingJobReview: false,

  tasks: [],
  totalTask: 0,
  currentTaskPage: 0,
  isLoadingTaskReview: false,

  transaction: [],
  totalTransaction: 0,
  currentTransactionPage: 0,
  sum: 0,
  isLoadingTransactionReview: false,
};

const UserDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case "USER_DETAIL_LOAD":
      return {
        ...state,
        userDetail: action.userDetail,
        isLoadingUserDetail: false,
      };
    case "USER_DETAIL_LOADING":
      return {
        ...state,
        isLoadingUserDetail: true,
      };
    case "USER_DETAIL_LOAD_FAILURE":
      return {
        ...state,
        isLoadingUserDetail: false,
      };
    case "JOB_USER_DETAIL_LOAD":
      return {
        ...state,
        jobs: action.list,
        totalJob: action.total,
        currentJobPage: action.page,
        isLoadingJobReview: false,
      };
    case "JOB_USER_DETAIL_LOADING":
      return {
        ...state,
        isLoadingJobReview: true,
      };
    case "JOB_USER_DETAIL_LOAD_FAILURE":
      return {
        ...state,
        isLoadingJobReview: false,
      };
    case "TASK_USER_DETAIL_LOAD":
      return {
        ...state,
        tasks: action.list,
        totalTask: action.total,
        currentTaskPage: action.page,
        isLoadingTaskReview: false,
      };
    case "TASK_USER_DETAIL_LOADING":
      return {
        ...state,
        isLoadingTaskReview: true,
      };
    case "TASK_USER_DETAIL_LOAD_FAILURE":
      return {
        ...state,
        isLoadingTaskReview: false,
      };
    case "USER_TRANSACTION_LOAD":
      return {
        ...state,
        transaction: action.list,
        totalTransaction: action.total,
        currentTransactionPage: action.page,
        sum: action.sum,
        isLoadingTransactionReview: false,
      };
    case "USER_TRANSACTION_LOADING":
      return {
        ...state,
        isLoadingTransactionReview: true,
      };
    case "USER_TRANSACTION_LOAD_FAILURE":
      return {
        ...state,
        isLoadingTransactionReview: false,
      };
    case "UPDATE_USER_STATISTIC":
      return {
        ...state,
        numOfTask: action.numOfTask,
        numOfJob: action.numOfJob,
        numOfTransaction: action.numOfTransaction,
      };
    default:
      return state;
  }
};

export default UserDetailReducer;
