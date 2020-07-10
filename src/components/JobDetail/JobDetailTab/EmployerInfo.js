import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { loadEmployer } from "../../../actions/Job";
import { connect } from "react-redux";
import StarRatings from "react-star-ratings";


class EmployerInfoComponent extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    let { onLoadEmployer } = this.props;
    let { jobDetail } = this.props.JobDetailReducer;
    onLoadEmployer(jobDetail.employer);
  }

  renderCompanyInfo() {
    let { employer } = this.props.JobDetailReducer;
    if (employer && employer.company) {
      return (
        <div>
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
    } else return [];
  }

  render() {
    let { employer, isLoadingEmployer } = this.props.JobDetailReducer;
    return (

      <div>
        {!isLoadingEmployer ?
          (<div>{/* Thông tin cá nhân */}
            <div className="row mb-3">
              <div className="col-5 font-weight-bold">Người thuê:</div>
              <div className="col-7">
                {employer.personal ? employer.personal.fullname : ""}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-5 font-weight-bold">Người dùng đánh giá:</div>
              {(
                employer.employee && employer.employee.employer_job > 1
                ?
                <div className="col-7"><StarRatings
                  rating={employer.employee ? employer.employee.employee_rating : 0}
                  starRatedColor="blue"
                  starDimension="18px"
                  starSpacing="3px"
                  numberOfStars={5}
                  name="rating"
                /></div>
                :
                <div className='col-7'>{"(Người dùng chưa nhận được đánh giá)"}</div>
              )}              

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
            {this.renderCompanyInfo()}
          </div>) :
          (<div className="loading" key={1}>
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>)}

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
