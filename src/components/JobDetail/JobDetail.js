import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  prettierNumber,
  prettierDate,
  prettierDateAgo,
  getImageSrc,
} from "../../ultis/SHelper/helperFunctions";
import { loadJobDetail, loadSimilarJobs } from "../../actions/Job";
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
    let { id_job } = this.props.match.params;
    if (id_job) {
      jobId = id_job;
    }
    this.state = {
      tab: 1,
      jobId: jobId,
      applicantSortType: 1,
    };

    // applicantSortType:
    // 1 - Giá giảm dần
    // -1 - Giá tăng dần
    // 2 - Tên giảm dần abc
    // -2 - Tên tăng dần abc
    // 3 - Email giảm dần abc
    // -3 - Email tăng dần abc

    //redirect to other page if jobId === -1
  }

  componentWillMount() {
    let { onLoadJobDetail } = this.props;
    let { jobId } = this.state;
    onLoadJobDetail(jobId);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps() {
    if (this.props.history.location.pathname !== this.props.location.pathname) {
      let splitted = this.props.history.location.pathname.split("/", 3);
      let newJobDetail = Number.parseInt(splitted[2]);
      this.setState({ tab: 1, jobId: newJobDetail, applicantSortType: 1 });
      let { onLoadJobDetail } = this.props;
      onLoadJobDetail(newJobDetail);
      window.scrollTo(0, 0);
    }
  }

  renderLogo(images) {
    //get logo
    let logo = CompanyLogoPlaceholder;
    if (images != null && images.length !== 0) {
      logo = getImageSrc(images[0], CompanyLogoPlaceholder);
    }

    return <img src={logo} className="my-2" key={0} alt=""></img>;
  }

  renderMap() {
    let { jobDetail } = this.props.JobDetailReducer;
    let places = [
      {
        name: "Nơi làm",
        title: "Nơi làm",
        position: { lat: jobDetail.lat, lng: jobDetail.lng },
      },
    ];
    return (
      <div>
        <MapContainer places={places} isList={false} />
      </div>
    );
  }

  renderPhoto(images) {
    let content = [];

    images.forEach((image, i) => {
      let logo = getImageSrc(image, CompanyLogoPlaceholder);
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

  renderSimilarJobs() {
    let { similarJobs } = this.props.JobDetailReducer;
    let jobList = similarJobs.jobList;
    if (jobList && jobList.length > 0) {
      let listSimilarJobs = [];
      let { jobId } = this.state;
      jobList.forEach((job, i) => {
        if (job.id_job == jobId) return;
        let logo = getImageSrc(job.img, CompanyLogoPlaceholder);
        listSimilarJobs.push(
          <NavLink
            to={"/job-detail/" + job.id_job}
            className="job-listing"
            key={i}
          >
            {/* Job Listing Details */}
            <div className="job-listing-details">
              {/* Logo */}
              <div className="job-listing-company-logo">
                <img src={logo} alt="" />
              </div>
              {/* Details */}
              <div className="job-listing-description">
                <h3 className="job-listing-title">{job.title}</h3>
              </div>
            </div>
            {/* Job Listing Footer */}
            <div className="job-listing-footer">
              <span className="bookmark-icon" />
              <ul>
                <li>
                  <i className="icon-material-outline-location-on" />{" "}
                  {job.area_province}
                </li>
                <li>
                  <i className="icon-material-outline-account-balance-wallet" />{" "}
                  {prettierNumber(job.salary)} VNĐ
                </li>
                <br></br>
                <li>
                  <i className="icon-material-outline-business-center" />{" "}
                  {prettierDate(job.post_date)}
                </li>
                <li>
                  <i className="icon-material-outline-access-time" />{" "}
                  {prettierDate(job.expire_date)}
                </li>
              </ul>
            </div>
          </NavLink>
        );
      });
      return (
        <div className="single-page-section">
          <h3 className="margin-bottom-25">Công việc liên quan</h3>
          {/* Listings Container */}
          <div className="listings-container grid-layout">
            {listSimilarJobs}
          </div>
          {/* Listings Container / End */}
        </div>
      );
    } else return [];
  }

  renderApplicants(applicants) {
    //applicant = {dial, email, fullname, id_job, id_user, proposed_price}

    let content = [];
    content.push(
      <div
        className="row bg-293FE4 text-white"
        key={-1}
        style={{ height: "50px" }}
      >
        <div
          className="col-md-4 font-weight-bold cursor-pointer"
          style={{ lineHeight: "50px" }}
        >
          Họ tên người ứng tuyển
        </div>
        <div
          className="col-md-4 font-weight-bold cursor-pointer"
          style={{ lineHeight: "50px" }}
        >
          Email
        </div>
        <div
          className="col-md-4 font-weight-bold cursor-pointer"
          style={{ lineHeight: "50px" }}
        >
          Mức lương ứng tuyển
        </div>
      </div>
    );
    applicants.forEach((applicant, i) => {
      content.push(
        <div className="row task-listing" key={i} style={{ height: "50px" }}>
          <div className="col-md-4">{applicant.fullname}</div>
          <div className="col-md-4">{applicant.email}</div>
          <div className="col-md-4">
            {prettierNumber(applicant.proposed_price)} VNĐ
          </div>
        </div>
      );
    });
    return (
      <div className="tasks-list-container compact-list p-0">{content}</div>
    );
  }

  renderApplyButton() {
    let { user } = this.props.HeaderReducer;
    let { jobDetail } = this.props.JobDetailReducer;
    if (user && !user.isBusinessUser && user.id_user !== jobDetail.employer) {
      return (
        <button
          className="apply-now-button popup-with-zoom-anim w-100"
          data-toggle="modal"
          data-target="#myModal"
        >
          Đăng kí ứng cử <i className="icon-material-outline-arrow-right-alt" />
        </button>
      );
    } else return [];
  }

  renderApplyFormPopup() {
    let { user } = this.props.HeaderReducer;
    let { jobDetail } = this.props.JobDetailReducer;
    if (user && !user.isBusinessUser && user.id_user !== jobDetail.employer) {
      return (
        <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <ApplyForm></ApplyForm>
          </div>
        </div>
      );
    } else return [];
  }

  render() {
    let { jobDetail } = this.props.JobDetailReducer;

    return (
      <div>
        {/* Thông tin cơ bản */}
        <div id="job-detail-background" className="single-page-header">
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
                    <div className="header-details text-white">
                      <h3 className="text-white">{jobDetail.title}</h3>
                      <h5 className="text-white">{jobDetail.topic}</h5>
                      <ul>
                        <li>
                          <span
                            href="single-company-profile.html"
                            className="text-white"
                          >
                            {jobDetail.name_employer}
                          </span>
                        </li>
                        <li>
                          <div className="bg-warning text-white rounded font-weight-bold px-2 font-size-15">
                            {4.9}
                          </div>
                        </li>
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
                      {/* <div
                        id="singleListingMap"
                        data-latitude="51.507717"
                        data-longitude="-0.131095"
                        data-map-icon="im im-icon-Hamburger"
                      ></div> */}
                      {/* <a href="#" id="streetView">Street View</a> */}
                      {this.renderMap()}
                      {/* Chức năng hiện đang trong quá trình phát triển, vui lòng quay lại sau */}
                    </div>
                  ) : this.state.tab === 4 ? (
                    this.renderPhoto(jobDetail.imgs)
                  ) : (
                    this.renderApplicants(jobDetail.dealers)
                  )}
                </div>
              </div>
              {this.renderSimilarJobs()}
            </div>

            {/* Sidebar */}
            <div className="col-xl-4 col-lg-4">
              <div className="sidebar-container">
                {this.renderApplyButton()}

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
        {this.renderApplyFormPopup()}
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
    onLoadSimilarJobs: (jobTopic) => {
      dispatch(loadSimilarJobs(jobTopic));
    },
  };
};

const JobDetail = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(JobDetailComponent)
);
export default JobDetail;
