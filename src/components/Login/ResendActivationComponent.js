import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { resendActivation } from "../../actions/Activation";

class ResendActivationComponent extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        let { onSendRequest } = this.props;
        let email = this.refs.email.value;
        this.refs.email.value = '';
        onSendRequest(email);
    }

    spinnerLoadingNotification() {
        let content = [];
        let { sending, status, message } = this.props.ResendActivationReducer;
        if (!sending && status === 0) {
            // do nothing
        } else if (sending && status === 0) {
            // sending
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
                    {message} <br></br>
                </div>
            );

        } else {
            /// success ...{
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
                                <h2>Kích hoạt tài khoản</h2>
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
                                    <h3>Yêu cầu gửi lại mã kích hoạt thông qua mail</h3>
                                    <br></br>
                                    <span>
                                        Nhập vào địa chỉ mail của bạn và hệ thống sẽ gửi lại một mail kích hoạt khác
                                    </span>
                                    <br/>
                                    {/* Form */}
                                    <form
                                        method="post"
                                        id="request-activation-form"
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
                                        form="request-activation-form"
                                    >
                                        Gửi yêu cầu{" "}
                                        <i className="icon-material-outline-arrow-right-alt" />
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
        onSendRequest: (email) => {
            dispatch(resendActivation(email));
        },
    };
};

const ResendAccountActivation = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ResendActivationComponent),
);
export default ResendAccountActivation;