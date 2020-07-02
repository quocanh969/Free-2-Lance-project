import React, { Component } from 'react';
import Logo2 from '../../assets/images/logo2.png';

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class FooterComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { user } = this.props.HeaderReducer;

        return (
            < div id="footer" >

                <div className="footer-middle-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-12 border-right border-secondary">
                                <img src={Logo2}></img>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4">
                                <div className="footer-links">
                                    <h3>Người dùng</h3>
                                    <ul>
                                        <li><NavLink to="/job-list"><span>Xem tất cả công việc</span></NavLink></li>
                                        <li><NavLink to="/search"><span>Tìm kiếm công việc</span></NavLink></li>
                                        <li><NavLink to="/dashboard/tab=4"><span>Đăng việc</span></NavLink></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Tài khoản */}
                            <div className="col-xl-3 col-lg-3 col-md-4">
                                <div className="footer-links">
                                    <h3>Tài khoản người dùng</h3>
                                    <ul>
                                        <li><NavLink to="/dashboard/tab=1"><span>Thông tin chung</span></NavLink></li>
                                        <li><NavLink to="/dashboard/tab=4"><span>Quản lý đăng việc</span></NavLink></li>
                                        <li><NavLink to="/dashboard/tab=8"><span>Quản lý việc làm</span></NavLink></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-4">
                                <div className="footer-links">
                                    <h3>Hỗ trợ</h3>
                                    <ul>
                                        <div>
                                            <li><NavLink to='/contact'><span>Liên hệ với chúng tôi</span></NavLink></li>
                                            {(
                                                user === null
                                                ?
                                                <div>
                                                    <li><NavLink to='/login'><span>Đăng nhập tài khoản</span></NavLink></li>
                                                    <li><NavLink to='/register'><span>Tạo tài khoản</span></NavLink></li>
                                                </div>
                                                :
                                                ''
                                            )}                                 
                                        </div>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


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
            </div >
        )

    }
}

// Container
const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const Footer = withRouter(connect(mapStateToProps, mapDispatchToProps)(FooterComponent));
export default Footer;