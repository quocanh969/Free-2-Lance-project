import React, { Component } from 'react';
import Header from '../Header';

import { NavLink } from 'react-router-dom';

export default class ForgetPassword extends Component {
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
                                <form method="post" id="login-form">
                                    <div className="input-with-icon-left">
                                        <i className="icon-material-baseline-mail-outline" />
                                        <input type="email" className="input-text with-border" name="emailaddress" id="emailaddress" placeholder="Email Address" required />
                                    </div>
                                </form>
                                {/* Button */}
                                <button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit" form="login-form">Send Email <i className="icon-material-outline-arrow-right-alt" /></button>                                
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
