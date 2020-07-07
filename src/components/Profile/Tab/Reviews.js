import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getReviewTaskUserDetail, getReviewJobUserDetail } from '../../../actions/UserDetail';
import { getImageSrc } from '../../../ultis/SHelper/helperFunctions';

import avatarPlaceholder from '../../../assets/images/portrait_placeholder.png';

class ReviewsComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        this.loadTaskListFunc(1);
        this.loadJobListFunc(1);
    }

    // Task
    loadTaskListFunc(page) {
        let { onLoadReviewTaskDetailUser } = this.props;
        let { user } = this.props.HeaderReducer;

        onLoadReviewTaskDetailUser(page, 8, user.id_user);
    }

    handleTaskPagination(pageNum) {
        if (pageNum !== this.props.UserDetailReducer.currentTaskPage) {
            this.loadTaskListFunc(pageNum);
        }
    }

    renderTaskPagination(page, totalPage) {
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
                            this.handleTaskPagination(e);
                        }}
                    >
                        {e}
                    </div>
                </li>
            );
        }
        return content;
    }

    // Job
    loadJobListFunc(page) {
        let { onLoadReviewJobDetailUser } = this.props;
        let { user } = this.props.HeaderReducer;

        onLoadReviewJobDetailUser(page, 8, user.id_user);
    }

    handleJobPagination(pageNum) {
        if (pageNum !== this.props.UserDetailReducer.currentJobPage) {
            this.loadJobListFunc(pageNum);
        }
    }

    renderJobPagination(page, totalPage) {
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
                            this.handleJobPagination(e);
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
                    <li key={index}>
                        <div className='row mb-2 pb-2 mx-1 border-bottom border-dark'>
                            <div className='col-3 profile-img'>
                                <img src={getImageSrc(null, avatarPlaceholder)} style={{ width: '50px', height: '50px' }}></img>
                            </div>

                            <div className='col-9'>
                                <h4>{e.title}</h4>
                                <div className='h5'>{e.fullname}</div>
                            </div>
                            <div className='col'>
                                <div className='h5'>{e.email}</div>
                                <div className='font-weight-bold'>Đánh giá:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{e.rating_fromEmployee}/5 <i className="icon-material-outline-star text-warning"></i></div>
                                <div className='font-weight-bold'>Nội dung phản hồi:</div>
                                <p>{e.feedback_fromEmployee}</p>
                            </div>
                        </div>
                    </li>
                )
            })
        }
        else {
            content.push(
                <li key={0}>
                    <div className='mb-2 pb-2 mx-1'>
                        Bạn hiện vẫn chưa có phản hồi nào !!!
                    </div>
                </li>
            )
        }

        return content;
    }

    render() {
        let { jobs, totalJob, currentJobPage, isLoadingJobReview, tasks, totalTask, currentTaskPage, isLoadingTaskReview } = this.props.UserDetailReducer;
        let totalTaskPage = Math.ceil(totalTask / 8);
        let totalJobPage = Math.ceil(totalJob / 8);

        return (
            <div className="dashboard-content-inner">
                {/* Dashboard Headline */}
                <div className="dashboard-headline">
                    <h3>Trang phản hồi</h3>
                </div>
                <p>( Để có thể viết phản hồi về người khác khi đã kết thúc công việc, vui lòng vào các trang danh sách công việc tương ứng )</p>
                {/* Row */}
                <div className="row">
                    {/* Dashboard Box */}
                    <div className="col-xl-6">
                        <div className="dashboard-box margin-top-0">
                            {/* Headline */}
                            <div className="headline">
                                <h3><i className="icon-material-outline-business" /> Phản hồi từ người thuê</h3>
                            </div>
                            <div className="content">
                                <ul className="dashboard-box-list">
                                    {isLoadingTaskReview ? (<div className="loading" key={1}>
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>) : this.renderReview(tasks)}
                                </ul>
                            </div>
                        </div>
                        {(
                            (totalTask === 0 || isLoadingTaskReview)
                                ?
                                ''
                                :
                                <nav className='mt-1' aria-label="...">
                                    <ul className="pagination">
                                        <li className={"pagination-item " + ((currentTaskPage === 1 || totalTaskPage - currentTaskPage < 3) && "d-none")}>
                                            <div className="cursor-pointer page-link" onClick={() => { this.handleTaskPagination(currentTaskPage - 1); }}>
                                                <i className="icon-material-outline-keyboard-arrow-left" />
                                            </div>
                                        </li>
                                        {this.renderTaskPagination(currentTaskPage, totalTaskPage)}
                                        <li className={"pagination-item " + (totalTaskPage - currentTaskPage < 3 && "d-none")}>
                                            <div className="cursor-pointer page-link" onClick={() => { this.handleTaskPagination(currentTaskPage + 1); }}>
                                                <i className="icon-material-outline-keyboard-arrow-right" />
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                        )}
                    </div>



                    {/* Dashboard Box */}
                    <div className="col-xl-6">
                        <div className="dashboard-box margin-top-0">
                            {/* Headline */}
                            <div className="headline">
                                <h3><i className="icon-material-outline-face" /> Phản hồi từ người nhân việc</h3>
                            </div>
                            <div className="content">
                                <ul className="dashboard-box-list">
                                    {isLoadingJobReview ? (<div className="loading" key={1}>
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>) : this.renderReview(jobs)}
                                </ul>
                            </div>
                        </div>
                        {(
                            (totalJob === 0 || isLoadingJobReview)
                                ?
                                ''
                                :
                                <nav className='mt-1' aria-label="...">
                                    <ul className="pagination">
                                        <li className={"pagination-item " + ((currentJobPage === 1 || totalJobPage - currentJobPage < 3) && "d-none")}>
                                            <div className="cursor-pointer page-link" onClick={() => { this.handleJobPagination(currentJobPage - 1); }}>
                                                <i className="icon-material-outline-keyboard-arrow-left" />
                                            </div>
                                        </li>
                                        {this.renderJobPagination(currentJobPage, totalJobPage)}
                                        <li className={"pagination-item " + (totalJobPage - currentJobPage < 3 && "d-none")}>
                                            <div className="cursor-pointer page-link" onClick={() => { this.handleJobPagination(currentJobPage + 1); }}>
                                                <i className="icon-material-outline-keyboard-arrow-right" />
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                        )}
                    </div>
                </div>
                {/* Row / End */}
            </div>
        )
    }
}

// === Container

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadReviewTaskDetailUser: (page, take, employee) => {
            dispatch(getReviewTaskUserDetail(page, take, employee));
        },
        onLoadReviewJobDetailUser: (page, take, employer) => {
            dispatch(getReviewJobUserDetail(page, take, employer));
        },
    }
}

const Reviews = withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewsComponent));
export default Reviews;