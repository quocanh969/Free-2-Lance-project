import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { reviewEmployee } from "../../../../../actions/Job";
import StarRatings from "react-star-ratings";

class ReviewFormConponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 1,
    };

    this.reviewUser = this.reviewUser.bind(this);
    this.changeRating = this.changeRating.bind(this);
  }

  reviewUser(e) {
    e.preventDefault();
    let content = this.refs.content.value;
    let { doReviewUser } = this.props;
    let {
      selectedReviewApplicantId,
      selectedDoneJobId,
    } = this.props.EmployerReducer;
    let { rating } = this.state;
    doReviewUser(selectedReviewApplicantId, selectedDoneJobId, content, rating);
    document.getElementById("btnCloseReviewForm").click();
  }

  changeRating(newRating) {
    let {isReviewExist, rating} = this.props.ContactUsReducer;
    if(isReviewExist === 1 && rating !== null) {
      let {doChangeRating} = this.props;
      doChangeRating(newRating);
    }

    this.setState({
      rating: newRating,
    });
  }

  render() {
    let { rating, isReviewExist, feedback } = this.props.ContactUsReducer;
    return (
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Đánh giá người làm</h4>
          <button
            id="btnCloseReviewForm"
            type="button"
            className="close"
            data-toggle="modal"
            data-target="#reviewModal"
            onClick={() => {
              document.getElementById("content-review-form").value = "";
              this.setState({ rating: 1 });
            }}
          >
            &times;
          </button>
        </div>
        
        <div className="modal-body">
          {(
            isReviewExist === -1
            ?
            <div className='w-100 text-center my-3'>
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
            :
            (
              isReviewExist === 1 && rating !== null
              ?
              <div className="sign-in-form">
                <div className="popup-tabs-container">
                  {/* Tab */}
                  <div className="popup-tab-content" id="tab">
                    {/* Welcome Text */}
                    <div className="welcome-text">
                      <h3>Chọn độ hài lòng và nhập phản hồi</h3>
                    </div>
                    {/* Form */}
                    <form
                      method="post"
                      id="review-now-form"
                      onSubmit={this.reviewUser}
                    >
                      <div className="input-with-icon-left">
                        <StarRatings
                          rating={rating}
                          starRatedColor="blue"
                          starDimension="55px"
                          starSpacing="13px"
                          changeRating={this.changeRating}
                          numberOfStars={5}
                          name="rating"
                        />
                      </div>
                      <br></br>
                      <div className="input-with-icon-left">
                        <textarea
                          type="text"
                          className="input-text with-border"
                          name="content-review-form"
                          id="content-review-form"
                          ref="content"
                          defaultValue={feedback}
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
                      form="review-now-form"
                    >
                      Cập nhật đánh giá mới{" "}
                      <i className="icon-material-outline-arrow-right-alt" />
                    </button>
                  </div>
                </div>
              </div>        
              :
              <div className="sign-in-form">
                <div className="popup-tabs-container">
                  {/* Tab */}
                  <div className="popup-tab-content" id="tab">
                    {/* Welcome Text */}
                    <div className="welcome-text">
                      <h3>Chọn độ hài lòng và nhập phản hồi</h3>
                    </div>
                    {/* Form */}
                    <form
                      method="post"
                      id="review-now-form"
                      onSubmit={this.reviewUser}
                    >
                      <div className="input-with-icon-left">
                        <StarRatings
                          rating={this.state.rating}
                          starRatedColor="blue"
                          starDimension="55px"
                          starSpacing="13px"
                          changeRating={this.changeRating}
                          numberOfStars={5}
                          name="rating"
                        />
                      </div>
                      <br></br>
                      <div className="input-with-icon-left">
                        <textarea
                          type="text"
                          className="input-text with-border"
                          name="content-review-form"
                          id="content-review-form"
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
                      form="review-now-form"
                    >
                      Đánh giá người làm{" "}
                      <i className="icon-material-outline-arrow-right-alt" />
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
          
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
    doReviewUser: (applicantId, jobId, feedback, rating) => {
      dispatch(reviewEmployee(applicantId, jobId, feedback, rating));
    },
    doChangeRating: (rating) => {
      dispatch({
        type: 'CHANGE_DETAIL_REVIEW_RATING',
        rating,
      });
    },
  };
};

const ReviewForm = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ReviewFormConponent)
);
export default ReviewForm;
