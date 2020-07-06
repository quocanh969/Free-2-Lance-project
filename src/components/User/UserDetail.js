import React, { Component } from "react";
import '../../assets/css/detail.css';
import StarRatings from "react-star-ratings"

// Image
import avatarPlaceholder from "../../assets/images/portrait_placeholder.png";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { loadUserDetail } from "../../actions/UserDetail";
import { history } from "../../ultis/history/history";
import { getImageSrc, prettierDate } from "../../ultis/SHelper/helperFunctions";
import TaskUserDetail from "./TaskUserDetail";
import JobUserDetail from "./JobUserDetail";

class UserDetailComponent extends Component {
  constructor(props) {
    super(props);

    let userId = null;
    let { id_user } = this.props.match.params;
    if (id_user) {
      userId = id_user;
    } else {
      history.push("/not-found");
    }

    this.state = {
      userId: userId,
      tab: 1,
    };

  }

  componentWillMount() {
    let { onloadUserDetail } = this.props;
    let { userId } = this.state;
    onloadUserDetail(userId);
  }

  render() {
    let { userDetail, isLoadingUserDetail } = this.props.UserDetailReducer;
    if (isLoadingUserDetail || userDetail == null) return (<div className="loading" key={1}>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>);
    else {
      return (
        <div>
          {/* Titlebar ================================================== */}
          <div id='user-detail-background' className="single-page-header freelancer-header pb-3">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="single-page-header-inner">
                    <div className="left-side">
                      <div className="header-image freelancer-avatar">
                        <img src={getImageSrc(userDetail.personal.avatarImg, avatarPlaceholder)} alt="" />
                      </div>
                      <div className="header-details">
                        <h3 className='text-white'>{userDetail.personal ? userDetail.personal.fullname : ""}{" "}</h3>
                        <div className='text-warning font-weight-bold'>{(userDetail.personal.isBusinessUser === false ? 'Người dùng cá nhân' : 'Người dùng doanh nghiệp')}</div>
                        <div className='row'>
                          <div className='col-6 text-white'>
                            Đánh giá từ người làm:  <StarRatings
                              rating={userDetail.employee.employee_rating}
                              starRatedColor="yellow"
                              starDimension="15px"
                              starSpacing="3px"
                              numberOfStars={5}
                              name="rating"
                            />
                          </div>
                          {(
                            userDetail.personal.isBusinessUser
                              ?
                              ''
                              :
                              <div className='col-6 text-white'>
                                Đánh giá từ người thuê:  <StarRatings
                                  rating={userDetail.employer.employer_rating}
                                  starRatedColor="yellow"
                                  starDimension="15px"
                                  starSpacing="3px"
                                  numberOfStars={5}
                                  name="rating"
                                />
                              </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Page Content ================================================== */}
          <div className="container mb-4">
            <div className="row">
              {/* Content */}
              <div className="col-xl-8 col-lg-8 content-right-offset">

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <div className={'nav-link cursor-pointer ' + (this.state.tab === 1 ? 'active' : '')} data-toggle="tab"
                      role="tab" aria-controls="home" aria-selected="true"
                      onClick={() => { if (this.state.tab !== 1) { this.setState({ tab: 1 }) } }}
                    >Thông tin cá nhân</div>
                  </li>
                  <li className="nav-item">
                    <div className={'nav-link cursor-pointer ' + (this.state.tab === 2 ? 'active' : '')} data-toggle="tab"
                      role="tab" aria-controls="home" aria-selected="true"
                      onClick={() => { if (this.state.tab !== 2) { this.setState({ tab: 2 }) } }}
                    >Nhận xét từ người làm</div>
                  </li>
                  {(
                    userDetail.personal.isBusinessUser === false
                      ?
                      <li className="nav-item">
                        <div className={'nav-link cursor-pointer ' + (this.state.tab === 3 ? 'active' : '')} data-toggle="tab"
                          role="tab" aria-controls="home" aria-selected="true"
                          onClick={() => { if (this.state.tab !== 3) { this.setState({ tab: 3 }) } }}
                        >Nhận xét từ người thuê</div>
                      </li>
                      :
                      ''
                  )}
                </ul>

                <div className="tab-content profile-tab px-3 py-5" id="myTabContent">

                  <div className={'tab-pane fade ' + (this.state.tab === 1 ? 'show active' : '')} role="tabpanel" aria-labelledby="home-tab">
                    <div className="row">
                      <div className="col-3">
                        <label>Tên người dùng</label>
                      </div>
                      <div className="col-3">
                        <p>{userDetail.personal.fullname}</p>
                      </div>
                      <div className="col-3">
                        <label>Id người dùng</label>
                      </div>
                      <div className="col-3">
                        <p>{userDetail.personal.id_user}</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-3">
                        <label>Ngày sinh</label>
                      </div>
                      <div className="col-3">
                        <p>{prettierDate(userDetail.personal.dob)}</p>
                      </div>
                      <div className="col-3">
                        <label>Giới tính</label>
                      </div>
                      <div className="col-3">
                        <p>{userDetail.personal.gender ? 'Nam' : 'Nữ'}</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-3">
                        <label>Số điện thoại</label>
                      </div>
                      <div className="col-9">
                        <p>{userDetail.personal.dial}</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-3">
                        <label>Email liên lạc</label>
                      </div>
                      <div className="col-9">
                        <p>{userDetail.personal.email}</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-3">
                        <label>Địa chỉ liên lạc</label>
                      </div>
                      <div className="col-9">
                        <p>{userDetail.personal.address}</p>
                      </div>
                    </div>

                    {(
                      userDetail.personal.isBusinessUser
                        ?
                        <div>
                          <hr></hr>

                          <div className="row">
                            <div className="col-3">
                              <label>Tên công ty</label>
                            </div>
                            <div className="col-9">
                              <p>{userDetail.company.company_name}</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-3">
                              <label>Vai trò</label>
                            </div>
                            <div className="col-3">
                              <p>{userDetail.company.position}</p>
                            </div>
                            <div className="col-3">
                              <label>Số nhân viên</label>
                            </div>
                            <div className="col-3">
                              <p>{userDetail.company.number_of_employees}</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-3">
                              <label>Email công ty</label>
                            </div>
                            <div className="col-9">
                              <p>{userDetail.company.company_email}</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-3">
                              <label>Địa chỉ công ty</label>
                            </div>
                            <div className="col-9">
                              <p>{userDetail.company.company_address}</p>
                            </div>
                          </div>
                        </div>
                        :
                        ''
                    )}

                  </div>

                  <div className={'tab-pane fade ' + (this.state.tab === 2 ? 'show active' : '')} role="tabpanel" aria-labelledby="home-tab">
                    <JobUserDetail></JobUserDetail>
                  </div>

                  {(
                    userDetail.personal.isBusinessUser === false
                      ?
                      <div className={'tab-pane fade ' + (this.state.tab === 3 ? 'show active' : '')} role="tabpanel" aria-labelledby="home-tab">
                        <TaskUserDetail></TaskUserDetail>
                      </div>
                      :
                      ''
                  )}

                </div>

              </div>

              {/* Sidebar */}
              <div className="col-xl-4 col-lg-4">
                <div className="sidebar-container">
                  {/* Profile Overview */}
                  <div className="profile-overview">
                    <div className="overview-item">
                      <strong>{userDetail.employee.employer_job}</strong>
                      <span>lần ứng tuyển</span>
                    </div>
                    <div className="overview-item">
                      <strong>{userDetail.employer.employee_job}</strong>
                      <span>lần đăng tuyển</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

  }
}

// === Container

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onloadUserDetail: (userId) => {
      dispatch(loadUserDetail(userId));
    },
  };
};

const UserDetail = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserDetailComponent)
);
export default UserDetail;
