const initState = {
    reportApplicantId: null,
    reviewApplicantId: null,

    // detail review
    isReviewExist: -2, // -2 -- trạng thái mặc định, -1 -- loading, 0 -- not exist, 1 -- exist
    rating: null,
    feedback: '',
}

const ContactUsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'REPORT_SELECT_APPLICANT':
            return {
                ...state,
                reportApplicantId: action.id_applicant,
            }
        case 'REVIEW_SELECT_APPLICANT':
            return {
                ...state,
                reviewApplicantId: action.id_applicant,
            }
        case 'LOAD_DETAIL_REVIEW':
            return {
                ...state,
                isReviewExist: action.code,
                rating: action.rating,
                feedback: action.feedback,
            }
        case 'CHANGE_DETAIL_REVIEW_RATING':
            return {
                ...state,
                rating: action.rating,
            }
        default:
            return state
    }
}

export default ContactUsReducer;