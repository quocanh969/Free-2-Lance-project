import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import '../assets/css/style.css';
import '../assets/css/colors/blue.css';

import CompanyLogoPlaceholder from '../assets/images/company-logo-placeholder.png';

import {loadJobList} from '../actions/Job';

import { S_Selector } from '../ultis/SHelper/S_Help_Input';

class JobListComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isGridMode: true,
            isASC: 2,
        }

        this.query = this.initQuery();

        this.hanldeSortChange = this.hanldeSortChange.bind(this);
    }

    componentWillMount() {
        this.loadJobListFunc(1, this.query);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    renderTags(tags) {
        let content = [], count = 0;
        for(let e of tags)
        {
            content.push(
                <span key={count}><span style={{textDecoration: 'underline', color: 'blue'}}>{e.tag_name},</span>&nbsp;</span>
            );
            count++;
        }

        return content;
    }

    generateJobListGridMode() {
        let content = [], count = 0;
        let {jobList} = this.props.JobsListReducer;
              

        for (let e of jobList) {
            let postDate = new Date(e.post_date);
            let expireDate = new Date(e.expire_date);
            let logo = CompanyLogoPlaceholder;
            if(e.img !== null)
            {
                logo = 'data:image/png;base64,' + e.img;
            }    
            content.push(
                <NavLink to='/job-detail' className="job-listing" key={count}>
                    {/* Job Listing Details */}
                    <div className="job-listing-details">
                        {/* Logo */}
                        <div className="job-listing-company-logo">
                            <img src={logo} alt="" />
                        </div>
                        {/* Details */}
                        <div className="job-listing-description">
                            <h3 className="job-listing-title">{e.title}</h3>
                        </div>
                    </div>
                    {/* Job Listing Footer */}
                    <div className="job-listing-footer">
                        <span className="bookmark-icon" />
                        <ul>
                            <li><i className="icon-material-outline-location-on" /> {e.area_province}</li>                            
                            <li><i className="icon-material-outline-account-balance-wallet" /> {e.salary} đ</li>
                            <br></br>
                            <li><i className="icon-material-outline-business-center" /> {postDate.getDate()+ '/' + postDate.getMonth() + '/' + postDate.getFullYear()}</li>
                            <li><i className="icon-material-outline-access-time" /> {expireDate.getDate()+ '/' + expireDate.getMonth() + '/' + expireDate.getFullYear()}</li>
                        </ul>
                    </div>
                </NavLink>
            );
            count++;
        }
        return content;
    }

    generateJobListListMode() {
        let content = [], count = 0;
        let {jobList} = this.props.JobsListReducer;  

        for (let e of jobList) {
            let postDate = new Date(e.post_date);
            let expireDate = new Date(e.expire_date);
            let logo = CompanyLogoPlaceholder;
            if(e.img !== null)
            {
                logo = 'data:image/png;base64,'+ e.img;
            }
            content.push(
                <div className="job-listing container" key={count}>
                    {/* Job Listing Details */}
                    <div className="job-listing-details row">
                        {/* Logo */}
                        <div className="col-4">
                            <img src={logo} alt="" />
                        </div>
                        {/* Details */}
                        <div className="col-6">
                            {/* <h4 className="job-listing-company">{e.company} <span className="verified-badge" title="Verified Employer" data-tippy-placement="top" /></h4> */}
                            <NavLink to='/job-detail' className="d-block font-weight-bold text-dark">{e.title}</NavLink>
                            {this.renderTags(e.tags)}
                            <div className="d-inline-block text-truncate text-dark" style={{maxWidth: "50vh", maxHeight: '50%'}}>{e.description}</div>
                            {/* Job Listing Footer */}
                            <div className="job-listing-footer">
                                <ul>
                                    <li><i className="icon-material-outline-location-on" /> {e.area_province}</li>                                    
                                    <li><i className="icon-material-outline-account-balance-wallet" /> {e.salary} đ</li>
                                </ul>
                            </div>
                            <div className="job-listing-footer">
                                <ul>                                    
                                    <li><i className="icon-material-outline-business-center" /> {postDate.getDate()+ '/' + postDate.getMonth() + '/' + postDate.getFullYear()}</li>
                                    <li><i className="icon-material-outline-access-time" /> {expireDate.getDate()+ '/' + expireDate.getMonth() + '/' + expireDate.getFullYear()}</li>
                                </ul>
                            </div>
                        </div>
                        {/* Bookmark */}
                        <span className="bookmark-icon col-2"/>
                    </div>
                    
                </div>
            );
            count++;
        }
        return content;
    }

    handlePagination(pageNum) {
        if(pageNum !== this.props.JobsListReducer.page)
        {
            this.loadJobListFunc(pageNum, this.query);
        }        
    }

    hanldeSortChange() {
        this.setState({isASC: document.getElementById('select-sort-type').value},()=>{
            this.loadJobListFunc(1, this.query);
        });
    }

    initQuery() {
        let query = {};

        if(this.props.location.state === null || this.props.location.state === undefined)
        {
            // navigate từ topic trên header
            let {params} = this.props.match;
            // Tiền xử lý params
            for(let e in params)
            {
                if(params !== '')
                {
                    query[e] = params[e];
                }
            }
        }
        else
        {
            // navigate từ search page
            query = this.props.location.state;
        }

        return query;
    }

    loadJobListFunc(page, query) {
        let {onLoadJobList} = this.props;        
        onLoadJobList(page, 8, this.state.isASC, query);
    }

    renderPagination(page, totalPage) {
        let content = [];
        let start = 1, end = 4;
        if(totalPage - 4 < page)
        {
            if(totalPage - 4 < 0)
            {
                start = 1;
            }
            else
            {
                start = totalPage - 4;
            }            
            end = totalPage;
        }
        else
        {
            start = page;
            end = page + 3;
        }

        for(let e = start; e <= end; e++)
        {
            content.push(
                <li key={e}><div className={'cursor-pointer ' + (page === e ? "current-page" : undefined)} onClick={()=>{this.handlePagination(e)}}>{e}</div></li>
            );            
        }


        return content;
    }

    renderFilter() {
        let {areas, jobTopic} = this.props.GeneralReducer;
        console.log(this.query);
        return (
            <div className="sidebar-container">
                <h2 className='font-weight-bold text-293FE4 mb-3 border-bottom border-293FE4'>Bộ lọc</h2>

                {/* Khu vực */}
                <div className="sidebar-widget">
                    <h3>Khu vực</h3>
                    <div className="input-with-icon">
                        <S_Selector id='select-area' disbaled={this.query['area_province'] !== undefined ? true : false} value={this.query['area_province']} className='with-border' placeholder='Chọn khu vực' data={areas} value_tag='id_province' text_tag='name'></S_Selector>
                    </div>
                </div>

                {/* Chủ đề */}
                <div className="sidebar-widget">
                    <h3>Chủ đề</h3>
                    <div className="input-with-icon">
                        <S_Selector id='select-category' className='with-border' placeholder='Chọn chủ đề' data={jobTopic} value_tag='id_jobtopic' text_tag='name'></S_Selector>
                    </div>
                </div>
                
                {/* Tính chất công việc */}
                <div className="sidebar-widget">
                    <h3>Tính chất công việc</h3>
                    <div className="switches-list">
                        <div className="switch-container">
                            <label className="switch"><input type="checkbox" /><span className="switch-button" /> Online</label>
                        </div>
                        <div className="switch-container">
                            <label className="switch"><input type="checkbox" /><span className="switch-button" /> Việc công ty</label>
                        </div>
                        <div className="switch-container">
                            <label className="switch"><input type="checkbox" /><span className="switch-button" /> Việc bán thời gian</label>
                        </div>
                        <div className="switch-container">
                            <label className="switch"><input type="checkbox" /><span className="switch-button" /> Đấu giá</label>
                        </div>
                    </div>
                </div>

                {/* Mức lương */}
                <div className="sidebar-widget">
                    <h3>Salary</h3>
                    <div className="input-with-icon">
                        <select className="btn dropdown-toggle bs-placeholder btn-default" id='salary-select' defaultValue={0}>
                            <option value={0} disabled>Giá tiền</option>
                            <option value={1}>Nhỏ hơn 100.000 đ</option>
                            <option value={2}>100.000đ - 500.000đ</option>
                            <option value={3}>500.000đ - 1.000.000đ</option>
                            <option value={4}>1.000.000đ - 10.000.000đ</option>
                            <option value={5}>Lớn hơn 10.000.000đ</option>
                        </select>
                    </div>
                </div>

                {/* Ngày hết hạn */}
                <div className="sidebar-widget">
                    <h3>Ngày hết hạn</h3>
                    <div className="input-with-icon">
                        <input id="expired-input" className='' type="date" min="2020-01-01" max="2050-12-31"/>
                    </div>
                </div>
                        
                {/* Số lượng tuyển ( ít nhất ) */}
                <div className="sidebar-widget">
                    <h3>Số lượng tuyển ( ít nhất )</h3>
                    <div className="input-with-icon">
                        <input id="vacancy-input" className='' type="number" min="1" />
                    </div>
                </div>
            
            </div>                        
        )
    }

    render() {
        let {areas, jobTopic} = this.props.GeneralReducer;
        let {page, total} = this.props.JobsListReducer;
        let sortType = [{type: 2, text: 'Mới nhất'}, {type: 1, text: 'Đã đăng lâu nhất'}];
        let totalPage = Math.ceil(total/8);        

        return (
            <div>
                <div className="margin-top-90"></div>
                <div className="container">
                    <div className="row">

                        <div className="col-xl-3 col-lg-4">
                            {this.renderFilter()}
                        </div>
                        
                        <div className="col-xl-9 col-lg-8 content-left-offset">

                            <h3 className="page-title">Danh sách công việc</h3>

                            {/* Option box */}
                            <div className="notify-box margin-top-15 container">
                                <div className='row py-auto'>
                                    <div className='col-6 my-auto'>
                                        <span className={'text-white pt-2 pb-1 px-1 rounded mr-1 cursor-pointer ' + (this.state.isGridMode ? 'bg-293FE4' : 'bg-secondary')}
                                            onClick={() => { this.setState({ isGridMode: true }) }}>
                                            <i className='icon-feather-grid p-1 my-auto'></i>
                                        </span>
                                        <span className={'text-white pt-2 pb-1 px-1 rounded mr-1 cursor-pointer ' + (!this.state.isGridMode ? 'bg-293FE4' : 'bg-secondary')}
                                            onClick={() => { this.setState({ isGridMode: false }) }}>
                                            <i className='icon-feather-list p-1 my-auto'></i>
                                        </span>
                                    </div>
                                    <div className="col-6 row">
                                        <div className='col-3 my-auto'>Sort by:</div>
                                        <S_Selector id='select-sort-type' handleChange={this.hanldeSortChange} flex='col-9' value={2} placeholder='Sắp xếp' data={sortType} value_tag='type' text_tag='text'></S_Selector>
                                    </div>
                                </div>
                            </div>

                            <div className={"listings-container margin-top-35 " + (this.state.isGridMode ? 'grid-layout' : 'compact-list-layout')}>
                                {(
                                    this.state.isGridMode
                                        ?
                                        this.generateJobListGridMode()
                                        :
                                        this.generateJobListListMode()
                                )}


                            </div>
                            {/* Pagination */}
                            <div className="clearfix" />
                            <div className="row">
                                <div className="col-md-12">
                                    {/* Pagination */}
                                    <div className="pagination-container margin-top-30 margin-bottom-60">
                                        <nav className="pagination">
                                            <ul>
                                                <li className={"pagination-arrow " + ((page === 1 || totalPage - page < 3) && 'd-none')}><div className='cursor-pointer' onClick={()=>{this.handlePagination(page - 1)}}><i className="icon-material-outline-keyboard-arrow-left" /></div></li>
                                                {this.renderPagination(page, totalPage)}
                                                <li className={"pagination-arrow " + (totalPage - page < 3 && 'd-none')}><div className='cursor-pointer' onClick={()=>{this.handlePagination(page + 1)}}><i className="icon-material-outline-keyboard-arrow-right" /></div></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            {/* Pagination / End */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadJobList: (page, take, isASC, query) => {
            dispatch(loadJobList(page, take, isASC, query));
        }
    }
}

const JobList = withRouter(connect(mapStateToProps, mapDispatchToProps)(JobListComponent));
export default JobList;
