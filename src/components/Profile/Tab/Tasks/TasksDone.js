import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadFinishedJobsForApplicant } from '../../../../actions/Job';
import { getImageSrc, prettierDate, prettierNumber } from '../../../../ultis/SHelper/helperFunctions';

import UserAvatarPlaceholder from "../../../../assets/images/user-avatar-placeholder.png";
import { history } from '../../../../ultis/history/history';

class TasksDoneComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.loadJobList(1);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handlePagination(pageNum) {
        if (pageNum !== this.props.ApplicantReducer.currentFinishedPage) {
            this.loadJobListFunc(pageNum);
        }
    }

    loadJobList(page) {
        let { onLoadFinishedTask } = this.props;
        onLoadFinishedTask(page, 4, 0);
    }

    renderJobList() {
        let { finishedTasksList } = this.props.ApplicantReducer;
        let content = [];

        if (finishedTasksList.length > 0) {
            finishedTasksList.forEach((e, index) => {
                let avatar = getImageSrc(e.avatarImg, UserAvatarPlaceholder);
                content.push(
                    <li key={index}>
                        {/* Overview */}
                        <div className="freelancer-overview manage-candidates">
                            <div className="row">
                                {/* Avatar */}
                                <div className="col-2">
                                    <img src={avatar} alt="" />
                                </div>
                                {/* Name */}
                                <div className="col-10 text-left">
                                    <h3>{e.title}</h3>
                                    <h4 className='mt-3'><span className='font-weight-bold'>Người đăng: </span>{e.fullname}</h4>
                                    <div className='d-flex justify-content-between'>
                                        <span className="freelancer-detail-item"><span className='font-weight-bold'><i className="icon-feather-mail" />&nbsp;Email: </span> {e.email}</span>
                                        <span className="freelancer-detail-item"><span className='font-weight-bold'><i className="icon-feather-phone" />&nbsp;Liên lạc: </span> {e.dial}</span>
                                    </div>
                                    <h4 className='mt-3 row'>
                                        <div className='col'><span className='font-weight-bold'>Loại công việc: </span>{(!e.job_type ? 'Công việc thời vụ' : 'Công việc theo sản phẩm')}</div>
                                        <div className='col'><span className='font-weight-bold'>Mức lương: </span>{prettierNumber(e.salary)} VNĐ</div>
                                    </h4>
                                    <div style={{ width: '100vh' }} className='text-truncate'>
                                        <span className='font-weight-bold'>Mô tả: </span>
                                        <span>{e.description}</span>
                                    </div>
                                    <br></br>
                                    <div className="row">
                                        <div className='col'><span className='font-weight-bold'><i className="icon-material-outline-location-city" />Khu vực: </span>{e.province}</div>
                                        <div className='col'><span className='font-weight-bold'><i className="icon-material-outline-add-location" />Quận: </span>{e.district}</div>
                                    </div>
                                    <hr></hr>
                                    {(
                                        !e.job_type
                                            ?
                                            <div className='row'>
                                                <div className='col'><span className='font-weight-bold'><i className="icon-line-awesome-calendar-o" />Ngày bắt đầu công việc: </span>{prettierDate(e.start_date)}</div>
                                                <div className='col'><span className='font-weight-bold'><i className="icon-material-outline-date-range" />Ngày kết thúc công việc: </span>{prettierDate(e.end_date)}</div>
                                            </div>
                                            :
                                            <div className='row'>
                                                <div className='col'><span className='font-weight-bold'><i className="icon-material-outline-date-range" />Ngày kết thúc công việc: </span>{prettierDate(e.deadline)}</div>
                                            </div>
                                    )}
                                    {/* <span className='btn mx-2 p-2 bg-293FE4 text-white rounded'><i className='icon-feather-refresh-ccw'></i> Cập nhật thông tin</span> */}
                                    <div className='btn mt-3 p-2 bg-silver rounded w-100' onClick={() => { history.push(`/job-detail/${e.id_job}`) }}><i className="icon-line-awesome-clone" /> Xem chi tiết công việc</div>                                                                                
                                    
                                    <div className='mt-2 row'>
                                        <span className='btn col mx-2 p-2 bg-primary text-white rounded'><i className="icon-material-outline-rate-review" /> Xem phản hồi</span>
                                        <span className='btn col mx-2 p-2 bg-warning rounded'><i className="icon-material-outline-speaker-notes" /> Viết nhận xét</span>
                                        <span className='btn col mx-2 p-2 bg-danger text-white rounded'><i className="icon-line-awesome-warning" /> Báo cáo người thuê</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                );
            })
        }
        else {
            content.push(
                <div className='font-weight-bold p-5' key={0}>
                    Bạn hiện vẫn chưa hoàn thành công việc nào
                </div>
            )
        }

        return content;
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

    render() {
        let { totalFinishedTasks, currentFinishedPage } = this.props.ApplicantReducer;
        let totalPage = Math.ceil(totalFinishedTasks / 4);

        return (
            <div className="dashboard-content-inner">
                {/* Dashboard Headline */}
                <div className="dashboard-headline">
                    <h3>Các công việc bạn đã hoàn thành</h3>
                </div>
                {/* Row */}
                <div className="row">
                    {/* Dashboard Box */}
                    <div className="col-xl-12">
                        <div className="dashboard-box margin-top-0">
                            {/* Headline */}
                            <div className="headline">
                                <h3><i className="icon-feather-list" /> Danh sách các công việc</h3>
                            </div>
                            <div>
                                <ul className="dashboard-box-list">
                                    {this.renderJobList()}
                                </ul>
                            </div>
                        </div>
                        {(
                            totalFinishedTasks === 0
                                ?
                                ''
                                :
                                <div className="pagination-container margin-top-30 margin-bottom-60">
                                    <nav className="pagination">
                                        <ul>
                                            <li className={"pagination-arrow " + ((currentFinishedPage === 1 || totalPage - currentFinishedPage < 3) && "d-none")}>
                                                <div className="cursor-pointer" onClick={() => { this.handlePagination(currentFinishedPage - 1); }}>
                                                    <i className="icon-material-outline-keyboard-arrow-left" />
                                                </div>
                                            </li>
                                            {this.renderPagination(currentFinishedPage, totalPage)}
                                            <li className={"pagination-arrow " + (totalPage - currentFinishedPage < 3 && "d-none")}>
                                                <div className="cursor-pointer" onClick={() => { this.handlePagination(currentFinishedPage + 1); }}>
                                                    <i className="icon-material-outline-keyboard-arrow-right" />
                                                </div>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
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
        onLoadFinishedTask: (page, take, isASC) => {
            dispatch(loadFinishedJobsForApplicant(page, take, isASC));
        }
    }
}

const TasksDone = withRouter(connect(mapStateToProps, mapDispatchToProps)(TasksDoneComponent));
export default TasksDone;