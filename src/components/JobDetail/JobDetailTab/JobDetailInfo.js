import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { prettierDate, prettierNumber } from "../../../ultis/SHelper/prettier";

class JobDetailInfoComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { jobDetail } = this.props.JobDetailReducer;

    return (
      <div>
        <div className="row mb-3">
          <div className="col-3 font-weight-bold">Tiêu đề:</div>
          <div className="col-9">{jobDetail.title}</div>
        </div>

        <div className="row my-3">
          <div className="col-3 font-weight-bold">Chủ đề:</div>
          <div className="col-9">{jobDetail.job_topic}</div>
        </div>

        <div className="row my-3">
          <div className="col-3 font-weight-bold">Mức lương:</div>
          <div className="col-9">{prettierNumber(jobDetail.salary)} VNĐ</div>
        </div>

        <div className="row my-3">
          <div className="col-3 font-weight-bold">Địa chỉ:</div>
          <div className="col-9">{jobDetail.address}</div>
        </div>

        <div className="row my-3">
          <div className="col-3 font-weight-bold">Thành phố:</div>
          <div className="col-3">{jobDetail.province_name}</div>
          <div className="col-3 font-weight-bold">Khu vực:</div>
          <div className="col-3">{jobDetail.district_name}</div>
        </div>

        <div className="row my-3">
          <div className="col-3 font-weight-bold">Ngày đăng:</div>
          <div className="col-3">{prettierDate(jobDetail.post_date)}</div>
          <div className="col-3 font-weight-bold">Ngày hết hạn:</div>
          <div className="col-3">{prettierDate(jobDetail.expire_date)}</div>
        </div>

        <div className="row my-3">
          <div className="col-3 font-weight-bold">Tính chất:</div>
          <div className="col-9" style={{ color: "blue" }}>
            <span style={{ textDecoration: "underline" }}>
              {jobDetail.dealable ? "Đấu giá" : "Không cần đấu giá"}
            </span>{" "}
            ,&nbsp;
            <span style={{ textDecoration: "underline" }}>
              {jobDetail.job_type ? "Thời vụ" : "Sản phẩm"}
            </span>{" "}
            ,&nbsp;
            <span style={{ textDecoration: "underline" }}>
              {jobDetail.isOnline ? "Online" : "Offline"}
            </span>{" "}
            ,&nbsp;
            <span style={{ textDecoration: "underline" }}>
              {jobDetail.isCompany ? "Công ty" : "Cá nhân"}
            </span>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-3 font-weight-bold">Mô tả chi tiết:</div>
          <div className="col-9">{jobDetail.description}</div>
        </div>

        <div className="row my-3">
          <div className="col-3 font-weight-bold">Số lượng:</div>
          <div className="col-9">{jobDetail.vacancy}</div>
        </div>

        <div className="row mt-3">
          <div className="col-3 font-weight-bold">Yêu cầu thêm:</div>
          <div className="col-9">{jobDetail.requirement}</div>
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
  return {};
};

const JobDetailInfo = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(JobDetailInfoComponent)
);
export default JobDetailInfo;
