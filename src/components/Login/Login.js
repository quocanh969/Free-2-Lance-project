import React, { Component } from 'react';
import Header from '../Help/Header';

import {withRouter, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

class LoginComponent extends Component {  
    
    render() {
        return (
            <div>
                {/* Titlebar ================================================== */}
                <div id="titlebar" className="gradient">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Log In</h2>
                                {/* Breadcrumbs */}
                                <nav id="breadcrumbs" className="dark">
                                    <ul>
                                        <li><NavLink to='/home'>Home</NavLink></li>
                                        <li>Log In</li>
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
                                    <h3>We're glad to see you again!</h3>
                                    <span>Don't have an account? <NavLink to='/register'>Sign Up!</NavLink></span>
                                </div>
                                {/* Form */}
                                <form method="post" id="login-form">
                                    <div className="input-with-icon-left">
                                        <i className="icon-material-baseline-mail-outline" />
                                        <input type="text" className="input-text with-border" name="emailaddress" id="emailaddress" placeholder="Email Address" required />
                                    </div>
                                    <div className="input-with-icon-left">
                                        <i className="icon-material-outline-lock" />
                                        <input type="password" className="input-text with-border" name="password" id="password" placeholder="Password" required />
                                    </div>
                                    <NavLink to='/forgot-password' className="forgot-password">Forgot Password?</NavLink>
                                </form>
                                {/* Button */}
                                <button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit" form="login-form">Log In <i className="icon-material-outline-arrow-right-alt" /></button>
                                {/* Social Login */}
                                <div className="social-login-separator"><span>or</span></div>
                                <div className="social-login-buttons">
                                    <button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f" /> Log In via Facebook</button>
                                    <button className="google-login ripple-effect"><i className="icon-brand-google-plus-g" /> Log In via Google+</button>
                                </div>
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
        
    }
}

const Login = withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginComponent));
export default Login;