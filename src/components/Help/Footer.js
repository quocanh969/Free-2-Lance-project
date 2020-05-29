import React, { Component } from 'react';
import Logo2 from '../../assets/images/logo2.png';

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return (
            < div id = "footer" >                
                
                <div className="footer-middle-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-12 border-right border-secondary">
                                <img src={Logo2}></img>
                            </div>
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
                                    <h3>Người ứng tuyển</h3>
                                    <ul>
                                        <li><NavLink to="/search"><span>Tìm kiếm công việc</span></NavLink></li>
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
                            
                            {/* Tài khoản */}
                            <div className="col-xl-2 col-lg-2 col-md-3">
                                <div className="footer-links">
                                    <h3>Tài khoản</h3>
                                    <ul>     

                                        <li><NavLink to='/login'><span>Log In</span></NavLink></li>
                                        <li><NavLink to="/dashboard"><span>Tài khoản của tôi</span></NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
                
       
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
