
const initState = {
    user: null,
    token: null,
}

const HeaderReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_USER':            
            return {
                ...state,
                user: action.user,
                token: action.token,
            };
        case 'USER_LOG_OUT':                        
            return {
                ...state,
                user: null,
                token: null,
            }
        default:
            return state
    }
}

export default HeaderReducer;