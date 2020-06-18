import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { sendForgetPassword } from "../../actions/Login";
import reducer from "../../reducers/reducer";

class ForgetPasswordComponent extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let { onSendForgetPW } = this.props;
    let email = this.refs.email.value;
    console.log(email);
    onSendForgetPW(email);
  }

  spinnerLoadingNotification() {
    let content = [];
    let { sending, status, message } = this.props.ForgetPWReducer;

    if (!sending && status === 0) {
      // do nothing
    } else if (sending && status === 0) {
      // sending ...
      content.push(
        <div className="loading" key={1}>
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    } else if (!sending && status === -1) {
      // failure ...
      content.push(
        <div className="alert alert-login alert-danger" key={1} role="alert">
          {message}
        </div>
      );
    } else {
      /// success ...
      content.push(
        <div className="alert alert-login alert-success" key={1} role="alert">
          {message}
        </div>
      );
    }

    return content;
  }

  render() {
    return (
      <div>
        {/* Titlebar ================================================== */}
        <div id="titlebar" className="gradient">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Forgot Password</h2>
                {/* Breadcrumbs */}
                <nav id="breadcrumbs" className="dark">
                  <ul>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>Forgot Password</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* Page Content ================================================== */}
        <div className="container">
          <div className="row">
            <div className="col-xl-5 offset-xl-3">
              <div className="login-register-page">
                {/* Welcome Text */}
                <div className="welcome-text">
                  <h3>We're sorry to heard that you forgot your password</h3>
                  <br></br>
                  <span>
                    Type in your email to get it back via email confirmation
                  </span>
                  <span>
                    If you remembered it, get back to{" "}
                    <NavLink to="/login">Sign In!</NavLink>
                  </span>
                </div>
                {/* Form */}
                <form
                  method="post"
                  id="forget-pw-form"
                  onSubmit={this.handleSubmit}
                >
                  <div className="input-with-icon-left">
                    <i className="icon-material-baseline-mail-outline" />
                    <input
                      type="email"
                      className="input-text with-border"
                      name="emailaddress"
                      id="emailaddress"
                      ref="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </form>
                {/* Button */}
                {this.spinnerLoadingNotification()}
                <button
                  className="button full-width button-sliding-icon ripple-effect margin-top-10"
                  type="submit"
                  form="forget-pw-form"
                >
                  Send Email{" "}
                  <i className="icon-material-outline-arrow-right-alt" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Spacer */}
        <div className="margin-top-70" />
        {/* Spacer / End*/}
      </div>
    );
  }
}

// === Container

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSendForgetPW: (email) => {
      dispatch(sendForgetPassword(email));
    },
  };
};

const ForgetPassword = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ForgetPasswordComponent)
);
export default ForgetPassword;
