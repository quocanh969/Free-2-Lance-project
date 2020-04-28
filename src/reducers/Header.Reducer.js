const initState = {
    user: null,
}

const HeaderReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_USER':            
            return {
                ...state,
                user: action.user,
            };
        default:
            return state
    }
}

export default HeaderReducer;