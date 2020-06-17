import {editPersonalInfo, getUserInfo, editCompanyInfo} from '../services/account.services';
import Swal from 'sweetalert2';

export const updatePersonalInfo = (personal) => {
    return dispatch => {
        dispatch(request());
        editPersonalInfo(personal)
        .then(res => {
            if (res.data.code === '106') {                
                dispatch(success());                
                Swal.fire({
                    title: "Cập nhật thông tin cá nhân thành công",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                dispatch(failure());
                Swal.fire({
                    title: "Cập nhật thông tin cá nhân thất bại",
                    icon: "error",
                    confirmButtonText: "OK",
                });
            }
            dispatch(reset());
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
    function reset() {
        return {
            type: 'PERSONAL_UPDATE_RESET',
        }
    }
}

export const updateCompanyInfo = (company) => {
    return dispatch => {
        dispatch(request());
        editCompanyInfo(company)
        .then(res => {
            if (res.data.code === '107') {                
                dispatch(success());                
                Swal.fire({
                    title: "Cập nhật thông tin công ty thành công",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                dispatch(failure());
                Swal.fire({
                    title: "Cập nhật thông tin cá nhân thất bại",
                    icon: "error",
                    confirmButtonText: 'OK'
                });                
            }
            dispatch(reset());
        }).catch(err => {
            console.log(err);
        })
    }

    function request() {
        return {
            type: 'COMPANY_UPDATE_REQUEST'
        }
    }
    function success() {
        return {
            type: 'COMPANY_UPDATE_SUCCESS',
        }
    }
    function failure() {
        return {
            type: 'COMPANY_UPDATE_FAILURE',
        }
    }
    function reset() {
        return {
            type: 'COMPANY_UPDATE_RESET',
        }
    }
}

export const updateUserState = () => {
    return dispatch => {
        getUserInfo().then(res=>{
            if(res.data.code === '200')
            {
                console.log(res.data.data);
                dispatch({
                    type: 'UPDATE_USER',
                    user: res.data.data.personal,
                })                
                if(res.data.data.personal.isBusinessUser === true)
                {
                    dispatch({
                        type: 'UPDATE_COMPANY',
                        company: res.data.data.company,
                    })
                }
            }
            else
            {
                Swal.fire({
                    title: "Tải dữ liệu cá nhân thất bại",
                    icon: "error",
                    confirmButtonText: 'OK'
                });
            }            
        }).catch(err=>{
        console.log(err);
        })
    }
}