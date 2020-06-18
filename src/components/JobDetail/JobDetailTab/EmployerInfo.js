import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { loadEmployer } from "../../../actions/Job";
import { connect } from "react-redux";

class EmployerInfoComponent extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    let { onLoadEmployer } = this.props;
    let { jobDetail } = this.props.JobDetailReducer;
    onLoadEmployer(jobDetail.employer);
  }

  render() {
    let { employer } = this.props.JobDetailReducer;
    return (
      <div>
        {/* Thông tin cá nhân */}
        <div className="row mb-3">
          <div className="col-5 font-weight-bold">Người thuê:</div>
          <div className="col-7">
            {employer.personal ? employer.personal.fullname : ""}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-5 font-weight-bold">Người dùng đánh giá:</div>
          <div className="col-7">{4.9} / 5</div>
        </div>
        <div className="row mb-3">
          <div className="col-5 font-weight-bold">Email liên hệ:</div>
          <div className="col-7">
            {employer.personal ? employer.personal.email : ""}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-5 font-weight-bold">Điện thoại liên lạc:</div>
          <div className="col-7">
            {employer.personal ? employer.personal.dial : ""}
          </div>
        </div>
        {/* Thông tin công ty */}
        <div className="row mb-3">
          <div className="col-5 font-weight-bold">Vai trò:</div>
          <div className="col-7">
            {employer.company ? employer.company.position : ""}
          </div>
        </div>
        <hr></hr>
        <div className="row mb-3">
          <div className="col-5 font-weight-bold">Tên công ty:</div>
          <div className="col-7">
            {employer.company ? employer.company.company_name : ""}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-5 font-weight-bold">Địa chỉ:</div>
          <div className="col-7">
            {employer.company ? employer.company.company_address : ""}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-5 font-weight-bold">Email công ty:</div>
          <div className="col-7">
            {employer.company ? employer.company.company_email : ""}
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
    onLoadEmployer: (employerId) => {
      dispatch(loadEmployer(employerId));
    },
  };
};

const EmployerInfo = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EmployerInfoComponent)
);
export default EmployerInfo;
