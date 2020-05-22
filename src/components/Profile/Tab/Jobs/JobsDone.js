import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class JobsDoneComponent extends Component {
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
                    <h3>Manage Jobs</h3>
                    {/* Breadcrumbs */}
                    <nav id="breadcrumbs" className="dark">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Dashboard</a></li>
                            <li>Manage Jobs</li>
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
                                <h3><i className="icon-material-outline-business-center" /> My Job Listings</h3>
                            </div>
                            <div className="content">
                                <ul className="dashboard-box-list">
                                    <li>
                                        {/* Job Listing */}
                                        <div className="job-listing">
                                            {/* Job Listing Details */}
                                            <div className="job-listing-details">
                                                {/* Logo */}
                                                {/* 											<a href="#" class="job-listing-company-logo">
												<img src="images/company-logo-05.png" alt="">
											</a> */}
                                                {/* Details */}
                                                <div className="job-listing-description">
                                                    <h3 className="job-listing-title"><a href="#">Frontend React Developer</a> <span className="dashboard-status-button green">Pending Approval</span></h3>
                                                    {/* Job Listing Footer */}
                                                    <div className="job-listing-footer">
                                                        <ul>
                                                            <li><i className="icon-material-outline-date-range" /> Posted on 10 July, 2018</li>
                                                            <li><i className="icon-material-outline-date-range" /> Expiring on 10 August, 2018</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Buttons */}
                                        <div className="buttons-to-right always-visible">
                                            <a href="dashboard-manage-candidates.html" className="button ripple-effect"><i className="icon-material-outline-supervisor-account" /> Manage Candidates <span className="button-info">0</span></a>
                                            <a href="#" className="button gray ripple-effect ico" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit" /></a>
                                            <a href="#" className="button gray ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" /></a>
                                        </div>
                                    </li>
                                    <li>
                                        {/* Job Listing */}
                                        <div className="job-listing">
                                            {/* Job Listing Details */}
                                            <div className="job-listing-details">
                                                {/* Details */}
                                                <div className="job-listing-description">
                                                    <h3 className="job-listing-title"><a href="#">Full Stack PHP Developer</a> <span className="dashboard-status-button yellow">Expiring</span></h3>
                                                    {/* Job Listing Footer */}
                                                    <div className="job-listing-footer">
                                                        <ul>
                                                            <li><i className="icon-material-outline-date-range" /> Posted on 28 June, 2018</li>
                                                            <li><i className="icon-material-outline-date-range" /> Expiring on 28 July, 2018</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Buttons */}
                                        <div className="buttons-to-right always-visible">
                                            <a href="dashboard-manage-candidates.html" className="button ripple-effect"><i className="icon-material-outline-supervisor-account" /> Manage Candidates <span className="button-info">3</span></a>
                                            <a href="#" className="button gray ripple-effect ico" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit" /></a>
                                            <a href="#" className="button gray ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" /></a>
                                        </div>
                                    </li>
                                    <li>
                                        {/* Job Listing */}
                                        <div className="job-listing">
                                            {/* Job Listing Details */}
                                            <div className="job-listing-details">
                                                {/* Details */}
                                                <div className="job-listing-description">
                                                    <h3 className="job-listing-title"><a href="#">Node.js Developer</a> <span className="dashboard-status-button red">Expired</span></h3>
                                                    {/* Job Listing Footer */}
                                                    <div className="job-listing-footer">
                                                        <ul>
                                                            <li><i className="icon-material-outline-date-range" /> Posted on 16 May, 2018</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Buttons */}
                                        <div className="buttons-to-right always-visible">
                                            <a href="dashboard-manage-candidates.html" className="button ripple-effect"><i className="icon-material-outline-supervisor-account" /> Manage Candidates <span className="button-info">7</span></a>
                                            <a href="#" className="button dark ripple-effect"><i className="icon-feather-rotate-ccw" /> Refresh</a>
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

const JobsDone = withRouter(connect(mapStateToProps, mapDispatchToProps)(JobsDoneComponent));
export default JobsDone;