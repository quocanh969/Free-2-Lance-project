import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";


class HistoryJobsComponent extends Component {
  render() {
    return (
      <div>
        HistoryJobs work !
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

const HistoryJobs = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HistoryJobsComponent)
);
export default HistoryJobs;
