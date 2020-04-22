export const readLocation = () => {
    return dispatch => {
        dispatch(request());
    }
    function request() {
        return {
            type: 'MAP_LOC_REQ',
        }
    }
    function success(message) {
        console.log('success');
        return {
            type: 'MAP_LOC_SUCCESS',
            message,
        }
    }
    function failure(message) {
        console.log('failure');
        return {
            type: 'MAP_LOC_FAIL',
            message,
        }
    }
}

