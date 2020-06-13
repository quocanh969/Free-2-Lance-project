const initState = {
    updatePersonalStatus: 0, // 0 - bình thường, 1 - đang gửi, 2 - thành công, 3 - thất bại
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
            return initState;
        default:
            return state
    }
}

export default SettingReducer;