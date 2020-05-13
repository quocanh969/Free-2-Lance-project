import React, { Component } from 'react';

import UserAvatarPlaceholder from '../../../assets/images/user-avatar-placeholder.png';
import IdentityPlaceholder from '../../../assets/images/company-logo-placeholder-alt.png';

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { S_Drag_Drop } from '../../../ultis/SHelper/S_Help_Input';

class PersonalInfoComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditted: false,
            potrait: null,
            frontIdPaper: null,
            backIdPaper: null,
        }

        this.handleEditSubmit = this.handleEditSubmit.bind(this);
    }

    handlePotraitChange(file) {
        this.setState({potrait: file});
        console.log(this.state);
    }

    handleFrontIDChange(file) {
        this.setState({frontIdPaper: file});
        console.log(this.state);
    }

    handleBackIDChange(file) {
        this.setState({backIdPaper: file});
        console.log(this.state);
    }

    handleEditSubmit(e) {   
        e.preventDefault();        
        this.setState({isEditted: false})
        console.log(document.getElementById('email').value);
        console.log(document.getElementById('dial').value);
        console.log(document.getElementById('identity').value);
        console.log(document.getElementById('address').value);
        
    }

    render() {
        let { user } = this.props.HeaderReducer;
        return (
            <div>
                <form className='rounded mb-3 py-5' id='personal-info-form' onSubmit={this.handleEditSubmit}>
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

                    <div className='text-center mt-1 mb-2'>
                    {
                        (this.state.isEditted 
                            ?
                            <button className='cursor-pointer nav-link-simulate font-size-10'
                                type='submit'>
                                <i className='icon-material-outline-check-circle'></i>
                                Cập nhật thông tin
                            </button>
                            :                            
                            <span className='cursor-pointer nav-link-simulate font-size-10'
                                onClick={()=>{this.setState({isEditted: true})}}>
                                <i className='icon-feather-edit'></i>
                                Chinh sửa thông tin
                            </span>
                        )
                    }  
                    </div>

                    <div className='px-5 mb-1 py-0 input-group'>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><i className='icon-feather-phone'></i></span>
                        </div>
                        {
                            (this.state.isEditted
                                ?
                                <input type="tel" pattern="[0-9+]{10,11}" className="form-control" id='dial' placeholder="Dial" defaultValue={user.dial} aria-label="Dial"/>
                                :
                                <div className='form-control'>{user.dial}</div>
                            )
                        }
                    </div>
                    <div className='px-5 mb-1 py-0 input-group'>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><i className='icon-feather-mail'></i></span>
                        </div>
                        {
                            (this.state.isEditted
                                ?
                                <input type="email" className="form-control" id='email' placeholder="Email" defaultValue={user.email} aria-label="Email"/>
                                :
                                <div className='form-control'>{user.email}</div>
                            )
                        }
                    </div>
                    <div className='px-5 mb-1 py-0 input-group'>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><i className='icon-feather-home'></i></span>
                        </div>
                        {
                            (this.state.isEditted
                                ?
                                <input type="text" className="form-control" id='address' placeholder="Address" defaultValue={user.address} aria-label="Address"/>
                                :
                                <div className='form-control'>{user.address}</div>
                            )
                        }
                    </div>
                    <div className='px-5 mb-1 py-0 input-group'>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><i className='icon-feather-user'></i></span>
                        </div>
                        {
                            (this.state.isEditted
                                ?
                                <input type="tel" pattern="[0-9+]{10,15}" className="form-control" id='identity' placeholder="Identity" defaultValue={user.identity} aria-label="Identity"/>
                                :
                                <div className='form-control'>{user.identity}</div>
                            )
                        }
                    </div>
                    {
                        (this.state.isEditted
                            ?
                            <div className='row px-5 mt-4'>
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
                            :
                            <div className='row px-5 mt-4'>
                                <div className='col-4 mx-0 px-1'>
                                    <img className='identity-box' src={user.potrait || IdentityPlaceholder} style={{height: '130px'}}/>
                                </div>
                                <div className='col-4 mx-0 px-1'>
                                    <img className='identity-box' src={user.frontIdPaper || IdentityPlaceholder} style={{height: '130px'}}/>
                                </div>
                                <div className='col-4 mx-0 px-1'>
                                    <img className='identity-box' src={user.backIdPaper || IdentityPlaceholder} style={{height: '130px'}}/>
                                </div>                      
                            </div>
                        )
                    }
                    
                </form>
 
                {/* <div className='rounded mt-3 p-5'>
                    <h3 className='font-weight-bold mb-4'>Hồ sơ CV cá nhân</h3>
                    <S_Drag_Drop 
                        onChange={this.handleBackIDChange}
                        title="Drag 'n' Drop your file here">
                    </S_Drag_Drop>    
                </div> */}
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