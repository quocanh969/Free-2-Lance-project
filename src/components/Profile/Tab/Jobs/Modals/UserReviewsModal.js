import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  loadDoingApplicantsForEmployer,
  selectReportedUser,
  loadReviewList,
} from "../../../../../actions/Job";
import { prettierNumber } from "../../../../../ultis/SHelper/helperFunctions";
import StarRatings from "react-star-ratings";

export const takenReviewsPerPage = 4;
class UserReviewsModalComponent extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handlePagination(pageNum) {
    if (pageNum !== this.props.EmployerReducer.currentReviewPage) {
      this.loadReviewListFunc(pageNum);
    }
  }

  renderPagination(page, totalPage) {
    let content = [];
    let start = 1,
      end = 4;
    if (totalPage - 4 <= page) {
      if (totalPage - 4 <= 0) {
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

  loadReviewListFunc(page) {
    let { onLoadReviewList } = this.props;

    let { selectedDoneJobId } = this.props.EmployerReducer;
    onLoadReviewList(selectedDoneJobId, page, takenReviewsPerPage);
  }

  generateReviewsList() {
    let { reviewList, isLoadingreviewList } = this.props.EmployerReducer;
    let content = [];
    if (isLoadingreviewList) return (<div className="loading" key={1}>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>);
    if (reviewList.length > 0) {
      reviewList.forEach((e, index) => {
        content.push(
          <li key={index}>
            {/* Infomation */}
            <div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-5">
                    <div style={{ width: "80vh" }} className="text-truncate">
                      <span className="font-weight-bold">Họ và tên: </span>
                      {e.employee_name}
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div style={{ width: "80vh" }} className="text-truncate">
                      <span className="font-weight-bold">Đánh giá: </span>
                      <span style={{ marginBottom: "5px" }}>
                        <StarRatings
                          rating={e.rating_fromEmployee}
                          starRatedColor="blue"
                          starDimension="23px"
                          starSpacing="10px"
                          numberOfStars={5}
                          name="rating"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-xl-9">
                    <div style={{ width: "80vh" }} className="text-truncate">
                      <span className="font-weight-bold">Phản hồi: </span>
                      {e.feedback_fromEmployee}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      });
    } else {
      content.push(
        <div className="font-weight-bold p-5" key={0}>
          Hiện không có đánh giá nào
        </div>
      );
    }

    return content;
  }

  render() {
    let { totalReviews, currentReviewPage, isLoadingreviewList } = this.props.EmployerReducer;
    let totalPage = Math.ceil(totalReviews / takenReviewsPerPage);
    return (
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Xem đánh giá của người làm</h4>
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
                    <i className="icon-feather-list" /> Danh sách đánh giá
                  </h3>
                </div>
                <div>
                  <ul className="dashboard-box-list">
                    {this.generateReviewsList()}
                  </ul>
                </div>
              </div>

              {(totalReviews === 0 || isLoadingreviewList) ? (
                ""
              ) : (
                  <div className="pagination-container margin-top-20">
                    <nav className="pagination">
                      <ul>
                        <li
                          className={
                            "pagination-arrow " +
                            ((currentReviewPage === 1 ||
                              totalPage - currentReviewPage < 3) &&
                              "d-none")
                          }
                        >
                          <div
                            className="cursor-pointer"
                            onClick={() => {
                              this.handlePagination(currentReviewPage - 1);
                            }}
                          >
                            <i className="icon-material-outline-keyboard-arrow-left" />
                          </div>
                        </li>
                        {this.renderPagination(currentReviewPage, totalPage)}
                        <li
                          className={
                            "pagination-arrow " +
                            (totalPage - currentReviewPage < 3 && "d-none")
                          }
                        >
                          <div
                            className="cursor-pointer"
                            onClick={() => {
                              this.handlePagination(currentReviewPage + 1);
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
    onSelectReportedUser: (userId) => {
      dispatch(selectReportedUser(userId));
    },
    onLoadReviewList: (jobId, page, take) => {
      dispatch(loadReviewList(jobId, page, take));
    },
  };
};

const UserReviewsModal = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserReviewsModalComponent)
);
export default UserReviewsModal;
