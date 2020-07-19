import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";

import JobImgePlaceholder from '../../../assets/images/company-logo-placeholder-alt.png'
import { getTransactionByUserId } from "../../../actions/UserDetail";
import { prettierNumber } from "../../../ultis/SHelper/helperFunctions";
import { history } from "../../../ultis/history/history";
import Swal from "sweetalert2";
import { loadUserStatistic } from "../../../actions/Account";

class DashboardComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    let {onGetStatistic} = this.props;
    onGetStatistic();

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
    if (notice) {
      switch (notice.type) {
        case 0: {
          return (
            <span className="text-wrap cursor-pointer" title='Nhấp vào để đến trang chi tiết công việc' onClick={() => { this.handleNoticeClick(notice) }}>
              <span className="text-293FE4">{notice.fullname}</span> đã từ chối
              bạn trong công việc{" "}
              <span className="text-293FE4">{notice.job}</span>
            </span>
          );
        }
        case 1: {
          return (
            <span title='Nhấp vào để đến trang chi tiết công việc' className="text-wrap cursor-pointer" onClick={() => { this.handleNoticeClick(notice) }}>
              Bạn đã được nhận công việc{" "}
              <span className="text-293FE4">{notice.job}</span> từ{" "}
              <span className="text-293FE4">{notice.fullname}</span>
            </span>
          );
        }
        case 2: {
          return (
            <span title='Nhấp vào để đến trang quản lý việc làm' className="text-wrap cursor-pointer" onClick={() => { this.handleNoticeClick(notice) }}>
              <span className="text-293FE4">{notice.job}</span> giữa bạn và{" "}
              <span className="text-293FE4">{notice.fullname}</span> đã kết thúc
            </span>
          );
        }
        case 3: {
          return (
            <span title='Nhấp vào để đến trang quản lý doanh thu' className="text-wrap cursor-pointer" onClick={() => { this.handleNoticeClick(notice) }}>
              <span className="text-293FE4"></span>Nhân Viên F2L đã thanh toán
              cho bạn về công việc{" "}
              <span className="text-293FE4">{notice.job}</span>
            </span>
          );
        }
        case 4: {
          return (
            <span className="text-wrap cursor-pointer">
              <span className="text-293FE4">{notice.job}</span> của
              <span className="text-293FE4">{notice.fullname}</span> đã dừng lại
            </span>
          );
        }
        case 5: {
          return (
            <span title='Nhấp vào để đến trang quản lý việc làm' className="text-wrap cursor-pointer" onClick={() => { this.handleNoticeClick(notice) }}>
              Công việc
              <span className="text-293FE4">{notice.job}</span> của&nbsp;
              <span className="text-293FE4">{notice.fullname}</span>&nbsp;đã chuyển sang giai đoạn thực hiện
            </span>
          );
        }
        case 6: {
          return (
            <span title='Nhấp vào để đến trang chi tiết việc làm' className="text-wrap cursor-pointer" onClick={() => { this.handleNoticeClick(notice) }}>
              Công việc&nbsp;
              <span className="text-293FE4">{notice.job}</span>&nbsp;của&nbsp;
              <span className="text-293FE4">{notice.fullname}</span>&nbsp;đã được khôi phục
            </span>
          );
        }
        case 7: {
          return (
            <span title='Nhấp vào để xem chi tiết' className="text-wrap cursor-pointer" onClick={() => { this.handleNoticeClick(notice) }}>
              Báo cáo của bạn về&nbsp;
              <span className="text-293FE4">{notice.employee}</span>&nbsp;trong công việc&nbsp;
              <span className="text-293FE4">{notice.job}</span>&nbsp;đã được xử lý
            </span>
          );
        }
        case 8: {
          return (
            <span title='Nhấp vào để xem chi tiết' className="text-wrap cursor-pointer" onClick={() => { this.handleNoticeClick(notice) }}>
              Yêu cầu sa thải và hoàn tiền công việc&nbsp;
              <span className="text-293FE4">{notice.job}</span>&nbsp;không được chấp thuận
            </span>
          );
        }
        case 9: {
          return (
            <span title='Nhấp vào để xem chi tiết' className="text-wrap cursor-pointer" onClick={() => { this.handleNoticeClick(notice) }}>
              Yêu cầu sa thải và hoàn tiền công việc&nbsp;
              <span className="text-293FE4">{notice.job}</span>&nbsp;đã được chấp thuận, bạn được hoàn
              50% tiền.
            </span>
          );
        }
        case 10: {
          return (
            <span className="text-wrap cursor-pointer">
              Công việc&nbsp;
              <span className="text-293FE4">{notice.job}</span>&nbsp;của&nbsp;
              <span className="text-293FE4">{notice.fullname}</span>&nbsp;đã bị gỡ hoàn toàn
            </span>
          );
        }
        case 11: {
          return (
            <span className="text-wrap cursor-pointer">
              Tài khoản của bạn đã được xác thực
            </span>
          );
        }
        case 12: {
          return (
            <span className="text-wrap cursor-pointer">
              Tài khoản của bạn chuyển sang trạng thái&nbsp;
              <span className="text-293FE4">Chờ xác thực</span>
            </span>
          );
        }
        case 13: {
          return (
            <span title='Nhấp vào vào trang quản lý thông tin' className="text-wrap cursor-pointer" onClick={() => { this.handleNoticeClick(notice) }}>
              Tài khoản của bạn được đánh giá là không đủ điều kiện để xác thực, vui lòng kiểm tra lại
            </span>
          );
        }
        case 14: {
          return (
            <span title='Nhấp vào để xem chi tiết công việc' className="text-wrap cursor-pointer" onClick={() => { this.handleNoticeClick(notice) }}>
              Công việc&nbsp;
              <span className="text-293FE4">{notice.job}</span>&nbsp;của&nbsp;
              <span className="text-293FE4">{notice.fullname}</span>&nbsp;vừa cập nhật thông tin
            </span>
          );
        }
        case 15: {
          return (
            <span title='Nhấp vào để chuyển đến trang quản lý công việc' className="text-wrap cursor-pointer" onClick={() => { this.handleNoticeClick(notice) }}>
              Nhân viên&nbsp;
              <span className="text-293FE4">{notice.fullname}</span>&nbsp;ứng tuyển vào công việc&nbsp;
              <span className="text-293FE4">{notice.job}</span>&nbsp;
            </span>
          );
        }
        case 16: {
          return (
            <span title='Nhấp vào để chuyển đến trang quản lý công việc' className="text-wrap cursor-pointer" onClick={() => { this.handleNoticeClick(notice) }}>
              Nhân viên&nbsp;
              <span className="text-293FE4">{notice.fullname}</span>&nbsp;bổ sung hồ sơ ứng tuyển vào công việc&nbsp;
              <span className="text-293FE4">{notice.job}</span>&nbsp;
            </span>
          );
        }
        case 17: {
          return (
            <span title='Nhấp vào để chuyển đến trang quản lý công việc' className="text-wrap cursor-pointer" onClick={() => { this.handleNoticeClick(notice) }}>
              Nhân viên&nbsp;
              <span className="text-293FE4">{notice.fullname}</span>&nbsp;rút ứng tuyển khỏi công việc&nbsp;
              <span className="text-293FE4">{notice.job}</span>&nbsp;
            </span>
          );
        }
        case 18: {
          return (
            <span title='Nhấp vào để xem chi tiết công việc' className="text-wrap cursor-pointer" onClick={() => { this.handleNoticeClick(notice) }}>
              <span className="text-293FE4">{notice.job}</span>&nbsp;của
              <span className="text-293FE4">{notice.fullname}</span>&nbsp;
              đã vào giai đoạn thực hiện và bạn không được tuyển
            </span>
          );
        }
        case 19: {
          return (
            <span title='Nhấp vào để xem chi tiết' className="text-wrap cursor-pointer" onClick={() => { this.handleNoticeClick(notice) }}>
              Bạn đã bị&nbsp;
              <span className="text-293FE4">{notice.fullname}</span>&nbsp;sa thải từ công việc&nbsp;
              <span className="text-293FE4">{notice.job}</span>&nbsp;và hoàn lại&nbsp;
              <span className="text-293FE4">{notice.refundPercentage}</span>&nbsp;tiền lương
            </span>
          );
        }
        case 20: {
          return (
            <span title='Nhấp vào để xem chi tiết' className="text-wrap cursor-pointer" onClick={() => { this.handleNoticeClick(notice) }}>
              Bạn đã nhận được khiếu nại trong công việc&nbsp;
              <span className="text-293FE4">{notice.job}</span>&nbsp;
            </span>
          );
        }
        case 21: {
          return (
            <span title='Nhấp vào để xem chi tiết' className="text-wrap cursor-pointer" onClick={() => { this.handleNoticeClick(notice) }}>
              Bạn đã nhận được yêu cầu sa thải trong công việc&nbsp;
              <span className="text-293FE4">{notice.job}</span>&nbsp;
              . Tạm thời bạn không cần tiếp tục thực hiện công việc này.
            </span>
          );
        }        
        case 22: {
          return (
            <span title='Nhấp vào để đến trang quản lý phản hồi' className="text-wrap cursor-pointer" onClick={() => { this.handleNoticeClick(notice) }}>
              Bạn đã nhận được phản hồi từ người thuê&nbsp;
              <span className="text-293FE4">{notice.fullname}</span>&nbsp;
            </span>
          );
        }        
        case 23: {
          return (
            <span title='Nhấp vào để đến trang quản lý phản hồi' className="text-wrap cursor-pointer" onClick={() => { this.handleNoticeClick(notice) }}>
              Bạn đã nhận được phản hồi từ người làm&nbsp;
              <span className="text-293FE4">{notice.fullname}</span>&nbsp;
            </span>
          );
        }        
        default:
          return "";
      }
    }

  }

  handleNoticeClick(notice) {
    if (notice) {
      switch (notice.type) {
        case 0: {
          history.push('/job-detail/' + notice.id_job);
          return;
        }
        case 1: {
          history.push('/job-detail/' + notice.id_job);
          return;
        }
        case 2: {
          history.push('/dashboard/tab=10');
          return;
        }
        case 3: {
          history.push('/dashboard/tab=14');
          return;
        }
        case 5: {
          history.push('/dashboard/tab=8');
          return;
        }
        case 6: {
          history.push('/job-detail/' + notice.id_job);
          return;
        }
        case 7: {
          Swal.fire({
            title: '<b>Chi tiết thông báo</b>',
            html:
              `<div>
                    <div class='my-1 py-2 text-left rounded bg-f0eee3'>
                      Báo cáo của bạn về&nbsp;<span class='font-weight-bold'>${notice.employee_name}</span>&nbsp;trong công việc
                      &nbsp;<span class='font-weight-bold'>${notice.job}</span>&nbsp;đã được xử lý bằng:
                    </div>
                    <div class='my-1 py-2 text-left rounded bg-f0eee3'>                      
                      <span class='font-weight-bold'>${notice.solution}</span>                  
                    </div>
                </div>`,
            showCloseButton: true,
            showConfirmButton: false,
            focusConfirm: false
          })
          return;
        }
        case 8: {
          Swal.fire({
            title: '<b>Chi tiết thông báo</b>',
            html:
              `<div>
                    <div class='my-1 py-2 text-left rounded bg-f0eee3'>
                      Người làm&nbsp;<span class='font-weight-bold'>${notice.employee_name}</span>&nbsp;đã ngưng dịch vụ trong công việc
                      &nbsp;<span class='font-weight-bold'>${notice.job}</span>.Yêu cầu hoàn tiền của bạn đã không được quản lý thông qua.
                    </div>
                    <div class='my-1 py-2 text-left rounded bg-f0eee3 text-danger'>
                      *Vui lòng liên hệ đến email: free2lance2020@gmail.com để nhận được những giải đáp từ phía quản lý.                 
                    </div>
                </div>`,
            showCloseButton: true,
            showConfirmButton: false,
            focusConfirm: false
          })
          return;
        }
        case 9: {
          Swal.fire({
            title: '<b>Chi tiết thông báo</b>',
            html:
              `<div>
                    <div class='my-1 py-2 text-left rounded bg-f0eee3'>
                      Người làm&nbsp;<span class='font-weight-bold'>${notice.employee_name}</span>&nbsp;đã ngưng dịch vụ trong công việc
                      &nbsp;<span class='font-weight-bold'>${notice.job}</span>.
                    </div>
                    <div class='my-1 py-2 text-left rounded bg-f0eee3'>
                      Phần trăm số tiền mà bạn được hoàn lại hoàn lại là&nbsp;
                      <span class='font-weight-bold'>${notice.refundPercentage}</span>%
                    </div>
                    <div class='my-1 py-2 text-left rounded bg-f0eee3 text-danger'>
                      *Vui lòng liên hệ đến email: free2lance2020@gmail.com để nhận được những giải đáp từ phía quản lý.                 
                    </div>
                </div>`,
            showCloseButton: true,
            showConfirmButton: false,
            focusConfirm: false
          })
          return;
        }
        case 13: {
          history.push('/dashboard/tab=11');
          return;
        }
        case 14: {
          history.push('/job-detail/' + notice.id_job);
          return;
        }
        case 15: {
          history.push('/dashboard/tab=4');
          return;
        }
        case 16: {
          history.push('/dashboard/tab=4');
          return;
        }
        case 17: {
          history.push('/dashboard/tab=4');
          return;
        }
        case 18: {
          history.push('/job-detail/' + notice.id_job);
          return;
        }
        case 19: {
          Swal.fire({
            title: '<b>Chi tiết thông báo</b>',
            html:
              `<div>
                    <div class='my-1 py-2 text-left rounded bg-f0eee3'>
                      Bạn đã bị ngưng dịch vụ làm thuê trong công việc
                      &nbsp;<span class='font-weight-bold'>${notice.job}</span>
                      &nbsp;và bị trừ đi
                      &nbsp;<span class='font-weight-bold'>${notice.leftover}</span>% số tiền trong thỏa thuận
                    </div>
                    <div class='my-1 py-2 text-left rounded bg-f0eee3 text-danger'>
                      *Vui lòng liên hệ đến email: free2lance2020@gmail.com để nhận được những giải đáp từ phía quản lý.                 
                    </div>
                </div>`,
            showCloseButton: true,
            showConfirmButton: false,
            focusConfirm: false
          })
          return;
        }
        case 20: {
          Swal.fire({
            title: '<b>Chi tiết thông báo</b>',
            html:
              `<div>
                    <div class='my-1 py-2 text-left rounded bg-f0eee3'>
                      Bạn nhận được 1 khiếu nại từ
                      &nbsp;<span class='font-weight-bold'>${notice.fullname}</span>
                      &nbsp;trong công việc
                      &nbsp;<span class='font-weight-bold'>${notice.job}</span>.
                    </div>
                    <div class='my-1 py-2 text-left rounded bg-f0eee3 text-danger'>
                      *Vui lòng gửi các thông tin, hình ảnh chứng thực giúp bảo vệ bạn đến email: free2lance2020@gmail.com để hổ trợ quản lý giải quyết vấn đề.
                    </div>
                </div>`,
            showCloseButton: true,
            showConfirmButton: false,
            focusConfirm: false
          })
          return;
        }
        case 21: {
          Swal.fire({
            title: '<b>Chi tiết thông báo</b>',
            html:
              `<div>
                    <div class='my-1 py-2 text-left rounded bg-f0eee3'>
                      Bạn nhận được 1 yêu cầu ngưng việc từ
                      &nbsp;<span class='font-weight-bold'>${notice.fullname}</span>
                      &nbsp;trong công việc
                      &nbsp;<span class='font-weight-bold'>${notice.job}</span>. Tạm
                      thời bạn không cần tiếp tục thực hiện công việc này.
                    </div>
                    <div class='my-1 py-2 text-left rounded bg-f0eee3 text-danger'>
                      *Vui lòng gửi các thông tin, hình ảnh chứng thức giúp bảo vệ bạn đến email: free2lance2020@gmail.com để hổ trợ quản lý giải quyết vấn đề.
                    </div>
                </div>`,
            showCloseButton: true,
            showConfirmButton: false,
            focusConfirm: false
          })
          return;
        }
        case 22: {
          history.push('/dashboard/tab=3');
          return;
        }
        case 23: {
          history.push('/dashboard/tab=3');
          return;
        }
        default:
          return;
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
          <div key={count} className="my-1 px-1 py-2 border-bottom   border-secondary cursor-pointer">
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
                <div><span className='text-primary font-weight-bold'>Mã công việc:</span>&nbsp;{e.id_job}</div>
                <div><span className='text-primary font-weight-bold'>Công việc:</span>&nbsp;{e.title}</div>
              </div>
              <div className='col-6'>
                <div className="card text-white bg-primary">
                  <div className="card-body text-center">
                    <h4 className='text-white d-inline'>{prettierNumber(e.amount * (100 - e.refund) / 100)}</h4>
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
    let { numOfTask, numOfJob, numOfTransaction } = this.props.UserDetailReducer;
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
              {(
                numOfTask === null
                ?
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                :
                <h4>{numOfTask}</h4>
              )}
              
            </div>
            <div
              className="fun-fact-icon"
              style={{ backgroundColor: "#F1FBF5" }}
            >
              <i
                className="icon-material-outline-gavel"
                style={{ color: "#36bd78" }}
              />
            </div>
          </div>
          <div className="fun-fact">
            <div className="fun-fact-text">
              <div>Công việc hiện tại</div>
              {(
                numOfJob === null
                ?
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                :
                <h4>{numOfJob}</h4>
              )}
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
              <div>Thanh toán chưa nhận</div>
              {(
                numOfTransaction === null
                ?
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                :
                <h4>{numOfTransaction}</h4>
              )}
            </div>
            <div
              className="fun-fact-icon"
              style={{ backgroundColor: "#FEF9EE" }}
            >
              <i
                className="icon-material-outline-monetization-on"
                style={{ color: "#efa80f" }}
              />
            </div>
          </div>
          {/* Last one has to be hidden below 1600px, sorry :( */}
          {/* <div className="fun-fact" data-fun-fact-color="#2a41e6">
            <div className="fun-fact-text">
              <span>This Month Views</span>
              <h4>987</h4>
            </div>
            <div className="fun-fact-icon">
              <i className="icon-feather-trending-up" />
            </div>
          </div> */}
        </div>

        <div className='mt-4'>
          <div className='row'>

            <div className='col-6'>
              <div className="dashboard-box px-5 pb-3 m-1">
                <div className="headline border-secondary">
                  <h3><i className="icon-line-awesome-calendar " />Thông báo</h3>
                </div>
                <div>
                  {this.renderNotification()}
                </div>
              </div>
            </div>

            <div className='col-6'>
              <div className="dashboard-box px-5 pb-3 m-1">
                <div className="headline border-secondary">
                  <h3><i className="icon-material-outline-monetization-on" />Thống kê hiện tại</h3>
                </div>
                <div className='mt-4'>
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
    },
    onGetStatistic: () => {
      dispatch(loadUserStatistic());
    },
  };
};

const Dashboard = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DashboardComponent)
);
export default Dashboard;
