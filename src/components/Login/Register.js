import React, { Component } from "react";
import Header from "../Help/Header";
import RegisterStepOne from "./RegisterStep/RegisterStepOneComponent";
import RegisterStepTwo from "./RegisterStep/RegisterStepTwoComponent";
import RegisterStepThree from "./RegisterStep/RegisterStepThreeComponent";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { sendRegister, resetRegister } from "../../actions/Register";

class RegisterComponent extends Component {
  constructor(props) {
    super(props);

    let { onResetRegister } = this.props;
    onResetRegister();
  }

  renderRegisterForm = () => {
    let { step } = this.props.RegisterReducer;
    let content = [];
    if (step === 1) content.push(<RegisterStepOne key={1}></RegisterStepOne>);
    else if (step === 2)
      content.push(<RegisterStepTwo key={2}></RegisterStepTwo>);
    else if (step === 3)
      content.push(<RegisterStepThree key={3}></RegisterStepThree>);
    return content;
  };

  // changeAccountType = () => {
  //   console.log("haha");
  //   let radios = document.getElementsByName("account-type-radio");
  //   let role = -1;
  //   radios.forEach((radio) => {
  //     if (radio.checked) role = radio.value;
  //   });
  //   console.log(role);
  // };
  render() {
    return (
      <div>
        {/* Titlebar ================================================== */}
        <div id="titlebar" className="gradient">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Đăng kí</h2>
                {/* Breadcrumbs */}
                <nav id="breadcrumbs" className="dark">
                  <ul>
                    <li>
                      <NavLink to="/">Trang chủ</NavLink>
                    </li>
                    <li>Đăng kí</li>
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
                  <h3 style={{ fontSize: "26px" }}>Hãy tạo 1 tài khoản!!</h3>
                  <span>
                    Bạn đã có tài khoản?{" "}
                    <NavLink to="/login">Đăng nhập!</NavLink>
                  </span>
                </div>
                {/* Account Type */}

                {/* Form */}
                {this.renderRegisterForm()}

                {/* Social Login */}
                <div className="social-login-separator">
                  <span>or</span>
                </div>
                <div className="social-login-buttons">
                  <button className="facebook-login ripple-effect">
                    <i className="icon-brand-facebook-f" /> Đăng kí bằng
                    Facebook
                  </button>
                  <button className="google-login ripple-effect">
                    <i className="icon-brand-google-plus-g" /> Đăng kí bằng
                    Google+
                  </button>
                </div>
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
    onSendRegister: (email, password, confirm, role) => {
      dispatch(sendRegister(email, password, confirm, role));
    },

    onResetRegister: () => {
      dispatch(resetRegister());
    },
  };
};

const Register = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RegisterComponent)
);
export default Register;
