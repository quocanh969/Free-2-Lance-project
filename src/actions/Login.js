export const sendForgetPassword = (email) => {
    return dispatch => {
        dispatch(request());        
        
    }
    
    function request() {
        
        return {
            type: 'FORGET_PW_REQUEST',

        }
    }
    function success(message) {
        console.log('success');
        return {
            type: 'FORGET_PW_SUCCESS',
            message,
        }
    }
    function failure(message) {
        console.log('failure');
        return {
            type: 'FORGET_PW_FAILURE',
            message,
        }
    }
}