import {editPersonalInfo} from '../services/account.services';

export const updatePersonalInfo = (personal) => {
    return dispatch => {
        dispatch(request());
        editPersonalInfo(personal)
        .then(res => {
            if (res.data.code === '106') {                
                dispatch(success());
                alert('Cập nhật thành công');
                // cập nhật lại user trên HeaderReducer
            } else {
                dispatch(failure());
                alert('Cập nhật thất bại');
            }
        }).catch(err => {
            console.log(err);
        })
    }

    function request() {
        return {
            type: 'PERSONAL_UPDATE_REQUEST'
        }
    }
    function success() {
        return {
            type: 'PERSONAL_UPDATE_SUCCESS',
        }
    }
    function failure() {
        return {
            type: 'PERSONAL_UPDATE_FAILURE',
        }
    }
}
