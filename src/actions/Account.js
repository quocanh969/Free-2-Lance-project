import {editPersonalInfo, getUserInfo} from '../services/account.services';

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

export const updateUserState = () => {
    return dispatch => {
        getUserInfo().then(res=>{
            if(res.data.code === '200')
            {
                dispatch({
                    type: 'UPDATE_USER',
                    user: res.data.data.personal,
                })
            }
            else
            {
                alert('Cập nhật thông tin user thật bại');
            }            
        }).catch(err=>{
        console.log(err);
        })
    }
}