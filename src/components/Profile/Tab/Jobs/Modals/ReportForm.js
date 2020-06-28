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
    let { selectedReportedUser } = this.props.EmployerReducer;
    doReportUser(content, selectedReportedUser, 1);
    document.getElementById("btnCloseReportForm").click();
  }

  render() {
    return (
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Báo cáo người làm</h4>
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
                  <h3>Nhập nội dung bạn muốn báo cáo</h3>
                </div>
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
                {/* Button */}
                <button
                  className="button margin-top-35 w-100 button-sliding-icon ripple-effect"
                  type="submit"
                  form="report-now-form"
                >
                  Báo cáo người làm{" "}
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
    doReportUser: (content, reporterId, role) => {
      dispatch(reportUser(content, reporterId, role));
    },
  };
};

const ReportForm = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ReportFormConponent)
);
export default ReportForm;
