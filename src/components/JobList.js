import React, { Component } from 'react';
import MapContainer from './map_JobsList';

// Image, khi mà vào project cần dùng ảnh của mình thì phải xóa mấy cái này
import Logo from '../assets/images/logo.png';
import CompanyLogo1 from '../assets/images/company-logo-01.png';
import CompanyLogo2 from '../assets/images/company-logo-02.png';
import CompanyLogo3 from '../assets/images/company-logo-03.png';
import CompanyLogo4 from '../assets/images/company-logo-04.png';
import CompanyLogo5 from '../assets/images/company-logo-05.png';
import CompanyLogo6 from '../assets/images/company-logo-06.png';

import UserAvatarSmall1 from '../assets/images/user-avatar-small-01.jpg';
import UserAvatarSmall2 from '../assets/images/user-avatar-small-02.jpg';
import UserAvatarSmall3 from '../assets/images/user-avatar-small-03.jpg';
import UserAvatarPlaceholder from '../assets/images/user-avatar-placeholder.png';

export default class JobList extends Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "./assets/maps.js";
        script.async = true;
        document.body.appendChild(script);
    }

    state = {
        places: [
            {
                name: "Sydney",
                title: "Sydney",
                position: { lat: -33.847927, lng: 150.6517938 }
            },
            {
                name: "Melbourne",
                title: "Melbourne",
                position: { lat: -37.9722342, lng: 144.7729561 }
            },
            {
                name: "Perth",
                title: "Perth",
                position: { lat: -31.9546904, lng: 115.8350292 }
            }
        ]
    }

    render() {
        return (
            <div id="wrapper" >
                {/* Header Container
================================================== */}
                < header id="header-container" className="fullwidth not-sticky" >
                    {/* Header */}
                    < div id="header" >
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
                {/* Page Content
================================================== */}
                <div className="full-page-container with-map">
                    <div className="full-page-sidebar hidden-sidebar">
                        <div className="full-page-sidebar-inner" data-simplebar>
                            <div className="sidebar-container">
                                {/* Keywords */}
                                <div className="sidebar-widget">
                                    <h3>Keywords</h3>
                                    <div className="keywords-container">
                                        <div className="keyword-input-container">
                                            <input type="text" className="keyword-input" placeholder="e.g. job title" />
                                            <button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add" /></button>
                                        </div>
                                        <div className="keywords-list">{/* keywords go here */}</div>
                                        <div className="clearfix" />
                                    </div>
                                </div>
                                {/* Category */}
                                <div className="sidebar-widget">
                                    <h3>Category</h3>
                                    <select className="selectpicker default" multiple data-selected-text-format="count" data-size={7} title="All Categories">
                                        <option value={1}>Admin Support</option>
                                        <option value={2}>Customer Service</option>
                                        <option value={3}>Data Analytics</option>
                                        <option value={4}>Design &amp; Creative</option>
                                        <option value={5}>Legal</option>
                                        <option value={6}>Software Developing</option>
                                        <option value={7}>IT &amp; Networking</option>
                                        <option value={8}>Writing</option>
                                        <option value={9}>Translation</option>
                                        <option value={10}>Sales &amp; Marketing</option>
                                    </select>
                                </div>
                                {/* Job Types */}
                                <div className="sidebar-widget">
                                    <h3>Job Type</h3>
                                    <div className="switches-list">
                                        <div className="switch-container">
                                            <label className="switch"><input type="checkbox" /><span className="switch-button" /> Freelance</label>
                                        </div>
                                        <div className="switch-container">
                                            <label className="switch"><input type="checkbox" /><span className="switch-button" /> Full Time</label>
                                        </div>
                                        <div className="switch-container">
                                            <label className="switch"><input type="checkbox" /><span className="switch-button" /> Part Time</label>
                                        </div>
                                        <div className="switch-container">
                                            <label className="switch"><input type="checkbox" /><span className="switch-button" /> Internship</label>
                                        </div>
                                        <div className="switch-container">
                                            <label className="switch"><input type="checkbox" /><span className="switch-button" /> Temporary</label>
                                        </div>
                                    </div>
                                </div>
                                {/* Salary */}
                                <div className="sidebar-widget">
                                    <h3>Salary</h3>
                                    <div className="margin-top-55" />
                                    {/* Range Slider */}
                                    <input className="range-slider" type="text" defaultValue data-slider-currency="$" data-slider-min={1500} data-slider-max={15000} data-slider-step={100} data-slider-value="[1500,15000]" />
                                </div>
                                {/* Tags */}
                                <div className="sidebar-widget">
                                    <h3>Tags</h3>
                                    <div className="tags-container">
                                        <div className="tag">
                                            <input type="checkbox" id="tag1" />
                                            <label htmlFor="tag1">front-end dev</label>
                                        </div>
                                        <div className="tag">
                                            <input type="checkbox" id="tag2" />
                                            <label htmlFor="tag2">angular</label>
                                        </div>
                                        <div className="tag">
                                            <input type="checkbox" id="tag3" />
                                            <label htmlFor="tag3">react</label>
                                        </div>
                                        <div className="tag">
                                            <input type="checkbox" id="tag4" />
                                            <label htmlFor="tag4">vue js</label>
                                        </div>
                                        <div className="tag">
                                            <input type="checkbox" id="tag5" />
                                            <label htmlFor="tag5">web apps</label>
                                        </div>
                                        <div className="tag">
                                            <input type="checkbox" id="tag6" />
                                            <label htmlFor="tag6">design</label>
                                        </div>
                                        <div className="tag">
                                            <input type="checkbox" id="tag7" />
                                            <label htmlFor="tag7">wordpress</label>
                                        </div>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                            </div>
                            {/* Sidebar Container / End */}
                            {/* Search Button */}
                            <div className="sidebar-search-button-container">
                                <button className="button ripple-effect">Search</button>
                            </div>
                            {/* Search Button / End*/}
                        </div>
                    </div>
                    {/* Full Page Sidebar / End */}
                    {/* Full Page Content */}
                    <div className="full-page-content-container" data-simplebar>
                        <div className="full-page-content-inner">
                            <h3 className="page-title">Search Results</h3>
                            <div className="notify-box margin-top-15">
                                <div className="switch-container">
                                    <label className="switch"><input type="checkbox" /><span className="switch-button" /><span className="switch-text">Turn on email alerts for this search</span></label>
                                </div>
                                <div className="sort-by">
                                    <span>Sort by:</span>
                                    <select className="selectpicker hide-tick">
                                        <option value={1}>Relevance</option>
                                        <option value={2}>Newest</option>
                                        <option value={3}>Oldest</option>
                                        <option value={4}>Random</option>
                                    </select>
                                </div>
                            </div>
                            <div className="listings-container grid-layout margin-top-35">
                                {/* Job Listing */}
                                <a href="single-job-page.html" className="job-listing">
                                    {/* Job Listing Details */}
                                    <div className="job-listing-details">
                                        {/* Logo */}
                                        <div className="job-listing-company-logo">
                                            <img src={CompanyLogo1} alt="" />
                                        </div>
                                        {/* Details */}
                                        <div className="job-listing-description">
                                            <h4 className="job-listing-company">Hexagon <span className="verified-badge" title="Verified Employer" data-tippy-placement="top" /></h4>
                                            <h3 className="job-listing-title">Bilingual Event Support Specialist</h3>
                                        </div>
                                    </div>
                                    {/* Job Listing Footer */}
                                    <div className="job-listing-footer">
                                        <span className="bookmark-icon" />
                                        <ul>
                                            <li><i className="icon-material-outline-location-on" /> San Francisco</li>
                                            <li><i className="icon-material-outline-business-center" /> Full Time</li>
                                            <li><i className="icon-material-outline-account-balance-wallet" /> $35000-$38000</li>
                                            <li><i className="icon-material-outline-access-time" /> 2 days ago</li>
                                        </ul>
                                    </div>
                                </a>
                                {/* Job Listing */}
                                <a href="single-job-page.html" className="job-listing">
                                    {/* Job Listing Details */}
                                    <div className="job-listing-details">
                                        {/* Logo */}
                                        <div className="job-listing-company-logo">
                                            <img src={CompanyLogo5} alt="" />
                                        </div>
                                        {/* Details */}
                                        <div className="job-listing-description">
                                            <h4 className="job-listing-company">Laxo</h4>
                                            <h3 className="job-listing-title">Competition Law Officer</h3>
                                        </div>
                                    </div>
                                    {/* Job Listing Footer */}
                                    <div className="job-listing-footer">
                                        <span className="bookmark-icon" />
                                        <ul>
                                            <li><i className="icon-material-outline-location-on" /> San Francisco</li>
                                            <li><i className="icon-material-outline-business-center" /> Full Time</li>
                                            <li><i className="icon-material-outline-account-balance-wallet" /> $35000-$38000</li>
                                            <li><i className="icon-material-outline-access-time" /> 2 days ago</li>
                                        </ul>
                                    </div>
                                </a>
                                {/* Job Listing */}
                                <a href="single-job-page.html" className="job-listing">
                                    {/* Job Listing Details */}
                                    <div className="job-listing-details">
                                        {/* Logo */}
                                        <div className="job-listing-company-logo">
                                            <img src={CompanyLogo2} alt="" />
                                        </div>
                                        {/* Details */}
                                        <div className="job-listing-description">
                                            <h4 className="job-listing-company">Coffee</h4>
                                            <h3 className="job-listing-title">Barista and Cashier</h3>
                                        </div>
                                    </div>
                                    {/* Job Listing Footer */}
                                    <div className="job-listing-footer">
                                        <span className="bookmark-icon" />
                                        <ul>
                                            <li><i className="icon-material-outline-location-on" /> San Francisco</li>
                                            <li><i className="icon-material-outline-business-center" /> Full Time</li>
                                            <li><i className="icon-material-outline-account-balance-wallet" /> $35000-$38000</li>
                                            <li><i className="icon-material-outline-access-time" /> 2 days ago</li>
                                        </ul>
                                    </div>
                                </a>
                                {/* Job Listing */}
                                <a href="single-job-page.html" className="job-listing">
                                    {/* Job Listing Details */}
                                    <div className="job-listing-details">
                                        {/* Logo */}
                                        <div className="job-listing-company-logo">
                                            <img src={CompanyLogo3} alt="" />
                                        </div>
                                        {/* Details */}
                                        <div className="job-listing-description">
                                            <h4 className="job-listing-company">King <span className="verified-badge" title="Verified Employer" data-tippy-placement="top" /></h4>
                                            <h3 className="job-listing-title">Restaurant General Manager</h3>
                                        </div>
                                    </div>
                                    {/* Job Listing Footer */}
                                    <div className="job-listing-footer">
                                        <span className="bookmark-icon" />
                                        <ul>
                                            <li><i className="icon-material-outline-location-on" /> San Francisco</li>
                                            <li><i className="icon-material-outline-business-center" /> Full Time</li>
                                            <li><i className="icon-material-outline-account-balance-wallet" /> $35000-$38000</li>
                                            <li><i className="icon-material-outline-access-time" /> 2 days ago</li>
                                        </ul>
                                    </div>
                                </a>
                                {/* Job Listing */}
                                <a href="single-job-page.html" className="job-listing">
                                    {/* Job Listing Details */}
                                    <div className="job-listing-details">
                                        {/* Logo */}
                                        <div className="job-listing-company-logo">
                                            <img src={CompanyLogo5} alt="" />
                                        </div>
                                        {/* Details */}
                                        <div className="job-listing-description">
                                            <h4 className="job-listing-company">Skyist</h4>
                                            <h3 className="job-listing-title">International Marketing Coordinator</h3>
                                        </div>
                                    </div>
                                    {/* Job Listing Footer */}
                                    <div className="job-listing-footer">
                                        <span className="bookmark-icon" />
                                        <ul>
                                            <li><i className="icon-material-outline-location-on" /> San Francisco</li>
                                            <li><i className="icon-material-outline-business-center" /> Full Time</li>
                                            <li><i className="icon-material-outline-account-balance-wallet" /> $35000-$38000</li>
                                            <li><i className="icon-material-outline-access-time" /> 2 days ago</li>
                                        </ul>
                                    </div>
                                </a>
                                {/* Job Listing */}
                                <a href="single-job-page.html" className="job-listing">
                                    {/* Job Listing Details */}
                                    <div className="job-listing-details">
                                        {/* Logo */}
                                        <div className="job-listing-company-logo">
                                            <img src={CompanyLogo5} alt="" />
                                        </div>
                                        {/* Details */}
                                        <div className="job-listing-description">
                                            <h4 className="job-listing-company">Podous</h4>
                                            <h3 className="job-listing-title">Construction Labourers</h3>
                                        </div>
                                    </div>
                                    {/* Job Listing Footer */}
                                    <div className="job-listing-footer">
                                        <span className="bookmark-icon" />
                                        <ul>
                                            <li><i className="icon-material-outline-location-on" /> San Francisco</li>
                                            <li><i className="icon-material-outline-business-center" /> Full Time</li>
                                            <li><i className="icon-material-outline-account-balance-wallet" /> $35000-$38000</li>
                                            <li><i className="icon-material-outline-access-time" /> 2 days ago</li>
                                        </ul>
                                    </div>
                                </a>
                                {/* Job Listing */}
                                <a href="single-job-page.html" className="job-listing">
                                    {/* Job Listing Details */}
                                    <div className="job-listing-details">
                                        {/* Logo */}
                                        <div className="job-listing-company-logo">
                                            <img src={CompanyLogo4} alt="" />
                                        </div>
                                        {/* Details */}
                                        <div className="job-listing-description">
                                            <h4 className="job-listing-company">Mates</h4>
                                            <h3 className="job-listing-title">Administrative Assistant</h3>
                                        </div>
                                    </div>
                                    {/* Job Listing Footer */}
                                    <div className="job-listing-footer">
                                        <span className="bookmark-icon" />
                                        <ul>
                                            <li><i className="icon-material-outline-location-on" /> San Francisco</li>
                                            <li><i className="icon-material-outline-business-center" /> Full Time</li>
                                            <li><i className="icon-material-outline-account-balance-wallet" /> $35000-$38000</li>
                                            <li><i className="icon-material-outline-access-time" /> 2 days ago</li>
                                        </ul>
                                    </div>
                                </a>
                                {/* Job Listing */}
                                <a href="single-job-page.html" className="job-listing">
                                    {/* Job Listing Details */}
                                    <div className="job-listing-details">
                                        {/* Logo */}
                                        <div className="job-listing-company-logo">
                                            <img src={CompanyLogo6} alt="" />
                                        </div>
                                        {/* Details */}
                                        <div className="job-listing-description">
                                            <h4 className="job-listing-company">Trideo</h4>
                                            <h3 className="job-listing-title">Human Resources Consultant</h3>
                                        </div>
                                    </div>
                                    {/* Job Listing Footer */}
                                    <div className="job-listing-footer">
                                        <span className="bookmark-icon" />
                                        <ul>
                                            <li><i className="icon-material-outline-location-on" /> San Francisco</li>
                                            <li><i className="icon-material-outline-business-center" /> Full Time</li>
                                            <li><i className="icon-material-outline-account-balance-wallet" /> $35000-$38000</li>
                                            <li><i className="icon-material-outline-access-time" /> 2 days ago</li>
                                        </ul>
                                    </div>
                                </a>
                                {/* Job Listing */}
                                <a href="single-job-page.html" className="job-listing">
                                    {/* Job Listing Details */}
                                    <div className="job-listing-details">
                                        {/* Logo */}
                                        <div className="job-listing-company-logo">
                                            <img src={CompanyLogo6} alt="" />
                                        </div>
                                        {/* Details */}
                                        <div className="job-listing-description">
                                            <h4 className="job-listing-company">Trideo</h4>
                                            <h3 className="job-listing-title">International Marketing Specialist</h3>
                                        </div>
                                    </div>
                                    {/* Job Listing Footer */}
                                    <div className="job-listing-footer">
                                        <span className="bookmark-icon" />
                                        <ul>
                                            <li><i className="icon-material-outline-location-on" /> San Francisco</li>
                                            <li><i className="icon-material-outline-business-center" /> Full Time</li>
                                            <li><i className="icon-material-outline-account-balance-wallet" /> $35000-$38000</li>
                                            <li><i className="icon-material-outline-access-time" /> 2 days ago</li>
                                        </ul>
                                    </div>
                                </a>
                                {/* Job Listing */}
                                <a href="single-job-page.html" className="job-listing">
                                    {/* Job Listing Details */}
                                    <div className="job-listing-details">
                                        {/* Logo */}
                                        <div className="job-listing-company-logo">
                                            <img src={CompanyLogo2} alt="" />
                                        </div>
                                        {/* Details */}
                                        <div className="job-listing-description">
                                            <h4 className="job-listing-company">Coffee</h4>
                                            <h3 className="job-listing-title">Terrain Cafe Barista</h3>
                                        </div>
                                    </div>
                                    {/* Job Listing Footer */}
                                    <div className="job-listing-footer">
                                        <span className="bookmark-icon" />
                                        <ul>
                                            <li><i className="icon-material-outline-location-on" /> San Francisco</li>
                                            <li><i className="icon-material-outline-business-center" /> Full Time</li>
                                            <li><i className="icon-material-outline-account-balance-wallet" /> $35000-$38000</li>
                                            <li><i className="icon-material-outline-access-time" /> 2 days ago</li>
                                        </ul>
                                    </div>
                                </a>
                                {/* Job Listing */}
                                <a href="single-job-page.html" className="job-listing">
                                    {/* Job Listing Details */}
                                    <div className="job-listing-details">
                                        {/* Logo */}
                                        <div className="job-listing-company-logo">
                                            <img src={CompanyLogo5} alt="" />
                                        </div>
                                        {/* Details */}
                                        <div className="job-listing-description">
                                            <h4 className="job-listing-company">Kinte</h4>
                                            <h3 className="job-listing-title">Skilled Labourer</h3>
                                        </div>
                                    </div>
                                    {/* Job Listing Footer */}
                                    <div className="job-listing-footer">
                                        <span className="bookmark-icon" />
                                        <ul>
                                            <li><i className="icon-material-outline-location-on" /> San Francisco</li>
                                            <li><i className="icon-material-outline-business-center" /> Full Time</li>
                                            <li><i className="icon-material-outline-account-balance-wallet" /> $35000-$38000</li>
                                            <li><i className="icon-material-outline-access-time" /> 2 days ago</li>
                                        </ul>
                                    </div>
                                </a>
                                {/* Job Listing */}
                                <a href="single-job-page.html" className="job-listing">
                                    {/* Job Listing Details */}
                                    <div className="job-listing-details">
                                        {/* Logo */}
                                        <div className="job-listing-company-logo">
                                            <img src={CompanyLogo5} alt="" />
                                        </div>
                                        {/* Details */}
                                        <div className="job-listing-description">
                                            <h4 className="job-listing-company">Alilia</h4>
                                            <h3 className="job-listing-title">Healthcare Claims Advisor</h3>
                                        </div>
                                    </div>
                                    {/* Job Listing Footer */}
                                    <div className="job-listing-footer">
                                        <span className="bookmark-icon" />
                                        <ul>
                                            <li><i className="icon-material-outline-location-on" /> San Francisco</li>
                                            <li><i className="icon-material-outline-business-center" /> Full Time</li>
                                            <li><i className="icon-material-outline-account-balance-wallet" /> $35000-$38000</li>
                                            <li><i className="icon-material-outline-access-time" /> 2 days ago</li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                            {/* Pagination */}
                            <div className="clearfix" />
                            <div className="pagination-container margin-top-20 margin-bottom-20">
                                <nav className="pagination">
                                    <ul>
                                        <li className="pagination-arrow"><a href="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-left" /></a></li>
                                        <li><a href="#" className="ripple-effect">1</a></li>
                                        <li><a href="#" className="ripple-effect current-page">2</a></li>
                                        <li><a href="#" className="ripple-effect">3</a></li>
                                        <li><a href="#" className="ripple-effect">4</a></li>
                                        <li className="pagination-arrow"><a href="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right" /></a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="clearfix" />
                            {/* Pagination / End */}
                            {/* Footer */}
                            <div className="small-footer margin-top-15">
                                <div className="small-footer-copyrights">
                                    © 2018 <strong>Hireo</strong>. All Rights Reserved.
          </div>
                                <ul className="footer-social-links">
                                    <li>
                                        <a href="#" title="Facebook" data-tippy-placement="top">
                                            <i className="icon-brand-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Twitter" data-tippy-placement="top">
                                            <i className="icon-brand-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Google Plus" data-tippy-placement="top">
                                            <i className="icon-brand-google-plus-g" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="LinkedIn" data-tippy-placement="top">
                                            <i className="icon-brand-linkedin-in" />
                                        </a>
                                    </li>
                                </ul>
                                <div className="clearfix" />
                            </div>
                            {/* Footer / End */}
                        </div>
                    </div>
                    {/* Full Page Content / End */}
                    {/* Full Page Map */}
                    <div className="full-page-map-container">
                        {/* Enable Filters Button */}
                        <div className="filter-button-container">
                            <button className="enable-filters-button">
                                <i className="enable-filters-button-icon" />
                                <span className="show-text">Show Filters</span>
                                <span className="hide-text">Hide Filters</span>
                            </button>
                            {/* <div className="filter-button-tooltip">Click to expand sidebar with filters!</div> */}
                        </div>
                        {/* Map */}
                        {/* <div id="map" data-map-zoom={12} data-map-scroll="true">
                            <MapContainer></MapContainer>
                        </div> */}
                        {/* <div>
                            <MapContainer places={this.state.places} />
                        </div> */}
                    </div>
                    {/* Full Page Map / End */}
                </div>
            </div >
        )
    }
}
