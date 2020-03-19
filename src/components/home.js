import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Header from './Header';
import '../assets/css/style.css';
import '../assets/css/colors/blue.css';

// Image, khi mà vào project cần dùng ảnh của mình thì phải xóa mấy cái này
import Logo2 from '../assets/images/logo2.png';
import UserAvatarSmall1 from '../assets/images/user-avatar-small-01.jpg';
import UserAvatarSmall2 from '../assets/images/user-avatar-small-02.jpg';
import UserAvatarSmall3 from '../assets/images/user-avatar-small-03.jpg';
import UserAvatarPlaceholder from '../assets/images/user-avatar-placeholder.png';

import HomeBackground2 from '../assets/images/home-background-02.jpg';
import JobCategory1 from '../assets/images/job-category-01.jpg';
import JobCategory2 from '../assets/images/job-category-02.jpg';
import JobCategory3 from '../assets/images/job-category-03.jpg';
import JobCategory4 from '../assets/images/job-category-04.jpg';
import JobCategory5 from '../assets/images/job-category-05.jpg';
import JobCategory6 from '../assets/images/job-category-06.jpg';
import JobCategory7 from '../assets/images/job-category-07.jpg';
import JobCategory8 from '../assets/images/job-category-08.jpg';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="intro-banner dark-overlay" data-background-image={HomeBackground2}>
                    {/* Transparent Header Spacer */}
                    <div className="transparent-header-spacer" />
                    <div className="container">
                        {/* Intro Headline */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="banner-headline">
                                    <h3>
                                        <strong>Hire experts freelancers for any job, any time.</strong>
                                        <br />
                                        <span>Huge community of designers, developers and creatives ready for your project.</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {/* Search Bar */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="intro-banner-search-form margin-top-95">
                                    {/* Search Field */}
                                    <div className="intro-search-field with-autocomplete">
                                        <label htmlFor="autocomplete-input" className="field-title ripple-effect">Where?</label>
                                        <div className="input-with-icon">
                                            <input id="autocomplete-input" type="text" placeholder="Online Job" />
                                            <i className="icon-material-outline-location-on" />
                                        </div>
                                    </div>
                                    {/* Search Field */}
                                    <div className="intro-search-field">
                                        <label htmlFor="intro-keywords" className="field-title ripple-effect">What you need done?</label>
                                        <input id="intro-keywords" type="text" placeholder="e.g. build me a website" />
                                    </div>
                                    {/* Search Field */}
                                    <div className="intro-search-field">
                                        <select className="selectpicker default" multiple data-selected-text-format="count" data-size={7} title="All Categories">
                                            <option>Admin Support</option>
                                            <option>Customer Service</option>
                                            <option>Data Analytics</option>
                                            <option>Design &amp; Creative</option>
                                            <option>Legal</option>
                                            <option>Software Developing</option>
                                            <option>IT &amp; Networking</option>
                                            <option>Writing</option>
                                            <option>Translation</option>
                                            <option>Sales &amp; Marketing</option>
                                        </select>
                                    </div>
                                    {/* Button */}
                                    <div className="intro-search-button">
                                        {/* <button className="button ripple-effect" onClick={window.location.href='freelancers-grid-layout-full-page.html'}>Search</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Stats */}
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="intro-stats margin-top-45 hide-under-992px">
                                    <li>
                                        <strong className="counter">1,586</strong>
                                        <span>Jobs Posted</span>
                                    </li>
                                    <li>
                                        <strong className="counter">3,543</strong>
                                        <span>Tasks Posted</span>
                                    </li>
                                    <li>
                                        <strong className="counter">1,232</strong>
                                        <span>Freelancers</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Content
================================================== */}
                {/* Popular Job Categories */}
                <div className="section margin-top-65 margin-bottom-30">
                    <div className="container">
                        <div className="row">
                            {/* Section Headline */}
                            <div className="col-xl-12">
                                <div className="section-headline centered margin-top-0 margin-bottom-45">
                                    <h3>Popular Categories</h3>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                {/* Photo Box */}
                                <NavLink to='/job-list' className="photo-box small" data-background-image={JobCategory1}>
                                    <div className="photo-box-content">
                                        <h3>Web / Software Dev</h3>
                                        <span>612</span>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                {/* Photo Box */}
                                <a href="jobs-list-layout-full-page-map.html" className="photo-box small" data-background-image={JobCategory2}>
                                    <div className="photo-box-content">
                                        <h3>Data Science / Analitycs</h3>
                                        <span>113</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                {/* Photo Box */}
                                <a href="jobs-grid-layout-full-page.html" className="photo-box small" data-background-image={JobCategory3}>
                                    <div className="photo-box-content">
                                        <h3>Accounting / Consulting</h3>
                                        <span>186</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                {/* Photo Box */}
                                <a href="jobs-list-layout-2.html" className="photo-box small" data-background-image={JobCategory4}>
                                    <div className="photo-box-content">
                                        <h3>Writing &amp; Translations</h3>
                                        <span>298</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                {/* Photo Box */}
                                <a href="jobs-list-layout-1.html" className="photo-box small" data-background-image={JobCategory5}>
                                    <div className="photo-box-content">
                                        <h3>Sales &amp; Marketing</h3>
                                        <span>549</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                {/* Photo Box */}
                                <a href="jobs-list-layout-full-page-map.html" className="photo-box small" data-background-image={JobCategory6}>
                                    <div className="photo-box-content">
                                        <h3>Graphics &amp; Design</h3>
                                        <span>873</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                {/* Photo Box */}
                                <a href="jobs-grid-layout-full-page.html" className="photo-box small" data-background-image={JobCategory7}>
                                    <div className="photo-box-content">
                                        <h3>Digital Marketing</h3>
                                        <span>125</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                {/* Photo Box */}
                                <a href="jobs-list-layout-2.html" className="photo-box small" data-background-image={JobCategory8}>
                                    <div className="photo-box-content">
                                        <h3>Education &amp; Training</h3>
                                        <span>445</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Features Cities / End */}
                {/* Features Jobs */}
                <div className="section gray margin-top-45 padding-top-65 padding-bottom-75">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                {/* Section Headline */}
                                <div className="section-headline margin-top-0 margin-bottom-35">
                                    <h3>Recent Tasks</h3>
                                    <a href="tasks-list-layout-1.html" className="headline-link">Browse All Tasks</a>
                                </div>
                                {/* Jobs Container */}
                                <div className="tasks-list-container compact-list margin-top-35">
                                    {/* Task */}
                                    <a href="single-task-page.html" className="task-listing">
                                        {/* Job Listing Details */}
                                        <div className="task-listing-details">
                                            {/* Details */}
                                            <div className="task-listing-description">
                                                <h3 className="task-listing-title">Food Delviery Mobile App</h3>
                                                <ul className="task-icons">
                                                    <li><i className="icon-material-outline-location-on" /> San Francisco</li>
                                                    <li><i className="icon-material-outline-access-time" /> 2 minutes ago</li>
                                                </ul>
                                                <div className="task-tags margin-top-15">
                                                    <span>iOS</span>
                                                    <span>Android</span>
                                                    <span>mobile apps</span>
                                                    <span>design</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="task-listing-bid">
                                            <div className="task-listing-bid-inner">
                                                <div className="task-offers">
                                                    <strong>$1,000 - $2,500</strong>
                                                    <span>Fixed Price</span>
                                                </div>
                                                <span className="button button-sliding-icon ripple-effect">Bid Now <i className="icon-material-outline-arrow-right-alt" /></span>
                                            </div>
                                        </div>
                                    </a>
                                    {/* Task */}
                                    <a href="single-task-page.html" className="task-listing">
                                        {/* Job Listing Details */}
                                        <div className="task-listing-details">
                                            {/* Details */}
                                            <div className="task-listing-description">
                                                <h3 className="task-listing-title">2000 Words English to German</h3>
                                                <ul className="task-icons">
                                                    <li><i className="icon-material-outline-location-off" /> Online Job</li>
                                                    <li><i className="icon-material-outline-access-time" /> 5 minutes ago</li>
                                                </ul>
                                                <div className="task-tags margin-top-15">
                                                    <span>copywriting</span>
                                                    <span>translating</span>
                                                    <span>editing</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="task-listing-bid">
                                            <div className="task-listing-bid-inner">
                                                <div className="task-offers">
                                                    <strong>$75</strong>
                                                    <span>Fixed Price</span>
                                                </div>
                                                <span className="button button-sliding-icon ripple-effect">Bid Now <i className="icon-material-outline-arrow-right-alt" /></span>
                                            </div>
                                        </div>
                                    </a>
                                    {/* Task */}
                                    <a href="single-task-page.html" className="task-listing">
                                        {/* Job Listing Details */}
                                        <div className="task-listing-details">
                                            {/* Details */}
                                            <div className="task-listing-description">
                                                <h3 className="task-listing-title">Fix Python Selenium Code</h3>
                                                <ul className="task-icons">
                                                    <li><i className="icon-material-outline-location-off" /> Online Job</li>
                                                    <li><i className="icon-material-outline-access-time" /> 30 minutes ago</li>
                                                </ul>
                                                <div className="task-tags margin-top-15">
                                                    <span>Python</span>
                                                    <span>Flask</span>
                                                    <span>API Development</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="task-listing-bid">
                                            <div className="task-listing-bid-inner">
                                                <div className="task-offers">
                                                    <strong>$100 - $150</strong>
                                                    <span>Hourly Rate</span>
                                                </div>
                                                <span className="button button-sliding-icon ripple-effect">Bid Now <i className="icon-material-outline-arrow-right-alt" /></span>
                                            </div>
                                        </div>
                                    </a>
                                    {/* Task */}
                                    <a href="single-task-page.html" className="task-listing">
                                        {/* Job Listing Details */}
                                        <div className="task-listing-details">
                                            {/* Details */}
                                            <div className="task-listing-description">
                                                <h3 className="task-listing-title">WordPress Theme Installation</h3>
                                                <ul className="task-icons">
                                                    <li><i className="icon-material-outline-location-off" /> Online Job</li>
                                                    <li><i className="icon-material-outline-access-time" /> 1 hour ago</li>
                                                </ul>
                                                <div className="task-tags margin-top-15">
                                                    <span>WordPress</span>
                                                    <span>Theme Installation</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="task-listing-bid">
                                            <div className="task-listing-bid-inner">
                                                <div className="task-offers">
                                                    <strong>$100</strong>
                                                    <span>Fixed Price</span>
                                                </div>
                                                <span className="button button-sliding-icon ripple-effect">Bid Now <i className="icon-material-outline-arrow-right-alt" /></span>
                                            </div>
                                        </div>
                                    </a>
                                    {/* Task */}
                                    <a href="single-task-page.html" className="task-listing">
                                        {/* Job Listing Details */}
                                        <div className="task-listing-details">
                                            {/* Details */}
                                            <div className="task-listing-description">
                                                <h3 className="task-listing-title">PHP Core Website Fixes</h3>
                                                <ul className="task-icons">
                                                    <li><i className="icon-material-outline-location-off" /> Online Job</li>
                                                    <li><i className="icon-material-outline-access-time" /> 1 hour ago</li>
                                                </ul>
                                                <div className="task-tags margin-top-15">
                                                    <span>PHP</span>
                                                    <span>MySQL Administration</span>
                                                    <span>API Development</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="task-listing-bid">
                                            <div className="task-listing-bid-inner">
                                                <div className="task-offers">
                                                    <strong>$50 - $80</strong>
                                                    <span>Hourly Rate</span>
                                                </div>
                                                <span className="button button-sliding-icon ripple-effect">Bid Now <i className="icon-material-outline-arrow-right-alt" /></span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                {/* Jobs Container / End */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Featured Jobs / End */}
                {/* Icon Boxes */}
                <div className="section padding-top-65 padding-bottom-65">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                {/* Section Headline */}
                                <div className="section-headline centered margin-top-0 margin-bottom-5">
                                    <h3>How It Works?</h3>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4">
                                {/* Icon Box */}
                                <div className="icon-box with-line">
                                    {/* Icon */}
                                    <div className="icon-box-circle">
                                        <div className="icon-box-circle-inner">
                                            <i className="icon-line-awesome-lock" />
                                            <div className="icon-box-check"><i className="icon-material-outline-check" /></div>
                                        </div>
                                    </div>
                                    <h3>Create an Account</h3>
                                    <p>Bring to the table win-win survival strategies to ensure proactive domination going forward.</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4">
                                {/* Icon Box */}
                                <div className="icon-box with-line">
                                    {/* Icon */}
                                    <div className="icon-box-circle">
                                        <div className="icon-box-circle-inner">
                                            <i className="icon-line-awesome-legal" />
                                            <div className="icon-box-check"><i className="icon-material-outline-check" /></div>
                                        </div>
                                    </div>
                                    <h3>Post a Task</h3>
                                    <p>Efficiently unleash cross-media information without. Quickly maximize return on investment.</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4">
                                {/* Icon Box */}
                                <div className="icon-box">
                                    {/* Icon */}
                                    <div className="icon-box-circle">
                                        <div className="icon-box-circle-inner">
                                            <i className=" icon-line-awesome-trophy" />
                                            <div className="icon-box-check"><i className="icon-material-outline-check" /></div>
                                        </div>
                                    </div>
                                    <h3>Choose an Expert</h3>
                                    <p>Nanotechnology immersion along the information highway will close the loop on focusing solely.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Icon Boxes / End */}
                {/* Testimonials */}
                <div className="section gray padding-top-65 padding-bottom-55">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                {/* Section Headline */}
                                <div className="section-headline centered margin-top-0 margin-bottom-5">
                                    <h3>Testimonials</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Categories Carousel */}
                    <div className="fullwidth-carousel-container margin-top-20">
                        <div className="testimonial-carousel testimonials">
                            {/* Item */}
                            <div className="fw-carousel-review">
                                <div className="testimonial-box">
                                    <div className="testimonial-avatar">
                                        <img src={UserAvatarSmall2} alt="" />
                                    </div>
                                    <div className="testimonial-author">
                                        <h4>Sindy Forest</h4>
                                        <span>Freelancer</span>
                                    </div>
                                    <div className="testimonial">Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</div>
                                </div>
                            </div>
                            {/* Item */}
                            <div className="fw-carousel-review">
                                <div className="testimonial-box">
                                    <div className="testimonial-avatar">
                                        <img src={UserAvatarSmall1} alt="" />
                                    </div>
                                    <div className="testimonial-author">
                                        <h4>Tom Smith</h4>
                                        <span>Freelancer</span>
                                    </div>
                                    <div className="testimonial">Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art.</div>
                                </div>
                            </div>
                            {/* Item */}
                            <div className="fw-carousel-review">
                                <div className="testimonial-box">
                                    <div className="testimonial-avatar">
                                        <img src={UserAvatarPlaceholder} alt="" />
                                    </div>
                                    <div className="testimonial-author">
                                        <h4>Sebastiano Piccio</h4>
                                        <span>Employer</span>
                                    </div>
                                    <div className="testimonial">Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art.</div>
                                </div>
                            </div>
                            {/* Item */}
                            <div className="fw-carousel-review">
                                <div className="testimonial-box">
                                    <div className="testimonial-avatar">
                                        <img src={UserAvatarSmall3} alt="" />
                                    </div>
                                    <div className="testimonial-author">
                                        <h4>David Peterson</h4>
                                        <span>Freelancer</span>
                                    </div>
                                    <div className="testimonial">Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower fully researched growth strategies and interoperable sources.</div>
                                </div>
                            </div>
                            {/* Item */}
                            <div className="fw-carousel-review">
                                <div className="testimonial-box">
                                    <div className="testimonial-avatar">
                                        <img src={UserAvatarPlaceholder} alt="" />
                                    </div>
                                    <div className="testimonial-author">
                                        <h4>Marcin Kowalski</h4>
                                        <span>Freelancer</span>
                                    </div>
                                    <div className="testimonial">Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Categories Carousel / End */}
                </div>
                {/* Testimonials / End */}
                {/* Counters */}
                <div className="section padding-top-70 padding-bottom-75">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="counters-container">
                                    {/* Counter */}
                                    <div className="single-counter">
                                        <i className="icon-line-awesome-suitcase" />
                                        <div className="counter-inner">
                                            <h3><span className="counter">1,586</span></h3>
                                            <span className="counter-title">Jobs Posted</span>
                                        </div>
                                    </div>
                                    {/* Counter */}
                                    <div className="single-counter">
                                        <i className="icon-line-awesome-legal" />
                                        <div className="counter-inner">
                                            <h3><span className="counter">3,543</span></h3>
                                            <span className="counter-title">Tasks Posted</span>
                                        </div>
                                    </div>
                                    {/* Counter */}
                                    <div className="single-counter">
                                        <i className="icon-line-awesome-user" />
                                        <div className="counter-inner">
                                            <h3><span className="counter">2,413</span></h3>
                                            <span className="counter-title">Active Members</span>
                                        </div>
                                    </div>
                                    {/* Counter */}
                                    <div className="single-counter">
                                        <i className="icon-line-awesome-trophy" />
                                        <div className="counter-inner">
                                            <h3><span className="counter">99</span>%</h3>
                                            <span className="counter-title">Satisfaction Rate</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Counters / End */}                              
            </div>
        )
    }
}
