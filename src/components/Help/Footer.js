import React, { Component } from 'react';
import Logo2 from '../../assets/images/logo2.png';

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

export default class Footer extends Component {
    render() {
        return (
            < div id = "footer" >
                {/* Footer Top Section */ }
                < div className = "footer-top-section" >
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                {/* Footer Rows Container */}
                                <div className="footer-rows-container">
                                    {/* Left Side */}
                                    <div className="footer-rows-left">
                                        <div className="footer-row">
                                            <div className="footer-row-inner footer-logo">
                                                <img src={Logo2} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Right Side */}
                                    <div className="footer-rows-right">
                                        {/* Social Icons */}
                                        <div className="footer-row">
                                            <div className="footer-row-inner">
                                                <ul className="footer-social-links">
                                                    <li>
                                                        <a href="#" title="Facebook" data-tippy-placement="bottom" data-tippy-theme="light">
                                                            <i className="icon-brand-facebook-f" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Twitter" data-tippy-placement="bottom" data-tippy-theme="light">
                                                            <i className="icon-brand-twitter" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Google Plus" data-tippy-placement="bottom" data-tippy-theme="light">
                                                            <i className="icon-brand-google-plus-g" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="LinkedIn" data-tippy-placement="bottom" data-tippy-theme="light">
                                                            <i className="icon-brand-linkedin-in" />
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="clearfix" />
                                            </div>
                                        </div>
                                        {/* Language Switcher */}
                                        <div className="footer-row">
                                            <div className="footer-row-inner">
                                                <select className="selectpicker language-switcher" data-selected-text-format="count" data-size={5} defaultValue={1}>
                                                    <option value={1}>English</option>
                                                    <option value={2}>Français</option>
                                                    <option value={3}>Español</option>
                                                    <option value={4}>Deutsch</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Footer Rows Container / End */}
                            </div>
                        </div>
                    </div>
</div >
                {/* Footer Top Section / End */ }
                
                {/* Footer Middle Section */ }
                <div className="footer-middle-section">
                    <div className="container">
                        <div className="row">
                            {/* Links */}
                            <div className="col-xl-2 col-lg-2 col-md-3">
                                <div className="footer-links">
                                    <h3>For Candidates</h3>
                                    <ul>
                                        <li><NavLink to="/"><span>Browse Jobs</span></NavLink></li>
                                        <li><NavLink to="/"><span>Add Resume</span></NavLink></li>
                                        <li><NavLink to="/"><span>Job Alerts</span></NavLink></li>
                                        <li><NavLink to="/"><span>My Bookmarks</span></NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Links */}
                            <div className="col-xl-2 col-lg-2 col-md-3">
                                <div className="footer-links">
                                    <h3>For Employers</h3>
                                    <ul>
                                        <li><NavLink to="/"><span>Browse Candidates</span></NavLink></li>
                                        <li><NavLink to="/"><span>Post a Job</span></NavLink></li>
                                        <li><NavLink to="/"><span>Post a Task</span></NavLink></li>
                                        <li><NavLink to="/"><span>Plans &amp; Pricing</span></NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Links */}
                            <div className="col-xl-2 col-lg-2 col-md-3">
                                <div className="footer-links">
                                    <h3>Helpful Links</h3>
                                    <ul>
                                        <li><NavLink to="/contact"><span>Contact</span></NavLink></li>
                                        <li><NavLink to="/"><span>Privacy Policy</span></NavLink></li>
                                        <li><NavLink to="/"><span>Terms of Use</span></NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Links */}
                            <div className="col-xl-2 col-lg-2 col-md-3">
                                <div className="footer-links">
                                    <h3>Account</h3>
                                    <ul>
                                        <li><NavLink to='/login'><span>Log In</span></NavLink></li>
                                        <li><NavLink to="/"><span>My Account</span></NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Newsletter */}
                            <div className="col-xl-4 col-lg-4 col-md-12">
                                <h3><i className="icon-feather-mail" /> Sign Up For a Newsletter</h3>
                                <p>Weekly breaking news, analysis and cutting edge advices on job searching.</p>
                                <form action="#" method="get" className="newsletter">
                                    <input type="text" name="fname" placeholder="Enter your email address" />
                                    <button type="submit"><i className="icon-feather-arrow-right" /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Middle Section / End */ }
       
                {/* Footer Copyrights */ }
                <div className="footer-bottom-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                © 2018 <strong>Hireo</strong>. All Rights Reserved.
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Copyrights / End */ }
            </div >            
        )
    }
}
