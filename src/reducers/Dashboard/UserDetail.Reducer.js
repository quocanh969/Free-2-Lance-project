const initState = {
  userDetail: null,

  jobs: [],
  totalJob: 0,
  currentJobPage: 0,

  tasks: [],
  totalTask: 0,
  currentTaskPage: 0,
};

const UserDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case "USER_DETAIL_LOAD":
      return {
        ...state,
        userDetail: action.userDetail,
      };
    case "JOB_USER_DETAIL_LOAD":
      return {
        ...state,
        jobs: action.list,
        totalJob: action.total,
        currentJobPage: action.page,
      };
    case "TASK_USER_DETAIL_LOAD":
      return {
        ...state,
        tasks: action.list,
        totalTask: action.total,
        currentTaskPage: action.page,
      };
    default:
      return state;
  }
};

export default UserDetailReducer;
