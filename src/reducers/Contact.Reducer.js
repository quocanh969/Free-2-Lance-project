const initState = {
    places: [{
        name: "HCMUS",
        title: "HCMUS",
        position: { lat: 0.0, lng: 0.0 }
    }],
    info: {
        name: "",
        email: "",
        subject: "",
        messageContent: "",
    },
    status: 0,
    sending: false,
}

const ContactUsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CONTACT_US_REQUEST':
            return {
                ...state,
                status: 0,
                message: 'Sending...',
                sending: true,
            };
        case 'CONTACT_US_SUCCESS':
            return {
                ...state,
                status: 1,
                message: action.message,
                sending: false,
            };
        case 'CONTACT_US_FAILURE':
            return {
                ...state,
                status: -1,
                message: action.message,
                sending: false,
            };
        case 'CONTACT_US_RESET':
            return initState;
        default:
            return state
    }
}

export default ContactUsReducer;