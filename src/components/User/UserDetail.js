import React, { Component } from 'react';
import Header from '../Help/Header';

// Image
import SingleFreelancer from '../../assets/images/single-freelancer.jpg';
import UserAvatarBig02 from '../../assets/images/user-avatar-big-02.jpg';
import FlagDE from '../../assets/images/flags/de.svg';
import BrowseCompanies03 from '../../assets/images/browse-companies-03.png';
import BrowseCompanies04 from '../../assets/images/browse-companies-04.png';

import {withRouter, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';


class UserDetailComponent extends Component {
    state = {
        user: {
            name: 'John Cena',
        }
    }
    render() {
        return (
            <div>
                {/* Titlebar ================================================== */}
                <div className="single-page-header freelancer-header" data-background-image={SingleFreelancer}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="single-page-header-inner">
                                    <div className="left-side">
                                        <div className="header-image freelancer-avatar"><img src={UserAvatarBig02} alt="" /></div>
                                        <div className="header-details">
                                            <h3>{this.state.user.name} <span>WWE Wrestler</span></h3>
                                            <ul>
                                                <li><div className="star-rating" data-rating={5.0} /></li>
                                                <li><img className="flag" src={FlagDE} alt="" /> Germany</li>
                                                <li><div className="verified-badge-with-title">Verified</div></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Page Content ================================================== */}
                <div className="container">
                    <div className="row">
                        {/* Content */}
                        <div className="col-xl-8 col-lg-8 content-right-offset">
                            {/* Page Content */}
                            <div className="single-page-section">
                                <h3 className="margin-bottom-25">About Me</h3>
                                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                            </div>
                            {/* Boxed List */}
                            <div className="boxed-list margin-bottom-60">
                                <div className="boxed-list-headline">
                                    <h3><i className="icon-material-outline-thumb-up" /> Work History and Feedback</h3>
                                </div>
                                <ul className="boxed-list-ul">
                                    <li>
                                        <div className="boxed-list-item">
                                            {/* Content */}
                                            <div className="item-content">
                                                <h4>Web, Database and API Developer <span>Rated as Freelancer</span></h4>
                                                <div className="item-details margin-top-10">
                                                    <div className="star-rating" data-rating={5.0} />
                                                    <div className="detail-item"><i className="icon-material-outline-date-range" /> August 2018</div>
                                                </div>
                                                <div className="item-description">
                                                    <p>Excellent programmer - fully carried out my project in a very professional manner. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="boxed-list-item">
                                            {/* Content */}
                                            <div className="item-content">
                                                <h4>WordPress Theme Installation <span>Rated as Freelancer</span></h4>
                                                <div className="item-details margin-top-10">
                                                    <div className="star-rating" data-rating={5.0} />
                                                    <div className="detail-item"><i className="icon-material-outline-date-range" /> June 2018</div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="boxed-list-item">
                                            {/* Content */}
                                            <div className="item-content">
                                                <h4>Fix Python Selenium Code <span>Rated as Employer</span></h4>
                                                <div className="item-details margin-top-10">
                                                    <div className="star-rating" data-rating={5.0} />
                                                    <div className="detail-item"><i className="icon-material-outline-date-range" /> May 2018</div>
                                                </div>
                                                <div className="item-description">
                                                    <p>I was extremely impressed with the quality of work AND how quickly he got it done. He then offered to help with another side part of the project that we didn't even think about originally.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="boxed-list-item">
                                            {/* Content */}
                                            <div className="item-content">
                                                <h4>PHP Core Website Fixes <span>Rated as Freelancer</span></h4>
                                                <div className="item-details margin-top-10">
                                                    <div className="star-rating" data-rating={5.0} />
                                                    <div className="detail-item"><i className="icon-material-outline-date-range" /> May 2018</div>
                                                </div>
                                                <div className="item-description">
                                                    <p>Awesome work, definitely will rehire. Poject was completed not only with the requirements, but on time, within our small budget.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                {/* Pagination */}
                                <div className="clearfix" />
                                <div className="pagination-container margin-top-40 margin-bottom-10">
                                    <nav className="pagination">
                                        <ul>
                                            <li><a href="#" className="ripple-effect current-page">1</a></li>
                                            <li><a href="#" className="ripple-effect">2</a></li>
                                            <li className="pagination-arrow"><a href="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right" /></a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="clearfix" />
                                {/* Pagination / End */}
                            </div>
                            {/* Boxed List / End */}
                            {/* Boxed List */}
                            <div className="boxed-list margin-bottom-60">
                                <div className="boxed-list-headline">
                                    <h3><i className="icon-material-outline-business" /> Employment History</h3>
                                </div>
                                <ul className="boxed-list-ul">
                                    <li>
                                        <div className="boxed-list-item">
                                            {/* Avatar */}
                                            <div className="item-image">
                                                <img src={BrowseCompanies03} alt="" />
                                            </div>
                                            {/* Content */}
                                            <div className="item-content">
                                                <h4>Development Team Leader</h4>
                                                <div className="item-details margin-top-7">
                                                    <div className="detail-item"><a href="#"><i className="icon-material-outline-business" /> Acodia</a></div>
                                                    <div className="detail-item"><i className="icon-material-outline-date-range" /> May 2018 - Present</div>
                                                </div>
                                                <div className="item-description">
                                                    <p>Focus the team on the tasks at hand or the internal and external customer requirements.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="boxed-list-item">
                                            {/* Avatar */}
                                            <div className="item-image">
                                                <img src={BrowseCompanies04} alt="" />
                                            </div>
                                            {/* Content */}
                                            <div className="item-content">
                                                <h4><a href="#">Lead UX/UI Designer</a></h4>
                                                <div className="item-details margin-top-7">
                                                    <div className="detail-item"><a href="#"><i className="icon-material-outline-business" /> Acorta</a></div>
                                                    <div className="detail-item"><i className="icon-material-outline-date-range" /> April 2014 - May 2018</div>
                                                </div>
                                                <div className="item-description">
                                                    <p>I designed and implemented 10+ custom web-based CRMs, workflow systems, payment solutions and mobile apps.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* Boxed List / End */}
                        </div>
                        {/* Sidebar */}
                        <div className="col-xl-4 col-lg-4">
                            <div className="sidebar-container">
                                {/* Profile Overview */}
                                <div className="profile-overview">
                                    <div className="overview-item"><strong>$35</strong><span>Hourly Rate</span></div>
                                    <div className="overview-item"><strong>53</strong><span>Jobs Done</span></div>
                                    <div className="overview-item"><strong>22</strong><span>Rehired</span></div>
                                </div>
                                {/* Button */}
                                <a href="#small-dialog" className="apply-now-button popup-with-zoom-anim margin-bottom-50">Make an Offer <i className="icon-material-outline-arrow-right-alt" /></a>
                                {/* Freelancer Indicators */}
                                <div className="sidebar-widget">
                                    <div className="freelancer-indicators">
                                        {/* Indicator */}
                                        <div className="indicator">
                                            <strong>88%</strong>
                                            <div className="indicator-bar" data-indicator-percentage={88}><span /></div>
                                            <span>Job Success</span>
                                        </div>
                                        {/* Indicator */}
                                        <div className="indicator">
                                            <strong>100%</strong>
                                            <div className="indicator-bar" data-indicator-percentage={100}><span /></div>
                                            <span>Recommendation</span>
                                        </div>
                                        {/* Indicator */}
                                        <div className="indicator">
                                            <strong>90%</strong>
                                            <div className="indicator-bar" data-indicator-percentage={90}><span /></div>
                                            <span>On Time</span>
                                        </div>
                                        {/* Indicator */}
                                        <div className="indicator">
                                            <strong>80%</strong>
                                            <div className="indicator-bar" data-indicator-percentage={80}><span /></div>
                                            <span>On Budget</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Widget */}
                                <div className="sidebar-widget">
                                    <h3>Social Profiles</h3>
                                    <div className="freelancer-socials margin-top-25">
                                        <ul>
                                            <li><a href="#" title="Dribbble" data-tippy-placement="top"><i className="icon-brand-dribbble" /></a></li>
                                            <li><a href="#" title="Twitter" data-tippy-placement="top"><i className="icon-brand-twitter" /></a></li>
                                            <li><a href="#" title="Behance" data-tippy-placement="top"><i className="icon-brand-behance" /></a></li>
                                            <li><a href="#" title="GitHub" data-tippy-placement="top"><i className="icon-brand-github" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Widget */}
                                <div className="sidebar-widget">
                                    <h3>Skills</h3>
                                    <div className="task-tags">
                                        <span>iOS</span>
                                        <span>Android</span>
                                        <span>mobile apps</span>
                                        <span>design</span>
                                        <span>Python</span>
                                        <span>Flask</span>
                                        <span>PHP</span>
                                        <span>WordPress</span>
                                    </div>
                                </div>
                                {/* Widget */}
                                <div className="sidebar-widget">
                                    <h3>Attachments</h3>
                                    <div className="attachments-container">
                                        <a href="#" className="attachment-box ripple-effect"><span>Cover Letter</span><i>PDF</i></a>
                                        <a href="#" className="attachment-box ripple-effect"><span>Contract</span><i>DOCX</i></a>
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
                
                {/* Spacer */}
                <div className="margin-top-15" />
                {/* Spacer / End*/}

                {/* Make an Offer Popup ================================================== */}
                <div id="small-dialog" className="zoom-anim-dialog mfp-hide dialog-with-tabs">
                    {/*Tabs */}
                    <div className="sign-in-form">
                        <ul className="popup-tabs-nav">
                            <li><a href="#tab">Make an Offer</a></li>
                        </ul>
                        <div className="popup-tabs-container">
                            {/* Tab */}
                            <div className="popup-tab-content" id="tab">
                                {/* Welcome Text */}
                                <div className="welcome-text">
                                    <h3>Discuss your project with {this.state.user.name}</h3>
                                </div>
                                {/* Form */}
                                <form method="post">
                                    <div className="input-with-icon-left">
                                        <i className="icon-material-outline-account-circle" />
                                        <input type="text" className="input-text with-border" name="name" id="name" placeholder="First and Last Name" />
                                    </div>
                                    <div className="input-with-icon-left">
                                        <i className="icon-material-baseline-mail-outline" />
                                        <input type="text" className="input-text with-border" name="emailaddress" id="emailaddress" placeholder="Email Address" />
                                    </div>
                                    <textarea name="textarea" cols={10} placeholder="Message" className="with-border" defaultValue={""} />
                                    <div className="uploadButton margin-top-25">
                                        <input className="uploadButton-input" type="file" accept="image/*, application/pdf" id="upload" multiple />
                                        <label className="uploadButton-button ripple-effect" htmlFor="upload">Add Attachments</label>
                                        <span className="uploadButton-file-name">Allowed file types: zip, pdf, png, jpg <br /> Max. files size: 50 MB.</span>
                                    </div>
                                </form>
                                {/* Button */}
                                <button className="button margin-top-35 full-width button-sliding-icon ripple-effect" type="submit">Make an Offer <i className="icon-material-outline-arrow-right-alt" /></button>
                            </div>
                            {/* Login */}
                            <div className="popup-tab-content" id="loginn">
                                {/* Welcome Text */}
                                <div className="welcome-text">
                                    <h3>Discuss Your Project With Tom</h3>
                                </div>
                                {/* Form */}
                                <form method="post" id="make-an-offer-form">
                                    <div className="input-with-icon-left">
                                        <i className="icon-material-outline-account-circle" />
                                        <input type="text" className="input-text with-border" name="name2" id="name2" placeholder="First and Last Name" required />
                                    </div>
                                    <div className="input-with-icon-left">
                                        <i className="icon-material-baseline-mail-outline" />
                                        <input type="text" className="input-text with-border" name="emailaddress2" id="emailaddress2" placeholder="Email Address" required />
                                    </div>
                                    <textarea name="textarea" cols={10} placeholder="Message" className="with-border" defaultValue={""} />
                                    <div className="uploadButton margin-top-25">
                                        <input className="uploadButton-input" type="file" accept="image/*, application/pdf" id="upload-cv" multiple />
                                        <label className="uploadButton-button" htmlFor="upload-cv">Add Attachments</label>
                                        <span className="uploadButton-file-name">Allowed file types: zip, pdf, png, jpg <br /> Max. files size: 50 MB.</span>
                                    </div>
                                </form>
                                {/* Button */}
                                <button className="button full-width button-sliding-icon ripple-effect" type="submit" form="make-an-offer-form">Make an Offer <i className="icon-material-outline-arrow-right-alt" /></button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Make an Offer Popup / End */}
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

const UserDetail = withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDetailComponent));
export default UserDetail;