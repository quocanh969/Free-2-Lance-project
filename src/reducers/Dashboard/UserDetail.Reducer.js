const initState = {
  userDetail: null,
  isLoadingUserDetail: false,

  jobs: [],
  totalJob: 0,
  currentJobPage: 0,
  isLoadingJobReview: false,

  tasks: [],
  totalTask: 0,
  currentTaskPage: 0,
  isLoadingTaskReview: false,
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
    default:
      return state;
  }
};

export default UserDetailReducer;
