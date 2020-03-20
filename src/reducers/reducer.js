import { combineReducers } from "redux";

import ForgetPWReducer from './Login/ForgetPassword';

const reducer = combineReducers(
    {
        ForgetPWReducer,
    }
)

export default reducer;