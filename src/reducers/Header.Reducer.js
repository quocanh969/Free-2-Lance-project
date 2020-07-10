
const initState = {
    user: null,
    isLoadingUser: false,
    company: null,

    // noti
    isReadNotify: true,
    notifications: [],
    isNotiLoading: true,
}

const HeaderReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_USER':            
            return {
                ...state,
                user: action.user,
                isLoadingUser: false,
            };
            case 'LOADING_USER_INFO':            
            return {
                ...state,
                isLoadingUser: true,
            };
            case 'LOAD_USER_INFO_FAILURE':            
            return {
                ...state,
                isLoadingUser: false,
            };
        case 'UPDATE_PERSONAL_INFO':
            let newUserState = state.user;
            let updateUser = action.personal;

            for(let i in updateUser)
            {
                newUserState[i] = updateUser[i];
            }
            return {
                ...state,
                user: newUserState,
            };
        case 'UPDATE_COMPANY':
            return {
                ...state,
                company: action.company,
            };
        case 'UPDATE_COMPANY_INFO':
            let newCompanyState = state.company;
            let updateCompany = action.company;

            for(let i in updateCompany)
            {
                newCompanyState[i] = updateCompany[i];
            }
            return {
                ...state,
                company: newCompanyState,
            };
        case 'USER_LOG_OUT':                        
            return initState;
        case 'LOAD_NOTI_SUCCESS':
            return {
                ...state,
                isReadNotify: action.isReadNotifyList,
                notifications: action.notiList,
                isNotiLoading: false,  
            };
        case 'LOAD_NOTI_FAILURE':
            return {
                ...state,
                isReadNotify: true,
                notifications: [],
                isNotiLoading: false,  
            }
        default:
            return state
    }
}

export default HeaderReducer;