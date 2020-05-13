import React, { Component } from 'react';

import UserAvatarPlaceholder from '../../../assets/images/user-avatar-placeholder.png';

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { S_Drag_Drop } from '../../../ultis/SHelper/S_Help_Input';

class PersonalInfoComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            potrait: null,
            frontID: null,
            backID: null,
            cvFile: null,
        }
    }

    handlePotraitChange(file) {
        this.setState({potrait: file});
        console.log(this.state);
    }

    handleFrontIDChange(file) {
        this.setState({frontID: file});
        console.log(this.state);
    }

    handleBackIDChange(file) {
        this.setState({backID: file});
        console.log(this.state);
    }

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
                    <div className='row px-5 mt-3'>
                        <S_Drag_Drop className='col-4 mx-0 px-1' style={{height: '150px'}} 
                            onChange={this.handlePotraitChange}
                            type='image'
                            title='Drag your image here'>                            
                        </S_Drag_Drop>
                        <S_Drag_Drop className='col-4 mx-0 px-1' style={{height: '150px'}} 
                            onChange={this.handleFrontIDChange}
                            type='image'
                            title='Drag your image here'>
                        </S_Drag_Drop>
                        <S_Drag_Drop className='col-4 mx-0 px-1' style={{height: '150px'}} 
                            onChange={this.handleBackIDChange}
                            type='image'
                            title='Drag your image here'>
                        </S_Drag_Drop>                        
                    </div>
                </div>
 
                <div className='rounded mt-3 p-5'>
                    <h3 className='font-weight-bold mb-4'>Hồ sơ CV cá nhân</h3>
                    <S_Drag_Drop 
                        onChange={this.handleBackIDChange}
                        title="Drag 'n' Drop your file here">
                    </S_Drag_Drop>    
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