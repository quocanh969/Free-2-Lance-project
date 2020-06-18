
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
        default:
            return state
    }
}

export default HeaderReducer;