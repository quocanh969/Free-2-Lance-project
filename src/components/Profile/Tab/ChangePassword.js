import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { S_Selector } from '../../../ultis/SHelper/S_Help_Input';

import avatarPlaceholder from '../../../assets/images/user-avatar-placeholder.png';
import browseCompoanies from '../../../assets/images/browse-companies-03.png';

class ChangePasswordComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div className="dashboard-content-inner">
                {/* Dashboard Headline */}
                <div className="dashboard-headline">
                    <h3>Đổi mật khẩu</h3>
                </div>

                {/* Row */}
                <div className="row">
                    {/* Đổi mật khẩu */}
                    <form>
                        <div className="col-xl-12">
                            <div id="test1" className="dashboard-box">
                                {/* Headline */}
                                <div className="headline">
                                    <h3><i className="icon-material-outline-lock" /> Mật khẩu &amp; Bảo mật</h3>
                                </div>
                                <div className="dashboard-content with-padding">
                                    <div className="row">
                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Mật khẩu hiện tại</h5>
                                                <input type="password" id='current-password' className="with-border" />
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Mật khẩu mới</h5>
                                                <input type="password" id='new-password' className="with-border" />
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Nhập lại mật khẩu mới</h5>
                                                <input type="password" id='repeat-password' className="with-border" />
                                            </div>
                                        </div>
                                        {/* <div className="col-xl-12">
                                            <div className="checkbox">
                                                <input type="checkbox" id="two-step" defaultChecked />
                                                <label htmlFor="two-step"><span className="checkbox-icon" /> Enable Two-Step Verification via Email</label>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="col-xl-12">
                            <button className="button button-sliding-icon ripple-effect big margin-top-30">Cập nhật mật khẩu <i className="icon-feather-save"/></button>
                        </div>
                    </form>
                </div>
                {/* Row / End */}
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

const ChangePassword = withRouter(connect(mapStateToProps, mapDispatchToProps)(ChangePasswordComponent));
export default ChangePassword;