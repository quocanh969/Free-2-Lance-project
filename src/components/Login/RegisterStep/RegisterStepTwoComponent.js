import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import {
  updateProfile,
  prevStep,
  nextStep,
  sendRegister,
} from "../../../actions/Register";
import { connect } from "react-redux";

class RegisterStepTwoComponent extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.goToPreviousStep = this.goToPreviousStep.bind(this);
  }

  goToPreviousStep() {
    let { onGoToPreviousStep } = this.props;
    onGoToPreviousStep();
  }

  handleSubmit(e) {
    e.preventDefault();

    let { onUpdateProfile, goToNextStep, onSendRegister } = this.props;

    let tempAccount = {};
    tempAccount.email = this.refs.email.value;
    tempAccount.password = this.refs.password.value;
    tempAccount.confirm = this.refs.confirm.value;

    onUpdateProfile(tempAccount);
    let { account } = this.props.RegisterReducer;

    if (account.isBusinessUser) {
      goToNextStep();
    } else {
      account = {
        ...account,
        ...tempAccount,
      };
      onSendRegister(account);
    }
  }

  spinnerLoadingNotification() {
    let content = [];
    let { sending } = this.props.RegisterReducer;

    if (sending) {
      // sending ...
      content.push(
        <div className="loading" key={1}>
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    } else {
      content = [];
    }
    return content;
  }
  componentDidMount = () => {
    let confirmElement = document.getElementById("confirm-register");
    confirmElement.addEventListener("change", () => {
      let password = this.refs.password.value;
      let confirm = this.refs.confirm.value;
      if (password !== confirm)
        confirmElement.setCustomValidity("Xác nhận mật khẩu không chính xác");
      else confirmElement.setCustomValidity("");
    });

    let passwordElement = document.getElementById("password-register");
    passwordElement.addEventListener("change", () => {
      let password = this.refs.password.value;
      let confirm = this.refs.confirm.value;
      if (password !== confirm)
        confirmElement.setCustomValidity("Xác nhận mật khẩu không chính xác");
      else confirmElement.setCustomValidity("");
    });
  };

  renderSubmitBtn = () => {
    let { account } = this.props.RegisterReducer;
    let message = "Đăng kí";

    if (account.isBusinessUser) message = "Tiếp theo";

    let content = [];
    content.push(
      <button
        className="button full-width button-sliding-icon ripple-effect margin-top-10"
        form="register-account-form"
        key={1}
      >
        {message} <i className="icon-material-outline-arrow-right-alt" />
      </button>
    );
    return content;
  };

  render() {
    let { account } = this.props.RegisterReducer;
    return (
      <div>
        <button
          onClick={this.goToPreviousStep}
          className="button full-width margin-bottom-15"
        >
          Trở về bước 1
        </button>
        <form
          method="post"
          id="register-account-form"
          onSubmit={this.handleSubmit}
        >
          <div className="input-with-icon-left">
            <i className="icon-material-baseline-mail-outline" />
            <input
              type="email"
              className="input-text with-border"
              name="email-register"
              id="email-register"
              ref="email"
              placeholder="E-mail"
              defaultValue={account.email}
              required
              autoFocus
            />
          </div>
          <div className="input-with-icon-left">
            <i className="icon-material-outline-lock" />
            <input
              type="password"
              className="input-text with-border"
              name="password-register"
              id="password-register"
              ref="password"
              placeholder="Mật khẩu"
              required
            />
          </div>
          <div className="input-with-icon-left">
            <i className="icon-material-outline-lock" />
            <input
              type="password"
              className="input-text with-border"
              name="confirm-register"
              id="confirm-register"
              ref="confirm"
              placeholder="Xác nhận mật khẩu"
              required
            />
          </div>
        </form>
        {this.spinnerLoadingNotification()}
        {/* Button */}
        {this.renderSubmitBtn()}
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
    onUpdateProfile: (account) => {
      dispatch(updateProfile(account));
    },
    onGoToPreviousStep: () => {
      dispatch(prevStep());
    },
    goToNextStep: () => {
      dispatch(nextStep());
    },
    onSendRegister: (account) => {
      dispatch(sendRegister(account));
    },
  };
};

const RegisterStepTwo = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RegisterStepTwoComponent)
);
export default RegisterStepTwo;
