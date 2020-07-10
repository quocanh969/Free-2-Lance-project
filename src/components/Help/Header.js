import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";

import Logo2 from "../../assets/images/logo4.png";
import UserAvatarPlaceholder from "../../assets/images/portrait_placeholder.png";
import JobImgePlaceholder from "../../assets/images/company-logo-placeholder-alt.png";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";

import { loadTopics, loadAreas, loadTags } from "../../actions/Home";
import { loadJobList } from "../../actions/Job";
import { updateUserState } from "../../actions/Account";
import { history } from "../../ultis/history/history";
import { getImageSrc } from "../../ultis/SHelper/helperFunctions";
const firebase = require("firebase");

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTopicHover: false,
      isCurrentTop: false,
      
      email: localStorage.getItem("item"),
      
      isReadNotify: true,
      notifications: [],
      isNotiLoading: true,
      
      unreadMessage: 0,
      messages: [],
      isMessLoading: true,
    };

    // window.onscroll = this.handleScroll();
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount() {
    let { onUpdateUser, onLoadTopics, onLoadAreas, onLoadTags } = this.props;

    // kiêm tra local storage
    if (localStorage.getItem("token")) {
      onUpdateUser();
    }

    // loadTopics
    onLoadTopics();
    onLoadAreas();
    onLoadTags();
  }

  componentDidMount = async () => {
    window.addEventListener("scroll", this.handleScroll);
    let email = localStorage.getItem('email');
    if (email) {
      console.log('co load nha');
      const notifications = await
        firebase
          .firestore()
          .collection('notifications')
          .doc(email)
          .get()

      await firebase
        .firestore()
        .collection('chats')
        .where('users', 'array-contains', email)
        .onSnapshot(async res => {
          const chats = res.docs.map(_doc => _doc.data());
          let rs = [];
          let unreadMessage = 0;
          console.log('chats1234:', chats)
          chats.forEach(element => {
            console.log(element);
            let realPerson = element.img.filter(el => el.email !== email);
            if (realPerson.length > 0) {
              rs.push({
                fullname: realPerson[0].fullname,
                avatarImg: getImageSrc(realPerson[0].img),
                message: element.messages.lenght > 0 ? element.messages[element.messages.length - 1].message.substring(0, 30) : ''
              })

              if (element.messages.length > 0) {
                if (element.messages[element.messages.length - 1].sender !== email && !element.receiverHasRead) {
                  unreadMessage++;
                }
              }
            }

          });
          await this.setState({
            email: email,
            messages: rs.reverse(),
            unreadMessage,
            isMessLoading: false,
          });
        })

      if (!notifications.exists) {
        firebase
          .firestore()
          .collection('notifications')
          .doc(email)
          .set({
            email: email,
            listNotify: [],
            isRead: true
          })
        console.log('flag noti not exists');
        let {onFailureLoadNoti} = this.props;
        onFailureLoadNoti();
      }
      else {
        console.log('flag noti exists');
        firebase
          .firestore()
          .collection('notifications')
          .where('email', '==', email)
          .onSnapshot(async res => {
            const data = res.docs.map(_doc => _doc.data());
            //console.log(data);
            let {onSuccessLoadNoti} = this.props;
            await onSuccessLoadNoti(data[0].isRead, data[0].listNotify.reverse());
          })
      }
    }
  }

  componentDidUpdate() { }

  componentWillReceiveProps() {
    this.handleScroll();
  }

  handleScroll() {
    if (
      window.scrollY === 0 &&
      (this.props.history.location.pathname === "/" ||
        this.props.history.location.pathname === "/search")
    ) {
      this.setState({ isCurrentTop: true });
    } else {
      if (this.state.isCurrentTop === true) {
        this.setState({ isCurrentTop: false });
      }
    }
  }

  handleLogOut() {
    let { onLogOut } = this.props;
    localStorage.clear();
    onLogOut();
    history.push("/login");
    // window.location.replace('/login');
  }

  // handleTopicNavClick(e, topic) {
  //   let currentTopic = Number.parseInt(this.props.match.params.job_topic);
  //   console.log(currentTopic);
  //   console.log(topic);
  //   if (currentTopic !== topic) {
  //     let { onLoadJobByTopic } = this.props;
  //     onLoadJobByTopic({ job_topic: topic });
  //   } else {
  //     e.preventDefault();
  //   }
  // }

  sendReadNotfication = async () => {
    const { email } = this.state;
    if (email) {
      await firebase.firestore().collection("notifications").doc(email).update({
        isRead: true,
      });
    }
  };

  renderTopicsHeader() {
    let { jobTopic, isLoadingJobTopic } = this.props.GeneralReducer;
    if (isLoadingJobTopic) {
      return (<div className="loading" key={1}>
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>);
    }
    let content = [],
      count = 0;

    for (let e of jobTopic) {
      content.push(
        // <NavLink onClick={(element) => { this.handleTopicNavClick(element, e.id_jobtopic) }}
        <NavLink
          key={count}
          className="dropdown-item"
          to={"/job-list/topic=" + e.id_jobtopic}
        >
          {e.name}
        </NavLink>
      );
      count++;
    }

    return content;
  }

  renderMessageContent() {
    let content = [], count = 0;
    let { messages } = this.state;
    if (this.state.isMessLoading === true) {
      content.push(
        <div key={0} className="dropdown-item p-2 border-top border-secondary cursor-pointer text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
    }
    else if (messages.length === 0) {
      content.push(
        <div key={0} className="dropdown-item p-2 border-top border-secondary cursor-pointer text-center">
          Bạn hiện không có tin nhắn
        </div>
      )
    }
    else {
      for (let e of messages) {
        content.push(
          <NavLink
            key={count}
            to="/dashboard/tab=2"
            className="dropdown-item px-1 border-top border-secondary"
          >
            <div className="container-fluid px-3">
              <div className="row p-1">
                {/* avatar */}
                <div className="col-2 p-0">
                  <img
                    className="rounded-circle"
                    style={{ height: "auto" }}
                    src={e.avatarImg}
                  ></img>
                </div>
                {/* message */}
                <div className="col-10 px-3">
                  <div className="text-293FE4 font-weight-bold">{e.fullname}</div>
                  <div
                    className="text-secondary d-inline-block text-truncate"
                    style={{ width: "200px" }}
                  >
                    {e.message}
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        );
        count++;
      }
    }
    return content;
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

  renderNotiContent() {
    let content = [], count = 0;
    const { notifications, isReadNotify, isNotiLoading } = this.props.HeaderReducer;
    // console.log("isRead:", isRead);
    if (isNotiLoading === true) {
      content.push(
        <div key={0} className="dropdown-item p-2 border-top border-secondary cursor-pointer text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
    }
    else if (notifications.length === 0) {
      content.push(
        <div key={0} className="dropdown-item p-2 border-top border-secondary cursor-pointer text-center">
          Bạn hiện không có thông báo
        </div>
      )
    }
    else {
      for (let e of notifications) {
        content.push(
          <div key={count} className="dropdown-item px-1 border-top border-secondary cursor-pointer">
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

  renderUserLoginContent(user) {
    let userAvatar = getImageSrc(user.avatarImg, UserAvatarPlaceholder);
    const { isReadNotify, unreadMessage } = this.state;
    // console.log("isReadNotify:", isReadNotify);
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown mx-0 px-0 pt-3 pb-2 mx-2">
          <button
            id="NotiMenuDropdown"
            className="nav-link-header nav-link dropdown-toggle px-0 pt-1 pb-0"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={this.sendReadNotfication}
          >
            {" "}
            <Badge
              color="secondary"
              badgeContent=" "
              variant="dot"
              invisible={isReadNotify}
            >
              <NotificationsIcon />
              {/* <i className="icon-material-baseline-notifications-none  mx-0 p-2 font-size-25"></i> */}

              {/* <button
        id="NotiMenuDropdown"
        className="nav-link-header nav-link dropdown-toggle px-0 pt-1 pb-0"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
      </button> */}
            </Badge>
          </button>

          <div
            className="shadow dropdown-menu dropdown-menu-right mt-1"
            style={{ width: "300px" }}
            aria-labelledby="NotiMenuDropdown"
          >
            <h5 className="dropddown-header font-weight-bold mb-2 px-2" key={1}>
              Notifications
            </h5>
            <div className="header-menu">{this.renderNotiContent()}</div>
          </div>
        </li>
        <li className="nav-item dropdown mx-0 px-0 pt-3 pb-2 ml-2 mr-3">
          <button
            className="nav-link nav-link-header mt-0 dropdown-toggle px-0 pt-1 pb-0"
            id="MessMenuDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <Badge color="secondary" badgeContent={unreadMessage}>
              {/* <i className="icon-material-baseline-mail-outline mt-0 mx-0 p-2 font-size-25"></i> */}
              <MailIcon />
            </Badge>
          </button>
          <div
            className="shadow dropdown-menu dropdown-menu-right mt-1"
            style={{ width: "300px" }}
            aria-labelledby="MessMenuDropdown"
          >
            <h5 className="dropddown-header font-weight-bold mb-2 px-2" key={1}>
              Messages
            </h5>
            <div className="header-menu">{this.renderMessageContent()}</div>
          </div>
        </li>
        <li
          className={
            "nav-item dropdown pt-3 pb-2 pr-3 pl-4 mr-2 border-left " +
            (this.state.isCurrentTop ? "border-light" : "border-secondary")
          }
        >
          <a
            className="nav-link dropdown-toggle rounded-pill bg-secondary mt-1 pl-2 pr-3 py-1"
            href="#"
            id="UserMenuDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img height="25" className="rounded-circle" src={userAvatar}></img>
            &nbsp;&nbsp;
            <span style={{ color: "white" }}>{user.fullname}</span>
          </a>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="UserMenuDropdown"
          >
            <NavLink className="dropdown-item" to="/dashboard/tab=1">
              <i className="icon-material-outline-dashboard"></i>
              &nbsp;&nbsp; Quản lý thông tin chung
            </NavLink>
            <NavLink className="dropdown-item" to="/dashboard/tab=4">
              <i className="icon-material-outline-business-center"></i>
              &nbsp;&nbsp; Quản lý đăng việc
            </NavLink>
            {user.isBusinessUser ? (
              ""
            ) : (
                <NavLink className="dropdown-item" to="/dashboard/tab=8">
                  <i className="icon-line-awesome-tasks"></i>
                &nbsp;&nbsp; Quản lý việc làm
                </NavLink>
              )}

            <NavLink className="dropdown-item" to="/dashboard/tab=11">
              <i className="icon-material-outline-account-circle"></i>
              &nbsp;&nbsp; Tài khoản của bạn
            </NavLink>
            <div className="dropdown-divider" />
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                this.handleLogOut();
              }}
            >
              <i className="icon-line-awesome-sign-out"></i>
              &nbsp;&nbsp; Đăng xuất
            </a>
          </div>
        </li>
      </ul>
    );
  }

  renderUserNotLoginContent() {
    return (
      <ul className="navbar-nav ml-auto my-0 py-0">
        <li
          className={
            "nav-item pt-2 pb-2 pr-3 pl-4 border-left " +
            (this.state.isCurrentTop ? "border-light" : "border-secondary")
          }
        >
          <NavLink
            className={
              "btn font-weight-bold border-width-3 my-2 px-2 py-1 " +
              (this.state.isCurrentTop
                ? " btn-outline-light"
                : " btn-outline-dark")
            }
            to="/register"
          >
            <i className="icon-feather-lock font-weight-bold pt-2"></i>
            &nbsp;Đăng ký
          </NavLink>
        </li>
        <li className="nav-item pt-2 pb-2 px-3 mr-3">
          <NavLink
            className={
              "btn font-weight-bold border-width-3 my-2 px-2 py-1 " +
              (this.state.isCurrentTop
                ? " btn-outline-light"
                : " btn-outline-dark")
            }
            to="/login"
          >
            <i className="icon-line-awesome-sign-in font-weight-bold pt-2"></i>
            &nbsp;Đăng nhập
          </NavLink>
        </li>
      </ul>
    );
  }

  render() {
    let { user, isLoadingUser } = this.props.HeaderReducer;
    return (
      <nav
        className={
          "navbar fixed-top navbar-expand-lg pl-5 pr-3 pr-0 py-0 border-bottom " +
          (this.state.isCurrentTop
            ? "border-light bg-transparent"
            : "border-secondary bg-light")
        }
        onScroll={() => {
          this.handleScroll();
        }}
      >
        <NavLink to="/" className="navbar-brand mr-4 pt-3">
          {/* <img src={Logo2} className='logo-brand'></img> */}
          <span className="font-weight-bold">
            <span className="text-primary">FREE</span>
            <span className="text-danger">2</span>
            <span
              className={this.state.isCurrentTop ? "text-white" : "text-dark"}
            >
              LANCE
            </span>
          </span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse my-0 py-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item mx-2 pt-3 pb-2">
              <NavLink className="nav-link nav-link-header" to="/">
                <div>Trang chủ</div>
              </NavLink>
            </li>
            <li className="nav-item mx-2 pt-3 pb-2">
              <NavLink className="nav-link nav-link-header" to="/search">
                <div>Tìm việc</div>
              </NavLink>
            </li>
            <li
              onMouseLeave={() => {
                this.setState({ isTopicHover: false });
              }}
              className={
                "nav-item dropdown mx-2 pt-3 pb-2 " +
                (this.state.isTopicHover ? "show" : "")
              }
            >
              <NavLink
                className="nav-link-header nav-link dropdown-toggle"
                to="/job-list"
                id="navbarDropdown"
                onMouseEnter={() => {
                  this.setState({ isTopicHover: true });
                }}
              >
                <div>Chủ đề</div>
              </NavLink>
              <div
                className={
                  "dropdown-menu mt-0 header-menu " +
                  (this.state.isTopicHover ? "show" : "")
                }
                aria-labelledby="navbarDropdown"
              >
                {this.renderTopicsHeader()}
              </div>
            </li>
            <li className="nav-item mx-2 pt-3 pb-2">
              <NavLink className="nav-link nav-link-header" to="/contact">
                <div>Liên lạc</div>
              </NavLink>
            </li>
          </ul>
          {isLoadingUser ? (<div className="loading" key={1}>
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>) : (user === null
            ? this.renderUserNotLoginContent()
            : this.renderUserLoginContent(user))}
        </div>
      </nav>
    );
  }
}

// === Container

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateUser: () => {
      dispatch(updateUserState());
    },
    onLogOut: () => {
      dispatch({
        type: "USER_LOG_OUT",
      });
    },
    onLoadTopics: () => {
      dispatch(loadTopics());
    },
    onLoadAreas: () => {
      dispatch(loadAreas());
    },
    onLoadTags: () => {
      dispatch(loadTags());
    },
    onLoadJobByTopic: (query) => {
      dispatch(loadJobList(1, 8, 2, query));
    },
    onFailureLoadNoti: () => {
      dispatch({
          type: 'LOAD_NOTI_FAILURE',
        })      
    },
    onSuccessLoadNoti: (isReadNotifyList, notiList) => {
      dispatch({
          type: 'LOAD_NOTI_SUCCESS',
          isReadNotifyList,
          notiList,
        })
    },
  };
};

const Header = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)
);
export default Header;
