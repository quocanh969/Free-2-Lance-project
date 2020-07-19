import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { accountActivation } from "../../actions/Activation";

class accountActivationComponent extends Component {
    constructor(props) {
        super(props);
        this.routeParam = props.match.params.activationToken;
    };

    // handleSubmit(e) {
    //     e.preventDefault();
    //     let { onSendActivationRequest } = this.props;
    //     let token = this.routeParam;
    //     console.log("TOKEN: " + token);
    //     onSendActivationRequest(token);
    // }

    componentDidMount() {
        let { onSendActivationRequest } = this.props;
        let token = this.routeParam;
        console.log("Token:  " + token);
        onSendActivationRequest(token);
    }

    spinnerLoadingNotification() {
        let content = [];
        let { sending, status, message } = this.props.ActivationReducer;
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
                    <NavLink to="/requestActivation">Gửi lại mã mới?</NavLink>
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
                                <h2>Account Activation</h2>
                                {/* Breadcrumbs */}
                                <nav id="breadcrumbs" className="dark">
                                    <ul>
                                        <li>
                                            <NavLink to="/">Home</NavLink>
                                        </li>
                                        <li>Account Activation</li>
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
                                    <h3>Activating your newly signed up account</h3>
                                    <br></br>
                                </div>
                                {this.spinnerLoadingNotification()}
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
        onSendActivationRequest: (token) => {
            dispatch(accountActivation(token));
        },
    };
};

const AccountActivation = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(accountActivationComponent)
);
export default AccountActivation;