const initState = {
    status: 0,
    message: "",
    sending: false,
    jobTitle: "",
    addressString: "",
    addressLat: null,
    addressLng: null,
    googleMapLink: "",
}

const AddJobReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_JOB_REQUEST":
            return {
                ...state,
                status: 0,
                message: "",
                sending: true,
            };
        case "ADD_JOB_SUCCESS":
            return {
                ...state,
                status: 1,
                message: action.message,
                sending: false,
                user: action.user,
            };
        case "ADD_JOB_FAILURE":
            return {
                ...state,
                status: -1,
                message: action.message,
                sending: false,
                user: null,
            };
        case "ADD_JOB_RESET":
            return initState;
        default:
            return state;
    }
};

export default AddJobReducer;