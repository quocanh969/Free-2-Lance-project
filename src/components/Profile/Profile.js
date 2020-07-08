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
import Transaction from './Tab/Transaction';
const firebase = require("firebase");

class ProfileComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tab: 1,
            unreadMessage: 0,
        }
    }

    componentWillMount() {
        let tab = Number.parseInt(this.props.match.params.id);
        this.setState({ tab, });
    }

    componentWillReceiveProps() {
        if (this.props.history.location.pathname !== this.props.location.pathname) {
            // khác path
            let splitted = this.props.history.location.pathname.split("=", 2);
            let tab = Number.parseInt(splitted[1]);
            this.setState({ tab, });
        }
    }
    componentDidMount = async () => {
        let email = localStorage.getItem('email');
        if (email) {
            await firebase
                .firestore()
                .collection('chats')
                .where('users', 'array-contains', email)
                .onSnapshot(async res => {
                    const chats = res.docs.map(_doc => _doc.data());
                    console.log('chats456:', chats)
                    let unreadMessage = 0;
                    chats.forEach((element, index) => {
                        console.log('index:', index)
                        if (element.messages.length > 0) {
                            if (element.messages[element.messages.length - 1].sender !== email && !element.receiverHasRead)
                                unreadMessage++;
                        }
                    });
                    await this.setState({
                        unreadMessage,
                    });
                })
        }

    }
    switchTab() {
        switch (this.state.tab) {
            case 1:
                return (
                    <Dashboard></Dashboard>
                );

            case 2:
                return (
                    <Messages></Messages>
                );
            case 3:
                return (
                    <Reviews></Reviews>
                );
            case 4:
                return (
                    <JobsApplying></JobsApplying>
                );
            case 5:
                return (
                    <JobsDoing></JobsDoing>
                );
            case 6:
                return (
                    <JobsDone></JobsDone>
                );
            case 7:
                return (
                    <PostJob></PostJob>
                );
            case 8:
                return (
                    <TasksDoing></TasksDoing>
                );
            case 9:
                return (
                    <TasksApplying></TasksApplying>
                );
            case 10:
                return (
                    <TasksDone></TasksDone>
                );
            case 11:
                return (
                    <Setting></Setting>
                );
            case 12:
                return (
                    <ChangePassword></ChangePassword>
                );
            // Các tab khác không có sẳn trên sidebar
            case 13:
                return (
                    <DetailTemplate></DetailTemplate>
                );
            case 14:
                return (
                    <Transaction></Transaction>
                );
            default: return (<div></div>);
        }
    }

    handleLogOut() {
        let { onLogOut } = this.props;

        console.log('hahaha');
        localStorage.clear();
        onLogOut();
        history.push("/login");
        // window.location.replace('/login');
    }

    render() {
        //let isBusinessUser = this.props.HeaderReducer.user.isBusinessUser;
        let { user } = this.props.HeaderReducer
        const { unreadMessage } = this.state;
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

                                                            <i className="icon-material-outline-question-answer" /> Tin nhắn {
                                                                unreadMessage > 0 && <span className="nav-tag">{unreadMessage}</span>
                                                            }
                                                        </NavLink>
                                                    </li>
                                                    <li className={(this.state.tab === 3 ? 'active' : '')}>
                                                        <NavLink className='cursor-pointer' to='/dashboard/tab=3'>
                                                            <i className="icon-material-outline-rate-review" /> Phản hồi
                                                        </NavLink>
                                                    </li>
                                                    <li className={(this.state.tab === 14 ? 'active' : '')}>
                                                        <NavLink className='cursor-pointer' to='/dashboard/tab=14'>
                                                            <i className="icon-material-outline-account-balance" /> Quản lý thu chi
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
                                                        <div className='cursor-pointer' onClick={() => { this.handleLogOut() }}>
                                                            <i className="icon-material-outline-power-settings-new" /> Đăng xuất
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