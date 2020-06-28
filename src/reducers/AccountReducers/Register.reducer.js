const initState = {
  step: 1,
  status: 0,
  message: "",
  sending: false,
  user: null,
  account: {
    fullname: null,
    dob: null,
    email: null,
    password: null,
    dial: null,
    address: null,
    isBusinessUser: 0,
    gender: null,
    confirm: null,
    companyName: null,
    position: null,
    companyAddress: null,
    companyEmail: null,
    numberOfEmployees: null,
  },
};

const RegisterReducer = (state = initState, action) => {
  switch (action.type) {
    case "REGISTER_REQUEST":
      return {
        ...state,
        status: 0,
        message: "",
        sending: true,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        status: 1,
        message: action.message,
        sending: false,
        user: action.user,
      };
    case "REGISTER_FAILURE":
      return {
        ...state,
        status: -1,
        message: action.message,
        sending: false,
        user: null,
      };
    case "REGISTER_NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,
      };
    case "REGISTER_PREV_STEP":
      return {
        ...state,
        step: state.step - 1,
      };
    case "REGISTER_UPDATE_PROFILE":
      return {
        ...state,
        account: {
          ...state.account,
          ...action.account,
        },
      };
    case "REGISTER_CHANGE_ACCOUNT_TYPE":
      return {
        ...state,
        step: 1,
        account: {
          fullname: null,
          dob: null,
          email: null,
          password: null,
          dial: null,
          address: null,
          isBusinessUser: action.isBusinessUser,
          gender: null,
          account_status: 0, // default = 0
          confirm: null,
          company_name: null,
          position: null,
          company_address: null,
          company_email: null,
          number_of_employees: null,
        },
      };
    case "REGISTER_RESET":
      return initState;
    default:
      return state;
  }
};

export default RegisterReducer;
