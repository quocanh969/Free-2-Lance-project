const initState = {
    status: 0,
    message: "",
    sending: false,
    fields: {
        jobTitle: "",
        addressString: "", // Address Object => geometry.location => lat/lng
        jobTopic: 0,
        jobType: 0,
        vacancy: 0,
        salary: 0,
        isDealable: 0,
        exprDate: "",
        requirement: "",
        description: "",
        relatedImg: [],
        tags: [],
    }
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
        case "UPDATE_FIELD":
            let temp = state.fields;
            console.log("TEMP: " + temp);
            temp[action.key] = action.value;
            return {
                ...state,
                field: temp,
            };
        case "ADD_JOB_RESET":
            return initState;
        case "LOAD_RESOURCES": 
            return {
                ...state,
                /* */
            }
        default:
            return state;
    }
};

export default AddJobReducer;