import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class TasksDoneComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div className="dashboard-content-inner">
                {/* Dashboard Headline */}
                <div className="dashboard-headline">
                    <h3>Manage Tasks</h3>
                    {/* Breadcrumbs */}
                    <nav id="breadcrumbs" className="dark">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Dashboard</a></li>
                            <li>Manage Tasks</li>
                        </ul>
                    </nav>
                </div>
                {/* Row */}
                <div className="row">
                    {/* Dashboard Box */}
                    <div className="col-xl-12">
                        <div className="dashboard-box margin-top-0">
                            {/* Headline */}
                            <div className="headline">
                                <h3><i className="icon-material-outline-assignment" /> My Tasks</h3>
                            </div>
                            <div className="content">
                                <ul className="dashboard-box-list">
                                    <li>
                                        {/* Job Listing */}
                                        <div className="job-listing width-adjustment">
                                            {/* Job Listing Details */}
                                            <div className="job-listing-details">
                                                {/* Details */}
                                                <div className="job-listing-description">
                                                    <h3 className="job-listing-title"><a href="#">Design a Landing Page</a> <span className="dashboard-status-button yellow">Expiring</span></h3>
                                                    {/* Job Listing Footer */}
                                                    <div className="job-listing-footer">
                                                        <ul>
                                                            <li><i className="icon-material-outline-access-time" /> 23 hours left</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Task Details */}
                                        <ul className="dashboard-task-info">
                                            <li><strong>3</strong><span>Bids</span></li>
                                            <li><strong>$22</strong><span>Avg. Bid</span></li>
                                            <li><strong>$15 - $30</strong><span>Hourly Rate</span></li>
                                        </ul>
                                        {/* Buttons */}
                                        <div className="buttons-to-right always-visible">
                                            <a href="dashboard-manage-bidders.html" className="button ripple-effect"><i className="icon-material-outline-supervisor-account" /> Manage Bidders <span className="button-info">3</span></a>
                                            <a href="#" className="button gray ripple-effect ico" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit" /></a>
                                            <a href="#" className="button gray ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" /></a>
                                        </div>
                                    </li>
                                    <li>
                                        {/* Job Listing */}
                                        <div className="job-listing width-adjustment">
                                            {/* Job Listing Details */}
                                            <div className="job-listing-details">
                                                {/* Details */}
                                                <div className="job-listing-description">
                                                    <h3 className="job-listing-title"><a href="#">Food Delivery Mobile Application</a></h3>
                                                    {/* Job Listing Footer */}
                                                    <div className="job-listing-footer">
                                                        <ul>
                                                            <li><i className="icon-material-outline-access-time" /> 6 days, 23 hours left</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Task Details */}
                                        <ul className="dashboard-task-info">
                                            <li><strong>3</strong><span>Bids</span></li>
                                            <li><strong>$3,200</strong><span>Avg. Bid</span></li>
                                            <li><strong>$2,500 - $4,500</strong><span>Fixed Price</span></li>
                                        </ul>
                                        {/* Buttons */}
                                        <div className="buttons-to-right always-visible">
                                            <a href="dashboard-manage-bidders.html" className="button ripple-effect"><i className="icon-material-outline-supervisor-account" /> Manage Bidders <span className="button-info">3</span></a>
                                            <a href="#" className="button gray ripple-effect ico" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit" /></a>
                                            <a href="#" className="button gray ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" /></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
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

    }
}

const TasksDone = withRouter(connect(mapStateToProps, mapDispatchToProps)(TasksDoneComponent));
export default TasksDone;