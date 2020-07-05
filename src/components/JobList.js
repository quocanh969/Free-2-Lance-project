import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";


import CompanyLogoPlaceholder from "../assets/images/company-logo-placeholder.png";

import { loadJobList } from "../actions/Job";

import { S_Selector } from "../ultis/SHelper/S_Help_Input";
import {
  prettierNumber,
  prettierDate,
  getImageSrc,
} from "../ultis/SHelper/helperFunctions";

class JobListComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isGridMode: true,
      isASC: 2,
      query: {},
    };

    this.handleSortChange = this.handleSortChange.bind(this);
  }

  componentWillMount() {
    this.initQuery(); // original query
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps() {
    if (this.props.history.location.pathname !== this.props.location.pathname) {
      // khác path
      let splitted = this.props.history.location.pathname.split("=", 2);
      let newTopic = Number.parseInt(splitted[1]);

      this.setState({ query: { job_topic: newTopic } }, () => {
        this.loadJobListFunc(1, this.state.query);
      });
    }
  }

  renderTags(tags) {
    let content = [],
      count = 0;
    for (let e of tags) {
      content.push(
        <span key={count}>
          <span style={{ textDecoration: "underline", color: "blue" }}>
            {e.tag_name},
          </span>
          &nbsp;
        </span>
      );
      count++;
    }

    return content;
  }

  generateJobListGridMode() {
    let content = [],
      count = 0;
    let { jobList } = this.props.JobsListReducer;

    for (let e of jobList) {
      let logo = getImageSrc(e.img, CompanyLogoPlaceholder);
      content.push(
        <NavLink
          to={"/job-detail/" + e.id_job}
          className="job-listing"
          key={count}
        >
          {/* Job Listing Details */}
          <div className="job-listing-details">
            {/* Logo */}
            <div className="job-listing-company-logo">
              <img src={logo} alt="" />
            </div>
            {/* Details */}
            <div className="job-listing-description">
              <h3 className="job-listing-title">{e.title}</h3>
            </div>
          </div>
          {/* Job Listing Footer */}
          <div className="job-listing-footer">
            <span className="bookmark-icon" />
            <ul>
              <li>
                <i className="icon-material-outline-location-on" />{" "}
                {e.province}
              </li>
              <li>
                <i className="icon-material-outline-account-balance-wallet" />{" "}
                {prettierNumber(e.salary)} VNĐ
              </li>
              <br></br>
              <li>
                <i className="icon-material-outline-business-center" />{" "}
                {prettierDate(e.post_date)}
              </li>
              <li>
                <i className="icon-material-outline-access-time" />{" "}
                {prettierDate(e.expire_date)}
              </li>
            </ul>
          </div>
        </NavLink>
      );
      count++;
    }
    return content;
  }

  generateJobListListMode() {
    let content = [],
      count = 0;
    let { jobList } = this.props.JobsListReducer;

    for (let e of jobList) {
      let logo = getImageSrc(e.img, CompanyLogoPlaceholder);
      content.push(
        <div className="job-listing container" key={count}>
          {/* Job Listing Details */}
          <div className="job-listing-details row">
            {/* Logo */}
            <div className="col-4">
              <img src={logo} alt="" />
            </div>
            {/* Details */}
            <div className="col-6">
              {/* <h4 className="job-listing-company">{e.company} <span className="verified-badge" title="Verified Employer" data-tippy-placement="top" /></h4> */}
              <NavLink
                to={"/job-detail/" + e.id_job}
                className="d-block font-weight-bold text-dark"
              >
                {e.title}
              </NavLink>
              {this.renderTags(e.tags)}
              <div
                className="d-inline-block text-truncate text-dark"
                style={{ maxWidth: "50vh", maxHeight: "50%" }}
              >
                {e.description}
              </div>
              {/* Job Listing Footer */}
              <div className="job-listing-footer">
                <ul>
                  <li>
                    <i className="icon-material-outline-location-on" />{" "}
                    {e.province}
                  </li>
                  <li>
                    <i className="icon-material-outline-account-balance-wallet" />{" "}
                    {prettierNumber(e.salary)} đ
                  </li>
                </ul>
              </div>
              <div className="job-listing-footer">
                <ul>
                  <li>
                    <i className="icon-material-outline-business-center" />{" "}
                    {prettierDate(e.post_date)}
                  </li>
                  <li>
                    <i className="icon-material-outline-access-time" />{" "}
                    {prettierDate(e.expire_date)}
                  </li>
                </ul>
              </div>
            </div>
            {/* Bookmark */}
            <span className="bookmark-icon col-2" />
          </div>
        </div>
      );
      count++;
    }
    return content;
  }

  handlePagination(pageNum) {
    if (pageNum !== this.props.JobsListReducer.page) {
      this.loadJobListFunc(pageNum, this.query);
    }
  }

  handleSortChange() {
    this.setState(
      { isASC: document.getElementById("select-sort-type").value },
      () => {
        this.loadJobListFunc(1, this.query);
      }
    );
  }

  handleFilter() {
    let query = { ...this.state.query };

    let area = document.getElementById("select-area").value;
    if (area !== "0") query["area_province"] = area;

    let category = document.getElementById("select-category").value;
    if (category !== "0") query["job_topic"] = category;

    let salary = Number.parseInt(
      document.getElementById("salary-select").value
    );
    if (salary !== 0) {
      switch (salary) {
        case 1: {
          query["salary"] = { top: 100000, bot: 0 };
          break;
        }
        case 2: {
          query["salary"] = { top: 500000, bot: 100000 };
          break;
        }
        case 3: {
          query["salary"] = { top: 1000000, bot: 500000 };
          break;
        }
        case 4: {
          query["salary"] = { top: 10000000, bot: 1000000 };
          break;
        }
        case 5: {
          query["salary"] = { top: 0, bot: 10000000 };
          break;
        }
      }
    }

    let expiredDate = document.getElementById("expired-input").value;
    if (expiredDate !== "") query["expire_date"] = expiredDate;

    let vacancy = document.getElementById("vacancy-input").value;
    if (vacancy !== "") query["vacancy"] = vacancy;

    this.loadJobListFunc(1, query);
  }

  initQuery() {
    if (
      this.props.location.state === null ||
      this.props.location.state === undefined
    ) {
      // navigate từ topic trên header
      let { params } = this.props.match;
      // Tiền xử lý params
      this.setState({ query: params }, () => {
        this.loadJobListFunc(1, this.state.query);
      });
    } else {
      // navigate từ search page
      this.setState({ query: this.props.location.state }, () => {
        this.loadJobListFunc(1, this.state.query);
      });
    }
  }

  loadJobListFunc(page, query) {
    let { onLoadJobList } = this.props;
    onLoadJobList(page, 8, this.state.isASC, query);
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

  renderFilter() {
    let { jobTopic, areas } = this.props.GeneralReducer;
    console.log(this.state.query);
    return (
      <div className="sidebar-container">
        <h2 className="font-weight-bold text-293FE4 mb-3 border-bottom border-293FE4">
          Bộ lọc
        </h2>
        <div
          className="btn btn-293FE4 button-sliding-icon ripple-effect w-100 mb-3"
          onClick={() => {
            this.handleFilter();
          }}
        >
          Lọc&nbsp;&nbsp;&nbsp;
          <i className="icon-line-awesome-search pt-1" />
        </div>
        {/* Khu vực */}
        <div className="sidebar-widget">
          <h3>Khu vực</h3>
          <div className="input-with-icon">
            {this.state.query["area_province"] !== undefined ? (
              <S_Selector
                id="select-area"
                className="with-border"
                placeholder="Chọn khu vực"
                disabled={true}
                value={Number.parseInt(this.state.query["area_province"])}
                data={areas}
                value_tag="id_province"
                text_tag="name"
              ></S_Selector>
            ) : (
                <S_Selector
                  id="select-area"
                  className="with-border"
                  placeholder="Chọn khu vực"
                  data={areas}
                  value_tag="id_province"
                  text_tag="name"
                ></S_Selector>
              )}
          </div>
        </div>

        {/* Chủ đề */}
        <div className="sidebar-widget">
          <h3>Chủ đề</h3>
          <div className="input-with-icon">
            {this.state.query["job_topic"] !== undefined ? (
              <S_Selector
                id="select-category"
                className="with-border"
                placeholder="Chọn chủ đề"
                disabled={true}
                value={Number.parseInt(this.state.query["job_topic"])}
                data={jobTopic}
                value_tag="id_jobtopic"
                text_tag="name"
              ></S_Selector>
            ) : (
                <S_Selector
                  id="select-category"
                  className="with-border"
                  placeholder="Chọn chủ đề"
                  data={jobTopic}
                  value_tag="id_jobtopic"
                  text_tag="name"
                ></S_Selector>
              )}
          </div>
        </div>

        {/* Tính chất công việc */}
        {/*                 
                <div className="sidebar-widget">
                    <h3>Tính chất công việc</h3>
                    <div className="switches-list">
                        <div className="switch-container">
                            <label className="switch"><input type="checkbox" /><span className="switch-button" /> Online</label>
                        </div>
                        <div className="switch-container">
                            <label className="switch"><input type="checkbox" /><span className="switch-button" /> Việc công ty</label>
                        </div>
                        <div className="switch-container">
                            <label className="switch"><input type="checkbox" /><span className="switch-button" /> Việc bán thời gian</label>
                        </div>
                        <div className="switch-container">
                            <label className="switch"><input type="checkbox" /><span className="switch-button" /> Đấu giá</label>
                        </div>
                    </div>
                </div> */}

        {/* Mức lương */}
        <div className="sidebar-widget">
          <h3>Salary</h3>
          <div className="input-with-icon">
            {this.state.query["salary"] !== undefined ? (
              <select
                disabled
                className="btn bg-cloud with-border dropdown-toggle bs-placeholder btn-default"
                id="salary-select"
                defaultValue={this.state.query["salary"].top}
              >
                <option value={1} disabled>
                  Giá tiền
                </option>
                <option value={100000}>Nhỏ hơn 100.000 đ</option>
                <option value={500000}>100.000đ - 500.000đ</option>
                <option value={1000000}>500.000đ - 1.000.000đ</option>
                <option value={10000000}>1.000.000đ - 10.000.000đ</option>
                <option value={0}>Lớn hơn 10.000.000đ</option>
              </select>
            ) : (
                <select
                  className="btn with-border dropdown-toggle bs-placeholder btn-default"
                  id="salary-select"
                  defaultValue={0}
                >
                  <option value={0} disabled>
                    Giá tiền
                </option>
                  <option value={1}>Nhỏ hơn 100.000 đ</option>
                  <option value={2}>100.000đ - 500.000đ</option>
                  <option value={3}>500.000đ - 1.000.000đ</option>
                  <option value={4}>1.000.000đ - 10.000.000đ</option>
                  <option value={5}>Lớn hơn 10.000.000đ</option>
                </select>
              )}
          </div>
        </div>

        {/* Ngày hết hạn */}
        <div className="sidebar-widget">
          <h3>Ngày hết hạn</h3>
          <div className="input-with-icon">
            {this.state.query["expire_date"] !== undefined ? (
              <input
                id="expired-input"
                className="bg-cloud with-border"
                disabled
                value={this.state.query["expire_date"]}
                type="date"
                min="2020-01-01"
                max="2050-12-31"
              />
            ) : (
                <input
                  id="expired-input"
                  className="with-border"
                  type="date"
                  min="2020-01-01"
                  max="2050-12-31"
                />
              )}
          </div>
        </div>

        {/* Số lượng tuyển ( ít nhất ) */}
        <div className="sidebar-widget">
          <h3>Số lượng tuyển ( ít nhất )</h3>
          <div className="input-with-icon">
            {this.state.query["vacancy"] !== undefined ? (
              <input
                id="vacancy-input"
                className="bg-cloud with-border"
                disabled
                value={this.state.query["vacancy"]}
                type="number"
                min="1"
              />
            ) : (
                <input
                  id="vacancy-input"
                  className="with-border"
                  type="number"
                  min="1"
                />
              )}
          </div>
        </div>
      </div>
    );
  }

  render() {
    let { areas, jobTopic } = this.props.GeneralReducer;
    let { page, total, isSending } = this.props.JobsListReducer;
    let sortType = [
      { type: 2, text: "Mới nhất" },
      { type: 1, text: "Đã đăng lâu nhất" },
    ];
    let totalPage = Math.ceil(total / 8);

    return (
      <div>
        <div className="margin-top-90"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">{this.renderFilter()}</div>

            <div className="col-xl-9 col-lg-8 content-left-offset">
              <h3 className="page-title">Danh sách công việc</h3>

              {/* Option box */}
              <div className="notify-box margin-top-15 container">
                <div className="row py-auto">
                  <div className="col-6 my-auto">
                    <span
                      className={
                        "text-white pt-2 pb-1 px-1 rounded mr-1 cursor-pointer " +
                        (this.state.isGridMode ? "bg-293FE4" : "bg-secondary")
                      }
                      onClick={() => {
                        this.setState({ isGridMode: true });
                      }}
                    >
                      <i className="icon-feather-grid p-1 my-auto"></i>
                    </span>
                    <span
                      className={
                        "text-white pt-2 pb-1 px-1 rounded mr-1 cursor-pointer " +
                        (!this.state.isGridMode ? "bg-293FE4" : "bg-secondary")
                      }
                      onClick={() => {
                        this.setState({ isGridMode: false });
                      }}
                    >
                      <i className="icon-feather-list p-1 my-auto"></i>
                    </span>
                  </div>
                  <div className="col-6 row">
                    <div className="col-3 my-auto">Sort by:</div>
                    <S_Selector
                      id="select-sort-type"
                      handleChange={this.handleSortChange}
                      flex="col-9"
                      value={2}
                      placeholder="Sắp xếp"
                      data={sortType}
                      value_tag="type"
                      text_tag="text"
                    ></S_Selector>
                  </div>
                </div>
              </div>

              <div
                className={
                  "listings-container margin-top-35 " +
                  (this.state.isGridMode
                    ? "grid-layout"
                    : "compact-list-layout")
                }
              >
                {(isSending ? (<div className="loading" key={1}>
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>) :
                  (
                    this.props.JobsListReducer.jobList.length > 0
                      ?
                      (
                        this.state.isGridMode
                          ? this.generateJobListGridMode()
                          : this.generateJobListListMode()
                      )
                      :
                      'Danh sách công việc tìm kiếm rỗng !!!'
                  )
                )}
              </div>
              {/* Pagination */}
              <div className="clearfix" />
              <div className="row">
                <div className="col-md-12">
                  {/* Pagination */}
                  <div className="pagination-container margin-top-30 margin-bottom-60">
                    {isSending ? (<div></div>) : <nav className="pagination">
                      <ul>
                        <li
                          className={
                            "pagination-arrow " +
                            ((page === 1 || totalPage - page < 3) && "d-none")
                          }
                        >
                          <div
                            className="cursor-pointer"
                            onClick={() => {
                              this.handlePagination(page - 1);
                            }}
                          >
                            <i className="icon-material-outline-keyboard-arrow-left" />
                          </div>
                        </li>
                        {this.renderPagination(page, totalPage)}
                        <li
                          className={
                            "pagination-arrow " +
                            (totalPage - page < 3 && "d-none")
                          }
                        >
                          <div
                            className="cursor-pointer"
                            onClick={() => {
                              this.handlePagination(page + 1);
                            }}
                          >
                            <i className="icon-material-outline-keyboard-arrow-right" />
                          </div>
                        </li>
                      </ul>
                    </nav>}
                  </div>

                </div>
              </div>
              {/* Pagination / End */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadJobList: (page, take, isASC, query) => {
      dispatch(loadJobList(page, take, isASC, query));
    },
  };
};

const JobList = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(JobListComponent)
);
export default JobList;
