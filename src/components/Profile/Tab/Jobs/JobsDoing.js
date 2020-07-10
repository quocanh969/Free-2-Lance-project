import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";

import {
  loadProcessingJobsForEmployer,
  endJob,
  selectJobDoing,
  loadDoingApplicantsForEmployer,
} from "../../../../actions/Job";
import {
  prettierDate,
  prettierNumber,
} from "../../../../ultis/SHelper/helperFunctions";
import { history } from "../../../../ultis/history/history";
import Swal from "sweetalert2";
import JobsDoingModal from "./Modals/JobsDoingModal";
import { takenDoingApplicantsPerPage } from "./Modals/JobsDoingModal";

class JobsDoingComponent extends Component {
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
    if (pageNum !== this.props.EmployerReducer.currentProcessingPage) {
      window.scrollTo(0, 0);
      this.loadJobList(pageNum);
    }
  }

  loadJobList(page) {
    let { onLoadProcessingJobs } = this.props;
    onLoadProcessingJobs(page, 4, 0);
  }

  EndJob(jobId, title) {
    Swal.fire({
      title: "Bạn có chắc muốn kết thúc công việc??",
      text: "Công việc sẽ chuyển qua trạng thái hoàn thành!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Kết thúc",
      cancelButtonText: "Hủy bỏ",
    }).then((result) => {
      if (result.value) {
        let { onEndJob } = this.props;
        let { currentProcessingPage } = this.props.EmployerReducer;
        onEndJob(jobId, title, currentProcessingPage, 4, 0);
      }
    });
  }

  showApplicantsList(jobId) {
    let { onSelectJobDoing, onLoadDoingApplicants } = this.props;
    onSelectJobDoing(jobId);
    onLoadDoingApplicants(jobId, 1, takenDoingApplicantsPerPage);
  }

  renderJobList() {
    let content = [];
    let { processingJobsList, isLoadingProcessingJobsList } = this.props.EmployerReducer;
    if (isLoadingProcessingJobsList) return (<div className="loading" key={1}>
      <div className="spinner-border text-primary my-4" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>);

    if (processingJobsList.length > 0) {
      processingJobsList.forEach((e, index) => {
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
                    <div>
                      <span className="font-weight-bold">Loại công việc: </span>
                      {!e.job_type
                        ? "Công việc thời vụ"
                        : "Công việc theo sản phẩm"}
                    </div>
                    <div className="text-primary">
                      <span className="font-weight-bold">Mức lương</span>{" "}
                      {prettierNumber(e.salary) + " VNĐ"}
                    </div>
                  </h4>
                  {/* Job Listing Footer */}
                  <div style={{ width: "80vh" }} className="text-truncate">
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
                data-target="#doingApplicantsModal"
                onClick={() => this.showApplicantsList(e.id_job)}
                className="btn mx-2 py-2 px-4 bg-293FE4 text-white rounded"
              >
                <i className="icon-material-outline-supervisor-account"></i>{" "}
                Danh sách người tham gia: {e.participants}
              </button>
              <span
                className="btn mx-2 py-2 px-4 bg-silver rounded"
                onClick={() => {
                  history.push(`/job-detail/${e.id_job}`);
                }}
              >
                <i className="icon-line-awesome-clone" /> Xem chi tiết công việc
              </span>
              {/* <span className='btn mx-2 p-2 bg-silver rounded'><i className="icon-feather-edit"/> Edit</span> */}
              <span
                className="btn mx-2 py-2 px-4 bg-danger text-white rounded"
                onClick={() => this.EndJob(e.id_job, e.title)}
              >
                <i className="icon-line-awesome-hand-stop-o" /> Kết thúc công
                việc
              </span>
            </div>
          </li>
        );
      });
    } else {
      content.push(
        <div className="font-weight-bold p-5" key={0}>
          Bạn hiện không có công việc nào đang được thực hiện
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
      totalProcessingJobs,
      currentProcessingPage,
      isLoadingProcessingJobsList,
    } = this.props.EmployerReducer;
    let totalPage = Math.ceil(totalProcessingJobs / 4);

    return (
      <div className="dashboard-content-inner">
        {/* Dashboard Headline */}
        <div className="dashboard-headline">
          <h3>Các công việc hiện đang được thực hiện</h3>
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
            {(totalProcessingJobs === 0 || isLoadingProcessingJobsList) ? (
              ""
            ) : (
                <div className="pagination-container margin-top-30 margin-bottom-60">
                  <nav className="pagination">
                    <ul>
                      <li
                        className={
                          "pagination-arrow " +
                          ((currentProcessingPage === 1 ||
                            totalPage - currentProcessingPage < 3) &&
                            "d-none")
                        }
                      >
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            this.handlePagination(currentProcessingPage - 1);
                          }}
                        >
                          <i className="icon-material-outline-keyboard-arrow-left" />
                        </div>
                      </li>
                      {this.renderPagination(currentProcessingPage, totalPage)}
                      <li
                        className={
                          "pagination-arrow " +
                          (totalPage - currentProcessingPage < 3 && "d-none")
                        }
                      >
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            this.handlePagination(currentProcessingPage + 1);
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
        <div id="doingApplicantsModal" className="modal fade" role="dialog">
          <div className="modal-dialog modal-lg">
            <JobsDoingModal></JobsDoingModal>
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
    onLoadProcessingJobs: (page, take, isASC) => {
      dispatch(loadProcessingJobsForEmployer(page, take, isASC));
    },
    onEndJob: (jobId, title, page, take, isASC) => {
      dispatch(endJob(jobId, title, page, take, isASC));
    },
    onSelectJobDoing: (jobId) => {
      dispatch(selectJobDoing(jobId));
    },
    onLoadDoingApplicants: (jobId, page, take) => {
      dispatch(loadDoingApplicantsForEmployer(jobId, page, take));
    },
  };
};

const JobsDoing = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(JobsDoingComponent)
);
export default JobsDoing;
