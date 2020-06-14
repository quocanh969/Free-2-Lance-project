const initState = {
  jobDetail: {},
  places: [
    {
      name: "Dud location 1",
      title: "Dud location 1",
      position: { lat: 51.507717, lng: -0.131095 },
    },
  ],
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
