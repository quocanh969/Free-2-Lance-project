const initState = {
    reportApplicantId: null,
    reviewApplicantId: null,
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
        default:
            return state
    }
}

export default ContactUsReducer;