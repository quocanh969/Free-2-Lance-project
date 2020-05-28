import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";

class DashboardComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    let calendarEl = document.getElementById("full_calendar");

    var calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin],
    });

    calendar.render();
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

        <div>
          <div> Kế hoạch</div>
          <div className="row">
            <div className="col-xl-6">
              <div id="full_calendar"></div>
            </div>
            <div className="col-xl-6">Ngày hôm nay làm gì</div>
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

const Dashboard = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DashboardComponent)
);
export default Dashboard;
