import React, { Component } from "react";

import avatarPlaceholder from "../../assets/images/portrait_placeholder.png";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getImageSrc, prettierDate } from "../../ultis/SHelper/helperFunctions";
import { getReviewJobUserDetail } from "../../actions/UserDetail";

class JobUserDetailComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.loadJobListFunc(1);
    }

    loadJobListFunc(page) {
        let { onLoadReviewJobDetailUser } = this.props;
        let { userDetail } = this.props.UserDetailReducer;

        onLoadReviewJobDetailUser(page, 8, userDetail.personal.id_user);
    }

    handlePagination(pageNum) {
        if (pageNum !== this.props.UserDetailReducer.currentJobPage) {
            this.loadJobListFunc(pageNum);
        }
    }

    renderPagination(page, totalPage) {
        let content = [];
        let start = 1,
            end = 4;
        if (totalPage - 4 < page) {
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
                <li className={'page-item ' + (page === e ? "active" : '')} key={e}>
                    <div
                        className="page-link cursor-pointer"
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

    renderReview(reviews) {
        let content = [];

        if (reviews.length > 0) {
            reviews.forEach((e, index) => {
                content.push(
                    <div className='row mb-2 pb-2 mx-1 border-bottom border-dark' key={index}>
                        <div className='col-3 profile-img'>
                            <img src={getImageSrc(null, avatarPlaceholder)}></img>
                        </div>

                        <div className='col-9'>
                            <h3>{e.title}</h3>
                            <div>
                                <span className='h5'>{e.fullname}</span>
                                <span>&nbsp;-&nbsp;</span>
                                <span className='h5'>{e.email}</span>
                            </div>
                            <div className='font-weight-bold'>Đánh giá:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{e.rating_fromEmployee}/5 <i className="icon-material-outline-star text-warning"></i></div>
                            <div className='font-weight-bold'>Nội dung phản hồi:</div>
                            <p>{e.feedback_fromEmployee}</p>
                        </div>
                    </div>
                )
            })
        }
        else {
            content.push(
                <div className='row p-4' key={0}>
                    Người dùng chưa nhận phản hồi nào !
                </div>
            )
        }



        return content;
    }

    render() {
        let { userDetail, jobs, totalJob, currentJobPage, isLoadingJobReview } = this.props.UserDetailReducer;
        let totalPage = Math.ceil(totalJob / 8);

        if (userDetail === null || isLoadingJobReview) return (<div className="loading" key={1}>
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>);
        else {
            return (
                <div>
                    {this.renderReview(jobs)}

                    {/* Pagination */}
                    {(
                        (totalJob === 0 || isLoadingJobReview)
                            ?
                            ''
                            :
                            <nav aria-label="...">
                                <ul className="pagination">
                                    <li className={"pagination-item " + ((currentJobPage === 1 || totalPage - currentJobPage < 3) && "d-none")}>
                                        <div className="cursor-pointer page-link" onClick={() => { this.handlePagination(currentJobPage - 1); }}>
                                            <i className="icon-material-outline-keyboard-arrow-left" />
                                        </div>
                                    </li>
                                    {this.renderPagination(currentJobPage, totalPage)}
                                    <li className={"pagination-item " + (totalPage - currentJobPage < 3 && "d-none")}>
                                        <div className="cursor-pointer page-link" onClick={() => { this.handlePagination(currentJobPage + 1); }}>
                                            <i className="icon-material-outline-keyboard-arrow-right" />
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                    )}
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
        onLoadReviewJobDetailUser: (page, take, employer) => {
            dispatch(getReviewJobUserDetail(page, take, employer));
        },
    };
};

const JobUserDetail = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(JobUserDetailComponent)
);
export default JobUserDetail;
