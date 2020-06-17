const initState = {
    status: 0,
    message: '',
    sending: false,
}

const ResendActivationReducer = (state = initState, action) => {
    switch (action.type) {
        case 'REQUEST_NEW_ACTIVATION_REQUEST':
            return {
                ...state,
                status: 0,
                message: '',
                sending: true,
            };
        case 'REQUEST_NEW_ACTIVATION_SUCCESS':
            return {
                ...state,
                status: 1,
                message: action.message,
                sending: false,
            };
        case 'REQUEST_NEW_ACTIVATION_FAILURE':
            return {
                ...state,
                status: -1,
                message: action.message,
                sending: false,
            };
        case 'REQUEST_NEW_ACTIVATION_RESET':
            return initState;
        default:
            return state
    }
}

export default ResendActivationReducer;