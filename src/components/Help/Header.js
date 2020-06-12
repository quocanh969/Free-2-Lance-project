import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../assets/css/style.css';
import '../../assets/css/colors/blue.css';

import Logo2 from '../../assets/images/logo2.png';
import UserAvatarPlaceholder from '../../assets/images/user-avatar-placeholder.png';
import JobImgePlaceholder from '../../assets/images/company-logo-placeholder-alt.png';

import { loadTopics, loadAreas, loadTags } from '../../actions/Home';
import { loadJobList } from '../../actions/Job';

class HeaderComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isTopicHover: false,
            isCurrentTop: false,
            messages: [
                {
                    id_user: 1,
                    avatarImg: UserAvatarPlaceholder,
                    fullname: 'John Cena',
                    message: 'All music used in the creation of this video are the intellectual property of those who owns it. No copyright infringement is, or will be intended on this channel whatsoever. If you wish to have the video removed, please contact the email at the bottom of this description. Your content will be promptly removed within 24 hours time.',                    
                },
                {
                    id_user: 2,
                    avatarImg: UserAvatarPlaceholder,
                    fullname: 'Triple H',
                    message: 'All music used in the creation of this video are t',                    
                },
                {
                    id_user: 3,
                    avatarImg: UserAvatarPlaceholder,
                    fullname: 'Garen',
                    message: 'All music used in the creation of this video are the intellectual property of those who owns it. ',                    
                },
            ],
            notices: [
                {
                    id_user: 1,
                    jobTopicImg: JobImgePlaceholder,
                    fullname: 'John Cena',  
                    type: 1, // nhận
                    job: 'Đấm nhau',
                },
                {
                    id_user: 2,
                    jobTopicImg: JobImgePlaceholder,
                    fullname: 'Triple H',
                    type: 0, // ko nhận
                    job: 'Đấm nhau',
                },
                {
                    id_user: 3,
                    jobTopicImg: JobImgePlaceholder,
                    fullname: 'Garen',
                    type: 2, // kết thúc công việc
                    job: 'Cày rank LOL',
                },
                {
                    id_user: 4,
                    jobTopicImg: JobImgePlaceholder,
                    fullname: 'Ronaldo',
                    type: 3, // nhận thanh toán
                    job: 'Đá bóng',
                },
            ]
        }

        // window.onscroll = this.handleScroll();
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentWillMount() {
        let { onUpdateUser, onLoadTopics, onLoadAreas, onLoadTags } = this.props;

        // kiêm tra local storage
        if (localStorage.getItem('user') && localStorage.getItem('token')) {
            let user = JSON.parse(localStorage.getItem('user'));
            let token = JSON.parse(localStorage.getItem('token'));
            onUpdateUser(user, token);
        }

        // loadTopics        
        onLoadTopics();
        onLoadAreas();
        onLoadTags();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentDidUpdate() {        
    }

    componentWillReceiveProps() {
        this.handleScroll();  
    }
   
    handleScroll() {        
        if(window.scrollY === 0 && (this.props.history.location.pathname === '/' || this.props.history.location.pathname === '/search'))
        {
            this.setState({isCurrentTop: true});
        }
        else
        {
            if(this.state.isCurrentTop === true)
            {
                this.setState({isCurrentTop: false})
            }
        }
    }

    handleLogOut() {
        let { onLogOut } = this.props;

        localStorage.setItem('user', null);
        localStorage.setItem('token', null);
        onLogOut();
    }

    handleTopicNavClick(e, topic) {
        let currentTopic = Number.parseInt(this.props.match.params.job_topic);
        if (currentTopic !== topic) {
            let { onLoadJobByJob } = this.props;
            onLoadJobByJob({ job_topic: topic });
        }
        else {
            e.preventDefault();
        }
    }

    renderTopicsHeader() {
        let { jobTopic } = this.props.GeneralReducer;

        let content = [], count = 0;

        for (let e of jobTopic) {
            content.push(                
                // <NavLink onClick={(element) => { this.handleTopicNavClick(element, e.id_jobtopic) }}
                <a key={count} className='dropdown-item' href={'/job-list/topic='+e.id_jobtopic}>
                    {e.name}
                </a>
            );
            count++;
        }

        return content;
    }
    
    renderMessageContent() {
        let content = [], count = 0;
        let {messages} = this.state;
        for(let e of messages)
        {
            content.push(
                <NavLink key={count} to='/dashboard' className='dropdown-item px-1 border-top border-secondary'>
                    <div className='container-fluid px-3'>
                        <div className='row p-1'>
                            {/* avatar */}
                            <div className='col-2 p-0'>
                                <img className='rounded-circle' style={{height: 'auto'}} src={e.avatarImg}></img>
                            </div>                            
                            {/* message */}
                            <div className='col-10 px-3'>
                                <div className='text-293FE4 font-weight-bold'>{e.fullname}</div>
                                <div className='text-secondary d-inline-block text-truncate' style={{width: '200px'}}>{e.message}</div>
                            </div>
                        </div>                
                    </div>                    
                </NavLink>
            );
            count++;
        }
        return content;
    }
    
    renderNotice(notice) {
        switch(notice.type)
        {
            case 0:
                {
                    return (
                    <span className='text-wrap'><span className='text-293FE4'>{notice.fullname}</span> đã từ chối bạn trong công việc <span className='text-293FE4'>{notice.job}</span></span>
                    )
                }
            case 1:
            {
                return (
                    <span className='text-wrap'>Bạn đã được nhận công việc <span className='text-293FE4'>{notice.job}</span> từ <span className='text-293FE4'>{notice.fullname}</span></span>
                )
            }
            case 2:
            {
                return (
                    <span className='text-wrap'><span className='text-293FE4'>{notice.job}</span> giữa bạn và <span className='text-293FE4'>{notice.fullname}</span> đã kết thúc</span>
                )
            }
            case 3:
            {
                return (
                    <span className='text-wrap'><span className='text-293FE4'>{notice.fullname}</span> đã thanh toán cho bạn về công việc <span className='text-293FE4'>{notice.job}</span></span>
                )
            }
            default: return '';
        }
    }

    renderNotiContent() {
        let content = [], count = 0;
        let {notices} = this.state;
        for(let e of notices)
        {
            content.push(
                <NavLink key={count} to='/job-detail' className='dropdown-item px-1 border-top border-secondary'>
                    <div className='container-fluid px-3'>
                        <div className='row p-1'>
                            {/* avatar */}
                            <div className='col-2 p-0'>
                                <img style={{height: 'auto'}} src={e.jobTopicImg}></img>
                            </div>                            
                            {/* message */}
                            <div className='col-10 px-3'>
                                {this.renderNotice(e)}
                            </div>
                        </div>                
                    </div>                    
                </NavLink>
            );
            count++;
        }
        return content;
    }

    renderUserLoginContent(user) {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown mx-0 px-0 pt-3 pb-2 mx-2">
                    <a className="nav-link-header nav-link dropdown-toggle px-0" href="#" id="NotiMenuDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='icon-material-baseline-notifications-none mx-0 p-2 font-size-25'></i>
                    </a>
                    <div className="shadow dropdown-menu dropdown-menu-right mt-1" style={{width: '300px'}} aria-labelledby="NotiMenuDropdown">
                        <h5 className='dropddown-header font-weight-bold mb-2 px-2' key={1}>Notifications</h5>
                        <div className='header-menu'>
                            {this.renderNotiContent()}
                        </div>
                    </div>
                </li>   
                <li className="nav-item dropdown mx-0 px-0 pt-3 pb-2 ml-2 mr-3">
                    <button className="nav-link nav-link-header mt-0 dropdown-toggle px-0" href="#" id="MessMenuDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='icon-material-baseline-mail-outline mt-0 mx-0 p-2 font-size-25'></i>
                    </button>
                    <div className="shadow dropdown-menu dropdown-menu-right mt-1" style={{width: '300px'}} aria-labelledby="MessMenuDropdown">
                        <h5 className='dropddown-header font-weight-bold mb-2 px-2' key={1}>Messages</h5>  
                        <div className='header-menu'>
                            {this.renderMessageContent()}
                        </div>
                    </div>
                </li>                     
                <li className={"nav-item dropdown pt-3 pb-2 pr-3 pl-4 mr-2 border-left " + (this.state.isCurrentTop ? 'border-light' : 'border-secondary')}>
                    <a className="nav-link dropdown-toggle rounded-pill bg-secondary mt-1 px-2 py-1" href="#" 
                        id="UserMenuDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img height='25' className='rounded-circle' src={UserAvatarPlaceholder}></img>
                        &nbsp;&nbsp;
                        <span style={{color: 'white'}}>{user.fullname}</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="UserMenuDropdown">
                        <NavLink className="dropdown-item" to='/dashboard'>
                            <i className='icon-material-outline-dashboard'></i>
                            &nbsp;&nbsp;
                            Tài khoản của bạn
                        </NavLink>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#" onClick={(e)=>{e.preventDefault(); this.handleLogOut()}}>
                            <i className='icon-line-awesome-sign-out'></i>
                            &nbsp;&nbsp;
                            Đăng xuất
                        </a>
                    </div>
                </li>
            </ul>
        );
    }

    renderUserNotLoginContent() {
        return (
            <ul className="navbar-nav ml-auto my-0 py-0">    
                <li className={"nav-item pt-2 pb-2 pr-3 pl-4 border-left " + (this.state.isCurrentTop ? 'border-light' : 'border-secondary')}>
                    <NavLink className={"btn font-weight-bold border-width-3 my-2 px-2 py-1 " + (this.state.isCurrentTop ? ' btn-outline-light' : ' btn-outline-dark')} to='/register'>
                        <i className='icon-feather-lock font-weight-bold pt-2'></i>&nbsp;Register
                    </NavLink>
                </li>
                <li className="nav-item pt-2 pb-2 px-3 mr-3">
                    <NavLink className={"btn font-weight-bold border-width-3 my-2 px-2 py-1 " + (this.state.isCurrentTop ? ' btn-outline-light' : ' btn-outline-dark')} to='/log-in'>
                        <i className='icon-line-awesome-sign-in font-weight-bold pt-2'></i>&nbsp;Login
                    </NavLink>
                </li> 
            </ul>
        );
    }

    render() {
        let {user} = this.props.HeaderReducer;
        return (
            <nav className={"navbar fixed-top navbar-expand-lg pl-5 pr-3 pr-0 py-0 border-bottom " + (this.state.isCurrentTop ? 'border-light bg-transparent':'border-secondary bg-light')} onScroll={()=>{this.handleScroll()}}>
                <NavLink to='/' className="navbar-brand mr-4"><img src={Logo2} className='logo-brand'></img></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse my-0 py-0" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item mx-2 pt-3 pb-2">
                            <NavLink className="nav-link nav-link-header" to='/'>Trang chủ</NavLink>
                        </li>
                        <li className="nav-item mx-2 pt-3 pb-2">
                            <NavLink className="nav-link nav-link-header" to='/search'>Tìm việc</NavLink>
                        </li>
                        <li onMouseLeave={()=>{this.setState({isTopicHover: false})}}
                            className={"nav-item dropdown mx-2 pt-3 pb-2 "+(this.state.isTopicHover ? 'show':'')}>
                            <NavLink className="nav-link-header nav-link dropdown-toggle" to='/job-list' id="navbarDropdown" 
                                onMouseEnter={()=>{this.setState({isTopicHover: true})}} >
                                Chủ đề
                            </NavLink>
                            <div className={"dropdown-menu mt-1 header-menu " + (this.state.isTopicHover ? 'show':'')} aria-labelledby="navbarDropdown">
                                {this.renderTopicsHeader()}
                            </div>
                        </li>
                        <li className="nav-item mx-2 pt-3 pb-2">
                            <NavLink className="nav-link nav-link-header" to='/contact'>Liên lạc</NavLink>
                        </li>
                    </ul>
                    {(
                        user === null
                        ?
                        this.renderUserNotLoginContent()
                        :
                        this.renderUserLoginContent(user)
                    )}
                </div>
            </nav>
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
        },
        onLoadTags: () => {
          dispatch(loadTags());  
        },
        onLoadJobByJob: (query) => {
            dispatch(loadJobList(1, 8, 2, query));
        }
    }
}

const Header = withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderComponent));
export default Header;
