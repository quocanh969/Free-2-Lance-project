import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";

import {
  loadFinishedJobsForEmployer,
  selectJobDone,
  loadDoneApplicantsForEmployer,
  loadReviewList,
} from "../../../../actions/Job";
import {
  prettierDate,
  prettierNumber,
} from "../../../../ultis/SHelper/helperFunctions";
import { history } from "../../../../ultis/history/history";
import JobsDoneModal from "./Modals/JobsDoneModal";
import { takenDoneApplicantsPerPage } from "./Modals/JobsDoneModal";
import { takenReviewsPerPage } from "./Modals/UserReviewsModal";
import UserReviewsModal from "./Modals/UserReviewsModal";

class JobsDoneComponent extends Component {
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
    if (pageNum !== this.props.EmployerReducer.currentFinishedPage) {
      this.loadJobList(pageNum);
    }
  }

  loadJobList(page) {
    let { onLoadFinishedJob } = this.props;
    onLoadFinishedJob(page, 4, 0);
  }

  showApplicantsList(jobId) {
    let { onSelectJobDone, onLoadDoneApplicants } = this.props;
    onSelectJobDone(jobId);
    onLoadDoneApplicants(jobId, 1, takenDoneApplicantsPerPage);
  }

  showReviewList(jobId) {
    let { onSelectJobDone, onLoadReviewList } = this.props;
    onSelectJobDone(jobId);
    onLoadReviewList(jobId, 1, takenReviewsPerPage);
  }

  renderJobList() {
    let content = [];
    let { finishedJobsList } = this.props.EmployerReducer;

    if (finishedJobsList.length > 0) {
      finishedJobsList.forEach((e, index) => {
        content.push(
          <li key={index}>
            {/* Job Listing */}
            <div className="job-listing">
              {/* Job Listing Details */}
              <div className="job-listing-details">
                {/* Details */}
                <div className="job-listing-description">
                  <h3 className="job-listing-title">{e.title}</h3>
                  <h4 className="d-flex justify-content-between">
                    <span>
                      <span className="font-weight-bold">Loại công việc: </span>
                      {!e.job_type
                        ? "Công việc thời vụ"
                        : "Công việc theo sản phẩm"}
                    </span>
                    <span className="text-primary">
                      <span className="font-weight-bold">Mức lương</span>{" "}
                      {prettierNumber(e.salary) + " VNĐ"}
                    </span>
                  </h4>
                  {/* Job Listing Footer */}
                  <div style={{ width: "100vh" }} className="text-truncate">
                    <span className="font-weight-bold">Mô tả: </span>
                    {e.description}
                  </div>
                  <br></br>
                  <div className="job-listing-footer">
                    <ul>
                      <li>
                        <span className="font-weight-bold">
                          <i className="icon-material-outline-location-city" />
                          Khu vực:{" "}
                        </span>
                        {e.province}
                      </li>
                      <li>
                        <span className="font-weight-bold">
                          <i className="icon-material-outline-add-location" />
                          Quận:{" "}
                        </span>
                        {e.district}
                      </li>
                    </ul>
                  </div>
                  <hr></hr>
                  <div className="job-listing-footer">
                    {e.job_type ? (
                      <ul>
                        <li>
                          <span className="font-weight-bold">
                            <i className="icon-material-outline-date-range" />
                            Ngày kết thúc công việc:{" "}
                          </span>
                          {prettierDate(e.deadline)}
                        </li>
                      </ul>
                    ) : (
                      <ul>
                        <li>
                          <span className="font-weight-bold">
                            <i className="icon-line-awesome-calendar-o" />
                            Ngày bắt đầu công việc:{" "}
                          </span>
                          {prettierDate(e.start_date)}
                        </li>
                        <li>
                          <span className="font-weight-bold">
                            <i className="icon-material-outline-date-range" />
                            Ngày kết thúc công việc:{" "}
                          </span>
                          {prettierDate(e.end_date)}
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div>
              <button
                data-toggle="modal"
                data-target="#doneApplicantsModal"
                onClick={() => this.showApplicantsList(e.id_job)}
                className="btn mx-2 py-2 px-4 bg-293FE4 text-white rounded"
              >
                <i className="icon-material-outline-supervisor-account"></i>{" "}
                Danh sách người tham gia: {e.candidates}
              </button>
              <span
                data-toggle="modal"
                data-target="#userReviessModal"
                onClick={() => this.showReviewList(e.id_job)}
                className="btn mx-2 py-2 px-4 bg-warning rounded"
              >
                <i className="icon-material-outline-speaker-notes" /> Xem phản
                hồi
              </span>
              <span
                className="btn mx-2 py-2 px-4 bg-silver rounded"
                onClick={() => {
                  history.push(`/job-detail/${e.id_job}`);
                }}
              >
                <i className="icon-line-awesome-clone" /> Xem chi tiết công việc
              </span>
            </div>
          </li>
        );
      });
    } else {
      content.push(
        <div className="font-weight-bold p-5" key={0}>
          Bạn hiện không có công việc nào đã hoàn thành
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
    let { totalFinishedJobs, currentFinishedPage } = this.props.EmployerReducer;
    let totalPage = Math.ceil(totalFinishedJobs / 4);

    return (
      <div className="dashboard-content-inner">
        {/* Dashboard Headline */}
        <div className="dashboard-headline">
          <h3>Các công việc đã hoàn thành</h3>
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
                  <i className="icon-feather-list" /> Danh sách công việc
                </h3>
              </div>
              <div>
                <ul className="dashboard-box-list">{this.renderJobList()}</ul>
              </div>
            </div>
            {totalFinishedJobs === 0 ? (
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
        <div id="doneApplicantsModal" className="modal fade" role="dialog">
          <div className="modal-dialog modal-lg">
            <JobsDoneModal></JobsDoneModal>
          </div>
        </div>
        <div id="userReviessModal" className="modal fade" role="dialog">
          <div className="modal-dialog modal-lg">
            <UserReviewsModal></UserReviewsModal>
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
    onLoadFinishedJob: (page, take, isASC) => {
      dispatch(loadFinishedJobsForEmployer(page, take, isASC));
    },
    onSelectJobDone: (jobId) => {
      dispatch(selectJobDone(jobId));
    },
    onLoadDoneApplicants: (jobId, page, take) => {
      dispatch(loadDoneApplicantsForEmployer(jobId, page, take));
    },
    onLoadReviewList: (jobId, page, take) => {
      dispatch(loadReviewList(jobId, page, take));
    },
  };
};

const JobsDone = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(JobsDoneComponent)
);
export default JobsDone;
