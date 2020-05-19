import { combineReducers } from "redux";

import ForgetPWReducer from './AccountReducers/ForgetPassword';
import LoginReducer from './AccountReducers/Login.reducer';
import RegisterReducer from './AccountReducers/Register.reducer';
import ActivationReducer from "./AccountReducers/Activation.reducer";
import ResendActivationReducer from './AccountReducers/ResendActivation.reducer';

import ReadLocationReducer from './JobReducers/JobsList.Reducer';
import JobDetailReducer from './JobReducers/JobDetail.Reducer';

import ContactUsReducer from './Contact.Reducer';

import HeaderReducer from './Header.Reducer';

const reducer = combineReducers(
    {
        // Header reducer
        HeaderReducer,

        // Account reducer
        ForgetPWReducer,
        LoginReducer,
        RegisterReducer,
        ActivationReducer,
        ResendActivationReducer,

        // Map reducer
        ReadLocationReducer,

        // Job detail reducer
        JobDetailReducer,

        // Contact reducer
        ContactUsReducer,
    }
)

export default reducer;