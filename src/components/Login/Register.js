import React, { Component } from 'react';
import Header from '../Help/Header';

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class RegisterComponent extends Component {
    render() {
        return (
            <div>
                {/* Titlebar ================================================== */}
                <div id="titlebar" className="gradient">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Register</h2>
                                {/* Breadcrumbs */}
                                <nav id="breadcrumbs" className="dark">
                                    <ul>
                                        <li><NavLink to='/home'>Home</NavLink></li>
                                        <li>Register</li>
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
                                    <h3 style={{ fontSize: '26px' }}>Let's create your account!</h3>
                                    <span>Already have an account? <NavLink to='/login'>Log In!</NavLink></span>
                                </div>
                                {/* Account Type */}
                                <div className="account-type">
                                    <div>
                                        <input type="radio" name="account-type-radio" id="freelancer-radio" className="account-type-radio" defaultChecked />
                                        <label htmlFor="freelancer-radio" className="ripple-effect-dark"><i className="icon-material-outline-account-circle" /> Freelancer</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="account-type-radio" id="employer-radio" className="account-type-radio" />
                                        <label htmlFor="employer-radio" className="ripple-effect-dark"><i className="icon-material-outline-business-center" /> Employer</label>
                                    </div>
                                </div>
                                {/* Form */}
                                <form method="post" id="register-account-form">
                                    <div className="input-with-icon-left">
                                        <i className="icon-material-baseline-mail-outline" />
                                        <input type="text" className="input-text with-border" name="emailaddress-register" id="emailaddress-register" placeholder="Email Address" required />
                                    </div>
                                    <div className="input-with-icon-left" title="Should be at least 8 characters long" data-tippy-placement="bottom">
                                        <i className="icon-material-outline-lock" />
                                        <input type="password" className="input-text with-border" name="password-register" id="password-register" placeholder="Password" required />
                                    </div>
                                    <div className="input-with-icon-left">
                                        <i className="icon-material-outline-lock" />
                                        <input type="password" className="input-text with-border" name="password-repeat-register" id="password-repeat-register" placeholder="Repeat Password" required />
                                    </div>
                                </form>
                                {/* Button */}
                                <button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit" form="login-form">Register <i className="icon-material-outline-arrow-right-alt" /></button>
                                {/* Social Login */}
                                <div className="social-login-separator"><span>or</span></div>
                                <div className="social-login-buttons">
                                    <button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f" /> Register via Facebook</button>
                                    <button className="google-login ripple-effect"><i className="icon-brand-google-plus-g" /> Register via Google+</button>
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

const Register = withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterComponent));
export default Register;