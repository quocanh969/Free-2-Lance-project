import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { reviewEmployer } from "../../../../../actions/Job";
import StarRatings from "react-star-ratings";

class ReviewModalConponent extends Component {
  generateReview() {
    let { user } = this.props.HeaderReducer;
    let { reviewList, isLoadingReviewList } = this.props.ApplicantReducer;
    if (isLoadingReviewList) return (<div className="loading" key={1}>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>);
    let content = [];
    if (reviewList.length > 0) {
      reviewList.forEach((e, index) => {
        if (e.id_user2 != user.id_user) return;
        content.push(
          <li key={index}>
            {/* Infomation */}
            <div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-5">
                    <div style={{ width: "100vh" }} className="text-truncate">
                      <span className="font-weight-bold">Họ và tên: </span>
                      {e.employer_name}
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div style={{ width: "100vh" }} className="text-truncate">
                      <span className="font-weight-bold">Đánh giá: </span>
                      <span style={{ marginBottom: "5px" }}>
                        <StarRatings
                          rating={e.rating_fromEmployer}
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
                <div className="row">
                  <div className="col-xl-9">
                    <div style={{ width: "100vh" }} className="text-truncate">
                      <span className="font-weight-bold">Phản hồi: </span>
                      {e.feedback_fromEmployer}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      });
    }
    if (content.length === 0) {
      content.push(
        <div className="font-weight-bold p-5" key={0}>
          Người thuê hiện chưa đánh giá
        </div>
      );
    }

    return content;
  }

  render() {
    return (
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Xem đánh giá của người thuê</h4>
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
                <div>
                  <ul className="dashboard-box-list">
                    {this.generateReview()}
                  </ul>
                </div>
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
  return {};
};

const ReviewModal = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ReviewModalConponent)
);
export default ReviewModal;
