import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { updateProfile, sendRegister } from "../../../actions/Register";
import { connect } from "react-redux";

class RegisterStepThreeComponent extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let { onUpdateProfile, onSendRegister } = this.props;

    let tempAccount = {};
    tempAccount.company_name = this.refs.companyName.value;
    tempAccount.position = this.refs.position.value;
    tempAccount.company_address = this.refs.companyAddress.value;
    tempAccount.company_email = this.refs.companyEmail.value;
    tempAccount.number_of_employees = Number(this.refs.numberOfEmployees.value);
    onUpdateProfile(tempAccount);
    let { account } = this.props.RegisterReducer;
    account = {
      ...account,
      ...tempAccount,
    };
    onSendRegister(account);
  }

  spinnerLoadingNotification() {
    let content = [];
    let { sending, status, message } = this.props.RegisterReducer;

    if (!sending && status === 0) {
      // do nothing
    } else if (sending && status === 0) {
      // sending ...
      content.push(
        <div className="loading" key={1}>
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Đang tải...</span>
          </div>
        </div>
      );
    } else if (!sending && status === -1) {
      // failure ...
      console.log("flag failure");
      content.push(
        <div className="alert alert-login alert-danger" key={1} role="alert">
          {message}
        </div>
      );
    } else {
      /// success ...
      content.push(
        <div className="alert alert-login alert-success" key={1} role="alert">
          Kiểm tra email để kích hoạt tài khoản
        </div>
      );
    }

    return content;
  }

  render() {
    return (
      <div>
        <form
          method="post"
          id="register-account-form"
          onSubmit={this.handleSubmit}
        >
          <div className="input-with-icon-left">
            <i className="icon-line-awesome-building" />
            <input
              type="text"
              className="input-text with-border"
              name="company-name-register"
              id="company-name-register"
              ref="companyName"
              placeholder="Company's name"
              required
            />
          </div>
          <div className="input-with-icon-left">
            <i className="icon-feather-book" />
            <input
              type="text"
              className="input-text with-border"
              name="position-register"
              id="position-register"
              ref="position"
              placeholder="Your position"
              required
            />
          </div>
          <div className="input-with-icon-left">
            <i className="icon-material-outline-add-location" />
            <input
              type="text"
              className="input-text with-border"
              name="company-address-register"
              id="company-address-register"
              ref="companyAddress"
              placeholder="Company's address"
              required
            />
          </div>
          <div className="input-with-icon-left">
            <i className="icon-material-baseline-mail-outline" />
            <input
              type="email"
              className="input-text with-border"
              name="company-email-register"
              id="company-email-register"
              ref="companyEmail"
              placeholder="Company's Email"
              required
            />
          </div>
          <div className="input-with-icon-left">
            <i className="icon-material-outline-group" />
            <input
              type="number"
              className="input-text with-border"
              name="number-of-employees-register"
              id="number-of-employees-register"
              ref="numberOfEmployees"
              placeholder="Number of employees"
              required
            />
          </div>
        </form>
        {this.spinnerLoadingNotification()}
        {/* Button */}
        <button
          className="button full-width button-sliding-icon ripple-effect margin-top-10"
          form="register-account-form"
        >
          Register <i className="icon-material-outline-arrow-right-alt" />
        </button>
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
    onSendRegister: (account) => {
      dispatch(sendRegister(account));
    },
  };
};

const RegisterStepThree = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RegisterStepThreeComponent)
);
export default RegisterStepThree;
