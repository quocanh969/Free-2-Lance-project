// import Logo from '../assets/images/logo.png';
// import CompanyLogo1 from '../../assets/images/company-logo-01.png';
// import CompanyLogo2 from '../../assets/images/company-logo-02.png';
// import CompanyLogo3 from '../../assets/images/company-logo-03.png';
// import CompanyLogo4 from '../../assets/images/company-logo-04.png';
// import CompanyLogo5 from '../../assets/images/company-logo-05.png';
// import CompanyLogo6 from '../../assets/images/company-logo-06.png';

// import UserAvatarSmall1 from '../assets/images/user-avatar-small-01.jpg';
// import UserAvatarSmall2 from '../assets/images/user-avatar-small-02.jpg';
// import UserAvatarSmall3 from '../assets/images/user-avatar-small-03.jpg';
// import UserAvatarPlaceholder from '../assets/images/user-avatar-placeholder.png';

const initState = {
    places: [],
    jobList: []
}

const ReadLocationReducer = (state = initState, action) => {
    switch (action.type) {
        case 'MAP_LOC_REQ':
            return {
                ...state,
                message: "Reading...",
            }
        case 'MAP_LOC_SUCCESS':
            return {
                ...state,
                message: "Read success",
            }
        case 'MAP_LOC_FAIL':
            return {
                ...state,
                message: "Read failed",
            }
        default: return state
    }
}

export default ReadLocationReducer;