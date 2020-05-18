import React, { Component } from 'react';

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class ProfileComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tab: 1,
        }
    }

    switchTab() {
        switch(this.state.tab) 
        {
            case 1:
                return (
                    <div>Quản lý chung hoạt động</div>
                );
            case 2:
                return (
                    <div>Tin nhắn hoạt động</div>
                );
            case 3:
                return (
                    <div>Nhận xét hoạt động</div>
                );
            case 4:
                return (
                    <div>4</div>
                );
            case 5:
                return (
                    <div>5</div>
                );
            case 6:
                return (
                    <div>6</div>
                );
            case 7:
                return (
                    <div>7</div>
                );
            case 8:
                return (
                    <div>8</div>
                );
            case 9:
                return (
                    <div>9</div>
                );
            case 10:
                return (
                    <div>10</div>
                );
            case 11:
                return (
                    <div>11</div>
                );
            default: return (<div></div>);
        }
    }

    render() {
        return (
            <div className='dashboard-container'>
                {/* Sidebar */}
                <div className="dashboard-sidebar">
                    <div className="dashboard-sidebar-inner" data-simplebar>
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
                                            <div className='cursor-pointer' onClick={() => { this.setState({ tab: 1 }) }}>
                                                <i className="icon-material-outline-dashboard" /> Thông tin chung
                                            </div>
                                        </li>
                                        <li className={(this.state.tab === 2 ? 'active' : '')}>
                                            <div className='cursor-pointer' onClick={() => { this.setState({ tab: 2 }) }}>
                                                <i className="icon-material-outline-question-answer" /> Tin nhắn <span className="nav-tag">2</span>
                                            </div>
                                        </li>
                                        <li className={(this.state.tab === 3 ? 'active' : '')}>
                                            <div className='cursor-pointer' onClick={() => { this.setState({ tab: 3 }) }}>
                                                <i className="icon-material-outline-rate-review" /> Nhận xét
                                            </div>
                                        </li>
                                    </ul>
                                    <ul data-submenu-title="Quản lý đăng công việc">
                                        <li className={(this.state.tab === 4 ? 'active' : '')}>
                                            <div className='cursor-pointer' onClick={() => { this.setState({ tab: 4 }) }}>
                                                <i className="icon-feather-users" /> Ứng viên
                                            </div>
                                        </li>
                                        <li className={(this.state.tab === 5 ? 'active' : '')}>
                                            <div className='cursor-pointer' onClick={() => { this.setState({ tab: 5 }) }}>
                                                <i className="icon-material-outline-business-center" /> Công việc hiện tại
                                            </div>
                                        </li>
                                        <li className={(this.state.tab === 6 ? 'active' : '')}>
                                            <div className='cursor-pointer' onClick={() => { this.setState({ tab: 6 }) }}>
                                                <i className="icon-feather-check-square" /> Công việc đã hoàn thành
                                            </div>
                                        </li>
                                        <li className={(this.state.tab === 7 ? 'active' : '')}>
                                            <div className='cursor-pointer' onClick={() => { this.setState({ tab: 7 }) }}>
                                                <i className="icon-material-outline-note-add" /> Đăng công việc
                                            </div>
                                        </li>
                                    </ul>
                                    <ul data-submenu-title="Quản lý việc làm">
                                        <li className={(this.state.tab === 8 ? 'active' : '')}>
                                            <div className='cursor-pointer' onClick={() => { this.setState({ tab: 8 }) }}>
                                                <i className="icon-material-outline-business-center" /> Công việc hiện tại
                                            </div>
                                        </li>
                                        <li className={(this.state.tab === 9 ? 'active' : '')}>
                                            <div className='cursor-pointer' onClick={() => { this.setState({ tab: 9 }) }}>
                                                <i className="icon-line-awesome-hourglass" /> Công việc đang ứng tuyển
                                            </div>
                                        </li>
                                        <li className={(this.state.tab === 10 ? 'active' : '')}>
                                            <div className='cursor-pointer' onClick={() => { this.setState({ tab: 10 }) }}>
                                                <i className="icon-feather-check-square" /> Công việc đã hoàn thành
                                            </div>
                                        </li>
                                    </ul>
                                    <ul data-submenu-title="Tài khoản">
                                        <li className={(this.state.tab === 11 ? 'active' : '')}>
                                            <div className='cursor-pointer' onClick={() => { this.setState({ tab: 11 }) }}>
                                                <i className="icon-material-outline-settings" /> Cài đặt
                                        </div>
                                        </li>
                                        <li><div className='cursor-pointer'><i className="icon-material-outline-power-settings-new" /> Đăng xuất</div></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className='p-5'>
                    {this.switchTab()}
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

const Profile = withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileComponent));
export default Profile;