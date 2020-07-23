import React, { Component } from "react";
import Header from "../Help/Header";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { sendLogin, reset } from "../../actions/Login";

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    let { onReset } = this.props;    
    onReset();
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  handleSubmit(e) {
    e.preventDefault();

    let { onSendLogin } = this.props;

    let email = this.refs.email.value;
    let password = this.refs.password.value;

    onSendLogin(email, password);
  }

  spinnerLoadingNotification() {
    let content = [];
    let { sending, status, message } = this.props.LoginReducer;

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
                <h2>Đăng nhập</h2>
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
                  <h3>Chào mừng bạn đến với website của chúng tôi!</h3>
                  <span>
                    Chưa có tài khoản?{" "}
                    <NavLink to="/register">Tạo mới!</NavLink>
                  </span>
                </div>
                <div className="text-danger">
                  *Nếu bạn đăng nhập không đúng tài khoản, mật khẩu thì vui lòng kiểm tra lại email xem có thông tin yêu cầu "Quên mật khẩu" không!
                </div>
                {/* Form */}
                <form
                  method="post"
                  id="login-form"
                  onSubmit={this.handleSubmit}
                >
                  <div className="input-with-icon-left">
                    <i className="icon-material-baseline-mail-outline" />
                    <input
                      type="text"
                      ref="email"
                      className="input-text with-border"
                      name="emailaddress"
                      id="emailaddress"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="input-with-icon-left">
                    <i className="icon-material-outline-lock" />
                    <input
                      type="password"
                      ref="password"
                      className="input-text with-border"
                      name="password"
                      id="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <NavLink to="/forgot-password" className="forgot-password">
                    Quên mật khẩu?
                  </NavLink>
                  <br/>
                  <NavLink to="/resendActivation" className="forgot-password">
                    Tài khoản của bạn không kích hoạt được?
                  </NavLink>
                </form>
                {/*spinner loading notification */}
                {this.spinnerLoadingNotification()}

                {/* Button */}
                <button
                  className="button full-width button-sliding-icon ripple-effect margin-top-10"
                  form="login-form"
                >
                  Đăng nhập <i className="icon-material-outline-arrow-right-alt" />
                </button>
                {/* Social Login */}
                {/* <div className="social-login-separator">
                  <span>or</span>
                </div>
                <div className="social-login-buttons">
                  <button className="facebook-login ripple-effect">
                    <i className="icon-brand-facebook-f" /> Log In via Facebook
                  </button>
                  <button className="google-login ripple-effect">
                    <i className="icon-brand-google-plus-g" /> Log In via
                    Google+
                  </button>
                </div> */}
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
    onReset: () => {
      dispatch(reset());
    },
    onSendLogin: (username, password) => {
      dispatch(sendLogin(username, password));
    },
  };
};

const Login = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
);
export default Login;
