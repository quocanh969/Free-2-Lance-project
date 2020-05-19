import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class ApplyFormConponent extends Component {
    render() {
        return (
            <div className="sign-in-form">
                <div className="popup-tabs-container">
                    {/* Tab */}
                    <div className="popup-tab-content" id="tab">
                        {/* Welcome Text */}
                        <div className="welcome-text">
                            <h3>Attach File With CV</h3>
                        </div>
                        {/* Form */}
                        <form method="post" id="apply-now-form">
                            <div className="input-with-icon-left">
                                <i className="icon-material-outline-account-circle" />
                                <input type="text" className="input-text with-border" name="name" id="name" placeholder="First and Last Name" required />
                            </div>
                            <div className="input-with-icon-left">
                                <i className="icon-material-baseline-mail-outline" />
                                <input type="text" className="input-text with-border" name="emailaddress" id="emailaddress" placeholder="Email Address" required />
                            </div>
                            <div className="uploadButton">
                                <input className="uploadButton-input" type="file" accept="image/*, application/pdf" id="upload-cv" />
                                <label className="uploadButton-button ripple-effect" htmlFor="upload-cv">Select File</label>
                                <span className="uploadButton-file-name">Upload your CV / resume relevant file. <br /> Max. file size: 50 MB.</span>
                            </div>
                        </form>
                        {/* Button */}
                        <button className="button margin-top-35 w-100 button-sliding-icon ripple-effect" type="submit" form="apply-now-form">Apply Now <i className="icon-material-outline-arrow-right-alt" /></button>
                    </div>
                </div>
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

const ApplyForm = withRouter(connect(mapStateToProps, mapDispatchToProps)(ApplyFormConponent));
export default ApplyForm;
