const initState = {
    status: 0,
    message: '',
    sending: false,
    user: null,
}

const RegisterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'REGISTER_REQUEST':
            return {
                ...state,
                status: 0,
                message: '',
                sending: true,
            };
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                status: 1,
                message: action.message,
                sending: false,
                user: action.user,
            };
        case 'REGISTER_FAILURE':
            return {
                ...state,
                status: -1,
                message: action.message,
                sending: false,
                user: null,
            };
        case 'REGISTER_RESET':
            return initState;
        default:
            return state
    }
}

export default RegisterReducer;