import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import {
  updateProfile,
  nextStep,
  changeAccountType,
} from "../../../actions/Register";
import { connect } from "react-redux";

class RegisterStepOneComponent extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    let { onChangeAccountType } = this.props;
    let radios = document.getElementsByName("account-type-radio");
    radios.forEach((radio) => {
      radio.addEventListener("change", () => {
        let isBusinessUser = radio.value === "employer" ? 1 : 0;
        onChangeAccountType(isBusinessUser);
      });
    });
  };

  handleSubmit(e) {
    e.preventDefault();

    let { onUpdateProfile, goToNextStep } = this.props;

    let account = {};
    account.fullname = this.refs.fullname.value;
    account.dial = this.refs.dial.value;
    account.address = this.refs.address.value;
    account.gender = this.refs.gender.value === "male" ? 1 : 0;
    account.dob = this.refs.birthday.value;
    onUpdateProfile(account);
    goToNextStep();
  }

  render() {
    let { account } = this.props.RegisterReducer;
    return (
      <div>
        <div className="account-type">
          <div>
            <input
              type="radio"
              name="account-type-radio"
              id="freelancer-radio"
              className="account-type-radio"
              value="freelancer"
              defaultChecked
            />
            <label htmlFor="freelancer-radio" className="ripple-effect-dark">
              <i className="icon-material-outline-account-circle" /> Người lao
              động
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="account-type-radio"
              id="employer-radio"
              className="account-type-radio"
              value="employer"
              defaultChecked={account.isBusinessUser}
            />
            <label htmlFor="employer-radio" className="ripple-effect-dark">
              <i className="icon-material-outline-business-center" /> Doanh
              nghiệp
            </label>
          </div>
        </div>
        <form
          method="post"
          id="register-account-form"
          onSubmit={this.handleSubmit}
        >
          <div className="input-with-icon-left">
            <i className="icon-material-baseline-mail-outline" />
            <input
              type="text"
              className="input-text with-border"
              name="fullname-register"
              id="fullname-register"
              ref="fullname"
              placeholder="Họ và tên"
              defaultValue={account.fullname}
              required
              autoFocus
            />
          </div>
          <div className="input-with-icon-left" data-tippy-placement="bottom">
            <i className="icon-feather-phone" />
            <input
              type="tel"
              pattern="[0-9]{7,}"
              maxLength="11"
              className="input-text with-border"
              name="dial-register"
              id="dial-register"
              ref="dial"
              placeholder="Số điện thoại"
              defaultValue={account.dial}
              required
            />
          </div>
          <div className="input-with-icon-left">
            <i className="icon-material-outline-add-location" />
            <input
              type="text"
              className="input-text with-border"
              name="address-register"
              id="address-register"
              ref="address"
              placeholder="Địa chỉ"
              defaultValue={account.address}
              required
            />
          </div>

          <div className="input-with-icon-left">
            <i className="icon-line-awesome-birthday-cake" />
            <input
              type="date"
              className="input-text with-border"
              name="birthday-register"
              id="birthday-register"
              ref="birthday"
              min="1990-01-01"
              max="2019-12-31"
              defaultValue={account.dob}
              required
            />
          </div>
          <div className="input-with-icon-left">
            <i className="icon-feather-user" />
            <select
              className="with-border select-gender"
              id="gender"
              name="gender"
              ref="gender"
            >
              <option selected={account.gender === 1} value="male">
                Nam
              </option>
              <option selected={account.gender === 0} value="female">
                Nữ
              </option>
            </select>
          </div>
        </form>
        {/* Button */}
        <button
          className="button full-width button-sliding-icon ripple-effect margin-top-10"
          form="register-account-form"
        >
          Tiếp theo <i className="icon-material-outline-arrow-right-alt" />
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
    goToNextStep: () => {
      dispatch(nextStep());
    },
    onChangeAccountType: (isBusinessUser) => {
      dispatch(changeAccountType(isBusinessUser));
    },
  };
};

const RegisterStepOne = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RegisterStepOneComponent)
);
export default RegisterStepOne;
