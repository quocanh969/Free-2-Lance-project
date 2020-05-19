const initState = {
    status: 0,
    message: '',
    sending: false,
}

const ActivationReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ACTIVATION_REQUEST':
            return {
                ...state,
                status: 0,
                message: '',
                sending: true,
            };
        case 'ACTIVATION_SUCCESS':
            return {
                ...state,
                status: 1,
                message: action.message,
                sending: false,
            };
        case 'ACTIVATION_FAILURE':
            return {
                ...state,
                status: -1,
                message: action.message,
                sending: false,
            };
        case 'ACTIVATION_RESET':
            return initState;
        default:
            return state
    }
}

export default ActivationReducer;