import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import {
  updateProfile,
  sendRegister,
  prevStep,
} from "../../../actions/Register";
import { connect } from "react-redux";

class RegisterStepThreeComponent extends Component {
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

  render() {
    return (
      <div>
        <button
          onClick={this.goToPreviousStep}
          className="button full-width margin-bottom-15"
        >
          Trở về bước 2
        </button>
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
              autoFocus
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
          Đăng ký <i className="icon-material-outline-arrow-right-alt" />
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
    onGoToPreviousStep: () => {
      dispatch(prevStep());
    },
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
