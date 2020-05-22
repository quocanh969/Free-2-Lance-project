import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { S_Selector } from '../../../ultis/SHelper/S_Help_Input';

import avatarPlaceholder from '../../../assets/images/user-avatar-placeholder.png';
import browseCompoanies from '../../../assets/images/browse-companies-03.png';
import { getUser } from '../../../services/user.services';

class SettingComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
        }        
    }

    componentDidMount() {
        window.scrollTo(0,0);        
    }

    initData() {
        getUser()
        .then(res=>{
            console.log(res);            
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    render() {
        let { user } = this.props.HeaderReducer;
        // this.initData();

        let genders = ['Nam', 'Nữ'];

        return (
            <div className="dashboard-content-inner">
                {/* Dashboard Headline */}
                <div className="dashboard-headline d-flex justify-content-between">
                    <h3>Thiết lập</h3>
                    <div className='font-weight-bold'>
                        <div>Tài khoản: {user.email}</div>
                        {(
                            user.account_status === 0                            
                            ? 
                            <div>
                                <h5 className='text-warning font-weight-bold mb-1'><i className='icon-line-awesome-circle bg-warning rounded rounded-circle'></i> Chưa kích hoạt</h5>
                                <h5>( Vui lòng kích hoạt tài khoản qua mail )</h5>
                            </div>
                            : user.account_status === 1
                            ? 
                            <div>
                                <h5 className='text-primary font-weight-bold mb-1'><i className='icon-line-awesome-circle bg-primary rounded rounded-circle'></i> Đã kích hoạt</h5>
                                <h5>( Vui lòng xác thực tài khoản )</h5>
                            </div>                            
                            : user.account_status === 2
                            ? 
                            <div>
                                <h5 className='text-success font-weight-bold mb-1'><i className='icon-line-awesome-circle bg-success rounded rounded-circle'></i> Đã xác thực</h5>
                                <h5>( Tài khoản có thể hoạt động )</h5>
                            </div>                                 
                            :
                            <div>
                                <h5 className='text-danger font-weight-bold mb-1'><i className='icon-line-awesome-circle bg-danger rounded rounded-circle'></i> Bị cấm</h5>
                                <h5>( Tài khoản không thể hoạt động )</h5>
                            </div>                                 
                        )}
                    </div>                    
                </div>

                {/* Row */}
                <div className="row">

                    {/* Thông tin nhân */}
                    <div className="col-12">
                        <div className="dashboard-box margin-top-0">
                            <div className="headline">
                                <h3><i className="icon-material-outline-account-circle" />Thông tin cá nhân</h3>
                            </div>
                            <div className="dashboard-content with-padding padding-bottom-0">
                                <div className="row">
                                    <div className="col-auto">
                                        <div className="avatar-wrapper mb-2 pb-0 px-auto">
                                            <img className="profile-pic" src="images/user-avatar-placeholder.png" alt="" />
                                        </div>
                                        <input type="file" accept="image/*" style={{ display: 'none' }} />
                                        <div className='btn btn-primary py-1 w-100 text-center'><i className='icon-feather-camera'></i></div>                                        
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="submit-field">
                                                    <h5>Tên</h5>
                                                    <input type="text" className="with-border" defaultValue={user.fullname} />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="submit-field">
                                                    <h5>Giới tính</h5>
                                                    <S_Selector className="with-border" id="gender" placeholder='Giới tính' value='Nam' data={genders}></S_Selector>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="submit-field">
                                                    <h5>Loại tài khoản</h5>
                                                    <div className="account-type">
                                                        <div>                                                            
                                                            <label htmlFor="personal-radio" className={"ripple-effect-dark account-type-label " +(!user.isBusinessUser ? 'account-type-check' : '')}>
                                                                <i className="icon-material-outline-account-circle"></i> Personal
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <label htmlFor="company-radio" className={"ripple-effect-dark account-type-label " +(user.isBusinessUser ? 'account-type-check' : '')}>
                                                                <i className="icon-material-outline-business"></i> Company
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="submit-field">
                                                    <h5>Ngày sinh</h5>
                                                    <input type="date" className="with-border" defaultValue={user.dob} />
                                                </div>
                                            </div>
                                            <div className='col-12'>
                                                <div className="submit-field">
                                                    <h5>Email</h5>
                                                    <input type="email" className="with-border" defaultValue={user.email} />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="submit-field">
                                                    <h5>Địa chỉ</h5>
                                                    <input type="text" className="with-border" defaultValue={user.address} />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="submit-field">
                                                    <h5>Số CMND/Passport</h5>
                                                    <input type="text" pattern="[0-9+]{10,15}" className="with-border" defaultValue={user.email} />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="submit-field">
                                                    <h5>Số điện thoại</h5>
                                                    <input type="tel" pattern="[0-9+]{10,11}" className="with-border" defaultValue={user.dial} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Thông tin xác thực -- CMND / Passport */}
                    <div className="col-12">
                        <div className="dashboard-box">
                            {/* Headline */}
                            <div className="headline">
                                <h3><i className="icon-material-outline-face" /> Thông tin xác thhực</h3>
                            </div>
                            <div className="dashboard-content with-padding">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="submit-field">
                                            <h5>Ảnh chân dung</h5>
                                            {/* Attachments */}
                                            <div className='my-2 text-center acc-image-upload'>
                                                <img src={avatarPlaceholder} style={{height: '100%', objectFit: 'contain'}} alt="" />
                                            </div>
                                            {/* Upload Button */}
                                            <div className="uploadButton margin-top-0">
                                                <input className="uploadButton-input" type="file" accept="image/*" id="portrait"/>
                                                <label className="uploadButton-button ripple-effect" htmlFor="portrait">Upload</label>                                                
                                                <span className="uploadButton-file-name">Cập nhật ảnh chân dung</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="submit-field">
                                            <h5>Mặt trước CMND/Passport</h5>
                                            {/* Attachments */}
                                            <div className='my-2 text-center acc-image-upload'>
                                                <img src={browseCompoanies} style={{height: '100%', objectFit: 'contain'}} alt="" />                                                                                               
                                            </div>
                                            {/* Upload Button */}
                                            <div className="uploadButton margin-top-0">
                                                <input className="uploadButton-input" type="file" accept="image/*" id="frontID"/>
                                                <label className="uploadButton-button ripple-effect" htmlFor="frontID">Upload</label>                                                
                                                <span className="uploadButton-file-name">Cập nhật ảnh CMND/Passport</span>
                                            </div>                                            
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="submit-field">
                                            <h5>Mặt sau CMND/Passport</h5>
                                            {/* Attachments */}
                                            <div className='my-2 text-center acc-image-upload'>
                                                <img src={browseCompoanies} style={{height: '100%', objectFit: 'contain'}} alt="" />                                                                                               
                                            </div>
                                            {/* Upload Button */}
                                            <div className="uploadButton margin-top-0">
                                                <input className="uploadButton-input" type="file" accept="image/*" id="backID"/>
                                                <label className="uploadButton-button ripple-effect" htmlFor="backID">Upload</label>                                                
                                                <span className="uploadButton-file-name">Cập nhật ảnh CMND/Passport</span>
                                            </div>   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Thông tin của công ty ( nếu có ) */}       
                    {(
                        user.isBusinessUser
                        ?
                        <div className="col-12">
                            <div className="dashboard-box">
                                <div className="headline">
                                    <h3><i className="icon-material-outline-business" />Thông tin công ty</h3>
                                </div>
                                <div className="dashboard-content with-padding padding-bottom-0">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="submit-field">
                                                <h5>Công ty</h5>
                                                <input type="text" className="with-border" /*defaultValue={user.fullname}*/ defaultValue='Công ty TNHH Tin học Bambi' />
                                            </div>
                                        </div>  
                                        <div className="col-12">
                                            <div className="submit-field">
                                                <h5>Địa chỉ công ty</h5>
                                                <input type="text" className="with-border" defaultValue={user.address} />
                                            </div>
                                        </div>                                      
                                        <div className='col-12'>
                                            <div className="submit-field">
                                                <h5>Email công ty</h5>
                                                <input type="email" className="with-border" defaultValue={user.email} />
                                            </div>
                                        </div>                                        
                                        <div className="col-6">
                                            <div className="submit-field">
                                                <h5>Số nhân viên</h5>
                                                <input type="number" min={1} className="with-border" defaultValue={2} />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="submit-field">
                                                <h5>Vai trò của bạn trong công ty</h5>
                                                <input type="text" className="with-border" defaultValue='CEO' />
                                            </div>
                                        </div>
                                    </div>                             
                                </div>
                            </div>
                        </div>
                        : ''
                    )}

                    {/* Button */}
                    <div className="col-xl-12">
                        <button className="button ripple-effect big margin-top-30">Lưu thay đổi</button>
                    </div>
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

const Setting = withRouter(connect(mapStateToProps, mapDispatchToProps)(SettingComponent));
export default Setting;