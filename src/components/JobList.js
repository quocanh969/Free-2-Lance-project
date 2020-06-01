import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import '../assets/css/style.css';
import '../assets/css/colors/blue.css';

import CompanyLogo1 from '../assets/images/company-logo-01.png';
import CompanyLogo2 from '../assets/images/company-logo-02.png';
import CompanyLogo3 from '../assets/images/company-logo-03.png';
import CompanyLogo4 from '../assets/images/company-logo-04.png';
import CompanyLogo5 from '../assets/images/company-logo-05.png';
import CompanyLogo6 from '../assets/images/company-logo-06.png';

import {loadJobList} from '../actions/Job';

import { S_Selector } from '../ultis/SHelper/S_Help_Input';

class JobListComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isGridMode: true,
        }
    }

    componentWillMount() {
        this.loadJobListFunc(1);
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
            content.push(
                <NavLink to='/job-detail' className="job-listing" key={count}>
                    {/* Job Listing Details */}
                    <div className="job-listing-details">
                        {/* Logo */}
                        <div className="job-listing-company-logo">
                            <img src={'data:image/png;base64,'+e.img} alt="" />
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
        console.log(jobList);     

        for (let e of jobList) {
            let postDate = new Date(e.post_date);
            let expireDate = new Date(e.expire_date);

            content.push(
                <div className="job-listing container" key={count}>
                    {/* Job Listing Details */}
                    <div className="job-listing-details row">
                        {/* Logo */}
                        <div className="col-4">
                            <img src={'data:image/png;base64,'+e.img} alt="" />
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
            this.loadJobListFunc(pageNum);
        }        
    }

    loadJobListFunc(page) {
        let {onLoadJobList} = this.props;
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
                  
        
        onLoadJobList(page, 8, query);
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
                <li key={e}><div className={page === e && "current-page"} onClick={()=>{this.handlePagination(e)}}>{e}</div></li>
            );            
        }


        return content;
    }

    render() {
        let {areas, jobTopic} = this.props.GeneralReducer;
        let {page, total} = this.props.JobsListReducer;
        let sortType = [{type: 1, text: 'Mới nhất'}, {type: 2, text: 'Đã đăng lâu nhất'}];

        let totalPage = total/8 + (total % 8 > 0 ? 1 : 0);

        return (
            <div>
                <div className="margin-top-90"></div>
                <div className="container">
                    <div className="row">

                        <div className="col-xl-3 col-lg-4">
                            <div className="sidebar-container">

                                {/* Từ khóa */}
                                <div className="sidebar-widget">
                                    <h3>Keywords</h3>
                                    <div className="keywords-container">
                                        <div className="keyword-input-container">
                                            <input type="text" className="keyword-input" placeholder="e.g. job title" />
                                            <button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add" /></button>
                                        </div>
                                        <div className="keywords-list">{/* keywords go here */}</div>
                                        <div className="clearfix" />
                                    </div>
                                </div>

                                {/* Khu vực */}
                                <div className="sidebar-widget">
                                    <h3>Khu vực</h3>
                                    <div className="input-with-icon">
                                        <S_Selector className='with-border' id='select-area' placeholder='Khu vực' data={areas} value_tag='id_province' text_tag='name'></S_Selector>
                                    </div>
                                </div>

                                {/* Category */}
                                <div className="sidebar-widget">
                                    <h3>Chủ đề</h3>
                                    <S_Selector className='with-border' id='select-category' placeholder='Loại công việc' data={jobTopic} value_tag='id_jobtopic' text_tag='name'></S_Selector>
                                </div>
                                {/* Job Types */}
                                <div className="sidebar-widget">
                                    <h3>Job Type</h3>
                                    <div className="switches-list">
                                        <div className="switch-container">
                                            <label className="switch"><input type="checkbox" /><span className="switch-button" /> Freelance</label>
                                        </div>
                                        <div className="switch-container">
                                            <label className="switch"><input type="checkbox" /><span className="switch-button" /> Full Time</label>
                                        </div>
                                        <div className="switch-container">
                                            <label className="switch"><input type="checkbox" /><span className="switch-button" /> Part Time</label>
                                        </div>
                                        <div className="switch-container">
                                            <label className="switch"><input type="checkbox" /><span className="switch-button" /> Internship</label>
                                        </div>
                                        <div className="switch-container">
                                            <label className="switch"><input type="checkbox" /><span className="switch-button" /> Temporary</label>
                                        </div>
                                    </div>
                                </div>
                                {/* Salary */}
                                <div className="sidebar-widget">
                                    <h3>Salary</h3>
                                    <div className="margin-top-55" />
                                    {/* Range Slider */}
                                    <input className="range-slider" type="text" defaultValue data-slider-currency="$" data-slider-min={1500} data-slider-max={15000} data-slider-step={100} data-slider-value="[1500,15000]" />
                                </div>
                                {/* Tags */}
                                <div className="sidebar-widget">
                                    <h3>Tags</h3>
                                    <div className="tags-container">
                                        <div className="tag">
                                            <input type="checkbox" id="tag1" />
                                            <label htmlFor="tag1">front-end dev</label>
                                        </div>
                                        <div className="tag">
                                            <input type="checkbox" id="tag2" />
                                            <label htmlFor="tag2">angular</label>
                                        </div>
                                        <div className="tag">
                                            <input type="checkbox" id="tag3" />
                                            <label htmlFor="tag3">react</label>
                                        </div>
                                        <div className="tag">
                                            <input type="checkbox" id="tag4" />
                                            <label htmlFor="tag4">vue js</label>
                                        </div>
                                        <div className="tag">
                                            <input type="checkbox" id="tag5" />
                                            <label htmlFor="tag5">web apps</label>
                                        </div>
                                        <div className="tag">
                                            <input type="checkbox" id="tag6" />
                                            <label htmlFor="tag6">design</label>
                                        </div>
                                        <div className="tag">
                                            <input type="checkbox" id="tag7" />
                                            <label htmlFor="tag7">wordpress</label>
                                        </div>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                            </div>
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
                                        <S_Selector id='select-sort-type' flex='col-9' placeholder='Mới nhất' data={sortType} value_tag='type' text_tag='text'></S_Selector>
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
                                                <li className={"pagination-arrow " + (page === 1 && 'd-none')}><div onClick={()=>{this.handlePagination(page - 1)}}><i className="icon-material-outline-keyboard-arrow-left" /></div></li>
                                                {this.renderPagination(page, totalPage)}
                                                <li className={"pagination-arrow " + (totalPage - page < 3 && 'd-none')}><div onClick={()=>{this.handlePagination(page + 1)}}><i className="icon-material-outline-keyboard-arrow-right" /></div></li>
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
        onLoadJobList: (page, take, query) => {
            dispatch(loadJobList(page, take, query));
        }
    }
}

const JobList = withRouter(connect(mapStateToProps, mapDispatchToProps)(JobListComponent));
export default JobList;
