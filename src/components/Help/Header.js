import React, { Component } from 'react';
import '../../assets/css/style.css';
import '../../assets/css/colors/blue.css';

import Logo2 from '../../assets/images/logo2.png';
import UserAvatarSmall1 from '../../assets/images/user-avatar-small-01.jpg';
import UserAvatarSmall2 from '../../assets/images/user-avatar-small-02.jpg';
import UserAvatarSmall3 from '../../assets/images/user-avatar-small-03.jpg';
import UserAvatarPlaceholder from '../../assets/images/user-avatar-placeholder.png';
import { NavLink } from 'react-router-dom';

export default class HeaderComponent extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            user: null,
        }
    }

    generateRightSideContent() {
        let content = [];

        if(this.state.user)
        {
            content.push(
                <div className="header-widget hide-on-mobile" key={1}>
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
            );
            content.push(                
                <div className="header-widget" key={2}>
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
            );
        }
        else
        {
            content.push(
                <div className="header-widget" key={1}>
                    <div className='header-notifications padding-top-15'>
                        <div className="btn btn-outline-header-login">
                            Register
                        </div>
                    </div>
                    <div className='header-notifications padding-top-15'>
                        <div className="btn btn-outline-header-login">
                            Log In
                        </div>
                    </div>
                </div>
            );
        }

        return content;
    }

    render() {
        return (
            <div id="header">
                <div className="container">
                    {/* Left Side Content */}
                    <div className="left-side">
                        {/* Logo */}
                        <div id="logo">
                            <NavLink to="/home"><img src={Logo2} data-sticky-logo={Logo2} data-transparent-logo={Logo2} alt="" /></NavLink>
                        </div>
                        {/* Main Navigation */}
                        <nav id="navigation">
                            <ul id="responsive" style={{paddingTop:'5px'}}>
                                <li>
                                    <NavLink to="/home" className="font-weight-bold">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/job-list" className="font-weight-bold">Find Work</NavLink>                                    
                                </li>
                                <li>
                                    <NavLink to="/job-list" className="font-weight-bold">Blogs</NavLink>                                    
                                </li>
                                <li>
                                    <NavLink to="/contact" className="font-weight-bold">Contact Us</NavLink>                                    
                                </li>
                            </ul>
                        </nav>
                        <div className="clearfix" />
                        {/* Main Navigation / End */}
                    </div>
                    {/* Left Side Content / End */}

                    {/* Right Side Content */}
                    <div className="right-side">
                        {/* User Language */}
                        <div className="header-widget">
                            {/* Language */}
                            <div className="header-notifications user-menu">
                                <div className="header-notifications-trigger">
                                    <a href="#"><i className="icon-brand-font-awesome-flag"/></a>
                                </div>
                                {/* Dropdown */}
                                <div className="header-notifications-dropdown" style={{width:'150px'}}>                                   
                                    <ul className="user-menu-small-nav">
                                        <li>English</li>
                                        <li>Vietnamese</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* User Language / End */}
                        
                        {this.generateRightSideContent()}


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

const Header = withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderComponent));
export default Header;