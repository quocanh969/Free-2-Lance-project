import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../assets/css/style.css';
import '../../assets/css/colors/blue.css';

import Logo2 from '../../assets/images/logo2.png';
import UserAvatarSmall1 from '../../assets/images/user-avatar-small-01.jpg';
import UserAvatarSmall2 from '../../assets/images/user-avatar-small-02.jpg';
import UserAvatarSmall3 from '../../assets/images/user-avatar-small-03.jpg';
import UserAvatarPlaceholder from '../../assets/images/user-avatar-placeholder.png';

import { loadTopics, loadAreas } from '../../actions/Home';

class HeaderComponent extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let { onUpdateUser, onLoadTopics, onLoadAreas } = this.props;

        // kiêm tra local storage
        if (localStorage.getItem('user') && localStorage.getItem('token')) {
            let user = JSON.parse(localStorage.getItem('user'));
            let token = JSON.parse(localStorage.getItem('token'));
            onUpdateUser(user, token);
        }

        // loadTopics
        console.log('hello from header');
        onLoadTopics();
        onLoadAreas();
    }

    handleLogOut() {
        let { onLogOut } = this.props;

        localStorage.setItem('user', null);
        localStorage.setItem('token', null);
        onLogOut();
    }

    generateRightSideContent() {
        let content = [];
        let { user } = this.props.HeaderReducer;
        if (user) {
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
                    {/* Info */}
                    <div className="header-notifications user-menu">
                        <div className="header-notifications-trigger">
                            <a href="#"><div className="user-avatar status-online"><img src={UserAvatarSmall1} alt="" /></div></a>
                        </div>
                        <div className="header-notifications-dropdown">
                            <div className="user-status">
                                <div className="user-details">
                                    <div className="user-avatar status-online"><img src={UserAvatarSmall1} alt="" /></div>
                                    <div className="user-name">
                                        Tom Smith <span>Freelancer</span>
                                    </div>
                                </div>
                                <div className="status-switch" id="snackbar-user-status">
                                    <label className="user-online current-status">Online</label>
                                    <label className="user-invisible">Invisible</label>
                                    <span className="status-indicator" aria-hidden="true" />
                                </div>
                            </div>
                            <ul className="user-menu-small-nav">
                                <li><NavLink to="/dashboard"><i className="icon-material-outline-dashboard" /> Dashboard</NavLink></li>
                                <li><a href="dashboard.html"><i className="icon-material-outline-settings" /> Settings</a></li>
                                <li><div className='cursor-pointer nav-link-simulate' onClick={() => { this.handleLogOut() }}><i className="icon-material-outline-power-settings-new" /> Logout</div></li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="header-notifications user-menu">
                        <div className="dropdown header-notifications-trigger">
                            <div className="user-avatar status-online" type="button" id="userMenuDropdown" 
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={UserAvatarSmall1} alt="" />
                            </div>
                            <div className="dropdown-menu mt-2" aria-labelledby="userMenuDropdown" onClick={(e)=>{e.stopPropagation()}}>
                                <div className="dropdown-header">
                                    Tom Smith
                                </div>
                                <div className='cursor-pointer nav-link-simulate dropdown-item' to="/dashboard"><i className="icon-material-outline-dashboard" /> Dashboard</div>
                                <div className='cursor-pointer nav-link-simulate dropdown-item' onClick={()=>{this.handleLogOut()}}><i className="icon-material-outline-power-settings-new" /> Logout</div>
                                
                            </div>
                        </div>
                    </div>                 */}
                </div>
            );
        }
        else {
            content.push(
                <div className="header-widget" key={1}>
                    <div className='header-notifications padding-top-15'>
                        <NavLink className="btn btn-outline-header-login" to='/register'>
                            Đăng ký
                        </NavLink>
                    </div>
                    <div className='header-notifications padding-top-15'>
                        <NavLink className="btn btn-outline-header-login" to='/login'>
                            Đăng nhập
                        </NavLink>
                    </div>
                </div>
            );
        }

        return content;
    }

    renderTopicsHeader() {
        let { jobTopic } = this.props.GeneralReducer;

        let content = [], count = 0;

        for (let e of jobTopic) {
            content.push(
                <li key={count} className={'w-100 ' + (count !== 0 && 'border-top border-secondary pt-2 pb-1')}>
                    <NavLink className='font-weight-bold menu-child-item h5'
                        to={'/job-list/topic=' + e.id_jobtopic}>
                        {e.name}
                    </NavLink>
                </li>
            );
            count++;
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
                            <NavLink to="/"><img src={Logo2} data-sticky-logo={Logo2} data-transparent-logo={Logo2} alt="" /></NavLink>
                        </div>
                        {/* Main Navigation */}
                        <nav id="navigation">
                            <ul id="responsive" style={{ paddingTop: '5px' }}>
                                <li>
                                    <NavLink to="/" className="font-weight-bold">Trang chủ</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/search" className="font-weight-bold">Tìm việc</NavLink>
                                </li>
                                <li>
                                    <a className='font-weight-bold mb-4 pt-0 mt-1' href='#' onClick={(e) => { e.preventDefault() }}>Chủ đề</a>
                                    <ul className="dropdown-nav mt-0" style={{ backgroundColor: 'white', maxHeight: '70vh', width: '350px', overflowY: 'auto', overflowX: 'hidden' }}>
                                        {this.renderTopicsHeader()}
                                    </ul>
                                </li>
                                <li>
                                    <NavLink to="/contact" className="font-weight-bold">Liên hệ</NavLink>
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
                                    <a href="#"><i className="icon-brand-font-awesome-flag" /></a>
                                </div>
                                {/* Dropdown */}
                                <div className="header-notifications-dropdown" style={{ width: '150px' }}>
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
        onUpdateUser: (user, token) => {
            dispatch({
                type: 'UPDATE_USER',
                user: user,
                token: token,
            });
        },
        onLogOut: () => {
            dispatch({
                type: 'USER_LOG_OUT',
            })
        },
        onLoadTopics: () => {
            dispatch(loadTopics());
        },
        onLoadAreas: () => {
            dispatch(loadAreas());
        }
    }
}

const Header = withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderComponent));
export default Header;