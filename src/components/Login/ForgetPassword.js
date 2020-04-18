import React, { Component } from 'react';

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendForgetPassword } from '../../actions/Login';
import reducer from '../../reducers/reducer';

class ForgetPasswordComponent extends Component {

    sendForgetPWReq() {
        console.log(this.props);
        let {onSend} = this.props;

        onSend('123456');
    }

    noticeRequest() {
        let {sending, status, message} = this.props.ForgetPWReducer;

        if(status === 0 && sending)
        {
            return (
                <h1>SENDING</h1>
            )
        }
        else if(status === 1)
        {
            return (
                <h1>SUCCESS</h1>
            )
        }
        else if(status === -1)
        {
            return (
                <h1>FAILURE</h1>
            )
        }
        else
        {
            return null;
        }
    }

    render() {
        return (
            <div>
                {/* Titlebar ================================================== */}
                <div id="titlebar" className="gradient">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Forgot Password</h2>
                                {/* Breadcrumbs */}
                                <nav id="breadcrumbs" className="dark">
                                    <ul>
                                        <li><NavLink to='/home'>Home</NavLink></li>
                                        <li>Forgot Password</li>
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
                                    <h3>We're sorry to heard that you forgot your password</h3>
                                    <br></br>
                                    <span>Type in your email to get it back via email confirmation</span>
                                    <span>If you remembered it, get back to <NavLink to='/login'>Sign In!</NavLink></span>
                                </div>
                                {/* Form */}
                                {/* <form method="post" id="login-form">
                                    <div className="input-with-icon-left">
                                        <i className="icon-material-baseline-mail-outline" />
                                        <input type="email" className="input-text with-border" name="emailaddress" id="emailaddress" placeholder="Email Address" required />
                                    </div>
                                </form> */}
                                {/* Button */}
                                {this.noticeRequest()}
                                <button onClick={()=>{this.sendForgetPWReq()}} className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit" form="login-form">Send Email <i className="icon-material-outline-arrow-right-alt" /></button>                                
                            </div>
                        </div>
                    </div>
                </div>
                {/* Spacer */}
                <div className="margin-top-70" />
                {/* Spacer / End*/}
            </div>
        )
    }
}

// === Container

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        onSend: email => {            
            dispatch(sendForgetPassword(email));
        },
    }
}

const ForgetPassword = withRouter(connect(mapStateToProps, mapDispatchToProps)(ForgetPasswordComponent));
export default ForgetPassword;