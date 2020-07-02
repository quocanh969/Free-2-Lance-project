import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { prettierNumber, getImageSrc } from '../../../ultis/SHelper/helperFunctions';

import avatarPlaceholder from '../../../assets/images/portrait_placeholder.png';

class TransactionComponent extends Component {

    constructor(props) {
        super(props);
    }


    handlePagination(pageNum) {
        // if (pageNum !== this.props.EmployerReducer.currentApplyingPage) {
            //window.scrollTo(0,0);
        //     this.loadJobListFunc(pageNum);
        // }
    }

    renderTransactionList(transaction) {
        let content = [];

        content.push(
            <li key={0}>
                <div className='row'>
                    <div className='col-2'>
                        <img src={getImageSrc(null, avatarPlaceholder)}></img>
                    </div>
                    <div className='col-10 row'>
                        <div className='col-6'>
                            <div><span className='text-primary font-weight-bold'>Người thuê:</span>&nbsp;John Cena</div>
                            <div><span className='text-primary font-weight-bold'>Email:</span>&nbsp;cena@gmail.com</div>
                            <div><span className='text-primary font-weight-bold'>Sđt:</span>&nbsp;0123456789</div>
                        </div>
                        <div className='col-6'>
                            <div className="card text-white bg-primary">
                                <div className="card-body text-center">
                                    <h2 className='text-white d-inline'>{prettierNumber(1000000)}</h2>
                                    <span>&nbsp;&nbsp;VNĐ</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-12'><span className='text-primary font-weight-bold'>Mã công việc:</span>&nbsp;123</div>
                        <div className='col-12'><span className='text-primary font-weight-bold'>Công việc:</span>&nbsp;Đấm nhau</div>
                    </div>                    
                </div>
                
            </li>
        )

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
        let { totalApplyingJobs, currentApplyingPage } = {totalApplyingJobs: 8, currentApplyingPage: 1};
        let totalPage = Math.ceil(totalApplyingJobs / 4);

        return (
            <div className="dashboard-content-inner">
                {/* Dashboard Headline */}
                <div className="dashboard-headline">
                    <h3>Danh sách các nguồn thu từ công việc</h3>
                </div>
                <p>
                ( Vui lòng đến trung tâm CSKH của Free2Lance để có thể rút tiền công )
                </p>
                {/* Row */}
                <div className="card text-white bg-primary mb-3">
                    <div className="card-header">Tổng doanh thu</div>
                    <div className="card-body row">                        
                        <div className="col-4 text-right">Tài khoản hiện tại:</div>
                        <div className="col text-white">
                            <h2 className='text-white d-inline'>{prettierNumber(20000000)}</h2>
                            <span>&nbsp;&nbsp;VNĐ</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* Dashboard Box */}
                    <div className="col-xl-12">
                        <div className="dashboard-box margin-top-0">
                            {/* Headline */}
                            <div className="headline">
                                <h3>
                                    <i className="icon-feather-list" /> Các nguồn thu hiện tại
                                 </h3>
                            </div>
                            <div>
                                <ul className="dashboard-box-list">
                                    {this.renderTransactionList([])}
                                </ul>
                            </div>
                        </div>

                        {totalApplyingJobs === 0 ? (
                            ""
                        ) : (
                                <div className="pagination-container margin-top-30 margin-bottom-60">
                                    <nav className="pagination">
                                        <ul>
                                            <li
                                                className={
                                                    "pagination-arrow " +
                                                    ((currentApplyingPage === 1 ||
                                                        totalPage - currentApplyingPage < 3) &&
                                                        "d-none")
                                                }
                                            >
                                                <div
                                                    className="cursor-pointer"
                                                    onClick={() => {
                                                        this.handlePagination(currentApplyingPage - 1);
                                                    }}
                                                >
                                                    <i className="icon-material-outline-keyboard-arrow-left" />
                                                </div>
                                            </li>
                                            {this.renderPagination(currentApplyingPage, totalPage)}
                                            <li
                                                className={
                                                    "pagination-arrow " +
                                                    (totalPage - currentApplyingPage < 3 && "d-none")
                                                }
                                            >
                                                <div
                                                    className="cursor-pointer"
                                                    onClick={() => {
                                                        this.handlePagination(currentApplyingPage + 1);
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
        )
    }
}

// Container
const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const Transaction = withRouter(connect(mapStateToProps, mapDispatchToProps)(TransactionComponent));
export default Transaction;