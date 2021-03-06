import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { reportUser } from "../../../../../actions/Job";
import { getDetailReport } from "../../../../../services/other.services";

class ReportFormConponent extends Component {
  constructor(props) {
    super(props);
    this.reportUser = this.reportUser.bind(this);
  }

  componentDidUpdate() {

  }

  reportUser(e) {
    e.preventDefault();
    let content = this.refs.content.value;
    let { doReportUser } = this.props;
    let { selectedDoingJobId, selectedReportedUser, selectedReportType, selectedReportedIdApplicant } = this.props.EmployerReducer;
    doReportUser(selectedDoingJobId, content, selectedReportedUser, 1, selectedReportType, selectedReportedIdApplicant);
    document.getElementById("btnCloseReportForm").click();
  }

  render() {
    let { selectedReportType } = this.props.EmployerReducer;
    let { isReportExist, content } = this.props.ContactUsReducer;
    return (
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">{selectedReportType == 0 ? "Báo cáo người làm" : "Sa thải người làm"}</h4>
          <button
            id="btnCloseReportForm"
            type="button"
            className="close"
            data-toggle="modal"
            data-target="#reportModal"
            onClick={() => {
              let reportForm = document.getElementById("content-report-form");
              if(reportForm) {
                reportForm.value = "";
              }
            }}
          >
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-body">
            {(
              isReportExist === -1
                ?
                <div className='w-100 text-center my-3'>
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
                :
                (
                  isReportExist === 1
                    ?
                    <div className="sign-in-form">
                      <div className="popup-tabs-container">
                        {/* Tab */}
                        <div className="popup-tab-content" id="tab">
                          {/* Welcome Text */}
                          <div className="welcome-text">
                            <h3>{selectedReportType == 0 ? "Nhập nội dung bạn muốn báo cáo" : "Nhập lý do sa thải"}</h3>
                          </div>
                          <p>{"Bạn chỉ được gửi 1 báo cáo / yêu cầu sa thải cho 1 người 1 lần. Những lần sau sẽ mạng ý nghĩa là cập nhật lại nội dung"}</p>
                          {/* Form */}
                          <form
                            method="post"
                            id="report-now-form"
                            onSubmit={this.reportUser}
                          >
                            <div className="input-with-icon-left">
                              <textarea
                                defaultValue={content}
                                type="text"
                                className="input-text with-border"
                                name="content-report-form"
                                id="content-report-form"
                                ref="content"
                                placeholder="Nội dung"
                                required
                                autoFocus
                              />
                            </div>
                          </form>
                          <p className='text-danger'>{"*Nếu là yêu cầu sa thải, bạn nên ghi thêm % tiền muồn hoàn vào phàn nội dung, nếu không quản lý sẽ tự quyết định"}</p>
                          {/* Button */}
                          <button
                            className="button margin-top-15 w-100 button-sliding-icon ripple-effect"
                            type="submit"
                            form="report-now-form"
                          >
                            {selectedReportType == 0 ? "Cập nhật báo cáo" : "Cập nhật yêu cầu sa thải"}
                            {" "}
                            <i className="icon-material-outline-arrow-right-alt" />
                          </button>

                        </div>
                      </div>
                    </div>
                    :
                    <div className="sign-in-form">
                      <div className="popup-tabs-container">
                        {/* Tab */}
                        <div className="popup-tab-content" id="tab">
                          {/* Welcome Text */}
                          <div className="welcome-text">
                            <h3>{selectedReportType == 0 ? "Nhập nội dung bạn muốn báo cáo" : "Nhập lý do sa thải"}</h3>
                          </div>
                          <p>{"Bạn chỉ được gửi 1 báo cáo / yêu cầu sa thải cho 1 người 1 lần. Những lần sau sẽ mạng ý nghĩa là cập nhật lại nội dung"}</p>
                          {/* Form */}
                          <form
                            method="post"
                            id="report-now-form"
                            onSubmit={this.reportUser}
                          >
                            <div className="input-with-icon-left">
                              <textarea
                                type="text"
                                className="input-text with-border"
                                name="content-report-form"
                                id="content-report-form"
                                ref="content"
                                placeholder="Nội dung"
                                required
                                autoFocus
                              />
                            </div>
                          </form>
                          <p className='text-danger'>{"*Nếu là yêu cầu sa thải, bạn nên ghi thêm % tiền muồn hoàn vào phàn nội dung, nếu không quản lý sẽ tự quyết định"}</p>
                          {/* Button */}
                          <button
                            className="button margin-top-15 w-100 button-sliding-icon ripple-effect"
                            type="submit"
                            form="report-now-form"
                          >
                            {selectedReportType == 0 ? "Báo cáo người làm" : "Sa thải người làm"}
                            {" "}
                            <i className="icon-material-outline-arrow-right-alt" />
                          </button>

                        </div>
                      </div>
                    </div>

                )
            )}

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
    doReportUser: (id_job, content, reporterId, role, type, applicantId) => {
      dispatch(reportUser(id_job, content, reporterId, role, type, applicantId));
    },
    doLoadDetailReport: (id_user2, type, applicantId, jobId) => {
      dispatch(getDetailReport(id_user2, type, applicantId, jobId));
    }
  };
};

const ReportForm = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ReportFormConponent)
);
export default ReportForm;
