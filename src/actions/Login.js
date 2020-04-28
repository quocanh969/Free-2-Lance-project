import { login } from '../services/account.services';

import axios from 'axios';

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

export const sendLogin = (email, password) => {
    return dispatch => {
        dispatch(request());
        login(email, password)
        .then(res=>{
            console.log(res);
            if(res.data.code === 0)
            {// thất bại
                dispatch(failure(res.data.message));
            }
            else
            {// thành công
                dispatch(success(res.data.message));
                dispatch(updateUser(res.data.data));
                // Lưu vào localstorage
                localStorage.setItem('user', JSON.stringify(res.data.data));
                // Time out
                localStorage.setItem('timeOut', JSON.stringify(new Date()));                
            }
        })
        .catch(err=>{
            console.log(err);
            dispatch(failure("There was error with server connection. Error log on console"));
        })
    }
    
    function request() {        
        return {
            type: 'LOG_IN_REQUEST',

        }
    }
    function success(message) {
        console.log('success');
        return {
            type: 'LOG_IN_SUCCESS',
            message,
        }
    }
    function failure(message) {
        console.log('failure');
        return {
            type: 'LOG_IN_FAILURE',
            message,
        }
    }
    function updateUser(user) {
        return {
            type: 'UPDATE_USER',
            user,
        }
    }
}