import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class JobDetailInfoComponent extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let job = this.props.job || { dealable: false, isOnline: false, isCompany: false, job_type: false };
        return (
            <div>
                <div className='row mb-3'>
                    <div className='col-3 font-weight-bold'>Tiêu đề:</div>
                    <div className='col-9'></div>
                </div>

                <div className='row my-3'>
                    <div className='col-3 font-weight-bold'>Chủ đề:</div>
                    <div className='col-9'></div>
                </div>

                <div className='row my-3'>
                    <div className='col-3 font-weight-bold'>Mức lương:</div>
                    <div className='col-9'></div>
                </div>

                <div className='row my-3'>
                    <div className='col-3 font-weight-bold'>Địa chỉ:</div>
                    <div className='col-9'></div>
                </div>

                <div className='row my-3'>
                    <div className='col-3 font-weight-bold'>Thành phố:</div>
                    <div className='col-3'></div>
                    <div className='col-3 font-weight-bold'>Khu vực:</div>
                    <div className='col-3'></div>
                </div>

                <div className='row my-3'>                    
                    <div className='col-3 font-weight-bold'>Ngày đăng:</div>
                    <div className='col-3'></div>
                    <div className='col-3 font-weight-bold'>Ngày hết hạn:</div>
                    <div className='col-3'></div>
                </div>

                <div className='row my-3'>
                    <div className='col-3 font-weight-bold'>Tính chất:</div>
                    <div className='col-9' style={{ color: 'blue' }}>
                        <span style={{ textDecoration: 'underline' }}>{(job.dealable ? 'Đấu giá' : 'Không cần đấu giá')}</span> ,&nbsp;
                    <span style={{ textDecoration: 'underline' }}>{(job.job_type ? 'Thời vụ' : 'Sản phẩm')}</span> ,&nbsp;
                    <span style={{ textDecoration: 'underline' }}>{(job.isOnline ? 'Online' : 'Offline')}</span> ,&nbsp;
                    <span style={{ textDecoration: 'underline' }}>{(job.isCompany ? 'Công ty' : 'Cá nhân')}</span>
                    </div>
                </div>

                <div className='row my-3'>
                    <div className='col-3 font-weight-bold'>Mô tả chi tiết:</div>
                    <div className='col-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>

                <div className='row my-3'>
                    <div className='col-3 font-weight-bold'>Số lượng:</div>
                    <div className='col-9'></div>
                </div>

                <div className='row mt-3'>
                    <div className='col-3 font-weight-bold'>Yêu cầu thêm:</div>
                    <div className='col-9'></div>
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

const JobDetailInfo = withRouter(connect(mapStateToProps, mapDispatchToProps)(JobDetailInfoComponent));
export default JobDetailInfo;