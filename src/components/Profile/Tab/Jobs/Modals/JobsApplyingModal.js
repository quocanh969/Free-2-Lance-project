import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  loadApplyingApplicantsForEmployer,
  sendAcceptApplicant,
  sendRejectApplicant,
} from "../../../../../actions/Job";
import {
  prettierNumber,
  getImageSrc,
} from "../../../../../ultis/SHelper/helperFunctions";
import Swal from "sweetalert2";
import StarRatings from "react-star-ratings";

export const takenApplyingApplicantsPerPage = 3;
class JobsApplyingModalComponent extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handlePagination(pageNum) {
    if (pageNum !== this.props.EmployerReducer.currentApplicantsPage) {
      window.scrollTo(0, 0);
      this.loadApplicantListFunc(pageNum);
    }
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

  loadApplicantListFunc(page) {
    let { onLoadApplicants } = this.props;

    let { selectedApplyingJobId } = this.props.EmployerReducer;
    onLoadApplicants(
      selectedApplyingJobId,
      page,
      takenApplyingApplicantsPerPage
    );
  }

  acceptApplicant(userId, email, applicantId) {
    //check number of vacancy
    let { totalNeedApplicants } = this.props.EmployerReducer
    if (totalNeedApplicants <= 0) {
      Swal.fire("Đã đạt số lượng người cần tuyển", "Vui lòng bắt đầu công việc!!", "error");
      return;
    }
    //accept applicant
    Swal.fire({
      title: "Bạn có chắc muốn tuyển ứng viên này??",
      text: "Bạn sẽ phải thanh toán trước",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Đồng ý",
      cancelButtonText: "Hủy bỏ",
    }).then((result) => {
      if (result.value) {
        let {
          selectedApplyingJobId,
          selectedApplyingJobTitle,
          currentApplicantsPage,
          currentApplyingPage,
        } = this.props.EmployerReducer;
        let { onSendAcceptApplicant } = this.props;
        onSendAcceptApplicant(
          selectedApplyingJobId,
          userId,
          email,
          applicantId,
          selectedApplyingJobTitle,
          currentApplicantsPage,
          currentApplyingPage,
          takenApplyingApplicantsPerPage
        );
      }
    });
  }

  rejectApplicant(userId, email) {
    //check number of vacancy
    let { totalNeedApplicants } = this.props.EmployerReducer
    if (totalNeedApplicants <= 0) {
      Swal.fire("Đã đạt số lượng người cần tuyển", "Vui lòng bắt đầu công việc!!", "error");
      return;
    }
    Swal.fire({
      title: "Bạn có chắc muốn từ chối ứng viên này??",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Từ chối",
      cancelButtonText: "Hủy bỏ",
    }).then((result) => {
      if (result.value) {
        let {
          selectedApplyingJobId,
          selectedApplyingJobTitle,
          currentApplicantsPage,
          currentApplyingPage,
        } = this.props.EmployerReducer;
        let { onSendRejectApplicant } = this.props;
        onSendRejectApplicant(
          selectedApplyingJobId,
          userId,
          currentApplicantsPage,
          currentApplyingPage,
          takenApplyingApplicantsPerPage
        );
      }
    });
  }

  viewApplicantCV(attachment) {
    if (attachment) {
      let keyFile = attachment.substring(0, 5).toUpperCase();
      var modal = document.getElementById("cv-modal-dialog");
      if (keyFile === "IVBOR" || keyFile === "/9J/4") {
        let image = document.createElement("IMG");
        image.className = "modal-content";
        image.src = getImageSrc(attachment);
        modal.innerHTML = "";
        modal.appendChild(image);
      } else if (keyFile === "JVBER") {
        let iframe = document.createElement("iframe");
        iframe.className = "modal-content";
        iframe.style.height = "90vh";
        iframe.src = "data:application/pdf;base64," + attachment;
        modal.innerHTML = "";
        modal.appendChild(iframe);
      }
    } else {
      Swal.fire({
        title: "Không đọc được CV",
        text: "Vui lòng thử lại sau",
        icon: "error",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Ok!",
      });
    }
  }

  viewApplicantInfo(userId) {
    let url = window.location.origin + "/user-detail/" + userId;
    window.open(url);
  }

  generateApplicantsList() {
    let { applicantsList, isLoadingApplicantsList } = this.props.EmployerReducer;
    let content = [];
    if (isLoadingApplicantsList) return (<div className="loading" key={1}>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>);

    if (applicantsList.length > 0) {
      applicantsList.forEach((e, index) => {
        content.push(
          <li key={index}>
            {/* Infomation */}
            <div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-5">
                    <div style={{ width: "80vh" }} className="text-truncate">
                      <span className="font-weight-bold">Họ và tên: </span>
                      {e.fullname}
                    </div>
                    <div style={{ width: "80vh" }} className="text-truncate">
                      <span className="font-weight-bold">Email: </span>
                      {e.email}
                    </div>
                    <div style={{ width: "80vh" }} className="text-truncate">
                      <span className="font-weight-bold">Đã làm: </span>
                      {e.employee_job} công việc
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div style={{ width: "80vh" }} className="text-truncate">
                      <span className="font-weight-bold">Số điện thoại: </span>
                      {e.dial}
                    </div>
                    <div style={{ width: "80vh" }} className="text-truncate">
                      <span className="font-weight-bold">Lương yêu cầu: </span>
                      {prettierNumber(e.proposed_price)} VNĐ
                    </div>
                    <div style={{ width: "80vh" }} className="text-truncate">
                      <span className="font-weight-bold">Được đánh giá: </span>
                      <StarRatings
                        rating={e.employer_rating}
                        starRatedColor="ffd11a"
                        starDimension="18px"
                        starSpacing="3px"
                        numberOfStars={5}
                        name="rating"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="container text-right" style={{ marginTop: "10px" }}>
              <span
                onClick={() =>
                  this.acceptApplicant(e.id_user, e.email, e.id_applicant)
                }
                className="btn mx-2 py-2 px-4 bg-success text-white rounded"
              >
                <i className="icon-material-outline-check-circle"></i> Phê duyệt
              </span>
              <span
                onClick={() => this.viewApplicantInfo(e.id_user)}
                className="btn mx-2 py-2 px-4 bg-293FE4 text-white rounded"
              >
                <i className="icon-material-outline-supervisor-account"></i> Xem
                thông tin
              </span>
              <span
                data-toggle="modal"
                data-target="#CVModal"
                className="btn mx-2 py-2 px-4 bg-silver rounded"
                onClick={() => this.viewApplicantCV(e.attachment)}
              >
                <i className="icon-line-awesome-clone" /> Xem CV
              </span>

              <span
                onClick={() => this.rejectApplicant(e.id_user, e.email)}
                className="btn mx-2 py-2 px-4 bg-danger text-white rounded"
              >
                <i className="icon-line-awesome-hand-stop-o" /> Từ chối
              </span>
            </div>
          </li>
        );
      });
    } else {
      content.push(
        <div className="font-weight-bold p-5" key={0}>
          Hiện không có ứng viên nào ứng tuyển
        </div>
      );
    }

    return content;
  }

  render() {
    let { totalApplicants, currentApplicantsPage, isLoadingApplicantsList } = this.props.EmployerReducer;
    let totalPage = Math.ceil(totalApplicants / takenApplyingApplicantsPerPage);
    return (
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Phê duyệt ứng viên</h4>
          <button
            id="btnCloseApplyForm"
            type="button"
            className="close"
            data-dismiss="modal"
          >
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div className="row">
            {/* Dashboard Box */}
            <div className="col-xl-12">
              <div className="dashboard-box margin-top-0">
                {/* Headline */}
                <div className="headline">
                  <h3>
                    <i className="icon-feather-list" /> Danh sách ứng viên
                  </h3>
                </div>
                <div>
                  <ul className="dashboard-box-list">
                    {this.generateApplicantsList()}
                  </ul>
                </div>
              </div>

              {(totalApplicants === 0 || isLoadingApplicantsList) ? (
                ""
              ) : (
                  <div className="pagination-container margin-top-20">
                    <nav className="pagination">
                      <ul>
                        <li
                          className={
                            "pagination-arrow " +
                            ((currentApplicantsPage === 1 ||
                              totalPage - currentApplicantsPage < 3) &&
                              "d-none")
                          }
                        >
                          <div
                            className="cursor-pointer"
                            onClick={() => {
                              this.handlePagination(currentApplicantsPage - 1);
                            }}
                          >
                            <i className="icon-material-outline-keyboard-arrow-left" />
                          </div>
                        </li>
                        {this.renderPagination(currentApplicantsPage, totalPage)}
                        <li
                          className={
                            "pagination-arrow " +
                            (totalPage - currentApplicantsPage < 3 && "d-none")
                          }
                        >
                          <div
                            className="cursor-pointer"
                            onClick={() => {
                              this.handlePagination(currentApplicantsPage + 1);
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
        </div>
        <div id="CVModal" className="modal fade" role="dialog">
          <div id="cv-modal-dialog" className="modal-dialog modal-xl"></div>
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
    onLoadApplicants: (jobId, page, take) => {
      dispatch(loadApplyingApplicantsForEmployer(jobId, page, take));
    },
    onSendAcceptApplicant: (
      jobId,
      userId,
      email,
      applicantId,
      job_title,
      page,
      jobPage,
      take
    ) => {
      dispatch(
        sendAcceptApplicant(
          jobId,
          userId,
          email,
          applicantId,
          job_title,
          page,
          jobPage,
          take
        )
      );
    },
    onSendRejectApplicant: (
      jobId,
      userId,
      page,
      jobPage,
      take
    ) => {
      dispatch(
        sendRejectApplicant(
          jobId,
          userId,
          page,
          jobPage,
          take
        )
      );
    },
  };
};

const JobsApplyingModal = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(JobsApplyingModalComponent)
);
export default JobsApplyingModal;
