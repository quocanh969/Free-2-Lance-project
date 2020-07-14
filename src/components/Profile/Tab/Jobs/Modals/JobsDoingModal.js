import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  loadDoingApplicantsForEmployer,
  selectReportedUser,
  selectFiredUser
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

    let { selectedDoingJobId } = this.props.EmployerReducer;
    onLoadApplicants(selectedDoingJobId, page, takenDoingApplicantsPerPage);
  }


  viewApplicantInfo(userId) {
    let url = window.location.origin + "/user-detail/" + userId;
    window.open(url);
  }

  reportEmployee(userId, applicantId) {
    let { onSelectReportedUser } = this.props;
    let {selectedDoingJobId} = this.props.EmployerReducer;
    onSelectReportedUser(userId, applicantId, selectedDoingJobId);
  }

  fireEmployee(userId, applicantId) {
    let { onSelectFiredUser } = this.props;
    let {selectedDoingJobId} = this.props.EmployerReducer;
    onSelectFiredUser(userId, applicantId, selectedDoingJobId);
  }

  generateApplicantsList() {
    let { doingApplicantsList, isLoadingDoingApplicantsList } = this.props.EmployerReducer;
    let content = [];
    if (isLoadingDoingApplicantsList) return (<div className="loading my-2 py-4" key={1}>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>);

    if (doingApplicantsList.length > 0) {
      doingApplicantsList.forEach((e, index) => {
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
                  </div>
                  <div className="col-xl-4">
                    <div style={{ width: "80vh" }} className="text-truncate">
                      <span className="font-weight-bold">Số điện thoại: </span>
                      {e.dial}
                    </div>
                    <div style={{ width: "80vh" }} className="text-truncate">
                      <span className="font-weight-bold">Lương: </span>
                      {prettierNumber(e.proposed_price)} VNĐ
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="container text-right" style={{ marginTop: "10px" }}>
              <span
                onClick={() => this.viewApplicantInfo(e.id_user)}
                className="btn mx-2 py-2 px-4 bg-293FE4 text-white rounded"
              >
                <i className="icon-material-outline-supervisor-account"></i> Xem
                thông tin
              </span>
              <span
                data-toggle="modal"
                data-target="#reportModal"
                onClick={() => this.reportEmployee(e.id_user, e.id_applicant)}
                className="btn mx-2 py-2 px-4 bg-warning text-white rounded"
              >
                <i className="icon-material-outline-speaker-notes" /> Báo cáo
              </span>
              <span
                data-toggle="modal"
                data-target="#reportModal"
                onClick={() => this.fireEmployee(e.id_user, e.id_applicant)}
                className="btn mx-2 py-2 px-4 bg-danger text-white rounded"
              >
                <i className="icon-line-awesome-hand-stop-o" /> Sa thải
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
      isLoadingDoingApplicantsList,
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

              {(totalDoingApplicants === 0 || isLoadingDoingApplicantsList) ? (
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
    onSelectReportedUser: (userId, applicantId, jobId) => {
      dispatch(selectReportedUser(userId, applicantId, jobId));
    },
    onSelectFiredUser: (userId, applicantId, jobId) => {
      dispatch(selectFiredUser(userId, applicantId, jobId));
    },
  };
};

const JobsDoingModal = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(JobsDoingModalComponent)
);
export default JobsDoingModal;
