import { combineReducers } from "redux";

import ForgetPWReducer from './Login/ForgetPassword';
import ReadLocationReducer from './JobsList.Reducer';

const reducer = combineReducers(
    {
        ForgetPWReducer,
        ReadLocationReducer,
    }
)

export default reducer;