export const contactUs = () => {
    return dispatch => {
        dispatch(request());
    }
    function request() {
        return {
            type: 'CONTACT_US_REQUEST',
        }
    }
    function success(message) {
        console.log('success');
        return {
            type: 'CONTACT_US_SUCCESS',
            message,
        }
    }
    function failure(message) {
        console.log('failure');
        return {
            type: 'CONTACT_US_FAILURE',
            message,
        }
    }
}

