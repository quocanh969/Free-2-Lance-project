import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { reportUser } from "../../../../../actions/Job";

class ReportFormConponent extends Component {
  constructor(props) {
    super(props);
    this.reportUser = this.reportUser.bind(this);
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
              document.getElementById("content-report-form").value = "";
            }}
          >
            &times;
          </button>
        </div>
        <div className="modal-body">
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
  };
};

const ReportForm = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ReportFormConponent)
);
export default ReportForm;
