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

  componentWillMount() {
    let {onResetForgetPW} = this.props;
    onResetForgetPW();
  }

  handleSubmit(e) {
    e.preventDefault();
    let { onSendForgetPW } = this.props;
    let email = this.refs.email.value;
    this.refs.email.value = '';
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
                <h2>Quên mật khẩu</h2>
              </div>
            </div>
          </div>
        </div>
        {/* Page Content ================================================== */}
        <div className="container">
          <div className="row">
            <div className="col-xl-7 offset-xl-3">
              <div className="login-register-page">
                {/* Welcome Text */}
                <div className="welcome-text text-left">
                  <h3>Chúng tôi rất tiếc khi bạn quên mất mật khẩu</h3>
                  <br></br>
                  <span>
                    Nhập vào email tài khoản của bạn và hệ thống sẽ giúp bạn khôi phục lại mật khẩu của mình
                  </span>
                  <span>
                    Nếu bạn đã nhớ ra rồi, chúng ta hay quay lại trang{" "}
                    <NavLink to="/login">Đăng nhập!</NavLink>
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
                      placeholder="Địa chỉ Email"
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
                  Gửi email{" "}
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
    onResetForgetPW: () => {
      dispatch({
        type: 'FORGET_PW_RESET',
      });
    },
  };
};

const ForgetPassword = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ForgetPasswordComponent)
);
export default ForgetPassword;
