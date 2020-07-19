import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";

import "../assets/css/testimonial.css";

// Image, khi mà vào project cần dùng ảnh của mình thì phải xóa mấy cái này
import UserAvatarPlaceholder from "../assets/images/portrait_placeholder.png";

import { S_Selector } from "../ultis/SHelper/S_Help_Input";
import {
  loadProductionJobs,
  loadTemporalJobs,
  loadTopUsers,
  loadStatistic,
} from "../actions/Home";
import {
  prettierNumber,
  prettierDate,
  getImageSrc,
} from "../ultis/SHelper/helperFunctions";
import { history } from "../ultis/history/history";

class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  componentWillMount() {
    let {
      onLoadProductionJobs,
      onLoadTemporalJobs,
      onLoadTopUsers,
      onLoadStatistic,
    } = this.props;
    onLoadProductionJobs(1, 5);
    onLoadTemporalJobs(1, 5);
    onLoadTopUsers();
    onLoadStatistic();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleSearchSubmit(e) {
    e.preventDefault();
    let query = {};
    let title = document.getElementById('input-title').value;
    let area_province = document.getElementById('select-area').value;
    let job_topic = document.getElementById('select-category').value;

    if (title.length > 0) {
      query['title'] = title;
    }
    if (area_province != 0) {
      query['area_province'] = area_province;
    }
    if (job_topic != 0) {
      query['job_topic'] = job_topic;
    }

    if (query.length !== {}) {
      history.push('/job-list', query);
    }
  }

  areaSession(areas) {
    let content = [];
    let count = 1;
    for (let i of areas) {
      content.push(
        <option value={count} key={count}>
          {i}
        </option>
      );
      count++;
    }

    return content;
  }

  categorySession(categories) {
    let content = [];
    let count = 1;
    for (let i of categories) {
      content.push(
        <option value={count} key={count}>
          {i}
        </option>
      );
      count++;
    }

    return content;
  }

  bannerSession() {
    let { jobTopic, areas, isLoadingJobTopic, isLoadingAreas } = this.props.GeneralReducer;
    let {
      memberNum,
      finishedJobNum,
      applyingJobNum,
      proccessingJobNum,
    } = this.props.HomeReducer;
    return (
      <div id="home">
        {/* Transparent Header Spacer */}
        <div className="transparent-header-spacer" />

        <div className="container margin-top-40">
          {/* Intro Headline */}
          <div className="row">
            <div className="col-md-12">
              <div className="banner-headline">
                <h3>
                  <strong className="text-white">
                    Công việc dành cho các cá nhân có nhu cầu làm việc thêm
                  </strong>
                  <br />
                  <span className="text-smoothing-breeze">
                    Số lượng công việc nhiều, phù hợp với nhu cầu và khả năng
                    của người ứng tuyển.
                  </span>
                </h3>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="row">
            <div className="col-md-12">
              <form id='search-field' onSubmit={this.handleSearchSubmit} className="intro-banner-search-form margin-top-95">
                {/* Search Field */}
                <div className="intro-search-field">
                  <label
                    htmlFor="input-title"
                    className="field-title ripple-effect"
                  >
                    Bạn cần trợ giúp việc gì?
                  </label>
                  <input
                    id="input-title"
                    type="text"
                    placeholder="Ví dụ: tạo một website giúp .."
                  />
                </div>

                {/* Search Field */}
                <div className="intro-search-field">
                  <label
                    htmlFor="select-area"
                    className="field-title ripple-effect"
                  >
                    Tại nơi nào?
                  </label>
                  {isLoadingAreas ? (<div className="loading" key={1}>
                    <div className="spinner-border text-primary" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>) : <S_Selector
                    id="select-area"
                    placeholder="Khu vực"
                    data={areas}
                    value_tag="id_province"
                    text_tag="name"
                  ></S_Selector>}

                </div>
                {/* Search Field */}
                <div className="intro-search-field">
                  <label
                    htmlFor="select-category"
                    className="field-title ripple-effect"
                  >
                    Nhóm cộng việc là gì?
                  </label>
                  {isLoadingJobTopic ? (<div className="loading" key={1}>
                    <div className="spinner-border text-primary" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>) : <S_Selector
                    id="select-category"
                    placeholder="Loại công việc"
                    data={jobTopic}
                    value_tag="id_jobtopic"
                    text_tag="name"
                  ></S_Selector>}

                </div>

                <div className="intro-search-button">
                  <button className="btn btn-293FE4" type="submit">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Stats */}
          <div className="row">
            <div className="col-md-12">
              <ul className="intro-stats margin-top-45 hide-under-992px">
                <li>
                  <strong className="counter text-white">
                    {applyingJobNum + proccessingJobNum}
                  </strong>
                  <span className="text-smoothing-breeze">
                    Công việc sẳn sàng
                  </span>
                </li>
                <li>
                  <strong className="counter text-white">
                    {finishedJobNum}
                  </strong>
                  <span className="text-smoothing-breeze">
                    Công việc hoàn thành
                  </span>
                </li>
                <li>
                  <strong className="counter text-white">{memberNum}</strong>
                  <span className="text-smoothing-breeze">Thành viên</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  topicSession() {
    let { jobTopic, isLoadingJobTopic } = this.props.GeneralReducer;
    let content = [];
    let count = 0;
    let copyJobTopicList = [...jobTopic];

    copyJobTopicList = copyJobTopicList
      .sort((a, b) => {
        return b.count - a.count;
      })
      .slice(0, 8);
    if (isLoadingJobTopic) return (<div className="loading" key={1}>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>);
    for (let e of copyJobTopicList) {
      content.push(
        <div className="col-xl-3 col-md-6" key={count}>
          {/* Photo Box */}
          <NavLink
            to={"/job-list/topic=" + e.id_jobtopic}
            className="photo-box small topic-box"
          >
            <img src={getImageSrc(e.img, UserAvatarPlaceholder)} alt=""></img>
            <div className="photo-box-content">
              <h3>{e.name}</h3>
            </div>
          </NavLink>
        </div>
      );
      count++;
    }

    return content;
  }

  renderProductionJobsList() {
    let content = [],
      count = 0;
    let { productionJobList, isLoadingProductionJobList } = this.props.HomeReducer;
    if (isLoadingProductionJobList) return (<div className="loading" key={1}>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>);
    for (let e of productionJobList) {
      content.push(
        <NavLink
          to={"/job-detail/" + e.id_job}
          className="task-listing"
          key={count}
        >
          <div className="task-listing-details">
            <div className="task-listing-description">
              <h3
                title={e.title}
                className="task-listing-title text-truncate"
                style={{ maxWidth: "25vh" }}
              >
                {e.title}
              </h3>
              <ul className="task-icons">
                <li>
                  <i className="icon-material-outline-location-on" />{" "}
                  {e.province}
                </li>
                <li>
                  <i className="icon-material-outline-access-time" />{" "}
                  {prettierDate(e.post_date)}
                </li>
              </ul>
              <p
                className="text-truncate"
                style={{ maxWidth: "25vh" }}
              >
                {e.description}
              </p>
            </div>
          </div>
          <div className="task-listing-bid">
            <div className="task-listing-bid-inner">
              <div className="task-offers">
                <strong>{prettierNumber(e.salary)} VNĐ</strong>
                <span>{e.dealable ? "Có đấu giá" : "Giá cố định"}</span>
              </div>
              <span className="button button-sliding-icon ripple-effect">
                Xem thêm <i className="icon-material-outline-arrow-right-alt" />
              </span>
            </div>
          </div>
        </NavLink>
      );
      count++;
    }

    return content;
  }

  renderTemporalJobsList() {
    let content = [],
      count = 0;
    let { temporalJoblist, isLoadingTemporalJoblist } = this.props.HomeReducer;
    if (isLoadingTemporalJoblist) return (<div className="loading" key={1}>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>);
    for (let e of temporalJoblist) {
      content.push(
        <NavLink
          to={"/job-detail/" + e.id_job}
          className="task-listing"
          key={count}
        >
          <div className="task-listing-details">
            <div className="task-listing-description">
              <h3
                title={e.title}
                className="task-listing-title text-truncate"
                style={{ maxWidth: "25vh" }}
              >
                {e.title}
              </h3>
              <ul className="task-icons">
                <li>
                  <i className="icon-material-outline-location-on" />{" "}
                  {e.province}
                </li>
                <li>
                  <i className="icon-material-outline-access-time" />{" "}
                  {prettierDate(e.post_date)}
                </li>
              </ul>
              <p
                className="text-truncate"
                style={{ maxWidth: "25vh" }}
              >
                {e.description}
              </p>
            </div>
          </div>
          <div className="task-listing-bid">
            <div className="task-listing-bid-inner">
              <div className="task-offers">
                <strong>{prettierNumber(e.salary)} VNĐ</strong>
                <span>{e.dealable ? "Có đấu giá" : "Giá cố định"}</span>
              </div>
              <span className="button button-sliding-icon ripple-effect">
                Xem thêm <i className="icon-material-outline-arrow-right-alt" />
              </span>
            </div>
          </div>
        </NavLink>
      );
      count++;
    }

    return content;
  }

  renderTestimonials() {
    let content = [],
      count = 0;
    let { topUsers, isLoadingTopUsers } = this.props.HomeReducer;
    if (isLoadingTopUsers) return (<div className="loading" key={1}>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>);
    if (topUsers.length > 0) {
      for (let e of topUsers) {
        let userAvatar = getImageSrc(e.avatarImg, UserAvatarPlaceholder);
        content.push(
          <div
            className={"item carousel-item " + (count === 0 && "active")}
            key={count}
            onClick={() => { history.push('user-detail/' + e.id_user) }}
          >
            <div className="img-box">
              <img src={userAvatar} alt="" />
            </div>
            <br></br>

            <p className="overview">
              <b>{e.fullname}</b>
            </p>
            <p>
              Rating: {e.rating}{" "}
              <i className="icon-material-outline-star text-warning"></i>
            </p>
            <p>
              <i className="icon-feather-mail" /> {e.email}
            </p>
            <p>
              <i className="icon-feather-phone" /> {e.dial}
            </p>
          </div>
        );
        count++;
      }
    }

    return content;
  }

  renderCounter() {
    let {
      memberNum,
      finishedJobNum,
      applyingJobNum,
      proccessingJobNum,
      isLoadingStatistic,
    } = this.props.HomeReducer;
    if (isLoadingStatistic) return (<div className="loading" key={1}>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>);
    else return (
      <div className="section padding-top-70 padding-bottom-75">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="counters-container">
                {/* ==== */}
                <div className="single-counter">
                  <i className="icon-line-awesome-hourglass-2" />
                  <div className="counter-inner">
                    <h3>
                      <span className="counter">{applyingJobNum}</span>
                    </h3>
                    <span className="counter-title">
                      Công việc đang ứng tuyển
                    </span>
                  </div>
                </div>
                {/* ==== */}
                <div className="single-counter">
                  <i className="icon-line-awesome-legal" />
                  <div className="counter-inner">
                    <h3>
                      <span className="counter">{proccessingJobNum}</span>
                    </h3>
                    <span className="counter-title">
                      Công việc đang thực hiện
                    </span>
                  </div>
                </div>
                {/* ==== */}
                <div className="single-counter">
                  <i className="icon-line-awesome-users" />
                  <div className="counter-inner">
                    <h3>
                      <span className="counter">{memberNum}</span>
                    </h3>
                    <span className="counter-title">Thành viên</span>
                  </div>
                </div>
                {/* ==== */}
                <div className="single-counter">
                  <i className="icon-line-awesome-trophy" />
                  <div className="counter-inner">
                    <h3>
                      <span className="counter">{finishedJobNum}</span>
                    </h3>
                    <span className="counter-title">Công việc hoàn thành</span>
                  </div>
                </div>
                {/* ==== */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.bannerSession()}

        {/* Content ================================================== */}

        {/* Popular Job Categories */}
        <div className="section margin-top-65 margin-bottom-30">
          <div className="container">
            <div className="row">
              {/* Section Headline */}
              <div className="col-xl-12">
                <div className="section-headline centered margin-top-0 margin-bottom-45">
                  <h3>Các chủ đề nổi bật</h3>
                </div>
              </div>
              {this.topicSession()}
            </div>
          </div>
        </div>
        {/* Features Cities / End */}

        {/* Features Jobs */}
        <div className="section gray margin-top-45 padding-top-65 padding-bottom-75">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                {/* Section Headline */}
                <div className="section-headline pl-3 margin-top-0 margin-bottom-35">
                  <p className="font-weight-bold" style={{ fontSize: "18px" }}>
                    Các công việc thời vụ gần đây
                  </p>
                </div>
                {/* Jobs Container */}
                <div className="tasks-list-container compact-list margin-top-20 px-3">
                  {this.renderTemporalJobsList()}
                </div>
                {/* Jobs Container / End */}
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                {/* Section Headline */}
                <div className="section-headline pl-3 margin-top-0 margin-bottom-35">
                  <p className="font-weight-bold" style={{ fontSize: "18px" }}>
                    Các công việc theo sản phẩm gần đây
                  </p>
                </div>
                {/* Jobs Container */}
                <div className="tasks-list-container compact-list margin-top-20 px-3">
                  {this.renderProductionJobsList()}
                </div>
                {/* Jobs Container / End */}
              </div>
            </div>
          </div>
        </div>
        {/* Featured Jobs / End */}

        {/* Testimonials */}
        <div className="section gray padding-top-10 padding-bottom-55">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                {/* Section Headline */}
                <div className="section-headline centered margin-top-0 margin-bottom-5">
                  <h3>Những người dùng nổi bật</h3>
                </div>
              </div>
            </div>
          </div>

          <div
            id="myCarousel"
            className="carousel slide w-50 task-listing p-5"
            data-ride="carousel"
          >
            {/* Wrapper for carousel items */}
            <div className="carousel-inner">{this.renderTestimonials()}</div>
            {/* Carousel controls */}
            <a
              className="carousel-control left carousel-control-prev ml-4"
              href="#myCarousel"
              data-slide="prev"
            >
              <i className="icon-line-awesome-angle-left" />
            </a>
            <a
              className="carousel-control right carousel-control-next mr-4"
              href="#myCarousel"
              data-slide="next"
            >
              <i className="icon-line-awesome-angle-right" />
            </a>
          </div>
        </div>
        {/* Testimonials / End */}

        {/* Counters */}
        {this.renderCounter()}
        {/* Counters / End */}
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
    onLoadProductionJobs: (page, take) => {
      dispatch(loadProductionJobs(page, take));
    },
    onLoadTemporalJobs: (page, take) => {
      dispatch(loadTemporalJobs(page, take));
    },
    onLoadTopUsers: () => {
      dispatch(loadTopUsers());
    },
    onLoadStatistic: () => {
      dispatch(loadStatistic());
    },
  };
};

const Home = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeComponent)
);
export default Home;
