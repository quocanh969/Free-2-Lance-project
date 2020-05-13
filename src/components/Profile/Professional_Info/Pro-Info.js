import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import HistoryJobs from "./HistoryJobs";
import YourJobs from "./YourJobs";
import ApplyingJobs from "./ApplyingJobs";

class ProInfoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
    };
  }

  render() {
    return (
      <div>
        {/* General Statistic */}
        <div className='row'>
          <div className='col-4'>
            <div className='rounded px-4 pt-5 text-center' style={{ height: '150px' }}>
              <div className='font-size-50 mb-4'>0</div>
              <h4>Số công việc đang thực hiện</h4>
            </div>
          </div>
          <div className='col-4'>
            <div className='rounded px-4 pt-5 text-center' style={{ height: '150px' }}>
              <div className='font-size-50 mb-4'>0</div>
              <h4>Số công việc đang ứng tuyển</h4>
            </div>
          </div>
          <div className='col-4'>
            <div className='rounded px-4 pt-5 text-center' style={{ height: '150px' }}>
              <div className='font-size-50 mb-4'>0</div>
              <h4>Số công việc đã hoàn thành</h4>
            </div>
          </div>
        </div>

        {/* Tab Component */}
        <ul className="nav nav-tabs mt-4">
          <li className="nav-item">
            <div className={"nav-link cursor-pointer" + (this.state.tab === 1 ? ' active' : '')}
              onClick={() => { this.setState({ tab: 1 }) }}>
              Công việc hiện tại
              </div>
          </li>
          <li className="nav-item">
            <div className={"nav-link cursor-pointer" + (this.state.tab === 2 ? ' active' : '')}
              onClick={() => { this.setState({ tab: 2 }) }}>
              Công việc đang ứng tuyển
            </div>
          </li>
          <li className="nav-item">
            <div className={"nav-link cursor-pointer" + (this.state.tab === 3 ? ' active' : '')}
              onClick={() => { this.setState({ tab: 3 }) }}>
              Lịch sử công việc
              </div>
          </li>          
        </ul>

        <div className="tab-component rounded px-3 py-4">
          {this.state.tab === 1 ? (
            <YourJobs></YourJobs>
          ) : this.state.tab === 2 ? (
            <ApplyingJobs></ApplyingJobs>
          ) : (
                <HistoryJobs></HistoryJobs>
              )}
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

const ProInfo = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProInfoComponent)
);
export default ProInfo;
