import React, { Component } from 'react';

import UserAvatarPlaceholder from '../../../assets/images/user-avatar-placeholder.png';

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class PersonalInfoComponent extends Component {
    render() {
        let { user } = this.props.HeaderReducer;
        return (
            <div>
                <div className='rounded mb-3 py-5'>
                    <div className='text-center mb-5'>
                        <img src={UserAvatarPlaceholder} height='100' width='100'
                            className='rounded-circle border border-secondary p-1'></img>
                    </div>
                    <div className='text-center font-size-30'>
                        {user.fullname}
                    </div>
                    <div className='text-center font-size-15 my-2'>
                        {user.dob}
                    </div>
                    <div className='cursor-pointer nav-link-simulate font-size-10 text-center my-1'><i className='icon-feather-edit'></i>Chinh sửa thông tin</div>
                    <div className='px-5 mb-1 py-0 input-group'>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><i className='icon-feather-phone'></i></span>
                        </div>
                        <div className='form-control'>{user.dial}</div>
                    </div>
                    <div className='px-5 mb-1 py-0 input-group'>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><i className='icon-feather-mail'></i></span>
                        </div>
                        <div className='form-control'>{user.email}</div>
                    </div>
                    <div className='px-5 mb-1 py-0 input-group'>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><i className='icon-feather-home'></i></span>
                        </div>
                        <div className='form-control'>{user.address}</div>
                    </div>
                    <div className='px-5 mb-1 py-0 input-group'>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><i className='icon-feather-user'></i></span>
                        </div>
                        <div className='form-control'>{user.identity}</div>
                    </div>
                    <div className='row'>
                        
                    </div>
                </div>
 
                <div className='rounded mt-3' style={{ height: '200px' }}>
                    Câp nhật CV cá nhân
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

const PersonalInfo = withRouter(connect(mapStateToProps, mapDispatchToProps)(PersonalInfoComponent));
export default PersonalInfo;