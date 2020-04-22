const initState = {
    status: 0,
    message: '',
    sending: false,
    user: null,
}

const LoginReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                status: 0,
                message: '',
                sending: true,
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                status: 1,
                message: action.message,
                sending: false,
                user: action.user,
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                status: -1,
                message: action.message,
                sending: false,
                user: null,
            };
        case 'LOGIN_RESET':
            return initState;
        default:
            return state
    }
}

export default LoginReducer;