import { combineReducers } from "redux";

import ForgetPWReducer from "./AccountReducers/ForgetPassword";
import LoginReducer from "./AccountReducers/Login.reducer";
import RegisterReducer from "./AccountReducers/Register.reducer";
import ActivationReducer from "./AccountReducers/Activation.reducer";
import ResendActivationReducer from "./AccountReducers/ResendActivation.reducer";

import ReadLocationReducer from "./JobReducers/ReadLocation.Reducer";
import JobDetailReducer from "./JobReducers/JobDetail.Reducer";
import AddJobReducer from "./JobReducers/AddJobForm.Reducer";

import SettingReducer from './Dashboard/Setting.Reducer';
import EmployerReducer from './Dashboard/Employer.Reducer';
import ApplicantReducer from './Dashboard/Applicant.Reducer';

import ContactUsReducer from './Contact.Reducer';
import HomeReducer from './Home.reducer';
import JobsListReducer from './JobReducers/JobsList.Reducer';

import ChangePWReducer from "./ProfileReducers/ChangePassword.reducer";

import GeneralReducer from "./General.Reducer";

import HeaderReducer from "./Header.Reducer";

const reducer = combineReducers({
  // Header reducer
  HeaderReducer,

  // Big Component reducer
  ContactUsReducer,
  HomeReducer,
  JobsListReducer,

  // General reducer
  GeneralReducer,

  // Account reducer
  ForgetPWReducer,
  LoginReducer,
  RegisterReducer,
  ActivationReducer,
  ResendActivationReducer,

  //Dashboard        
  AddJobReducer,// Add job reducer
  SettingReducer, // Setting reducer
  EmployerReducer, // Employer reducer
  ApplicantReducer, // Applicant reducer
  
  // Map reducer
  ReadLocationReducer,

  // Job detail reducer
  JobDetailReducer,

  // Profile reducer
  ChangePWReducer,
});

export default reducer;
