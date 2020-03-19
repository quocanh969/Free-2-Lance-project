import React, { Component } from 'react';
import Header from './Header';
import '../assets/css/style.css';
import '../assets/css/colors/blue.css';

// Image, khi mà vào project cần dùng ảnh của mình thì phải xóa mấy cái này
import Logo2 from '../assets/images/logo2.png';

import UserAvatarPlaceholder from '../assets/images/user-avatar-placeholder.png';

import GBFlag from '../assets/images/flags/gb.svg';
import CompanyLogo2a from '../assets/images/company-logo-02.png';
import CompanyLogo3a from '../assets/images/company-logo-03.png';

import BackgroundSingleJob from '../assets/images/single-job.jpg';

export default class JobDetail extends Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "./assets/maps.js";
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        return (
            <div>

                    <div className="single-page-header" data-background-image={BackgroundSingleJob}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="single-page-header-inner">
                                        <div className="left-side">
                                            <div className="header-image"><a href="single-company-profile.html"><img src={CompanyLogo3a} alt="" /></a></div>
                                            <div className="header-details">
                                                <h3>Restaurant General Manager</h3>
                                                <h5>About the Employer</h5>
                                                <ul>
                                                    <li><a href="single-company-profile.html"><i className="icon-material-outline-business" /> King</a></li>
                                                    <li><div className="star-rating" data-rating="4.9" /></li>
                                                    <li><img className="flag" src={GBFlag} alt="" /> United Kingdom</li>
                                                    <li><div className="verified-badge-with-title">Verified</div></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="right-side">
                                            <div className="salary-box">
                                                <div className="salary-type">Annual Salary</div>
                                                <div className="salary-amount">$35k - $38k</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Page Content
================================================== */}
                    <div className="container">
                        <div className="row">
                            {/* Content */}
                            <div className="col-xl-8 col-lg-8 content-right-offset">
                                <div className="single-page-section">
                                    <h3 className="margin-bottom-25">Job Description</h3>
                                    <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                                    <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                                    <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                                </div>
                                <div className="single-page-section">
                                    <h3 className="margin-bottom-30">Location</h3>
                                    <div id="single-job-map-container">
                                        <div id="singleListingMap" data-latitude="51.507717" data-longitude="-0.131095" data-map-icon="im im-icon-Hamburger" />
                                        <a href="#" id="streetView">Street View</a>
                                        {/* Chức năng hiện đang trong quá trình phát triển, vui lòng quay lại sau */}
                                    </div>
                                </div>
                                <div className="single-page-section">
                                    <h3 className="margin-bottom-25">Similar Jobs</h3>
                                    {/* Listings Container */}
                                    <div className="listings-container grid-layout">
                                        {/* Job Listing */}
                                        <a href="#" className="job-listing">
                                            {/* Job Listing Details */}
                                            <div className="job-listing-details">
                                                {/* Logo */}
                                                <div className="job-listing-company-logo">
                                                    <img src={CompanyLogo2a} alt="" />
                                                </div>
                                                {/* Details */}
                                                <div className="job-listing-description">
                                                    <h4 className="job-listing-company">Coffee</h4>
                                                    <h3 className="job-listing-title">Barista and Cashier</h3>
                                                </div>
                                            </div>
                                            {/* Job Listing Footer */}
                                            <div className="job-listing-footer">
                                                <ul>
                                                    <li><i className="icon-material-outline-location-on" /> San Francisco</li>
                                                    <li><i className="icon-material-outline-business-center" /> Full Time</li>
                                                    <li><i className="icon-material-outline-account-balance-wallet" /> $35000-$38000</li>
                                                    <li><i className="icon-material-outline-access-time" /> 2 days ago</li>
                                                </ul>
                                            </div>
                                        </a>
                                        {/* Job Listing */}
                                        <a href="#" className="job-listing">
                                            {/* Job Listing Details */}
                                            <div className="job-listing-details">
                                                {/* Logo */}
                                                <div className="job-listing-company-logo">
                                                    <img src={CompanyLogo3a} alt="" />
                                                </div>
                                                {/* Details */}
                                                <div className="job-listing-description">
                                                    <h4 className="job-listing-company">King <span className="verified-badge" title="Verified Employer" data-tippy-placement="top" /></h4>
                                                    <h3 className="job-listing-title">Restaurant Manager</h3>
                                                </div>
                                            </div>
                                            {/* Job Listing Footer */}
                                            <div className="job-listing-footer">
                                                <ul>
                                                    <li><i className="icon-material-outline-location-on" /> San Francisco</li>
                                                    <li><i className="icon-material-outline-business-center" /> Full Time</li>
                                                    <li><i className="icon-material-outline-account-balance-wallet" /> $35000-$38000</li>
                                                    <li><i className="icon-material-outline-access-time" /> 2 days ago</li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Listings Container / End */}
                                </div>
                            </div>
                            {/* Sidebar */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="sidebar-container">
                                    <a href="#small-dialog" className="apply-now-button popup-with-zoom-anim">Apply Now <i className="icon-material-outline-arrow-right-alt" /></a>
                                    {/* Sidebar Widget */}
                                    <div className="sidebar-widget">
                                        <div className="job-overview">
                                            <div className="job-overview-headline">Job Summary</div>
                                            <div className="job-overview-inner">
                                                <ul>
                                                    <li>
                                                        <i className="icon-material-outline-location-on" />
                                                        <span>Location</span>
                                                        <h5>London, United Kingdom</h5>
                                                    </li>
                                                    <li>
                                                        <i className="icon-material-outline-business-center" />
                                                        <span>Job Type</span>
                                                        <h5>Full Time</h5>
                                                    </li>
                                                    <li>
                                                        <i className="icon-material-outline-local-atm" />
                                                        <span>Salary</span>
                                                        <h5>$35k - $38k</h5>
                                                    </li>
                                                    <li>
                                                        <i className="icon-material-outline-access-time" />
                                                        <span>Date Posted</span>
                                                        <h5>2 days ago</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Sidebar Widget */}
                                    <div className="sidebar-widget">
                                        <h3>Bookmark or Share</h3>
                                        {/* Bookmark Button */}
                                        <button className="bookmark-button margin-bottom-25">
                                            <span className="bookmark-icon" />
                                            <span className="bookmark-text">Bookmark</span>
                                            <span className="bookmarked-text">Bookmarked</span>
                                        </button>
                                        {/* Copy URL */}
                                        <div className="copy-url">
                                            <input id="copy-url" type="text" defaultValue className="with-border" />
                                            <button className="copy-url-button ripple-effect" data-clipboard-target="#copy-url" title="Copy to Clipboard" data-tippy-placement="top"><i className="icon-material-outline-file-copy" /></button>
                                        </div>
                                        {/* Share Buttons */}
                                        <div className="share-buttons margin-top-25">
                                            <div className="share-buttons-trigger"><i className="icon-feather-share-2" /></div>
                                            <div className="share-buttons-content">
                                                <span>Interesting? <strong>Share It!</strong></span>
                                                <ul className="share-buttons-icons">
                                                    <li><a href="#" data-button-color="#3b5998" title="Share on Facebook" data-tippy-placement="top"><i className="icon-brand-facebook-f" /></a></li>
                                                    <li><a href="#" data-button-color="#1da1f2" title="Share on Twitter" data-tippy-placement="top"><i className="icon-brand-twitter" /></a></li>
                                                    <li><a href="#" data-button-color="#dd4b39" title="Share on Google Plus" data-tippy-placement="top"><i className="icon-brand-google-plus-g" /></a></li>
                                                    <li><a href="#" data-button-color="#0077b5" title="Share on LinkedIn" data-tippy-placement="top"><i className="icon-brand-linkedin-in" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                {/* Wrapper / End */}
                {/* Apply for a job popup
================================================== */}
                <div id="small-dialog" className="zoom-anim-dialog mfp-hide dialog-with-tabs">
                    {/*Tabs */}
                    <div className="sign-in-form">
                        <ul className="popup-tabs-nav">
                            <li><a href="#tab">Apply Now</a></li>
                        </ul>
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
                                <button className="button margin-top-35 full-width button-sliding-icon ripple-effect" type="submit" form="apply-now-form">Apply Now <i className="icon-material-outline-arrow-right-alt" /></button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Apply for a job popup / End */}
            </div>

        )
    }
}
