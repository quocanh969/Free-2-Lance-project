const initState = {
    status: 0,
    message: '',
    sending: false,
}

const ForgetPWReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FORGET_PW_REQUEST':
            return {
                ...state,
                status: 0,
                message: '',
                sending: true,
            };
        case 'FORGET_PW_SUCCESS':
            return {
                ...state,
                status: 1,
                message: action.message,
                sending: false,
            };
        case 'FORGET_PW_FAILURE':
            return {
                ...state,
                status: -1,
                message: action.message,
                sending: false,
            };
        case 'FORGET_PW_RESET':
            return initState;
        default:
            return state
    }
}

export default ForgetPWReducer;