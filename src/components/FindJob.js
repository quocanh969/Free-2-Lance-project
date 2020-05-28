import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import {S_Selector} from '../ultis/SHelper/S_Help_Input';

class FindJobComponent extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            isMoreOption: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    areaSession(areas) {        
        let content = [];
        let count = 1;
        for(let i of areas)
        {
            content.push(
                <option value={count} key={count}>{i}</option>
            )
            count++;
        }

        return content;
    }

    categorySession(categories) {
        let content = [];
        let count = 1;
        for(let i of categories)
        {
            content.push(
                <option value={count} key={count}>{i}</option>
            )
            count++;
        }

        return content;
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
        for(let e of checkboxTypes)
        {
            content.push(
                <div className="col-3 mt-3 p-1" key={count}>
                    <div className='input-group rounded bg-light pt-3 pl-3'>
                        <label htmlFor={e.id} className='font-weight-bold'>
                            <input type="checkbox" className='s-checkbox mr-3' aria-label={e.name} id={e.id}/>
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
        if(!this.state.isMoreOption)
        {
            return(
                <div className='row'>
                    <div className='margin-top-50 col-12 text-center text-white font-weight-bold'                         
                        style={{fontSize:'15px'}}>
                        <span className='cursor-pointer' onClick={()=>{this.setState({isMoreOption:true})}}>Mở rộng &gt;</span>
                    </div>
                </div>
            );
        }
        else
        {
            return(
                <div className='row margin-top-30'>   
                    <div className='col-12 bg-light rounded p-5'>
                        <div className='row px-5'>
                            <label className='col-5 font-weight-bold pt-3'>Chủ công việc:</label>
                            <input id="employer-input" type="text" className='col-7' placeholder='Trần Văn A / Cộng ty PineApple'/>
                        </div>
                        <div className='row px-5'>
                            <label className='col-5 font-weight-bold pt-3'>Mức lương mong đợi:</label>
                            <select className="col-7 btn dropdown-toggle bs-placeholder btn-default" id='salary-select' defaultValue={0}>
                                <option value={0} disabled>Giá tiền</option>
                                <option value={1}>50.000đ - 100.000đ</option>
                                <option value={2}>100.000đ - 500.000đ</option>
                                <option value={3}>500.000đ - 1.000.000đ</option>
                                <option value={4}>1.000.000đ - 10.000.000đ</option>
                                <option value={5}>Lớn hơn 10.000.000đ</option>
                            </select>
                        </div>
                        <div className='row px-5'>
                            <label className='col-5 font-weight-bold pt-3'>Chi tiết khu vực (Quận):</label>
                            <select className="col-7" id='district-select' defaultValue={0}>
                                <option value={0} disabled>Quận</option>
                                <option value={1}>Quận 1</option>
                                <option value={2}>Quận 2</option>
                                <option value={3}>Quận 3</option>
                                <option value={4}>Quận 4</option>
                                <option value={5}>Quận 5</option>
                                <option value={6}>Quận 6</option>
                                <option value={7}>Quận 7</option>                                
                            </select>
                        </div>
                        <div className='row px-5'>
                            <label className='col-5 font-weight-bold pt-3'>Ngày hết hạn:</label>
                            <input id="expired-input" className='col-7' type="date" min="2020-01-01" max="2022-12-31"/>
                        </div>
                        <div className='row px-5'>
                            <label className='col-5 font-weight-bold pt-3'>Số lượng tuyển ( ít nhất ):</label>
                            <input id="vacancy-input" className='col-7' type="number" min="1" />
                        </div>
                    </div>                 
                    <div className='margin-top-50 col-12 text-center text-white font-weight-bold'                         
                        style={{fontSize:'15px'}}>
                        <span className='cursor-pointer' onClick={()=>{this.setState({isMoreOption:false})}}>Ẩn bớt &lt;</span>
                    </div>
                </div>
            );
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('submit nè');

        // Search bar field
        let title = document.getElementById('input-title').value;
        let area = document.getElementById('select-area').value;
        let category = document.getElementById('select-category').value;
        
        // Type Chechbox Field
        // let dealableJob = document.getElementById('co-dau-gia').checked;
        // let undealableJob = document.getElementById('khong-dau-gia').checked;
        // let companyJob = document.getElementById('cong-ty').checked;
        // let personalJob = document.getElementById('ca-nhan').checked;        
        // let workByTime = document.getElementById('viec-lam-thoi-vu').checked;
        // let workByProduct = document.getElementById('viec-theo-san-pham').checked;
        // let onlineJob = document.getElementById('viec-lam-online').checked;
        // let offlineJob = document.getElementById('viec-theo-san-pham').checked;        


        // More option field
        // if(this.state.isMoreOption)
        // {
        //     let employer = document.getElementById('employer-input').value;
        //     let salary = document.getElementById('salary-select').value;
        //     let district = document.getElementById('district-select').value;
        //     let expiredDate = document.getElementById('expired-input').value;
        //     let vacancy = document.getElementById('vacancy-input').value;
        // }

        console.log('Title: ', title);
        console.log('Area: ', area);
        console.log('Category: ', category);
        // console.log('Dealable Job: ', dealableJob);
        // console.log('Undealable Job: ', undealableJob);
        // console.log('Company Job: ', companyJob);
        // console.log('Personal Job: ', personalJob);
        // console.log('Work By Time: ', workByTime);
        // console.log('Work By Product: ', workByProduct);
        // console.log('Online Job: ', onlineJob);
        // console.log('Offline Job: ', offlineJob);
        // console.log('Employer: ', employer);
        // console.log('Salary: ', salary);
        // console.log('District: ', district);
        // console.log('Expired Date: ', expiredDate);
        // console.log('Vacancy: ', vacancy);

    }

    render() {
        let areas = [{id:1, name:'TPHCM'}, {id:2, name:'Hà Nội'}, {id:3, name:'Hải Phòng'}, {id:4, name:'Nam Định'}, {id:5, name:'Nghệ An'}];
        let categories = [{id:1, name:'lau nhà'},{id:2, name:'rửa chén'},{id:3, name:'nấu cơm'},{id:4, name:'giặc quần áo'},{id:5, name:'quét bụi'},];        

        return (
            <form className='bg-secondary py-5' onSubmit={this.handleSubmit}>

                <div className="container s-find-job">                    
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
                                    <S_Selector id='select-area' placeholder='Khu vực' data={areas} value_tag='id' text_tag='name'></S_Selector>
                                    {/* <select id='select-area' className="selectpicker default" defaultValue={0}>
                                        <option value={0} disabled>Khu vực</option>
                                        {this.areaSession(areas)}
                                    </select> */}
                                    
                                </div>
                                
                                {/* Category Search Field */}
                                <div className="intro-search-field">
                                    <label htmlFor="select-category" className="field-title ripple-effect">Nhóm cộng việc là gì?</label>
                                    <S_Selector id='select-category' placeholder='Loại công việc' data={categories} value_tag='id' text_tag='name'></S_Selector>
                                    {/* <select className="selectpicker default" id='select-category' defaultValue={0}>
                                        <option value={0} disabled>Loại công việc</option>
                                        {this.categorySession(categories)}
                                    </select> */}
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
