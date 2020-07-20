import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  loadApplyingJobsForApplicant,
  stopApply,
} from "../../../../actions/Job";
import {
  getImageSrc,
  prettierDate,
  prettierNumber,
} from "../../../../ultis/SHelper/helperFunctions";

import UserAvatarPlaceholder from "../../../../assets/images/portrait_placeholder.png";
import { history } from "../../../../ultis/history/history";
import Swal from "sweetalert2";

class TasksApplyingComponent extends Component {
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
    if (pageNum !== this.props.ApplicantReducer.currentApplyingPage) {
      window.scrollTo(0, 0);
      this.loadJobList(pageNum);
    }
  }

  loadJobList(page) {
    let { onLoadApplyingTask } = this.props;
    onLoadApplyingTask(page, 4, 0);
  }

  StopApply(jobId) {
    Swal.fire({
      title: "Bạn có chắc muốn ngừng ứng tuyển??",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ngừng ứng tuyển",
      cancelButtonText: "Hủy bỏ",
    }).then((result) => {
      if (result.value) {
        let { onStopApply } = this.props;
        let { currentApplyingPage } = this.props.ApplicantReducer;
        let { user } = this.props.HeaderReducer;
        onStopApply(user.id_user, jobId, currentApplyingPage, 4, 0);
      }
    });
  }

  renderJobList() {
    let { applyingTasksList, isLoadingApplyingTasksList, selectApplyingTaskId} = this.props.ApplicantReducer;
    let content = [];
    if (isLoadingApplyingTasksList) return (<div className="loading" key={1}>
      <div className="spinner-border text-primary my-4" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>);

    if (applyingTasksList.length > 0) {
      applyingTasksList.forEach((e, index) => {
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
                  <h3>{e.title + " "}{e.applicant_status == 1 ? "(Đã được duyệt)" : ""}</h3>
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
                    {e.dealable ? (
                      ""
                    ) : (
                        <div className="col">
                          <span className="font-weight-bold">Mức lương: </span>
                          {prettierNumber(e.salary)} VNĐ
                        </div>
                      )}
                  </h4>
                  <div style={{ width: "80vh" }} className="text-truncate">
                    <span className="font-weight-bold">Mô tả: </span>
                    <span>{e.description}</span>
                  </div>
                  <div className="text-primary font-weight-bold">
                    {e.dealable
                      ? "Công việc cho phép đấu giá"
                      : "Công việc được xét lương cứng"}
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
                  
                  {(
                    e.id_job === selectApplyingTaskId
                    ?
                    <div className='text-center w-100 my-2'>
                      <div className="loading my-2 text-center" key={1}>
                        <div className="spinner-border text-primary " role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    </div> 
                    :
                    <div className="mt-3">
                      {/* <span className="btn mx-2 p-2 bg-293FE4 text-white rounded">
                        <i className="icon-feather-refresh-ccw"></i> Cập nhật
                        thông tin
                      </span> */}
                      <span
                        className="btn mx-2 p-2 bg-silver rounded"
                        onClick={() => {
                          history.push(`/job-detail/${e.id_job}`);
                        }}
                      >
                        <i className="icon-line-awesome-clone" /> Xem chi tiết
                        công việc
                      </span>
                      {e.applicant_status == 0 ? (<span
                        onClick={() => this.StopApply(e.id_job)}
                        className="btn mx-2 p-2 bg-danger text-white rounded"
                      >
                        <i className="icon-line-awesome-hand-stop-o" /> Rút ứng tuyển
                      </span>) : ''}

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
          Bạn hiện không ứng tuyển công việc nào
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
    let {
      totalApplyingTasks,
      currentApplyingPage,
      isLoadingApplyingTasksList
    } = this.props.ApplicantReducer;
    let totalPage = Math.ceil(totalApplyingTasks / 4);

    return (
      <div className="dashboard-content-inner">
        {/* Dashboard Headline */}
        <div className="dashboard-headline">
          <h3>Các công việc bạn đang ứng tuyển</h3>
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
            {(totalApplyingTasks === 0 || isLoadingApplyingTasksList) ? (
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
    onLoadApplyingTask: (page, take, isASC) => {
      dispatch(loadApplyingJobsForApplicant(page, take, isASC));
    },
    onStopApply: (userId, jobId, page, take, isASC) => {
      dispatch(stopApply(userId, jobId, page, take, isASC));
    },
  };
};

const TasksApplying = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TasksApplyingComponent)
);
export default TasksApplying;
