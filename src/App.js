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

import GoogleMapAutocomplete from './components/Help/GoogleMapAutocomplete';
import test from './components/test';

import NotFoundComponent from './components/404';

function App() {
  // const appendScript = (scriptToAppend) => {
  //   const script = document.createElement("script");
  //   script.src = scriptToAppend;
  //   script.type = 'text/jsx';
  //   script.async = true;
  //   document.body.appendChild(script);
  // }
  // appendScript('./assets/js/custom.js');
  /*--------------------------------------------------*/
	// const stickyHeader = () => {
		

	// 		if(window.innerWidth < '1099') { 
	// 			document.getElementById("header-container").removeClass("cloned");
	// 		}
			
	// 		if(window.innerWidth > '1099') {

	// 			// CSS adjustment
	// 			document.getElementById("header-container").css({
	// 				position: 'fixed',
	// 			});
		
	// 			var headerOffset = document.getElementById("header-container").height();

	// 			if(window.scrollTop() >= headerOffset){
	// 				document.getElementById("header-container").addClass('cloned');
	// 				document.getElementsByClassName('wrapper-with-transparent-header').getElementById("header-container").addClass('cloned').removeClass("transparent-header unsticky");
	// 			} else {
	// 				document.getElementById("header-container").removeClass("cloned");
	// 				document.getElementsByClassName('wrapper-with-transparent-header').getElementById("header-container").addClass('transparent-header unsticky').removeClass("cloned");
	// 			}

	// 			// Sticky Logo
	// 			var transparentLogo = document.getElementsById('header-container').getElementById('logo').getElementsByClassName('img').attr('data-transparent-logo');
	// 			var stickyLogo = document.getElementsById('header-container').getElementById('logo').getElementsByClassName('img').attr('data-sticky-logo');

	// 			if( document.getElementsByClassName('wrapper-with-transparent-header').getElementById("header-container").hasClass('cloned')) {
	// 				document.getElementById("header-container").getElementsByClassName('cloned').getElementById('logo').getElementsByClassName('img').attr("src", stickyLogo);
	// 			} 

	// 			if( document.getElementsByClassName('wrapper-with-transparent-header').getElementById("header-container").hasClass('transparent-header')) {
	// 				document.getElementById("header-container").getElementById('logo').getElementsByClassName('img').attr("src", transparentLogo);
	// 			} 

  //       window.addEventListener('load', headerOffsetInit);
  //       window.addEventListener('resize', headerOffsetInit);
		
  //     }
  //   }
  
  // const headerOffsetInit = () => {
  //   var headerOffset = document.getElementById("header-container").height();
  //   document.getElementById("wrapper").css({'padding-top': headerOffset});
  // }

	// // Sticky Header Init
	// // stickyHeader();

  // window.addEventListener('scroll', stickyHeader);
  // window.addEventListener('load', stickyHeader);

  return (
    <div>
        <Router history={history}>
          <Switch>
            <Route path='/test' exact component={test}></Route>            
            <SRoute path='/' exact component={Home}></SRoute>
            <SRoute path='/search' exact component={FindJob}></SRoute>
            <SRoute path='/not-found' exact component={NotFoundComponent}></SRoute>

            <SRoute path='/dashboard' exact component={Profile}></SRoute>

            <SRoute path='/job-detail' exact component={JobDetail}></SRoute>

            <SRoute path='/job-list' exact component={JobList}></SRoute>
            <SRoute path='/job-list/topic=:job_topic' exact component={JobList}></SRoute>
            <SRoute path='/job-list/title=:title&area=:area_province&topic=:job_topic' exact component={JobList}></SRoute>

            <SRoute path='/user-detail' exact component={UserDetail}></SRoute>

            <SRoute path='/login' exact component={Login}></SRoute>
            <SRoute path='/register' exact component={Register}></SRoute>
            <SRoute path='/forgot-password' exact component={ForgetPassword}></SRoute>
            <SRoute path='/activation/:activationToken' exact component={AccountActivation}></SRoute>
            <SRoute path='/resendActivation' exact component={ResendAccountActivation}></SRoute>

            <SRoute path='/contact' exact component={Contact}></SRoute>
            
            <SRoute path='/auto' exact component={GoogleMapAutocomplete}></SRoute>
            
            <Redirect to='/not-found'></Redirect>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
