import React from 'react';
import './App.css';

import {history} from './ultis/history/history';

import Home from './components/home';

import { BrowserRouter, Switch, Redirect, Router, Route } from 'react-router-dom';

import {SRoute, PrivateRoute} from './components/CustomRoutes/CustomRoutes';

import JobDetail from './components/JobDetail/JobDetail';
import JobList from './components/JobList';
import Login from './components/Login/Login';
import Contact from './components/Contact';
import Register from './components/Login/Register';
import ForgetPassword from './components/Login/ForgetPassword';
import AccountActivation from './components/Login/ActivationComponent';
import ResendAccountActivation from './components/Login/ResendActivationComponent';
import UserDetail from './components/User/UserDetail';
import MapContainer from './components/map_JobsList';
import FindJob from './components/FindJob';
import Profile from './components/Profile/Profile';

import MultipleImageUploadComponent from './components/Help/UploadImages';
import test from './components/test';

import NotFoundComponent from './components/404';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Switch>
            <Route path='/test' exact component={test}></Route>            
            <SRoute path='/home' exact component={Home}></SRoute>
            <SRoute path='/search' exact component={FindJob}></SRoute>
            <SRoute path='/not-found' exact component={NotFoundComponent}></SRoute>

            <SRoute path='/dashboard' exact component={Profile}></SRoute>

            <SRoute path='/job-detail' exact component={JobDetail}></SRoute>
            <SRoute path='/job-list' exact component={JobList}></SRoute>

            <SRoute path='/user-detail' exact component={UserDetail}></SRoute>

            <SRoute path='/login' exact component={Login}></SRoute>
            <SRoute path='/register' exact component={Register}></SRoute>
            <SRoute path='/forgot-password' exact component={ForgetPassword}></SRoute>
            <SRoute path='/activation/:activationToken' exact component={AccountActivation}></SRoute>
            <SRoute path='/resendActivation' exact component={ResendAccountActivation}></SRoute>

            <SRoute path='/contact' exact component={Contact}></SRoute>
            
            <SRoute path='/upload' exact component={MultipleImageUploadComponent}></SRoute>
            
            <Redirect to='/not-found'></Redirect>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
