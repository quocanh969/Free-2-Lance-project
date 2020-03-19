import React from 'react';
import './App.css';
import Home from './components/home';

import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import {SRoute} from './components/CustomRoutes/CustomRoutes';

import JobDetail from './components/JobDetail';
import JobList from './components/JobList';
import Login from './components/Login/Login';
import Contact from './components/Contact';
import Register from './components/Login/Register';
import ForgetPassword from './components/Login/ForgetPassword';
import UserDetail from './components/User/UserDetail';
import MapContainer from './components/map_JobsList';


function App() {
  console.log(window.location);
  return (
    <div>
        <BrowserRouter>
          <Switch>
            <SRoute path='/home' exact component={Home}></SRoute>
            <SRoute path='/job-detail' exact component={JobDetail}></SRoute>
            <SRoute path='/job-list' exact component={JobList}></SRoute>
            <SRoute path='/user-detail' exact component={UserDetail}></SRoute>
            <SRoute path='/login' exact component={Login}></SRoute>
            <SRoute path='/register' exact component={Register}></SRoute>
            <SRoute path='/forgot-password' exact component={ForgetPassword}></SRoute>
            <SRoute path='/contact' exact component={Contact}></SRoute>
            <Redirect to='/home'></Redirect>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
