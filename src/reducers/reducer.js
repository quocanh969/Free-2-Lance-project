import { combineReducers } from "redux";

import ForgetPWReducer from './Login/ForgetPassword';
import LoginReducer from './Login/Login.reducer';

const reducer = combineReducers(
    {
        ForgetPWReducer,
        LoginReducer,
    }
)

export default reducer;