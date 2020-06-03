const initState = {
  status: 0,
  message: "",
  sending: false,
};

const ChangePWReducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_PW_REQUEST":
      return {
        ...state,
        status: 0,
        message: "",
        sending: true,
      };
    case "CHANGE_PW_SUCCESS":
      return {
        ...state,
        status: 1,
        message: action.message,
        sending: false,
      };
    case "CHANGE_PW_FAILURE":
      return {
        ...state,
        status: -1,
        message: action.message,
        sending: false,
      };
    case "CHANGE_PW_RESET":
      console.log("reset");
      return initState;
    default:
      return state;
  }
};

export default ChangePWReducer;
