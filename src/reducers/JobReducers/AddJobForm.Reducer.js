const initState = {
    status: 0,
    message: "",
    sending: false,
    jobTypes: [
        {value: 0, name: 'Thời vụ'}, {value: 1, name: 'Sản phẩm'}
    ],
    fields: {
        jobTitle: "",
        addressString: "", // Address Object => geometry.location => lat/lng
        jobTopic: 0,
        jobType: 0,
        vacancy: 0,
        salary: 0,
        isOnline: 0,
        isDealable: 0,
        exprDate: "",
        requirements: "",
        description: "",
        relatedImg: [],
        tags: [],
        benefit: "",
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
        case "LOAD_RESOURCES_REQUEST":
            return {
                ...state,
                message: action.message,
            }
        case "LOAD_RESOURCES_SUCCESS":
            return {
                ...state,
                jobTopics: action.data,
                message: action.message,
            }
        case "LOAD_RESOURCES_FAILURE":
            return {
                ...state,
                message: action.message,
            }
        default:
            return state;
    }
};

export default AddJobReducer;