import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  loadApplyingJobsForEmployer,
  cancelRecruit,
  removeJob,
  selectJobApplying,
  loadApplyingApplicantsForEmployer,
} from "../../../../actions/Job";
import {
  prettierDate,
  prettierNumber,
} from "../../../../ultis/SHelper/helperFunctions";
import { history } from "../../../../ultis/history/history";
import Swal from "sweetalert2";
import JobsApplyingModal from "./Modals/JobsApplyingModal";
import { takenApplyingApplicantsPerPage } from "./Modals/JobsApplyingModal";
class JobsApplyingComponent extends Component {
  constructor(props) {
    super(props);
    this.StopRecuit = this.StopRecuit.bind(this);
    this.showApplicantsList = this.showApplicantsList.bind(this);
  }

  componentWillMount() {
    this.loadJobListFunc(1);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handlePagination(pageNum) {
    if (pageNum !== this.props.EmployerReducer.currentApplyingPage) {
      window.scrollTo(0, 0);
      this.loadJobListFunc(pageNum);
    }
  }

  loadJobListFunc(page) {
    let { onLoadApplyingJob } = this.props;
    onLoadApplyingJob(page, 4, 0);
  }

  StopRecuit(jobId, participants) {
    if(participants === 0) {
      Swal.fire({
        title: 'Bạn không thể bắt đầu công việc',
        text: 'Bạn vẫn chưa tuyển được người nào cho công việc này nên công việc không thể tiếp tục',
        icon: 'error',
      })
    }
    else {
      Swal.fire({
        title: "Bạn có chắc muốn ngừng tuyển??",
        text: "Công việc sẽ chuyển qua trạng thái thực hiện!!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Ngừng tuyển",
        cancelButtonText: "Hủy bỏ",
      }).then((result) => {
        if (result.value) {
          let { onCancelRecruit } = this.props;
          let { currentApplyingPage } = this.props.EmployerReducer;
          onCancelRecruit(jobId, currentApplyingPage, 4, 0);
        }
      });
    }
    
  }

  removeJob(jobId) {
    Swal.fire({
      title: "Bạn có chắc muốn gỡ bỏ công việc và các ứng viên?",
      text: "Công việc sẽ chuyển qua trạng thái 'Bị gỡ' và",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ok, tôi đồng ý",
      cancelButtonText: "Hủy bỏ",
    }).then((result) => {
      if (result.value) {
        let { onRemoveApplyingJob } = this.props;
        let { currentApplyingPage } = this.props.EmployerReducer;
        onRemoveApplyingJob(jobId, currentApplyingPage, 4, 0);
      }
    });
  }

  showApplicantsList(jobId, title, number) {
    let { onSelectJobApplying, onLoadApplicants } = this.props;
    onSelectJobApplying(jobId, title, number);
    onLoadApplicants(jobId, 1, takenApplyingApplicantsPerPage);
  }

  generateListJobs() {
    let { applyingJobsList, isLoadingApplyingJobsList, selectedApplyingJobById } = this.props.EmployerReducer;
    let content = [];
    if (isLoadingApplyingJobsList) return (<div className="loading" key={1}>
      <div className="spinner-border text-primary my-4" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>);

    if (applyingJobsList.length > 0) {
      applyingJobsList.forEach((e, index) => {
        content.push(
          <li key={index} className={e.id_status === 4 ? 'border border-danger' : ''}>
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
                    {e.dealable ? (
                      ""
                    ) : (
                        <div className="text-primary">
                          <span className="font-weight-bold">Mức lương</span>{" "}
                          {prettierNumber(e.salary) + " VNĐ"}
                        </div>
                      )}
                  </h4>
                  {/* Job Listing Footer */}
                  <div style={{ width: "80vh" }} className="text-truncate">
                    <span className="font-weight-bold">Mô tả: </span>
                    {e.description}
                  </div>
                  <div style={{ width: "80vh" }} className="text-truncate">
                    <span className="font-weight-bold">Số lượng cần tuyển: </span>
                    {e.vacancy}
                    <span style={{ display: "inline-block", width: "30px" }}></span>
                    <span className="font-weight-bold">Đã tuyển được: </span>
                    {e.participants}
                  </div>
                  <div className="text-primary font-weight-bold">
                    {e.dealable
                      ? "Công việc cho phép đấu giá"
                      : "Công việc được xét lương cứng"}
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
                    <ul>
                      <li>
                        <span className="font-weight-bold">
                          <i className="icon-line-awesome-calendar-check-o" />
                          Ngày đăng:{" "}
                        </span>
                        {prettierDate(e.post_date)}
                      </li>
                      <li>
                        <span className="font-weight-bold">
                          <i className="icon-line-awesome-calendar-times-o" />
                          Hạn chót đăng ký:{" "}
                        </span>
                        {prettierDate(e.expire_date)}
                      </li>
                      {e.job_type ? (
                        <li>
                          <span className="font-weight-bold">
                            <i className="icon-material-outline-date-range" />
                            Ngày kết thúc công việc:{" "}
                          </span>
                          {prettierDate(e.deadline)}
                        </li>
                      ) : (
                          ""
                        )}
                    </ul>
                    {!e.job_type ? (
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
                    ) : (
                        ""
                      )}
                  </div>
                </div>
              </div>
            </div>
            {/* Buttons */}
            {(
              e.id_status === 4
                ?
                <div className='font-weight-bold text-danger'>Công việc đã quá hạn nhưng vẫn còn các trường hợp người dùng ứng tuyển</div>
                :
                ''
            )}
            {(
              e.id_job === selectedApplyingJobById
                ?
                <div className='text-center my-2 w-100'>
                  <div className="loading" key={1}>
                    <div className="spinner-border text-primary" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                </div>
                
                :
                <div>
                  <button
                    data-toggle="modal"
                    data-target="#applyingApplicantsModal"
                    onClick={() => this.showApplicantsList(e.id_job, e.title, e.vacancy - e.participants)}
                    className="btn m-2 py-2 px-4 bg-293FE4 text-white rounded"
                  >
                    <i className="icon-material-outline-supervisor-account"></i> Ứng viên đăng ký: {e.candidates}
                  </button>
                  <span
                    className="btn m-2 py-2 px-4 bg-silver rounded"
                    onClick={() => {
                      history.push(`/job-detail/${e.id_job}`);
                    }}
                  >
                    <i className="icon-line-awesome-clone" /> Xem chi tiết công việc
                  </span>
                  {/* <span className='btn mx-2 p-2 bg-silver rounded'><i className="icon-feather-edit"/> Edit</span> */}
                  <span
                    onClick={() => this.StopRecuit(e.id_job, e.participants)}
                    className="btn m-2 py-2 px-4 bg-success text-white rounded"
                  >
                    <i className="icon-material-outline-check" /> Bắt đầu công việc
                  </span>
                  {(
                    e.id_status === 4
                      ?
                      <span
                        onClick={() => this.removeJob(e.id_job)}
                        className="btn m-2 py-2 px-4 bg-danger text-white rounded"
                      >
                        <i className="icon-line-awesome-hand-stop-o" /> Kết thúc công việc
                </span>
                      :
                      ''
                  )}

                </div>

            )}

          </li>
        );
      });
    } else {
      content.push(
        <div className="font-weight-bold p-5" key={0}>
          Bạn hiện không có công việc nào đang tuyển
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
      if (totalPage - 4 <= 0) {
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
    let { totalApplyingJobs, currentApplyingPage, isLoadingApplyingJobsList } = this.props.EmployerReducer;
    let totalPage = Math.ceil(totalApplyingJobs / 4);

    return (
      <div className="dashboard-content-inner">
        {/* Dashboard Headline */}
        <div className="dashboard-headline">
          <h3>Các công việc hiện đang trong quá trình tuyển dụng</h3>
        </div>
        <p>
          ( Để xem phản hồi của người khác về mình, vui lòng vào trang{" "}
          <NavLink to="/dashboard/tab=3">Phản hồi</NavLink> )
        </p>
        <div className='my-3'>
          <div className='btn btn-primary' onClick={() => {this.loadJobListFunc(1)}}>Làm mới danh sách</div>
        </div>
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
                <ul className="dashboard-box-list">
                  {this.generateListJobs()}
                </ul>
              </div>
            </div>

            {(totalApplyingJobs === 0 || isLoadingApplyingJobsList) ? (
              ""
            ) : (
                <div className="pagination-container margin-top-30 margin-bottom-60">
                  <nav className="pagination">
                    <ul>
                      <li
                        className={
                          "pagination-arrow " +
                          ((currentApplyingPage === 1 ||
                            totalPage - currentApplyingPage < 3) &&
                            "d-none")
                        }
                      >
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            this.handlePagination(currentApplyingPage - 1);
                          }}
                        >
                          <i className="icon-material-outline-keyboard-arrow-left" />
                        </div>
                      </li>
                      {this.renderPagination(currentApplyingPage, totalPage)}
                      <li
                        className={
                          "pagination-arrow " +
                          (totalPage - currentApplyingPage < 3 && "d-none")
                        }
                      >
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            this.handlePagination(currentApplyingPage + 1);
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
        <div id="applyingApplicantsModal" className="modal fade" role="dialog">
          <div className="modal-dialog modal-lg">
            <JobsApplyingModal></JobsApplyingModal>
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
    onLoadApplyingJob: (page, take, isASC) => {
      dispatch(loadApplyingJobsForEmployer(page, take, isASC));
    },
    onCancelRecruit: (jobId, page, take, isASC) => {
      dispatch(cancelRecruit(jobId, page, take, isASC));
    },
    onRemoveApplyingJob: (jobId, page, take, isASC) => {
      dispatch(removeJob(jobId, page, take, isASC));
    },
    onSelectJobApplying: (jobId, title, number) => {
      dispatch(selectJobApplying(jobId, title, number));
    },
    onLoadApplicants: (jobId, page, take) => {
      dispatch(loadApplyingApplicantsForEmployer(jobId, page, take));
    },
  };
};

const JobsApplying = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(JobsApplyingComponent)
);
export default JobsApplying;
