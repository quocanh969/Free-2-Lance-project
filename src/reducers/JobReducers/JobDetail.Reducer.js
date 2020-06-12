const initState = {
  jobDetail: {},
  places: [
    {
      name: "Dud location 1",
      title: "Dud location 1",
      position: { lat: 51.507717, lng: -0.131095 },
    },
  ],
};

const JobDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case "JOB_DETAIL_UPDATE":
      return {
        ...state,
        status: 0,
        message: "",
        sending: true,
      };
    case "JOB_DETAIL_LOAD":
      return {
        ...state,
        jobDetail: action.jobDetail,
      };
    default:
      return state;
  }
};

export default JobDetailReducer;
