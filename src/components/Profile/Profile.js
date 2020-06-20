import React, { Component } from 'react';

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Dashboard from './Tab/Dashboard';
import Messages from './Tab/Messages';
import Reviews from './Tab/Reviews';
import Setting from './Tab/Setting';
import JobsApplying from './Tab/Jobs/JobsApplying';
import JobsDoing from './Tab/Jobs/JobsDoing';
import JobsDone from './Tab/Jobs/JobsDone';
import PostJob from './Tab/Jobs/PostJob';
import TasksApplying from './Tab/Tasks/TasksApplying';
import TasksDone from './Tab/Tasks/TasksDone';
import TasksDoing from './Tab/Tasks/TasksDoing';
import ChangePassword from './Tab/ChangePassword';

import DetailTemplate from './Tab/Jobs/JobDetail/DetailTemplate';
import { history } from '../../ultis/history/history';

class ProfileComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tab: 1,
        }

        this.moveToTab = this.moveToTab.bind(this);
    }

    componentWillMount() {        
        let tab = Number.parseInt(this.props.match.params.id);
        this.setState({tab,});
    }

    componentWillReceiveProps() {        
        if (this.props.history.location.pathname !== this.props.location.pathname) {
            // khác path
            let splitted = this.props.history.location.pathname.split("=", 2);
            let tab = Number.parseInt(splitted[1]);
            this.setState({tab,});            
        }
    }

    switchTab() {
        switch (this.state.tab) {
            case 1:
                return (
                    <Dashboard switchTab={this.moveToTab}></Dashboard>
                );

            case 2:
                return (
                    <Messages switchTab={this.moveToTab}></Messages>
                );
            case 3:
                return (
                    <Reviews switchTab={this.moveToTab}></Reviews>
                );
            case 4:
                return (
                    <JobsApplying switchTab={this.moveToTab}></JobsApplying>
                );
            case 5:
                return (
                    <JobsDoing switchTab={this.moveToTab}></JobsDoing>
                );
            case 6:
                return (
                    <JobsDone switchTab={this.moveToTab}></JobsDone>
                );
            case 7:
                return (
                    <PostJob switchTab={this.moveToTab}></PostJob>
                );
            case 8:
                return (
                    <TasksDoing switchTab={this.moveToTab}></TasksDoing>
                );
            case 9:
                return (
                    <TasksApplying switchTab={this.moveToTab}></TasksApplying>
                );
            case 10:
                return (
                    <TasksDone switchTab={this.moveToTab}></TasksDone>
                );
            case 11:
                return (
                    <Setting switchTab={this.moveToTab}></Setting>
                );
            case 12:
                return (
                    <ChangePassword switchTab={this.moveToTab}></ChangePassword>
                );
            // Các tab khác không có sẳn trên sidebar
            case 13:
                return (
                    <DetailTemplate switchTab={this.moveToTab}></DetailTemplate>
                );
            default: return (<div></div>);
        }
    }

    moveToTab(tab) {
        this.setState({ tab, });
    }

    handleLogOut() {
        let { onLogOut } = this.props;
        console.log('hahaha');
        localStorage.clear();
        onLogOut();
        history.push("/login");
    }

    render() {
        //let isBusinessUser = this.props.HeaderReducer.user.isBusinessUser;
        let { user } = this.props.HeaderReducer
        return (
            <div className='container-fluid'>
                {(
                    user === null
                        ?
                        <div></div>
                        :
                        <div className='row dashboard'>
                            {/* Sidebar */}
                            <div className="col-3 sidebar-dashboard">
                                <div className="">
                                    <div className="dashboard-nav-container">
                                        {/* Hình hambuger */}
                                        <a href="#" className="dashboard-responsive-nav-trigger">
                                            <span className="hamburger hamburger--collapse">
                                                <span className="hamburger-box">
                                                    <span className="hamburger-inner" />
                                                </span>
                                            </span>
                                            <span className="trigger-title">Dashboard Navigation</span>
                                        </a>

                                        <div className="dashboard-nav">
                                            <div className="dashboard-nav-inner">
                                                <ul data-submenu-title="Quản lý chung">
                                                    <li className={(this.state.tab === 1 ? 'active' : '')}>
                                                        <NavLink className='cursor-pointer' to='/dashboard/tab=1'>
                                                            <i className="icon-material-outline-dashboard" /> Thông tin chung
                                                        </NavLink>
                                                    </li>
                                                    <li className={(this.state.tab === 2 ? 'active' : '')}>
                                                        <NavLink className='cursor-pointer' to='/dashboard/tab=2'>
                                                            <i className="icon-material-outline-question-answer" /> Tin nhắn <span className="nav-tag">2</span>
                                                        </NavLink>
                                                    </li>
                                                    <li className={(this.state.tab === 3 ? 'active' : '')}>
                                                        <NavLink className='cursor-pointer' to='/dashboard/tab=3'>
                                                            <i className="icon-material-outline-rate-review" /> Nhận xét
                                                </NavLink>
                                                    </li>
                                                </ul>
                                                <ul data-submenu-title="Quản lý đăng công việc">
                                                    <li className={(this.state.tab === 4 ? 'active' : '')}>
                                                        <NavLink className='cursor-pointer' to='/dashboard/tab=4'>
                                                            <i className="icon-feather-search" /> Công việc đang tuyển
                                                </NavLink>
                                                    </li>
                                                    <li className={(this.state.tab === 5 ? 'active' : '')}>
                                                        <NavLink className='cursor-pointer' to='/dashboard/tab=5'>
                                                            <i className="icon-material-outline-business-center" /> Công việc hiện tại
                                                </NavLink>
                                                    </li>
                                                    <li className={(this.state.tab === 6 ? 'active' : '')}>
                                                        <NavLink className='cursor-pointer' to='/dashboard/tab=6'>
                                                            <i className="icon-feather-check-square" /> Công việc đã hoàn thành
                                                </NavLink>
                                                    </li>
                                                    <li className={(this.state.tab === 7 ? 'active' : '')}>
                                                        <NavLink className='cursor-pointer' to='/dashboard/tab=7'>
                                                            <i className="icon-material-outline-note-add" /> Đăng công việc
                                                </NavLink>
                                                    </li>
                                                </ul>
                                                {(
                                                    user.isBusinessUser
                                                        ?
                                                        <ul data-submenu-title="Quản lý việc làm">
                                                            <div className='m-3 p-3 border border-primary rounded'>
                                                                Tài khoản của bạn là tài khoản doanh nghiệp nên không thể tham gia các hoạt động ứng tuyển việc làm.
                                                </div>
                                                        </ul>
                                                        :
                                                        <ul data-submenu-title="Quản lý việc làm">
                                                            <li className={(this.state.tab === 8 ? 'active' : '')}>
                                                                <NavLink className='cursor-pointer' to='/dashboard/tab=8'>
                                                                    <i className="icon-material-outline-business-center" /> Công việc hiện tại
                                                                </NavLink>
                                                            </li>
                                                            <li className={(this.state.tab === 9 ? 'active' : '')}>
                                                                <NavLink className='cursor-pointer' to='/dashboard/tab=9'>
                                                                    <i className="icon-line-awesome-hourglass" /> Công việc đang ứng tuyển
                                                                </NavLink>
                                                            </li>
                                                            <li className={(this.state.tab === 10 ? 'active' : '')}>
                                                                <NavLink className='cursor-pointer' to='/dashboard/tab=10'>
                                                                    <i className="icon-feather-check-square" /> Công việc đã hoàn thành
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                )}
                                                <ul data-submenu-title="Tài khoản">
                                                    <li className={(this.state.tab === 11 ? 'active' : '')}>
                                                        <NavLink className='cursor-pointer' to='/dashboard/tab=11'>
                                                            <i className="icon-material-outline-settings" /> Thông tin tài khoản
                                                        </NavLink>
                                                    </li>
                                                    <li className={(this.state.tab === 12 ? 'active' : '')}>
                                                        <NavLink className='cursor-pointer' to='/dashboard/tab=12'>
                                                            <i className="icon-feather-lock" /> Đổi mật khẩu
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <div className='cursor-pointer' onClick={()=>{this.handleLogOut()}}>
                                                            <i className="icon-material-outline-power-settings-new"/> Đăng xuất
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className='col-9'>
                                {this.switchTab()}
                            </div>
                        </div>

                )}

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
        onLogOut: () => {
            dispatch({
              type: "USER_LOG_OUT",
            });
        },
    }
}

const Profile = withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileComponent));
export default Profile;