
const initState = {
    user: null,
    company: null,
}

const HeaderReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_USER':            
            return {
                ...state,
                user: action.user,
            };
        case 'UPDATE_COMPANY':
            return {
                ...state,
                company: action.company,
            };
        case 'USER_LOG_OUT':                        
            return initState;
        default:
            return state
    }
}

export default HeaderReducer;