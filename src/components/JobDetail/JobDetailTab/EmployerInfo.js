import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class EmployerInfoComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let employer = this.props.employer;
        return (
            <div>
                {/* Thông tin cá nhân */}
                <div className='row mb-3'>
                    <div className='col-4 font-weight-bold'>Người thuê:</div>
                    <div className='col-8'></div>
                </div>
                <div className='row mb-3'>
                    <div className='col-4 font-weight-bold'>Email liên hệ:</div>
                    <div className='col-8'></div>
                </div>
                <div className='row mb-3'>
                    <div className='col-4 font-weight-bold'>Điện thoại liên lạc:</div>
                    <div className='col-8'></div>
                </div>                
                {/* Thông tin công ty */}
                <div className='row mb-3'>
                    <div className='col-4 font-weight-bold'>Vai trò:</div>
                    <div className='col-8'></div>
                </div>
                <hr></hr>
                <div className='row mb-3'>
                    <div className='col-4 font-weight-bold'>Tên công ty:</div>
                    <div className='col-8'></div>
                </div>
                <div className='row mb-3'>
                    <div className='col-4 font-weight-bold'>Địa chỉ:</div>
                    <div className='col-8'></div>
                </div>
                <div className='row mb-3'>
                    <div className='col-4 font-weight-bold'>Email công ty:</div>
                    <div className='col-8'></div>
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

const EmployerInfo = withRouter(connect(mapStateToProps, mapDispatchToProps)(EmployerInfoComponent));
export default EmployerInfo;