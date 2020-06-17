const initState = {
    updatePersonalStatus: 0, // 0 - bình thường, 1 - đang gửi, 2 - thành công, 3 - thất bại
    updateCompanyStatus: 0, // 0 - bình thường, 1 - đang gửi, 2 - thành công, 3 - thất bại
}

const SettingReducer = (state = initState, action) => {
    switch (action.type) {
        case 'PERSONAL_UPDATE_REQUEST':
            return {
                ...state,
                updatePersonalStatus: 1,
            };
        case 'PERSONAL_UPDATE_SUCCESS':
            return {
                ...state,
                updatePersonalStatus: 2,
            };
        case 'PERSONAL_UPDATE_FAILURE':
            return {
                ...state,
                updatePersonalStatus: 3,
            };
        case 'PERSONAL_UPDATE_RESET':
            return {
                ...state,
                updatePersonalStatus: 0,
            };
        case 'COMPANY_UPDATE_REQUEST':
            return {
                ...state,
                updateCompanyStatus: 1,
            };
        case 'COMPANY_UPDATE_SUCCESS':
            return {
                ...state,
                updateCompanyStatus: 2,
            };
        case 'COMPANY_UPDATE_FAILURE':
            return {
                ...state,
                updateCompanyStatus: 3,
            };
        case 'COMPANY_UPDATE_RESET':
            return {
                ...state,
                updateCompanyStatus: 0,
            };
        default:
            return state
    }
}

export default SettingReducer;