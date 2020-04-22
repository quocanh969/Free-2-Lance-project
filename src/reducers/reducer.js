import { combineReducers } from "redux";

import ForgetPWReducer from './Login/ForgetPassword';
import LoginReducer from './Login/Login.reducer';
import ReadLocationReducer from './JobsList.Reducer';
import ContactUsReducer from './Contact.Reducer';

const reducer = combineReducers(
    {
        ForgetPWReducer,
        LoginReducer,
        ReadLocationReducer,
        ContactUsReducer,
    }
)

export default reducer;