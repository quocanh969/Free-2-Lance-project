import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { prettierNumber, getImageSrc } from '../../../ultis/SHelper/helperFunctions';

import avatarPlaceholder from '../../../assets/images/portrait_placeholder.png';
import { getTransactionByUserId } from '../../../actions/UserDetail';

class TransactionComponent extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.loadJobListFunc(1);
    }

    loadJobListFunc(page) {
        let { onLoadTransactionByUserId } = this.props;
        onLoadTransactionByUserId(page);
    }

    handlePagination(pageNum) {
        if (pageNum !== this.props.UserDetailReducer.currentTransactionPage) {
            window.scrollTo(0,0);
            this.loadJobListFunc(pageNum);
        }
    }

    renderTransactionList(transaction, isLoading) {
        let content = [];

        if (isLoading) {
            content.push(
                <li key={0}>
                    <div className='row my-3'>
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </li>
            );
        }
        else if(transaction.length > 0) {
            transaction.forEach((e, index) => {
                content.push(
                    <li key={index}>
                        <div className='row'>
                            <div className='col-2'>
                                <img src={getImageSrc(e.avatarImg, avatarPlaceholder)}></img>
                            </div>
                            <div className='col-10 row'>
                                <div className='col-6'>
                                    <div><span className='text-primary font-weight-bold'>Người thuê:</span>&nbsp;{e.fullname}</div>
                                    <div><span className='text-primary font-weight-bold'>Email:</span>&nbsp;{e.email}</div>
                                    <div><span className='text-primary font-weight-bold'>Sđt:</span>&nbsp;{e.dial}</div>
                                </div>
                                <div className='col-6'>
                                    <div className="card text-white bg-primary">
                                        <div className="card-body text-center">
                                            <h2 className='text-white d-inline'>{prettierNumber(e.amount * (100 - e.refund)/100)}</h2>
                                            <span>&nbsp;&nbsp;VNĐ</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12'><span className='text-primary font-weight-bold'>Mã công việc:</span>&nbsp;{e.id_job}</div>
                                <div className='col-12'><span className='text-primary font-weight-bold'>Công việc:</span>&nbsp;{e.title}</div>
                            </div>
                        </div>

                    </li>
                )
            })
        }
        else {
            content.push(
                <li key={0}>
                    <div className='row my-3 p-5'>
                        Danh sách thu nhập của bạn hiện đang rỗng !!!
                    </div>
                </li>
            );
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
        let { transaction, totalTransaction, currentTransactionPage, sum, isLoadingTransactionReview } = this.props.UserDetailReducer;
        let totalPage = Math.ceil(totalTransaction / 8);

        return (
            <div className="dashboard-content-inner">
                {/* Dashboard Headline */}
                <div className="dashboard-headline">
                    <h3>Danh sách các nguồn thu từ công việc</h3>
                </div>
                <h4 className='text-danger font-weight-bold'>
                    Bạn chỉ có thể nhậnn thanh toán cho giao dịch cách 3 ngày từ ngày kết thúc thực tế.
                </h4>
                <p>
                    ( Vui lòng đến trung tâm CSKH của Free2Lance để có thể rút tiền công )
                </p>
                {/* Row */}
                <div className="card text-white bg-primary mb-3">
                    <div className="card-header">Tổng doanh thu</div>
                    <div className="card-body row">
                        <div className="col-4 text-right">Tài khoản hiện tại:</div>
                        <div className="col text-white">
                            <h2 className='text-white d-inline'>{prettierNumber(sum)}</h2>
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
                                    {this.renderTransactionList(transaction, isLoadingTransactionReview)}
                                </ul>
                            </div>
                        </div>

                        {totalTransaction === 0 ? (
                            ""
                        ) : (
                                <div className="pagination-container margin-top-30 margin-bottom-60">
                                    <nav className="pagination">
                                        <ul>
                                            <li
                                                className={
                                                    "pagination-arrow " +
                                                    ((currentTransactionPage === 1 ||
                                                        totalPage - currentTransactionPage < 3) &&
                                                        "d-none")
                                                }
                                            >
                                                <div
                                                    className="cursor-pointer"
                                                    onClick={() => {
                                                        this.handlePagination(currentTransactionPage - 1);
                                                    }}
                                                >
                                                    <i className="icon-material-outline-keyboard-arrow-left" />
                                                </div>
                                            </li>
                                            {this.renderPagination(currentTransactionPage, totalPage)}
                                            <li
                                                className={
                                                    "pagination-arrow " +
                                                    (totalPage - currentTransactionPage < 3 && "d-none")
                                                }
                                            >
                                                <div
                                                    className="cursor-pointer"
                                                    onClick={() => {
                                                        this.handlePagination(currentTransactionPage + 1);
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
        onLoadTransactionByUserId: (page) => {
            dispatch(getTransactionByUserId(page, 8));
        }
    }
}

const Transaction = withRouter(connect(mapStateToProps, mapDispatchToProps)(TransactionComponent));
export default Transaction;