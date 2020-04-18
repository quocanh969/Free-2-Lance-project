import { combineReducers } from "redux";

import ForgetPWReducer from './Login/ForgetPassword';
import ReadLocationReducer from './JobsList.Reducer';
import ContactUsReducer from './Contact.Reducer';

const reducer = combineReducers(
    {
        ForgetPWReducer,
        ReadLocationReducer,
        ContactUsReducer,
    }
)

export default reducer;