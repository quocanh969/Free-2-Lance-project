import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  loadDoingApplicantsForEmployer,
  selectReportedUser,
} from "../../../../../actions/Job";
import {
  prettierNumber,
  getImageSrc,
} from "../../../../../ultis/SHelper/helperFunctions";
import Swal from "sweetalert2";
import ReportForm from "./ReportForm";

export const takenDoingApplicantsPerPage = 3;
class JobsDoingModalComponent extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handlePagination(pageNum) {
    if (pageNum !== this.props.EmployerReducer.currentDoingApplicantsPage) {
      window.scrollTo(0,0);
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

    let { selectedDoingJobId } = this.props.EmployerReducer;
    onLoadApplicants(selectedDoingJobId, page, takenDoingApplicantsPerPage);
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

  reportEmployee(userId) {
    let { onSelectReportedUser } = this.props;
    onSelectReportedUser(userId);
  }

  generateApplicantsList() {
    let { doingApplicantsList } = this.props.EmployerReducer;
    let content = [];

    if (doingApplicantsList.length > 0) {
      doingApplicantsList.forEach((e, index) => {
        content.push(
          <li key={index}>
            {/* Infomation */}
            <div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-5">
                    <div style={{ width: "100vh" }} className="text-truncate">
                      <span className="font-weight-bold">Họ và tên: </span>
                      {e.fullname}
                    </div>
                    <div style={{ width: "100vh" }} className="text-truncate">
                      <span className="font-weight-bold">Email: </span>
                      {e.email}
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div style={{ width: "100vh" }} className="text-truncate">
                      <span className="font-weight-bold">Số điện thoại: </span>
                      {e.dial}
                    </div>
                    <div style={{ width: "100vh" }} className="text-truncate">
                      <span className="font-weight-bold">Lương: </span>
                      {prettierNumber(e.proposed_price)} VNĐ
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="container text-right">
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
                data-toggle="modal"
                data-target="#reportModal"
                onClick={() => this.reportEmployee(e.id_user)}
                className="btn mx-2 py-2 px-4 bg-danger text-white rounded"
              >
                <i className="icon-line-awesome-hand-stop-o" /> Báo cáo
              </span>
            </div>
          </li>
        );
      });
    } else {
      content.push(
        <div className="font-weight-bold p-5" key={0}>
          Hiện không có người làm nào
        </div>
      );
    }

    return content;
  }

  render() {
    let {
      totalDoingApplicants,
      currentDoingApplicantsPage,
    } = this.props.EmployerReducer;
    let totalPage = Math.ceil(
      totalDoingApplicants / takenDoingApplicantsPerPage
    );
    return (
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Xem thông tin người làm</h4>
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
                    <i className="icon-feather-list" /> Danh sách người làm
                  </h3>
                </div>
                <div>
                  <ul className="dashboard-box-list">
                    {this.generateApplicantsList()}
                  </ul>
                </div>
              </div>

              {totalDoingApplicants === 0 ? (
                ""
              ) : (
                <div className="pagination-container margin-top-20">
                  <nav className="pagination">
                    <ul>
                      <li
                        className={
                          "pagination-arrow " +
                          ((currentDoingApplicantsPage === 1 ||
                            totalPage - currentDoingApplicantsPage < 3) &&
                            "d-none")
                        }
                      >
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            this.handlePagination(
                              currentDoingApplicantsPage - 1
                            );
                          }}
                        >
                          <i className="icon-material-outline-keyboard-arrow-left" />
                        </div>
                      </li>
                      {this.renderPagination(
                        currentDoingApplicantsPage,
                        totalPage
                      )}
                      <li
                        className={
                          "pagination-arrow " +
                          (totalPage - currentDoingApplicantsPage < 3 &&
                            "d-none")
                        }
                      >
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            this.handlePagination(
                              currentDoingApplicantsPage + 1
                            );
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
        <div id="reportModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <ReportForm></ReportForm>
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
    onLoadApplicants: (jobId, page, take) => {
      dispatch(loadDoingApplicantsForEmployer(jobId, page, take));
    },
    onSelectReportedUser: (userId) => {
      dispatch(selectReportedUser(userId));
    },
  };
};

const JobsDoingModal = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(JobsDoingModalComponent)
);
export default JobsDoingModal;
