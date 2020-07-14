const initState = {
    sendingReport: false,
}

const ContactUsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'REPORT_UPDATE_SENDING':
            return {
                ...state,
                sendingReport: action.status,
            }
        default:
            return state
    }
}

export default ContactUsReducer;