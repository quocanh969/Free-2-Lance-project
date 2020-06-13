import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { changePassword } from "../../../services/profile.services";
import Swal from "sweetalert2";

import { S_Selector } from "../../../ultis/SHelper/S_Help_Input";

import avatarPlaceholder from "../../../assets/images/user-avatar-placeholder.png";
import browseCompoanies from "../../../assets/images/browse-companies-03.png";

class ChangePasswordComponent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    // mật khẩu mới không đưuọc giống mật khẩu cũ
    let oldPWElement = document.getElementById("old-change-password");
    oldPWElement.addEventListener("change", () => {
      let password = this.refs.newPW.value;
      let oldPW = this.refs.oldPW.value;
      if (password !== oldPW)
        passwordElement.setCustomValidity(
          "Mật khẩu mới không được trùng với mật khẩu cũ"
        );
      else passwordElement.setCustomValidity("");
    });

    let passwordElement = document.getElementById("new-change-password");
    passwordElement.addEventListener("change", () => {
      let password = this.refs.newPW.value;
      let oldPW = this.refs.oldPW.value;
      //pass mới không được giống pass cũ
      if (password === oldPW)
        passwordElement.setCustomValidity(
          "Mật khẩu mới không được trùng với mật khẩu cũ"
        );
      else passwordElement.setCustomValidity("");

      //mật khẩu xác nhận không trùng
      let confirm = this.refs.confirmNewPW.value;
      if (password !== confirm)
        confirmElement.setCustomValidity("Xác nhận mật khẩu không chính xác");
      else confirmElement.setCustomValidity("");
    });

    let confirmElement = document.getElementById("repeat-change-password");
    confirmElement.addEventListener("change", () => {
      let password = this.refs.newPW.value;
      let confirm = this.refs.confirmNewPW.value;
      if (password !== confirm)
        confirmElement.setCustomValidity("Xác nhận mật khẩu không chính xác");
      else confirmElement.setCustomValidity("");
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let { onSendChangePW } = this.props;
    let oldPW = this.refs.oldPW.value;
    let newPW = this.refs.newPW.value;
    onSendChangePW(oldPW, newPW);
  }

  spinnerLoadingNotification() {
    let content = [];
    let { sending, status, message } = this.props.ChangePWReducer;

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
      // do nothing
    } else {
      /// success ...
      // do nothing
    }
    return content;
  }

  render() {
    return (
      <div className="dashboard-content-inner">
        {/* Dashboard Headline */}
        <div className="dashboard-headline">
          <h3>Đổi mật khẩu</h3>
        </div>

        {/* Row */}
        <div className="row">
          <form className="col-xl-12" method="post" id="change-password-form" onSubmit={this.handleSubmit}>
            {/* Đổi mật khẩu */}
            <div id="test1" className="dashboard-box">
              {/* Headline */}
              <div className="headline">
                <h3>
                  <i className="icon-material-outline-lock" /> Mật khẩu &amp;
                  Bảo mật
                </h3>
              </div>
              <div className="dashboard-content with-padding">
                <div className="row">
                  <div className="col-4">
                    <div className="submit-field">
                      <h5>Mật khẩu hiện tại</h5>
                      <input type="password" id="old-change-password" className="with-border" required/>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="submit-field">
                      <h5>Mật khẩu mới</h5>
                      <input type="password" id="new-change-password" className="with-border" required/>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="submit-field">
                      <h5>Nhập lại mật khẩu mới</h5>
                      <input type="password" id="repeat-change-password" className="with-border" required/>
                    </div>
                  </div>
                  {/* <div className="col-xl-12">
                        <div className="checkbox">
                            <input type="checkbox" id="two-step" defaultChecked />
                            <label htmlFor="two-step"><span className="checkbox-icon" /> Enable Two-Step Verification via Email</label>
                        </div>
                    </div> */}
                </div>
              </div>
            </div>
          </form>
          {this.spinnerLoadingNotification()}
          {/* Button */}
          <div className="col-xl-12">
            <button form="change-password-form" type='submit' className="button button-sliding-icon ripple-effect big margin-top-30">
              Lưu thay đổi <i className="icon-feather-save" />
            </button>
          </div>
        </div>
        {/* Row / End */}
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
    onSendChangePW: (oldPW, newPW) => {
      dispatch(changePassword(oldPW, newPW));
    },
  };
};

const ChangePassword = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ChangePasswordComponent)
);
export default ChangePassword;
