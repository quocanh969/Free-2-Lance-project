import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../ultis/history/history';

import { S_Selector } from '../ultis/SHelper/S_Help_Input';

class FindJobComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMoreOption: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    typeSession() {
        let content = [];

        let checkboxTypes = [
            {
                name: 'Có đấu giá',
                id: 'co-dau-gia',
            },
            {
                name: 'Không cần đấu giá',
                id: 'khong-dau-gia',
            },
            {
                name: 'Công ty',
                id: 'cong-ty',
            },
            {
                name: 'Cá nhân',
                id: 'ca-nhan',
            },
            {
                name: 'Việc làm thời vụ',
                id: 'viec-lam-thoi-vu',
            },
            {
                name: 'Việc theo sản phẩm',
                id: 'viec-theo-san-pham',
            },
            {
                name: 'Việc làm online',
                id: 'viec-lam-online',
            },
            {
                name: 'Việc theo offline',
                id: 'viec-theo-offline',
            },
        ]

        let count = 0;
        for (let e of checkboxTypes) {
            content.push(
                <div className="col-3 mt-3 p-1" key={count}>
                    <div className='input-group rounded bg-light pt-3 pl-3'>
                        <label htmlFor={e.id} className='font-weight-bold'>
                            <input type="checkbox" className='s-checkbox mr-3' aria-label={e.name} id={e.id} />
                            {e.name}
                        </label>
                    </div>
                </div>
            );
            count++;
        }

        return content;
    }



    moreOptionSession() {
        if (!this.state.isMoreOption) {
            return (
                <div className='row'>
                    <div className='margin-top-50 col-12 text-center text-white font-weight-bold'
                        style={{ fontSize: '15px' }}>
                        <span className='cursor-pointer' onClick={() => { this.setState({ isMoreOption: true }) }}>Mở rộng &gt;</span>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className='row margin-top-30'>
                    <div className='col-12 bg-light rounded p-5'>
                        <div className='row px-5'>
                            <label className='col-5 font-weight-bold pt-3'>Chủ công việc:</label>
                            <input id="employer-input" type="text" className='col-7' placeholder='Trần Văn A / Cộng ty PineApple' />
                        </div>
                        <div className='row px-5'>
                            <label className='col-5 font-weight-bold pt-3'>Mức lương mong đợi:</label>
                            <select className="col-7 btn dropdown-toggle bs-placeholder btn-default" id='salary-select' defaultValue={0}>
                                <option value={0} disabled>Giá tiền</option>
                                <option value={1}>Nhỏ hơn 100.000 đ</option>
                                <option value={2}>100.000đ - 500.000đ</option>
                                <option value={3}>500.000đ - 1.000.000đ</option>
                                <option value={4}>1.000.000đ - 10.000.000đ</option>
                                <option value={5}>Lớn hơn 10.000.000đ</option>
                            </select>
                        </div>
                        <div className='row px-5'>
                            <label className='col-5 font-weight-bold pt-3'>Ngày hết hạn:</label>
                            <input id="expired-input" className='col-7' type="date" min="2020-01-01" max="2050-12-31" />
                        </div>
                        <div className='row px-5'>
                            <label className='col-5 font-weight-bold pt-3'>Số lượng tuyển ( ít nhất ):</label>
                            <input id="vacancy-input" className='col-7' type="number" min="1" />
                        </div>
                    </div>
                    <div className='margin-top-50 col-12 text-center text-white font-weight-bold'
                        style={{ fontSize: '15px' }}>
                        <span className='cursor-pointer' onClick={() => { this.setState({ isMoreOption: false }) }}>Ẩn bớt &lt;</span>
                    </div>
                </div>
            );
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        let QueryObject = {};

        // Search bar field
        let title = document.getElementById('input-title').value;
        if (title !== '') QueryObject['title'] = title;

        let area = document.getElementById('select-area').value;
        if (area !== '0') QueryObject['area_province'] = area;

        let category = document.getElementById('select-category').value;
        if (category !== '0') QueryObject['job_topic'] = category;

        // Type Chechbox Field
        let dealableJob = document.getElementById('co-dau-gia').checked;
        let undealableJob = document.getElementById('khong-dau-gia').checked;
        if (dealableJob ^ undealableJob === true) {
            if (dealableJob === true) {
                QueryObject['dealable'] = 1;
            }
            else {
                QueryObject['dealable'] = 0;
            }
        }

        let companyJob = document.getElementById('cong-ty').checked;
        let personalJob = document.getElementById('ca-nhan').checked;
        if (companyJob ^ personalJob === true) {
            if (companyJob === true) {
                QueryObject['isCompany'] = 1;
            }
            else {
                QueryObject['isCompany'] = 0;
            }
        }

        let workByTime = document.getElementById('viec-lam-thoi-vu').checked;
        let workByProduct = document.getElementById('viec-theo-san-pham').checked;
        if (workByTime ^ workByProduct === true) {
            if (workByTime === true) {
                QueryObject['job_type'] = 1;
            }
            else {
                QueryObject['job_type'] = 0;
            }
        }

        let onlineJob = document.getElementById('viec-lam-online').checked;
        let offlineJob = document.getElementById('viec-theo-san-pham').checked;
        if (onlineJob ^ offlineJob === true) {
            if (onlineJob === true) {
                QueryObject['isOnline'] = 1;
            }
            else {
                QueryObject['isOnline'] = 0;
            }
        }

        // More option field
        if (this.state.isMoreOption) {
            let employer = document.getElementById('employer-input').value;
            if (employer !== '') QueryObject['employer'] = employer;

            let salary = Number.parseInt(document.getElementById('salary-select').value);
            if (salary !== 0) {
                switch (salary) {
                    case 1:
                        {
                            QueryObject['salary'] = { top: 100000, bot: 0 };
                            break;
                        }
                    case 2:
                        {
                            QueryObject['salary'] = { top: 500000, bot: 100000 };
                            break;
                        }
                    case 3:
                        {
                            QueryObject['salary'] = { top: 1000000, bot: 500000 };
                            break;
                        }
                    case 4:
                        {
                            QueryObject['salary'] = { top: 10000000, bot: 1000000 };
                            break;
                        }
                    case 5:
                        {
                            QueryObject['salary'] = { top: 0, bot: 10000000 };
                            break;
                        }
                }
            }

            let expiredDate = document.getElementById('expired-input').value;
            if (expiredDate !== '') QueryObject['expire_date'] = expiredDate;

            let vacancy = document.getElementById('vacancy-input').value;
            if (vacancy !== '') QueryObject['vacancy'] = vacancy;
        }

        // console.log(QueryObject);
        history.push('/job-list', QueryObject);
    }

    render() {
        let { jobTopic, areas, isLoadingJobTopic, isLoadingAreas } = this.props.GeneralReducer;

        return (
            <form id='s-find-job-form' className='py-5' onSubmit={this.handleSubmit}>

                <div id='s-find-job' className="container pt-5">
                    {/* Search Bar */}
                    <div className="row">
                        <div className="col-md-12 margin-bottom-40">
                            <div className="intro-banner-search-form margin-top-95">

                                {/* Title Search Field */}
                                <div className="intro-search-field">
                                    <label htmlFor="input-title" className="field-title ripple-effect">Bạn cần trợ giúp việc gì?</label>
                                    <input id="input-title" type="text" placeholder="Ví dụ: tạo một website giúp .." />
                                </div>

                                {/* Area Search Field */}
                                <div className="intro-search-field">
                                    <label htmlFor="select-area" className="field-title ripple-effect">Tại nơi nào?</label>
                                    {isLoadingAreas ? (<div className="loading" key={1}>
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>) : (<S_Selector id='select-area' placeholder='Khu vực' data={areas} value_tag='id_province' text_tag='name'></S_Selector>)}
                                </div>

                                {/* Category Search Field */}
                                <div className="intro-search-field">
                                    <label htmlFor="select-category" className="field-title ripple-effect">Nhóm cộng việc là gì?</label>
                                    {isLoadingJobTopic ? (<div className="loading" key={1}>
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>) : (<S_Selector id='select-category' placeholder='Loại công việc' data={jobTopic} value_tag='id_jobtopic' text_tag='name'></S_Selector>)}

                                </div>

                            </div>
                        </div>

                        {this.typeSession()}


                    </div>


                    {this.moreOptionSession()}

                    <div className='row margin-top-25'>
                        <div className='col-4'></div>
                        <div className='col-4 text-center'>
                            <button className='btn btn-primary w-100 font-weight-bold'><i className='mt-3 icon-material-outline-search font-weight-bold'></i>&nbsp;&nbsp;Tìm kiếm</button>
                        </div>
                        <div className='col-4'></div>
                    </div>
                </div>

            </form>
        )
    }
}

// Container

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

const FindJob = withRouter(connect(mapStateToProps, mapDispatchToProps)(FindJobComponent));
export default FindJob;
