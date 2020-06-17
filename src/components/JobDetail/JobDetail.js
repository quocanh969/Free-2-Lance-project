import React, { Component } from "react";
import "../../assets/css/style.css";
import "../../assets/css/colors/blue.css";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  prettierNumber,
  prettierDate,
  prettierDateAgo,
} from "../../ultis/SHelper/prettier";
import { loadJobDetail } from "../../actions/Job";

import CompanyLogoPlaceholder from "../../assets/images/company-logo-placeholder.png";

import BackgroundSingleJob from "../../assets/images/single-job.jpg";

import MapContainer from "../map_JobsList";
import ApplyForm from "./ApplyForm/ApplyForm";
import JobDetailInfo from "./JobDetailTab/JobDetailInfo";
import EmployerInfo from "./JobDetailTab/EmployerInfo";

class JobDetailComponent extends Component {
  constructor(props) {
    super(props);

    let jobId = 121;
    if (this.props.location && this.props.location.search) {
      jobId = this.props.location.search.substring(1);
    }
    this.state = {
      tab: 1,
      jobId: jobId,
    };

    //redirect to other page if jobId === -1
  }

  componentWillMount() {
    let { onLoadJobDetail } = this.props;
    let { jobId } = this.state;
    onLoadJobDetail(jobId);
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    const script = document.createElement("script");
    script.src = "./assets/maps.js";
    script.async = true;
    document.body.appendChild(script);
  }

  renderLogo(images) {
    //get logo
    let logo = CompanyLogoPlaceholder;
    if (images != null && images.length !== 0) {
      logo = "data:image/png;base64," + images[0];
    }

    return <img src={logo} className="my-2" key={0} alt=""></img>;
  }

  renderPhoto(images) {
    let content = [];

    images.forEach((image, i) => {
      let logo = CompanyLogoPlaceholder;
      if (image !== null) {
        logo = "data:image/png;base64," + image;
      }
      content.push(<img src={logo} className="my-2" key={i} alt=""></img>);
    });

    return <div className="text-center">{content}</div>;
  }

  renderAuctionTab(dealable) {
    if (dealable) {
      return (
        <li className="nav-item">
          <h4
            className={
              "nav-link cursor-pointer mb-0 " +
              (this.state.tab === 5 ? "active" : "")
            }
            onClick={() => {
              this.setState({ tab: 5 });
            }}
          >
            Đấu giá
          </h4>
        </li>
      );
    } else return [];
  }

  renderApplicants(applicants) {
    //applicant = {dial, email, fullname, id_job, id_user, proposed_price}

    let content = [];
    applicants.forEach((applicant, i) => {
      content.push(
        <div className="row" key={i}>
          <div className="col-md-6">{applicant.fullname}</div>
          <div className="col-md-6">
            {prettierNumber(applicant.proposed_price)} VNĐ
          </div>
        </div>
      );
    });
    return content;
  }

  render() {
    let { places } = this.props.JobDetailReducer;
    let { jobDetail } = this.props.JobDetailReducer;

    return (
      <div>
        {/* Thông tin cơ bản */}
        <div
          className="single-page-header"
          data-background-image={BackgroundSingleJob}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="single-page-header-inner">
                  <div className="left-side">
                    <div className="header-image">
                      <a href="single-company-profile.html">
                        {this.renderLogo(jobDetail.imgs)}
                      </a>
                    </div>
                    <div className="header-details">
                      <h3>{jobDetail.title}</h3>
                      <h5>{jobDetail.topic}</h5>
                      <ul>
                        <li>
                          <a href="single-company-profile.html">
                            {jobDetail.name_employer}
                          </a>
                        </li>
                        {/* <li>
                          <div className="bg-warning text-white rounded font-weight-bold px-2 font-size-15">
                            {4.9}
                          </div>
                        </li> */}
                        <li>
                          <i className="icon-material-outline-location-city" />{" "}
                          {jobDetail.district_name}, {jobDetail.province_name}
                        </li>
                        {/* <li><div className="verified-badge-with-title">Verified</div></li> */}
                      </ul>
                      <div className="font-weight-bold">
                        <i className="icon-line-awesome-calendar"></i>{" "}
                        {prettierDate(jobDetail.post_date)}
                      </div>
                    </div>
                  </div>
                  <div className="right-side">
                    <div className="salary-box">
                      <div className="salary-type">Tiền công</div>
                      <div className="salary-amount">
                        {prettierNumber(jobDetail.salary)} VNĐ
                      </div>
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
                    <h4
                      className={
                        "nav-link cursor-pointer mb-0 " +
                        (this.state.tab === 1 ? "active" : "")
                      }
                      onClick={() => {
                        this.setState({ tab: 1 });
                      }}
                    >
                      Mô tả công việc
                    </h4>
                  </li>
                  <li className="nav-item">
                    <h4
                      className={
                        "nav-link cursor-pointer mb-0 " +
                        (this.state.tab === 2 ? "active" : "")
                      }
                      onClick={() => {
                        this.setState({ tab: 2 });
                      }}
                    >
                      Thông tin người thuê
                    </h4>
                  </li>
                  <li className="nav-item">
                    <h4
                      className={
                        "nav-link cursor-pointer mb-0 " +
                        (this.state.tab === 3 ? "active" : "")
                      }
                      onClick={() => {
                        this.setState({ tab: 3 });
                      }}
                    >
                      Bản đồ
                    </h4>
                  </li>
                  <li className="nav-item">
                    <h4
                      className={
                        "nav-link cursor-pointer mb-0 " +
                        (this.state.tab === 4 ? "active" : "")
                      }
                      onClick={() => {
                        this.setState({ tab: 4 });
                      }}
                    >
                      Hình ảnh
                    </h4>
                  </li>
                  {this.renderAuctionTab(jobDetail.dealable)}
                </ul>

                <div className="mt-0 p-4 tab-component">
                  {this.state.tab === 1 ? (
                    <JobDetailInfo></JobDetailInfo>
                  ) : this.state.tab === 2 ? (
                    <EmployerInfo></EmployerInfo>
                  ) : this.state.tab === 3 ? (
                    <div id="single-job-map-container">
                      <div
                        id="singleListingMap"
                        data-latitude="51.507717"
                        data-longitude="-0.131095"
                        data-map-icon="im im-icon-Hamburger"
                      ></div>
                      {/* <a href="#" id="streetView">Street View</a> */}
                      {/* <div>
                                                <MapContainer places={places} isList={false}/>
                                            </div> */}
                      {/* Chức năng hiện đang trong quá trình phát triển, vui lòng quay lại sau */}
                    </div>
                  ) : this.state.tab === 4 ? (
                    this.renderPhoto(jobDetail.imgs)
                  ) : (
                    this.renderApplicants(jobDetail.dealers)
                  )}
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
                        <img src={CompanyLogoPlaceholder} alt="" />
                      </div>
                      {/* Details */}
                      <div className="job-listing-description">
                        <h4 className="job-listing-company">Coffee</h4>
                        <h3 className="job-listing-title">
                          Barista and Cashier
                        </h3>
                      </div>
                    </div>
                    {/* Job Listing Footer */}
                    <div className="job-listing-footer">
                      <ul>
                        <li>
                          <i className="icon-material-outline-location-on" />{" "}
                          San Francisco
                        </li>
                        <li>
                          <i className="icon-material-outline-business-center" />{" "}
                          Full Time
                        </li>
                        <li>
                          <i className="icon-material-outline-account-balance-wallet" />{" "}
                          $35000-$38000
                        </li>
                        <li>
                          <i className="icon-material-outline-access-time" /> 2
                          days ago
                        </li>
                      </ul>
                    </div>
                  </a>
                  {/* Job Listing */}
                  <a href="#" className="job-listing">
                    {/* Job Listing Details */}
                    <div className="job-listing-details">
                      {/* Logo */}
                      <div className="job-listing-company-logo">
                        <img src={CompanyLogoPlaceholder} alt="" />
                      </div>
                      {/* Details */}
                      <div className="job-listing-description">
                        <h4 className="job-listing-company">
                          King{" "}
                          <span
                            className="verified-badge"
                            title="Verified Employer"
                            data-tippy-placement="top"
                          />
                        </h4>
                        <h3 className="job-listing-title">
                          Restaurant Manager
                        </h3>
                      </div>
                    </div>
                    {/* Job Listing Footer */}
                    <div className="job-listing-footer">
                      <ul>
                        <li>
                          <i className="icon-material-outline-location-on" />{" "}
                          San Francisco
                        </li>
                        <li>
                          <i className="icon-material-outline-business-center" />{" "}
                          Full Time
                        </li>
                        <li>
                          <i className="icon-material-outline-account-balance-wallet" />{" "}
                          $35000-$38000
                        </li>
                        <li>
                          <i className="icon-material-outline-access-time" /> 2
                          days ago
                        </li>
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
                <button
                  className="apply-now-button popup-with-zoom-anim w-100"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  Đăng kí ứng cử{" "}
                  <i className="icon-material-outline-arrow-right-alt" />
                </button>
                {/* Sidebar Widget */}
                <div className="sidebar-widget">
                  <div className="job-overview">
                    <div className="job-overview-headline">Tóm tắt</div>
                    <div className="job-overview-inner">
                      <ul>
                        <li>
                          <i className="icon-material-outline-location-on" />
                          <span>Vị trí</span>
                          <h5>
                            {jobDetail.district_name}, {jobDetail.province_name}
                          </h5>
                        </li>
                        <li>
                          <i className="icon-material-outline-business-center" />
                          <span>Tính chất</span>
                          <h5>
                            {jobDetail.isCompany ? "Công ty" : "Cá nhân"},{" "}
                            {jobDetail.isOnline ? "Online" : "Offline"}
                          </h5>
                        </li>
                        <li>
                          <i className="icon-material-outline-local-atm" />
                          <span>Tiền công</span>
                          <h5>{prettierNumber(jobDetail.salary)}</h5>
                        </li>
                        <li>
                          <i className="icon-material-outline-access-time" />
                          <span>Ngày đăng</span>
                          <h5>{prettierDateAgo(jobDetail.post_date)}</h5>
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
                <h4 className="modal-title">Đăng kí ứng cử</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <ApplyForm></ApplyForm>
              </div>
            </div>
          </div>
        </div>
        {/* Apply for a job popup / End */}
      </div>
    );
  }
}

// === Container

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadJobDetail: (jobId) => {
      dispatch(loadJobDetail(jobId));
    },
  };
};

const JobDetail = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(JobDetailComponent)
);
export default JobDetail;
