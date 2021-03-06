import React from "react";
import "./App.css";
import "./assets/css/style.css";
import "./assets/css/colors/blue.css";

import { history } from "./ultis/history/history";

import Home from "./components/home";

import {
  BrowserRouter,
  Switch,
  Redirect,
  Router,
  Route,
} from "react-router-dom";

import { SRoute, PrivateRoute, SingInRoute } from "./components/CustomRoutes/CustomRoutes";

import JobDetail from "./components/JobDetail/JobDetail";
import JobList from "./components/JobList";
import Login from "./components/Login/Login";
import Contact from "./components/Contact";
import Register from "./components/Login/Register";
import ForgetPassword from "./components/Login/ForgetPassword";
import AccountActivation from "./components/Login/ActivationComponent";
import ResendAccountActivation from "./components/Login/ResendActivationComponent";
import UserDetail from "./components/User/UserDetail";
import MapContainer from "./components/map_JobsList";
import FindJob from "./components/FindJob";
import Profile from "./components/Profile/Profile";

import MultipleImageUploadComponent from "./components/Help/UploadImages";
import test from "./components/test";

import NotFoundComponent from "./components/404";

function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <SRoute path="/test" exact component={test}></SRoute>
          <SRoute path="/" exact component={Home}></SRoute>
          <SRoute path="/search" exact component={FindJob}></SRoute>
          <SRoute
            path="/not-found"
            exact
            component={NotFoundComponent}
          ></SRoute>

          <PrivateRoute path="/dashboard/tab=:id" exact component={Profile}></PrivateRoute>

          <SRoute
            path="/job-detail/:id_job"
            exact
            component={JobDetail}
          ></SRoute>

          <SRoute path="/job-list" exact component={JobList}></SRoute>
          <SRoute
            path="/job-list/topic=:job_topic"
            exact
            component={JobList}
          ></SRoute>
          <SRoute
            path="/job-list/search"
            exact
            component={JobList}
          ></SRoute>

          <SRoute
            path="/user-detail/:id_user"
            exact
            component={UserDetail}
          ></SRoute>

          <SingInRoute path="/login" exact component={Login}></SingInRoute>
          <SingInRoute path="/register" exact component={Register}></SingInRoute>
          <SingInRoute
            path="/forgot-password"
            exact
            component={ForgetPassword}
          ></SingInRoute>
          <SingInRoute
            path="/activation/:activationToken"
            exact
            component={AccountActivation}
          ></SingInRoute>
          <SingInRoute
            path="/resendActivation"
            exact
            component={ResendAccountActivation}
          ></SingInRoute>

          <SRoute path="/contact" exact component={Contact}></SRoute>

          <Redirect to="/not-found"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
