import React, { Component } from 'react';
import '../assets/css/style.css';
import '../assets/css/colors/blue.css';

// Image, khi mà vào project cần dùng ảnh của mình thì phải xóa mấy cái này
import Logo from '../assets/images/logo.png';
import Logo2 from '../assets/images/logo2.png';

import UserAvatarSmall1 from '../assets/images/user-avatar-small-01.jpg';
import UserAvatarSmall2 from '../assets/images/user-avatar-small-02.jpg';
import UserAvatarSmall3 from '../assets/images/user-avatar-small-03.jpg';
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
                {/* Wrapper */}
                <div id="wrapper">
                    {/* Header Container
================================================== */}
                    <header id="header-container" className="fullwidth">
                        {/* Header */}
                        <div id="header">
                            <div className="container">
                                {/* Left Side Content */}
                                <div className="left-side">
                                    {/* Logo */}
                                    <div id="logo">
                                        <a href="index.html"><img src={Logo} alt="" /></a>
                                    </div>
                                    {/* Main Navigation */}
                                    <nav id="navigation">
                                        <ul id="responsive">
                                            <li><a href="#">Home</a>
                                                <ul className="dropdown-nav">
                                                    <li><a href="index.html">Home 1</a></li>
                                                    <li><a href="index-2.html">Home 2</a></li>
                                                    <li><a href="index-3.html">Home 3</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#" className="current">Find Work</a>
                                                <ul className="dropdown-nav">
                                                    <li><a href="#">Browse Jobs</a>
                                                        <ul className="dropdown-nav">
                                                            <li><a href="jobs-list-layout-full-page-map.html">Full Page List + Map</a></li>
                                                            <li><a href="jobs-grid-layout-full-page-map.html">Full Page Grid + Map</a></li>
                                                            <li><a href="jobs-grid-layout-full-page.html">Full Page Grid</a></li>
                                                            <li><a href="jobs-list-layout-1.html">List Layout 1</a></li>
                                                            <li><a href="jobs-list-layout-2.html">List Layout 2</a></li>
                                                            <li><a href="jobs-grid-layout.html">Grid Layout</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Browse Tasks</a>
                                                        <ul className="dropdown-nav">
                                                            <li><a href="tasks-list-layout-1.html">List Layout 1</a></li>
                                                            <li><a href="tasks-list-layout-2.html">List Layout 2</a></li>
                                                            <li><a href="tasks-grid-layout.html">Grid Layout</a></li>
                                                            <li><a href="tasks-grid-layout-full-page.html">Full Page Grid</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="browse-companies.html">Browse Companies</a></li>
                                                    <li><a href="single-job-page.html">Job Page</a></li>
                                                    <li><a href="single-task-page.html">Task Page</a></li>
                                                    <li><a href="single-company-profile.html">Company Profile</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">For Employers</a>
                                                <ul className="dropdown-nav">
                                                    <li><a href="#">Find a Freelancer</a>
                                                        <ul className="dropdown-nav">
                                                            <li><a href="freelancers-grid-layout-full-page.html">Full Page Grid</a></li>
                                                            <li><a href="freelancers-grid-layout.html">Grid Layout</a></li>
                                                            <li><a href="freelancers-list-layout-1.html">List Layout 1</a></li>
                                                            <li><a href="freelancers-list-layout-2.html">List Layout 2</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="single-freelancer-profile.html">Freelancer Profile</a></li>
                                                    <li><a href="dashboard-post-a-job.html">Post a Job</a></li>
                                                    <li><a href="dashboard-post-a-task.html">Post a Task</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Dashboard</a>
                                                <ul className="dropdown-nav">
                                                    <li><a href="dashboard.html">Dashboard</a></li>
                                                    <li><a href="dashboard-messages.html">Messages</a></li>
                                                    <li><a href="dashboard-bookmarks.html">Bookmarks</a></li>
                                                    <li><a href="dashboard-reviews.html">Reviews</a></li>
                                                    <li><a href="dashboard-manage-jobs.html">Jobs</a>
                                                        <ul className="dropdown-nav">
                                                            <li><a href="dashboard-manage-jobs.html">Manage Jobs</a></li>
                                                            <li><a href="dashboard-manage-candidates.html">Manage Candidates</a></li>
                                                            <li><a href="dashboard-post-a-job.html">Post a Job</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="dashboard-manage-tasks.html">Tasks</a>
                                                        <ul className="dropdown-nav">
                                                            <li><a href="dashboard-manage-tasks.html">Manage Tasks</a></li>
                                                            <li><a href="dashboard-manage-bidders.html">Manage Bidders</a></li>
                                                            <li><a href="dashboard-my-active-bids.html">My Active Bids</a></li>
                                                            <li><a href="dashboard-post-a-task.html">Post a Task</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="dashboard-settings.html">Settings</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Pages</a>
                                                <ul className="dropdown-nav">
                                                    <li><a href="pages-blog.html">Blog</a></li>
                                                    <li><a href="pages-pricing-plans.html">Pricing Plans</a></li>
                                                    <li><a href="pages-checkout-page.html">Checkout Page</a></li>
                                                    <li><a href="pages-invoice-template.html">Invoice Template</a></li>
                                                    <li><a href="pages-user-interface-elements.html">User Interface Elements</a></li>
                                                    <li><a href="pages-icons-cheatsheet.html">Icons Cheatsheet</a></li>
                                                    <li><a href="pages-login.html">Login &amp; Register</a></li>
                                                    <li><a href="pages-404.html">404 Page</a></li>
                                                    <li><a href="pages-contact.html">Contact</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="clearfix" />
                                    {/* Main Navigation / End */}
                                </div>
                                {/* Left Side Content / End */}
                                {/* Right Side Content / End */}
                                <div className="right-side">
                                    {/*  User Notifications */}
                                    <div className="header-widget hide-on-mobile">
                                        {/* Notifications */}
                                        <div className="header-notifications">
                                            {/* Trigger */}
                                            <div className="header-notifications-trigger">
                                                <a href="#"><i className="icon-feather-bell" /><span>4</span></a>
                                            </div>
                                            {/* Dropdown */}
                                            <div className="header-notifications-dropdown">
                                                <div className="header-notifications-headline">
                                                    <h4>Notifications</h4>
                                                    <button className="mark-as-read ripple-effect-dark" title="Mark all as read" data-tippy-placement="left">
                                                        <i className="icon-feather-check-square" />
                                                    </button>
                                                </div>
                                                <div className="header-notifications-content">
                                                    <div className="header-notifications-scroll" data-simplebar>
                                                        <ul>
                                                            {/* Notification */}
                                                            <li className="notifications-not-read">
                                                                <a href="dashboard-manage-candidates.html">
                                                                    <span className="notification-icon"><i className="icon-material-outline-group" /></span>
                                                                    <span className="notification-text">
                                                                        <strong>Michael Shannah</strong> applied for a job <span className="color">Full Stack Software Engineer</span>
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            {/* Notification */}
                                                            <li>
                                                                <a href="dashboard-manage-bidders.html">
                                                                    <span className="notification-icon"><i className=" icon-material-outline-gavel" /></span>
                                                                    <span className="notification-text">
                                                                        <strong>Gilbert Allanis</strong> placed a bid on your <span className="color">iOS App Development</span> project
                            </span>
                                                                </a>
                                                            </li>
                                                            {/* Notification */}
                                                            <li>
                                                                <a href="dashboard-manage-jobs.html">
                                                                    <span className="notification-icon"><i className="icon-material-outline-autorenew" /></span>
                                                                    <span className="notification-text">
                                                                        Your job listing <span className="color">Full Stack PHP Developer</span> is expiring.
                            </span>
                                                                </a>
                                                            </li>
                                                            {/* Notification */}
                                                            <li>
                                                                <a href="dashboard-manage-candidates.html">
                                                                    <span className="notification-icon"><i className="icon-material-outline-group" /></span>
                                                                    <span className="notification-text">
                                                                        <strong>Sindy Forrest</strong> applied for a job <span className="color">Full Stack Software Engineer</span>
                                                                    </span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Messages */}
                                        <div className="header-notifications">
                                            <div className="header-notifications-trigger">
                                                <a href="#"><i className="icon-feather-mail" /><span>3</span></a>
                                            </div>
                                            {/* Dropdown */}
                                            <div className="header-notifications-dropdown">
                                                <div className="header-notifications-headline">
                                                    <h4>Messages</h4>
                                                    <button className="mark-as-read ripple-effect-dark" title="Mark all as read" data-tippy-placement="left">
                                                        <i className="icon-feather-check-square" />
                                                    </button>
                                                </div>
                                                <div className="header-notifications-content">
                                                    <div className="header-notifications-scroll" data-simplebar>
                                                        <ul>
                                                            {/* Notification */}
                                                            <li className="notifications-not-read">
                                                                <a href="dashboard-messages.html">
                                                                    <span className="notification-avatar status-online"><img src={UserAvatarSmall3} alt="" /></span>
                                                                    <div className="notification-text">
                                                                        <strong>David Peterson</strong>
                                                                        <p className="notification-msg-text">Thanks for reaching out. I'm quite busy right now on many...</p>
                                                                        <span className="color">4 hours ago</span>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            {/* Notification */}
                                                            <li className="notifications-not-read">
                                                                <a href="dashboard-messages.html">
                                                                    <span className="notification-avatar status-offline"><img src={UserAvatarSmall2} alt="" /></span>
                                                                    <div className="notification-text">
                                                                        <strong>Sindy Forest</strong>
                                                                        <p className="notification-msg-text">Hi Tom! Hate to break it to you, but I'm actually on vacation until...</p>
                                                                        <span className="color">Yesterday</span>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            {/* Notification */}
                                                            <li className="notifications-not-read">
                                                                <a href="dashboard-messages.html">
                                                                    <span className="notification-avatar status-online"><img src={UserAvatarPlaceholder} alt="" /></span>
                                                                    <div className="notification-text">
                                                                        <strong>Marcin Kowalski</strong>
                                                                        <p className="notification-msg-text">I received payment. Thanks for cooperation!</p>
                                                                        <span className="color">Yesterday</span>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <a href="dashboard-messages.html" className="header-notifications-button ripple-effect button-sliding-icon">View All Messages<i className="icon-material-outline-arrow-right-alt" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  User Notifications / End */}
                                    {/* User Menu */}
                                    <div className="header-widget">
                                        {/* Messages */}
                                        <div className="header-notifications user-menu">
                                            <div className="header-notifications-trigger">
                                                <a href="#"><div className="user-avatar status-online"><img src={UserAvatarSmall1} alt="" /></div></a>
                                            </div>
                                            {/* Dropdown */}
                                            <div className="header-notifications-dropdown">
                                                {/* User Status */}
                                                <div className="user-status">
                                                    {/* User Name / Avatar */}
                                                    <div className="user-details">
                                                        <div className="user-avatar status-online"><img src={UserAvatarSmall1} alt="" /></div>
                                                        <div className="user-name">
                                                            Tom Smith <span>Freelancer</span>
                                                        </div>
                                                    </div>
                                                    {/* User Status Switcher */}
                                                    <div className="status-switch" id="snackbar-user-status">
                                                        <label className="user-online current-status">Online</label>
                                                        <label className="user-invisible">Invisible</label>
                                                        {/* Status Indicator */}
                                                        <span className="status-indicator" aria-hidden="true" />
                                                    </div>
                                                </div>
                                                <ul className="user-menu-small-nav">
                                                    <li><a href="dashboard.html"><i className="icon-material-outline-dashboard" /> Dashboard</a></li>
                                                    <li><a href="dashboard-settings.html"><i className="icon-material-outline-settings" /> Settings</a></li>
                                                    <li><a href="index-logged-out.html"><i className="icon-material-outline-power-settings-new" /> Logout</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* User Menu / End */}
                                    {/* Mobile Navigation Button */}
                                    <span className="mmenu-trigger">
                                        <button className="hamburger hamburger--collapse" type="button">
                                            <span className="hamburger-box">
                                                <span className="hamburger-inner" />
                                            </span>
                                        </button>
                                    </span>
                                </div>
                                {/* Right Side Content / End */}
                            </div>
                        </div>
                        {/* Header / End */}
                    </header>
                    <div className="clearfix" />
                    {/* Header Container / End */}
                    {/* Titlebar
================================================== */}
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
                    {/* Footer
================================================== */}
                    <div id="footer">
                        {/* Footer Top Section */}
                        <div className="footer-top-section">
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
                                                        <select className="selectpicker language-switcher" defaultValue={1} data-selected-text-format="count" data-size={5}>
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
                        </div>
                        {/* Footer Top Section / End */}
                        {/* Footer Middle Section */}
                        <div className="footer-middle-section">
                            <div className="container">
                                <div className="row">
                                    {/* Links */}
                                    <div className="col-xl-2 col-lg-2 col-md-3">
                                        <div className="footer-links">
                                            <h3>For Candidates</h3>
                                            <ul>
                                                <li><a href="#"><span>Browse Jobs</span></a></li>
                                                <li><a href="#"><span>Add Resume</span></a></li>
                                                <li><a href="#"><span>Job Alerts</span></a></li>
                                                <li><a href="#"><span>My Bookmarks</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Links */}
                                    <div className="col-xl-2 col-lg-2 col-md-3">
                                        <div className="footer-links">
                                            <h3>For Employers</h3>
                                            <ul>
                                                <li><a href="#"><span>Browse Candidates</span></a></li>
                                                <li><a href="#"><span>Post a Job</span></a></li>
                                                <li><a href="#"><span>Post a Task</span></a></li>
                                                <li><a href="#"><span>Plans &amp; Pricing</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Links */}
                                    <div className="col-xl-2 col-lg-2 col-md-3">
                                        <div className="footer-links">
                                            <h3>Helpful Links</h3>
                                            <ul>
                                                <li><a href="#"><span>Contact</span></a></li>
                                                <li><a href="#"><span>Privacy Policy</span></a></li>
                                                <li><a href="#"><span>Terms of Use</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Links */}
                                    <div className="col-xl-2 col-lg-2 col-md-3">
                                        <div className="footer-links">
                                            <h3>Account</h3>
                                            <ul>
                                                <li><a href="#"><span>Log In</span></a></li>
                                                <li><a href="#"><span>My Account</span></a></li>
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
                        {/* Footer Middle Section / End */}
                        {/* Footer Copyrights */}
                        <div className="footer-bottom-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        © 2018 <strong>Hireo</strong>. All Rights Reserved.
            </div>
                                </div>
                            </div>
                        </div>
                        {/* Footer Copyrights / End */}
                    </div>
                    {/* Footer / End */}
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
