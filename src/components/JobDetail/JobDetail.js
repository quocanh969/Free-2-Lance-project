import React, { Component } from 'react';
import '../../assets/css/style.css';
import '../../assets/css/colors/blue.css';

import {withRouter, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';


// Image, khi mà vào project cần dùng ảnh của mình thì phải xóa mấy cái này
import Logo2 from '../../assets/images/logo2.png';

import UserAvatarPlaceholder from '../../assets/images/user-avatar-placeholder.png';

import GBFlag from '../../assets/images/flags/gb.svg';
import CompanyLogo2a from '../../assets/images/company-logo-02.png';
import CompanyLogo3a from '../../assets/images/company-logo-03.png';

import BackgroundSingleJob from '../../assets/images/single-job.jpg';

import MapContainer from '../map_JobsList'
import ApplyForm from './ApplyForm/ApplyForm';
import JobDetailInfo from './JobDetailTab/JobDetailInfo';
import EmployerInfo from './JobDetailTab/EmployerInfo';

class JobDetailComponent extends Component {    
    constructor(props)
    {
        super(props);    
        
        this.state = {
            tab: 1,
        }
    }
    
    componentDidMount() {
        window.scrollTo(0,0);

        const script = document.createElement("script");
        script.src = "./assets/maps.js";
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        let { places } = this.props.JobDetailReducer;
        return (
            <div>
                {/* Thông tin cơ bản */}
                <div className="single-page-header" data-background-image={BackgroundSingleJob}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="single-page-header-inner">
                                    <div className="left-side">
                                        <div className="header-image"><a href="single-company-profile.html"><img src={CompanyLogo3a} alt="" /></a></div>
                                        <div className="header-details">
                                            <h3>Restaurant General Manager</h3>
                                            <h5>About the Employer</h5>
                                            <ul>
                                                <li><a href="single-company-profile.html"><i className="icon-material-outline-business" /> King</a></li>
                                                <li><div className="bg-warning text-white rounded font-weight-bold px-2 font-size-15">{4.9}</div></li>
                                                <li><img className="flag" src={GBFlag} alt="" /> United Kingdom</li>
                                                <li><div className="verified-badge-with-title">Verified</div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="right-side">
                                        <div className="salary-box">
                                            <div className="salary-type">Annual Salary</div>
                                            <div className="salary-amount">$35k - $38k</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Page Content */}
                <div className="container">
                    <div className="row">
                        {/* Job detail infomation */}
                        <div className="col-xl-8 col-lg-8 content-right-offset">
                            <div className="single-page-section">
                                <ul className="nav nav-tabs mb-0">
                                    <li className="nav-item">
                                        <h4 className={"nav-link cursor-pointer mb-0 " + (this.state.tab === 1 ? 'active' : '')} onClick={()=>{this.setState({tab: 1})}}>Mô tả công việc</h4>
                                    </li>
                                    <li className="nav-item">
                                        <h4 className={"nav-link cursor-pointer mb-0 " + (this.state.tab === 2 ? 'active' : '')} onClick={()=>{this.setState({tab: 2})}}>Thông tin người thuê</h4>
                                    </li>
                                    <li className="nav-item">
                                        <h4 className={"nav-link cursor-pointer mb-0 " + (this.state.tab === 3 ? 'active' : '')} onClick={()=>{this.setState({tab: 3})}}>Bản đồ</h4>
                                    </li>
                                    <li className="nav-item">
                                        <h4 className={"nav-link cursor-pointer mb-0 " + (this.state.tab === 4 ? 'active' : '')} onClick={()=>{this.setState({tab: 4})}}>Hình ảnh</h4>
                                    </li>
                                    <li className="nav-item">
                                        <h4 className={"nav-link cursor-pointer mb-0 " + (this.state.tab === 5 ? 'active' : '')} onClick={()=>{this.setState({tab: 5})}}>Đấu giá</h4>
                                    </li>
                                </ul>
                                
                                <div className='mt-0 p-4 tab-component'>
                                {
                                    (
                                        this.state.tab === 1
                                        ?
                                        <JobDetailInfo></JobDetailInfo>  
                                        : this.state.tab === 2 ?
                                        <EmployerInfo></EmployerInfo>
                                        :
                                        <div id="single-job-map-container">
                                            <div id="singleListingMap" data-latitude="51.507717" data-longitude="-0.131095" data-map-icon="im im-icon-Hamburger"></div>
                                            {/* <a href="#" id="streetView">Street View</a> */}
                                            {/* <div>
                                                <MapContainer places={places} isList={false}/>
                                            </div> */}
                                            {/* Chức năng hiện đang trong quá trình phát triển, vui lòng quay lại sau */}
                                        </div>
                                    )
                                }
                                </div>
                            </div>
                            

                            <div className="single-page-section">
                                <h3 className="margin-bottom-25">Similar Jobs</h3>
                                {/* Listings Container */}
                                <div className="listings-container grid-layout">
                                    {/* Job Listing */}
                                    <a href="#" className="job-listing">
                                        {/* Job Listing Details */}
                                        <div className="job-listing-details">
                                            {/* Logo */}
                                            <div className="job-listing-company-logo">
                                                <img src={CompanyLogo2a} alt="" />
                                            </div>
                                            {/* Details */}
                                            <div className="job-listing-description">
                                                <h4 className="job-listing-company">Coffee</h4>
                                                <h3 className="job-listing-title">Barista and Cashier</h3>
                                            </div>
                                        </div>
                                        {/* Job Listing Footer */}
                                        <div className="job-listing-footer">
                                            <ul>
                                                <li><i className="icon-material-outline-location-on" /> San Francisco</li>
                                                <li><i className="icon-material-outline-business-center" /> Full Time</li>
                                                <li><i className="icon-material-outline-account-balance-wallet" /> $35000-$38000</li>
                                                <li><i className="icon-material-outline-access-time" /> 2 days ago</li>
                                            </ul>
                                        </div>
                                    </a>
                                    {/* Job Listing */}
                                    <a href="#" className="job-listing">
                                        {/* Job Listing Details */}
                                        <div className="job-listing-details">
                                            {/* Logo */}
                                            <div className="job-listing-company-logo">
                                                <img src={CompanyLogo3a} alt="" />
                                            </div>
                                            {/* Details */}
                                            <div className="job-listing-description">
                                                <h4 className="job-listing-company">King <span className="verified-badge" title="Verified Employer" data-tippy-placement="top" /></h4>
                                                <h3 className="job-listing-title">Restaurant Manager</h3>
                                            </div>
                                        </div>
                                        {/* Job Listing Footer */}
                                        <div className="job-listing-footer">
                                            <ul>
                                                <li><i className="icon-material-outline-location-on" /> San Francisco</li>
                                                <li><i className="icon-material-outline-business-center" /> Full Time</li>
                                                <li><i className="icon-material-outline-account-balance-wallet" /> $35000-$38000</li>
                                                <li><i className="icon-material-outline-access-time" /> 2 days ago</li>
                                            </ul>
                                        </div>
                                    </a>
                                </div>
                                {/* Listings Container / End */}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="col-xl-4 col-lg-4">
                            <div className="sidebar-container">
                                <button className="apply-now-button popup-with-zoom-anim w-100" data-toggle="modal" data-target="#myModal">Apply Now <i className="icon-material-outline-arrow-right-alt" /></button>
                                {/* Sidebar Widget */}
                                <div className="sidebar-widget">
                                    <div className="job-overview">
                                        <div className="job-overview-headline">Job Summary</div>
                                        <div className="job-overview-inner">
                                            <ul>
                                                <li>
                                                    <i className="icon-material-outline-location-on" />
                                                    <span>Location</span>
                                                    <h5>London, United Kingdom</h5>
                                                </li>
                                                <li>
                                                    <i className="icon-material-outline-business-center" />
                                                    <span>Job Type</span>
                                                    <h5>Full Time</h5>
                                                </li>
                                                <li>
                                                    <i className="icon-material-outline-local-atm" />
                                                    <span>Salary</span>
                                                    <h5>$35k - $38k</h5>
                                                </li>
                                                <li>
                                                    <i className="icon-material-outline-access-time" />
                                                    <span>Date Posted</span>
                                                    <h5>2 days ago</h5>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Sidebar Widget */}
                                {/*
                                <div className="sidebar-widget">
                                    <h3>Bookmark or Share</h3>
                                    
                                    <button className="bookmark-button margin-bottom-25">
                                        <span className="bookmark-icon" />
                                        <span className="bookmark-text">Bookmark</span>
                                        <span className="bookmarked-text">Bookmarked</span>
                                    </button>
                                    
                                    <div className="copy-url">
                                        <input id="copy-url" type="text" defaultValue={window.location.href} className="with-border" />
                                        <button className="copy-url-button ripple-effect" data-clipboard-target="#copy-url" title="Copy to Clipboard" data-tippy-placement="top"><i className="icon-material-outline-file-copy" /></button>
                                    </div>
                                    
                                    <div className="share-buttons margin-top-25">
                                        <div className="share-buttons-trigger"><i className="icon-feather-share-2" /></div>
                                        <div className="share-buttons-content">
                                            <span>Interesting? <strong>Share It!</strong></span>
                                            <ul className="share-buttons-icons">
                                                <li><a href="#" data-button-color="#3b5998" title="Share on Facebook" data-tippy-placement="top"><i className="icon-brand-facebook-f" /></a></li>
                                                <li><a href="#" data-button-color="#1da1f2" title="Share on Twitter" data-tippy-placement="top"><i className="icon-brand-twitter" /></a></li>
                                                <li><a href="#" data-button-color="#dd4b39" title="Share on Google Plus" data-tippy-placement="top"><i className="icon-brand-google-plus-g" /></a></li>
                                                <li><a href="#" data-button-color="#0077b5" title="Share on LinkedIn" data-tippy-placement="top"><i className="icon-brand-linkedin-in" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                */}
                            </div>
                        </div>
                    </div>
                </div>                
                {/* Wrapper / End */}

                {/* Apply for a job popup */}                
                <div id="myModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Apply Now</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <ApplyForm></ApplyForm>
                            </div>                            
                        </div>
                    </div>
                </div>
                {/* Apply for a job popup / End */}
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

const JobDetail = withRouter(connect(mapStateToProps, mapDispatchToProps)(JobDetailComponent));
export default JobDetail;