import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { S_Selector } from '../../../ultis/SHelper/S_Help_Input';

import avatarPlaceholder from '../../../assets/images/portrait_placeholder.png';
import imagePlaceholder from '../../../assets/images/image-placeholder.jpg';

import { updatePersonalInfo, updateUserState, updateCompanyInfo } from '../../../actions/Account';

class SettingComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    getBase64(file, cb) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    handleChangePersonalInfoSubmit() {
        let updateInfo = {};

        let fullname = document.getElementById('fullname').value;
        updateInfo['fullname'] = fullname;

        let gender = document.getElementById('gender').value;
        updateInfo['gender'] = gender;

        let dob = document.getElementById('dob').value;
        updateInfo['dob'] = dob;

        let email = document.getElementById('email').value;
        updateInfo['email'] = email;

        let address = document.getElementById('address').value;
        updateInfo['address'] = address;

        let identity = document.getElementById('identity').value;
        updateInfo['identity'] = identity;

        let dial = document.getElementById('dial').value;
        updateInfo['dial'] = dial;

        let avtInput = document.getElementById('avt-img-input');
        if (avtInput.files.length > 0) {
            updateInfo['avatarImg'] = document.getElementById('avt-img').src.split(',')[1];
        }

        let portraitInput = document.getElementById('portrait');
        if (portraitInput.files.length > 0) {
            updateInfo['portrait'] = document.getElementById('portrait-img').src.split(',')[1];
        }

        let frontIdInput = document.getElementById('frontID');
        if (frontIdInput.files.length > 0) {
            updateInfo['frontIdPaper'] = document.getElementById('front-img').src.split(',')[1];
        }

        let backIdInput = document.getElementById('backID');
        if (backIdInput.files.length > 0) {
            updateInfo['backIdPaper'] = document.getElementById('back-img').src.split(',')[1];
        }

        // --------- cal API -------------
        let { onUpdatePersonal } = this.props;
        onUpdatePersonal(updateInfo);
    }

    handleChangeCompanyInfoSubmit() {
        let updateInfo = {};

        let companyName = document.getElementById('company_name').value;
        updateInfo['company_name'] = companyName;

        let companyAddress = document.getElementById('company_address').value;
        updateInfo['company_address'] = companyAddress;

        let companyEmail = document.getElementById('company_email').value;
        updateInfo['company_email'] = companyEmail;

        let numberOfEmployees = document.getElementById('number_of_employees').value;
        updateInfo['number_of_employees'] = numberOfEmployees;

        let position = document.getElementById('position').value;
        updateInfo['position'] = position;

        // --------- cal API -------------
        let { onUpdateCompany } = this.props;
        onUpdateCompany(updateInfo);
    }

    handleImageChange(e, id_img) {
        let img = document.getElementById(id_img);
        this.getBase64(e.target.files[0], (result) => {
            img.src = result;
        });
    }

    renderPersonalInfo() {        
        let genders = [{ gender: 1, text: 'Nam' }, { gender: 0, text: 'Nữ' }];
        let { updatePersonalStatus } = this.props.SettingReducer;
        let {user} = this.props.HeaderReducer;

        let avtImg = '';
        let portrait = avatarPlaceholder;
        let frontId = imagePlaceholder;
        let backId = imagePlaceholder;

        if (user.avatarImg !== null) {
            avtImg = 'data:image/png;base64,' + user.avatarImg;
        }
        if (user.portrait !== null) {
            portrait = 'data:image/png;base64,' + user.portrait;
        }
        if (user.frontIdPaper !== null) {
            frontId = 'data:image/png;base64,' + user.frontIdPaper;
        }
        if (user.backIdPaper !== null) {
            backId = 'data:image/png;base64,' + user.backIdPaper;
        }
        if (updatePersonalStatus === 1) {
            document.getElementById('personal-info-flag').scrollIntoView({top: 80})
            return (
                <div className="col-12">
                    <div className="dashboard-box margin-top-0">
                        <div className="headline">
                            <h3><i className="icon-material-outline-account-circle" />Thông tin cá nhân</h3>
                        </div>

                        <div className="dashboard-content with-padding text-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <form onSubmit={(e) => { e.preventDefault(); this.handleChangePersonalInfoSubmit() }}>
                    
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
                                            <img id='avt-img' className="profile-pic" src={avtImg} alt="" />
                                        </div>
                                        <input type="file" id='avt-img-input' accept="image/*" style={{ display: 'none' }} onChange={(e) => { this.handleImageChange(e, 'avt-img') }} />
                                        <label htmlFor='avt-img-input' className='btn btn-primary py-1 w-100 text-center'><i className='icon-feather-camera'></i></label>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="submit-field">
                                                    <h5>Tên</h5>
                                                    <input type="text" id='fullname' className="with-border" defaultValue={user.fullname} />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="submit-field">
                                                    <h5>Giới tính</h5>
                                                    <S_Selector className="with-border" id="gender" placeholder='Giới tính' value={1} data={genders} value_tag='gender' text_tag='text'></S_Selector>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="submit-field">
                                                    <h5>Loại tài khoản</h5>
                                                    <div className="account-type">
                                                        <div>
                                                            <label htmlFor="personal-radio" className={"ripple-effect-dark account-type-label " + (!user.isBusinessUser ? 'account-type-check' : '')}>
                                                                <i className="icon-material-outline-account-circle"></i> Personal
                                                    </label>
                                                        </div>
                                                        <div>
                                                            <label htmlFor="company-radio" className={"ripple-effect-dark account-type-label " + (user.isBusinessUser ? 'account-type-check' : '')}>
                                                                <i className="icon-material-outline-business"></i> Company
                                                    </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="submit-field">
                                                    <h5>Ngày sinh</h5>
                                                    <input type="date" id='dob' className="with-border" defaultValue={user.dob} />
                                                </div>
                                            </div>
                                            <div className='col-12'>
                                                <div className="submit-field">
                                                    <h5>Email</h5>
                                                    <input type="email" id='email' className="with-border" defaultValue={user.email} />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="submit-field">
                                                    <h5>Địa chỉ</h5>
                                                    <input type="text" id='address' className="with-border" defaultValue={user.address} />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="submit-field">
                                                    <h5>Số CMND/Passport</h5>
                                                    <input type="text" id='identity' pattern="[0-9+]{10,15}" className="with-border" defaultValue={user.identity} />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="submit-field">
                                                    <h5>Số điện thoại</h5>
                                                    <input type="tel" id='dial' pattern="[0-9+]{10,11}" className="with-border" defaultValue={user.dial} />
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
                                                <img id='portrait-img' src={portrait} style={{ height: '100%', objectFit: 'contain' }} alt="" />
                                            </div>
                                            {/* Upload Button */}
                                            <div className="uploadButton margin-top-0">
                                                <input id="portrait" className="uploadButton-input" type="file" accept="image/*" onChange={(e) => { this.handleImageChange(e, 'portrait-img') }} />
                                                <label className="uploadButton-button ripple-effect" htmlFor="portrait">Đăng ảnh</label>
                                                <span className="uploadButton-file-name">Cập nhật ảnh chân dung</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="submit-field">
                                            <h5>Mặt trước CMND/Passport</h5>
                                            {/* Attachments */}
                                            <div className='my-2 text-center acc-image-upload'>
                                                <img id='front-img' src={frontId} style={{ height: '100%', objectFit: 'contain' }} alt="" />
                                            </div>
                                            {/* Upload Button */}
                                            <div className="uploadButton margin-top-0">
                                                <input id="frontID" className="uploadButton-input" type="file" accept="image/*" onChange={(e) => { this.handleImageChange(e, 'front-img') }} />
                                                <label className="uploadButton-button ripple-effect" htmlFor="frontID">Đăng ảnh</label>
                                                <span className="uploadButton-file-name">Cập nhật ảnh CMND/Passport</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="submit-field">
                                            <h5>Mặt sau CMND/Passport</h5>
                                            {/* Attachments */}
                                            <div className='my-2 text-center acc-image-upload'>
                                                <img id='back-img' src={backId} style={{ height: '100%', objectFit: 'contain' }} alt="" />
                                            </div>
                                            {/* Upload Button */}
                                            <div className="uploadButton margin-top-0">
                                                <input id="backID" className="uploadButton-input" type="file" accept="image/*" onChange={(e) => { this.handleImageChange(e, 'back-img') }} />
                                                <label className="uploadButton-button ripple-effect" htmlFor="backID">Đăng ảnh</label>
                                                <span className="uploadButton-file-name">Cập nhật ảnh CMND/Passport</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <button className="button button-sliding-icon ripple-effect big margin-top-30" type='submit'>Cập nhật thông tin cá nhân <i className="icon-feather-save" /></button>
                    </div>

                </form>
            );
        }
    }

    renderCompanyInfo() {
        let{company} = this.props.HeaderReducer;
        if (company !== null) {
            let { updateCompanyStatus } = this.props.SettingReducer;            
            if (updateCompanyStatus === 1) {
                document.getElementById("company-info-flag").scrollIntoView();
                return (
                    <div className="col-12">
                        <div className="dashboard-box margin-top-0">
                            <div className="headline">
                                <h3><i className="icon-material-outline-account-circle" />Thông tin công ty</h3>
                            </div>

                            <div className="dashboard-content with-padding text-center">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
            else {
                return (
                    <form onSubmit={(e) => { e.preventDefault(); this.handleChangeCompanyInfoSubmit() }}>
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
                                                <input type="text" id='company_name' className="with-border" defaultValue={company.company_name} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="submit-field">
                                                <h5>Địa chỉ công ty</h5>
                                                <input type="text" id='company_address' className="with-border" defaultValue={company.company_address} />
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className="submit-field">
                                                <h5>Email công ty</h5>
                                                <input type="email" id='company_email' className="with-border" defaultValue={company.company_email} />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="submit-field">
                                                <h5>Số nhân viên</h5>
                                                <input type="number" id='number_of_employees' min={1} className="with-border" defaultValue={company.number_of_employees} />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="submit-field">
                                                <h5>Vai trò của bạn trong công ty</h5>
                                                <input type="text" id='position' className="with-border" defaultValue={company.position} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Button */}
                        <div className="col-xl-12">
                            <button className="button button-sliding-icon ripple-effect big margin-top-30" type='submit'>Cập nhật thông tin công ty <i className="icon-feather-save" /></button>
                        </div>
                    </form>
                );
            }
        }
        else {
            return (
                <div></div>
            )
        }
    }

    render() {
        let {user} = this.props.HeaderReducer;
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
                <div>
                    
                    {/* Thông tin cá nhân */}
                    <div id='personal-info-flag' className='row'>                    
                        {this.renderPersonalInfo()}
                    </div>

                    {/* Thông tin của công ty ( nếu có ) */}
                    <div id='company-info-flag' className='row'>
                        {(
                            user.isBusinessUser
                                ?
                                this.renderCompanyInfo()
                                : ''
                        )}
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
        onUpdatePersonal: (personal) => {
            dispatch(updatePersonalInfo(personal));
        },
        onUpdateCompany: (company) => {
            dispatch(updateCompanyInfo(company));
        },
        onRegetUser: () => {
            dispatch(updateUserState());
        }
    }
}

const Setting = withRouter(connect(mapStateToProps, mapDispatchToProps)(SettingComponent));
export default Setting;