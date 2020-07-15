import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  loadFinishedJobsForApplicant,
  selectReportedEmployer,
  selectReviewEmployer,
  loadReviewFromEmployer,
} from "../../../../actions/Job";
import {
  getImageSrc,
  prettierDate,
  prettierNumber,
} from "../../../../ultis/SHelper/helperFunctions";

import UserAvatarPlaceholder from "../../../../assets/images/portrait_placeholder.png";
import { history } from "../../../../ultis/history/history";
import ReportForm from "./Modals/ReportForm";
import ReviewForm from "./Modals/ReviewForm";
import ReviewModal from "./Modals/ReviewModal";

class TasksDoneComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.loadJobList(1);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handlePagination(pageNum) {
    if (pageNum !== this.props.ApplicantReducer.currentFinishedPage) {
      window.scrollTo(0, 0);
      this.loadJobList(pageNum);
    }
  }

  loadJobList(page) {
    let { onLoadFinishedTask } = this.props;
    onLoadFinishedTask(page, 4, 0);
  }

  reportEmployer(userId, applicantId, jobId) {
    let { onSelectReportedEmployer } = this.props;
    onSelectReportedEmployer(userId, applicantId, jobId);
  }

  reviewEmployer(applicantId, jobId) {
    let { onSelectReviewEmployer } = this.props;
    onSelectReviewEmployer(applicantId, jobId);
  }

  loadReview(jobId) {
    let { onLoadReviewFromEmployer } = this.props;
    onLoadReviewFromEmployer(jobId);
  }

  renderJobList() {
    let { finishedTasksList, isLoadingFinishedTasksList } = this.props.ApplicantReducer;
    let { reportApplicantId, reviewApplicantId } = this.props.ContactUsReducer;
    let content = [];
    if (isLoadingFinishedTasksList) return (<div className="loading" key={1}>
      <div className="spinner-border text-primary my-4" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>);

    if (finishedTasksList.length > 0) {
      finishedTasksList.forEach((e, index) => {
        let avatar = getImageSrc(e.avatarImg, UserAvatarPlaceholder);
        content.push(
          <li key={index}>
            {/* Overview */}
            <div className="freelancer-overview manage-candidates">
              <div className="row">
                {/* Avatar */}
                <div className="col-2">
                  <img src={avatar} alt="" />
                </div>
                {/* Name */}
                <div className="col-10 text-left">
                  <h3>{e.title}</h3>
                  <h4 className="mt-3">
                    <span className="font-weight-bold">Người đăng: </span>
                    {e.fullname}
                  </h4>
                  <div className="d-flex justify-content-between">
                    <div className="freelancer-detail-item">
                      <span className="font-weight-bold">
                        <i className="icon-feather-mail" />
                        &nbsp;Email:{" "}
                      </span>{" "}
                      {e.email}
                    </div>
                    <div className="freelancer-detail-item">
                      <span className="font-weight-bold">
                        <i className="icon-feather-phone" />
                        &nbsp;Liên lạc:{" "}
                      </span>{" "}
                      {e.dial}
                    </div>
                  </div>
                  <h4 className="mt-3 row">
                    <div className="col">
                      <span className="font-weight-bold">Loại công việc: </span>
                      {!e.job_type
                        ? "Công việc thời vụ"
                        : "Công việc theo sản phẩm"}
                    </div>
                    <div className="col">
                      <span className="font-weight-bold">Mức lương: </span>
                      {prettierNumber(e.salary)} VNĐ
                    </div>
                  </h4>
                  <div style={{ width: "80vh" }} className="text-truncate">
                    <span className="font-weight-bold">Mô tả: </span>
                    <span>{e.description}</span>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col">
                      <span className="font-weight-bold">
                        <i className="icon-material-outline-location-city" />
                        Khu vực:{" "}
                      </span>
                      {e.province}
                    </div>
                    <div className="col">
                      <span className="font-weight-bold">
                        <i className="icon-material-outline-add-location" />
                        Quận:{" "}
                      </span>
                      {e.district}
                    </div>
                  </div>
                  <hr></hr>
                  {!e.job_type ? (
                    <div className="row">
                      <div className="col">
                        <span className="font-weight-bold">
                          <i className="icon-line-awesome-calendar-o" />
                          Ngày bắt đầu công việc:{" "}
                        </span>
                        {prettierDate(e.start_date)}
                      </div>
                      <div className="col">
                        <span className="font-weight-bold">
                          <i className="icon-material-outline-date-range" />
                          Ngày kết thúc công việc:{" "}
                        </span>
                        {prettierDate(e.end_date)}
                      </div>
                    </div>
                  ) : (
                      <div className="row">
                        <div className="col">
                          <span className="font-weight-bold">
                            <i className="icon-material-outline-date-range" />
                          Ngày kết thúc công việc:{" "}
                          </span>
                          {prettierDate(e.deadline)}
                        </div>
                      </div>
                    )}
                  {/* <span className='btn mx-2 p-2 bg-293FE4 text-white rounded'><i className='icon-feather-refresh-ccw'></i> Cập nhật thông tin</span> */}
                  {(
                    e.id_applicant === reviewApplicantId || e.id_applicant === reportApplicantId
                    ?
                    <div className='text-center w-100 my-2'>
                      <div className="loading my-2 text-center" key={1}>
                        <div className="spinner-border text-primary " role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    </div> 
                    :
                    <div>
                      <div
                        className="btn mt-3 p-2 bg-silver rounded w-100"
                        onClick={() => {
                          history.push(`/job-detail/${e.id_job}`);
                        }}
                      >
                        <i className="icon-line-awesome-clone" /> Xem chi tiết công việc
                      </div>

                      <div className="mt-2 row">
                        <span
                          data-toggle="modal"
                          data-target="#reviewFromEmployerModal"
                          onClick={() => this.loadReview(e.id_job)}
                          className="btn col mx-2 p-2 bg-primary text-white rounded"
                        >
                          <i className="icon-material-outline-rate-review" /> Xem
                        phản hồi
                        </span>
                        <span
                          data-toggle="modal"
                          data-target="#reviewEmployerModal"
                          onClick={() =>
                            this.reviewEmployer(e.id_applicant, e.id_job)
                          }
                          className="btn col mx-2 p-2 bg-warning rounded"
                        >
                          <i className="icon-material-outline-speaker-notes" /> Viết
                        nhận xét
                        </span>
                        <span
                          data-toggle="modal"
                          data-target="#reportEmployerModal"
                          onClick={() => this.reportEmployer(e.employer, e.id_applicant, e.id_job)}
                          className="btn col mx-2 p-2 bg-danger text-white rounded"
                        >
                          <i className="icon-line-awesome-warning" /> Báo cáo người
                        thuê
                        </span>
                      </div>
                    </div>
                  )}
                  
                </div>
              </div>
            </div>
          </li>
        );
      });
    } else {
      content.push(
        <div className="font-weight-bold p-5" key={0}>
          Bạn hiện vẫn chưa hoàn thành công việc nào
        </div>
      );
    }

    return content;
  }

  renderPagination(page, totalPage) {
    let content = [];
    let start = 1,
      end = 4;
    if (totalPage - 4 < page) {
      if (totalPage - 4 < 0) {
        start = 1;
      } else {
        start = totalPage - 4;
      }
      end = totalPage;
    } else {
      start = page;
      end = page + 3;
    }

    for (let e = start; e <= end; e++) {
      content.push(
        <li key={e}>
          <div
            className={
              "cursor-pointer " + (page === e ? "current-page" : undefined)
            }
            onClick={() => {
              this.handlePagination(e);
            }}
          >
            {e}
          </div>
        </li>
      );
    }
    return content;
  }

  render() {
    let {
      totalFinishedTasks,
      currentFinishedPage,
      isLoadingFinishedTasksList
    } = this.props.ApplicantReducer;
    let totalPage = Math.ceil(totalFinishedTasks / 4);

    return (
      <div className="dashboard-content-inner">
        {/* Dashboard Headline */}
        <div className="dashboard-headline">
          <h3>Các công việc bạn đã hoàn thành</h3>
        </div>
        <p>
          ( Để xem phản hồi của người khác về mình, vui lòng vào trang{" "}
          <NavLink to="/dashboard/tab=3">Phản hồi</NavLink> )
        </p>
        {/* Row */}
        <div className="row">
          {/* Dashboard Box */}
          <div className="col-xl-12">
            <div className="dashboard-box margin-top-0">
              {/* Headline */}
              <div className="headline">
                <h3>
                  <i className="icon-feather-list" /> Danh sách các công việc
                </h3>
              </div>
              <div>
                <ul className="dashboard-box-list">{this.renderJobList()}</ul>
              </div>
            </div>
            {(totalFinishedTasks === 0 || isLoadingFinishedTasksList) ? (
              ""
            ) : (
                <div className="pagination-container margin-top-30 margin-bottom-60">
                  <nav className="pagination">
                    <ul>
                      <li
                        className={
                          "pagination-arrow " +
                          ((currentFinishedPage === 1 ||
                            totalPage - currentFinishedPage < 3) &&
                            "d-none")
                        }
                      >
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            this.handlePagination(currentFinishedPage - 1);
                          }}
                        >
                          <i className="icon-material-outline-keyboard-arrow-left" />
                        </div>
                      </li>
                      {this.renderPagination(currentFinishedPage, totalPage)}
                      <li
                        className={
                          "pagination-arrow " +
                          (totalPage - currentFinishedPage < 3 && "d-none")
                        }
                      >
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            this.handlePagination(currentFinishedPage + 1);
                          }}
                        >
                          <i className="icon-material-outline-keyboard-arrow-right" />
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}
          </div>
        </div>
        {/* Row / End */}
        <div id="reportEmployerModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <ReportForm></ReportForm>
          </div>
        </div>
        <div id="reviewEmployerModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <ReviewForm></ReviewForm>
          </div>
        </div>
        <div id="reviewFromEmployerModal" className="modal fade" role="dialog">
          <div className="modal-dialog modal-lg">
            <ReviewModal></ReviewModal>
          </div>
        </div>
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
    onLoadFinishedTask: (page, take, isASC) => {
      dispatch(loadFinishedJobsForApplicant(page, take, isASC));
    },
    onSelectReportedEmployer: (userId, applicantId, jobId) => {
      dispatch(selectReportedEmployer(userId, applicantId, jobId));
    },
    onSelectReviewEmployer: (applicantId, jobId) => {
      dispatch(selectReviewEmployer(applicantId, jobId));
    },
    onLoadReviewFromEmployer: (jobId) => {
      dispatch(loadReviewFromEmployer(jobId));
    },
  };
};

const TasksDone = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TasksDoneComponent)
);
export default TasksDone;
