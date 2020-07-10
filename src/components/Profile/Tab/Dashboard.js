import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";

import JobImgePlaceholder from '../../../assets/images/company-logo-placeholder-alt.png'
import { getTransactionByUserId } from "../../../actions/UserDetail";
import { prettierNumber } from "../../../ultis/SHelper/helperFunctions";

class DashboardComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    let { currentTransactionPage } = this.props.UserDetailReducer;
    if (currentTransactionPage === 0) {
      let { onLoadTransactionByUserId } = this.props;
      onLoadTransactionByUserId();
    }
    // let calendarEl = document.getElementById("full_calendar");

    // var calendar = new Calendar(calendarEl, {
    //   plugins: [dayGridPlugin],
    // });

    // calendar.render();


  }

  renderNotice(notice) {
    console.log("notice:", notice);
    if (notice) {
      switch (notice.type) {
        case 0: {
          return (
            <span className="text-wrap">
              <span className="text-293FE4">{notice.fullname}</span> đã từ chối
              bạn trong công việc{" "}
              <span className="text-293FE4">{notice.job}</span>
            </span>
          );
        }
        case 1: {
          return (
            <span className="text-wrap">
              Bạn đã được nhận công việc{" "}
              <span className="text-293FE4">{notice.job}</span> từ{" "}
              <span className="text-293FE4">{notice.fullname}</span>
            </span>
          );
        }
        case 2: {
          return (
            <span className="text-wrap">
              <span className="text-293FE4">{notice.job}</span> giữa bạn và{" "}
              <span className="text-293FE4">{notice.fullname}</span> đã kết thúc
            </span>
          );
        }
        case 3: {
          return (
            <span className="text-wrap">
              <span className="text-293FE4"></span>Nhân Viên F2L đã thanh toán
              cho bạn về công việc{" "}
              <span className="text-293FE4">{notice.job}</span>
            </span>
          );
        }
        case 4: {
          return (
            <span className="text-wrap">
              <span className="text-293FE4">{notice.job}</span> của
              <span className="text-293FE4">{notice.fullname}</span> đã dừng lại
            </span>
          );
        }
        case 5: {
          return (
            <span className="text-wrap">
              Công việc
              <span className="text-293FE4">{notice.job}</span> của&nbsp;
              <span className="text-293FE4">{notice.fullname}</span>&nbsp;đã chuyển sang giai đoạn thực hiện
            </span>
          );
        }
        case 6: {
          return (
            <span className="text-wrap">
              Công việc&nbsp;
              <span className="text-293FE4">{notice.job}</span>&nbsp;của&nbsp;
              <span className="text-293FE4">{notice.fullname}</span>&nbsp;đã được khôi phục
            </span>
          );
        }
        case 7: {
          return (
            <span className="text-wrap">
              Báo cáo của bạn về&nbsp;
              <span className="text-293FE4">{notice.employee}</span>&nbsp;trong công việc&nbsp;
              <span className="text-293FE4">{notice.job}</span>&nbsp;đã được xử lý
            </span>
          );
        }
        case 8: {
          return (
            <span className="text-wrap">
              Yêu cầu dừng và hoàn tiền công việc&nbsp;
              <span className="text-293FE4">{notice.job}</span>&nbsp;không được chấp thuận
            </span>
          );
        }
        case 9: {
          return (
            <span className="text-wrap">
              Yêu cầu dừng và hoàn tiền công việc&nbsp;
              <span className="text-293FE4">{notice.job}</span>&nbsp;đã được chấp thuận, bạn được hoàn
              50% tiền.
            </span>
          );
        }
        case 10: {
          return (
            <span className="text-wrap">
              Công việc&nbsp;
              <span className="text-293FE4">{notice.job}</span>&nbsp;của&nbsp;
              <span className="text-293FE4">{notice.fullname}</span>&nbsp;đã bị gỡ hoàn toàn
            </span>
          );
        }
        case 11: {
          return (
            <span className="text-wrap">
              Tài khoản của bạn đã được xác thực
            </span>
          );
        }
        case 12: {
          return (
            <span className="text-wrap">
              Tài khoản của bạn chuyển sang trạng thái&nbsp;
              <span className="text-293FE4">Chờ xác thực</span>
            </span>
          );
        }
        case 13: {
          return (
            <span className="text-wrap">
              Tài khoản của bạn được đánh giá là không đủ điều kiện để xác thực, vui lòng kiểm tra lại
            </span>
          );
        }
        case 14: {
          return (
            <span className="text-wrap">
              Công việc&nbsp;
              <span className="text-293FE4">{notice.job}</span>&nbsp;của&nbsp;
              <span className="text-293FE4">{notice.fullname}</span>&nbsp;vừa cập nhật thông tin
            </span>
          );
        }
        case 15: {
          return (
            <span className="text-wrap">
              Nhân viên&nbsp;
              <span className="text-293FE4">{notice.fullname}</span>&nbsp;ứng tuyển vào công việc&nbsp;
              <span className="text-293FE4">{notice.job}</span>&nbsp;
            </span>
          );
        }
        case 16: {
          return (
            <span className="text-wrap">
              Nhân viên&nbsp;
              <span className="text-293FE4">{notice.fullname}</span>&nbsp;bổ sung hồ sơ ứng tuyển vào công việc&nbsp;
              <span className="text-293FE4">{notice.job}</span>&nbsp;
            </span>
          );
        }
        case 17: {
          return (
            <span className="text-wrap">
              Nhân viên&nbsp;
              <span className="text-293FE4">{notice.fullname}</span>&nbsp;rút ứng tuyển khỏi công việc&nbsp;
              <span className="text-293FE4">{notice.job}</span>&nbsp;
            </span>
          );
        }
        default:
          return "";
      }
    }

  }

  renderNotification() {
    let content = [], count = 0;
    const { notifications, isReadNotify, isNotiLoading } = this.props.HeaderReducer;
    // console.log("isRead:", isRead);
    if (isNotiLoading === true) {
      content.push(
        <div key={0} className="p-2 border-top border-secondary cursor-pointer text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
    }
    else if (notifications.length === 0) {
      content.push(
        <div key={0} className="p-2 border-top border-secondary cursor-pointer text-center">
          Bạn hiện không có thông báo
        </div>
      )
    }
    else {
      for (let e of notifications) {
        content.push(
          <div key={count} className="px-1 pt-3 border-top border-secondary cursor-pointer">
            <div className="container-fluid px-3">
              <div className="p-1">
                {this.renderNotice(e.content)}
              </div>
            </div>
          </div>
        );
        count++;
      }
    }

    return content;
  }

  renderIncome() {
    let { transaction, isLoadingTransactionReview } = this.props.UserDetailReducer;

    let content = [];

    if (isLoadingTransactionReview) {
      content.push(
        <div key={0}>
          <div className='row my-3'>
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      );
    }
    else if (transaction.length > 0) {
      transaction.forEach((e, index) => {
        content.push(
          <div key={index}>
            <div className='row'>
              <div className='col-6'>
                <div><span className='text-primary font-weight-bold'>Mã công việc::</span>&nbsp;{e.id_job}</div>
                <div><span className='text-primary font-weight-bold'>Công việc:</span>&nbsp;{e.title}</div>
              </div>
              <div className='col-6'>
                <div className="card text-white bg-primary">
                  <div className="card-body text-center">
                    <h2 className='text-white d-inline'>{prettierNumber(e.amount * (100 - e.refund) / 100)}</h2>
                    <span>&nbsp;&nbsp;VNĐ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
    }
    else {
      content.push(
        <div key={0}>
          <div className='row my-3 p-5'>
            Danh sách thu nhập của bạn hiện đang rỗng !!!
          </div>
        </div>
      );
    }

    return content;

  }

  render() {
    let { user } = this.props.HeaderReducer;
    return (
      <div className="dashboard-content-inner">
        {/* Dashboard Headline */}
        <div className="dashboard-headline">
          <h3>Xin chào, {user.fullname}!</h3>
        </div>

        {/* Fun Facts Container */}
        <div className="fun-facts-container">
          <div className="fun-fact">
            <div className="fun-fact-text">
              <span>Việc làm đang nhận</span>
              <h4>22</h4>
            </div>
            <div
              className="fun-fact-icon"
              style={{ backgroundColor: "#F1FBF5" }}
            >
              <i
                className="icon-material-outline-speaker-notes"
                style={{ color: "#36bd78" }}
              />
            </div>
          </div>
          <div className="fun-fact">
            <div className="fun-fact-text">
              <span>Công việc được đang thực hiện</span>
              <h4>4</h4>
            </div>
            <div
              className="fun-fact-icon"
              style={{ backgroundColor: "#FAEFF6" }}
            >
              <i
                className="icon-material-outline-business-center"
                style={{ color: "#b81b7f" }}
              />
            </div>
          </div>
          <div className="fun-fact">
            <div className="fun-fact-text">
              <span>Bài nhận xét</span>
              <h4>28</h4>
            </div>
            <div
              className="fun-fact-icon"
              style={{ backgroundColor: "#FEF9EE" }}
            >
              <i
                className="icon-material-outline-rate-review"
                style={{ color: "#efa80f" }}
              />
            </div>
          </div>
          {/* Last one has to be hidden below 1600px, sorry :( */}
          <div className="fun-fact" data-fun-fact-color="#2a41e6">
            <div className="fun-fact-text">
              <span>This Month Views</span>
              <h4>987</h4>
            </div>
            <div className="fun-fact-icon">
              <i className="icon-feather-trending-up" />
            </div>
          </div>
        </div>

        <div className='mt-4'>
          <div className='row'>

            <div className='col-6'>
              <div className="dashboard-box px-5 pb-3 m-1">
                <div className="headline">
                  <h3><i className="icon-line-awesome-calendar" />Thông báo</h3>
                </div>
                <div>
                  {this.renderNotification()}
                </div>
              </div>
            </div>

            <div className='col-6'>
              <div className="dashboard-box px-5 pb-3 m-1">
                <div className="headline">
                  <h3><i className="icon-material-outline-monetization-on" />Thống kê hiện tại</h3>
                </div>
                <div>
                  {this.renderIncome()}
                </div>
              </div>
            </div>

          </div>
          {/* <div className="row">

            <div className="col-xl-7 dashboard-box px-5 pb-3 ml-4 mr-2">   
              <div className="headline">
                <h3><i className="icon-line-awesome-calendar"/>Lịch trình cá nhân</h3>
              </div>
              <div id="full_calendar" className='mt-4' ></div>
            </div>
            <div className="col-xl-4 dashboard-box ml-2 mr-4">
              <div className="headline">
                <h3><i className="icon-line-awesome-list-ul"/>Công việc cụ thể</h3>
              </div>
            </div>
          
          </div> */}
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
    onLoadTransactionByUserId: () => {
      dispatch(getTransactionByUserId(1, 8));
    }
  };
};

const Dashboard = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DashboardComponent)
);
export default Dashboard;
