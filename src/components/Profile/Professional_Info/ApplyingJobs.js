import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class ApplyingJobsComponent extends Component {
    render() {
        return (
            <div>
                {/* Tasks Container */}
                <div className="tasks-list-container compact-list">
                    {/* Task */}
                    <a href="single-task-page.html" className="task-listing">
                        {/* Job Listing Details */}
                        <div className="task-listing-details">
                            {/* Details */}
                            <div className="task-listing-description">
                                <h3 className="task-listing-title">Food Delviery Mobile App</h3>
                                <ul className="task-icons">
                                    <li><i className="icon-material-outline-location-on" /> San Francisco</li>
                                    <li><i className="icon-material-outline-access-time" /> 2 minutes ago</li>
                                </ul>
                                <p className="task-listing-text">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster.</p>
                                <div className="task-tags">
                                    <span>iOS</span>
                                    <span>Android</span>
                                    <span>mobile apps</span>
                                    <span>design</span>
                                </div>
                            </div>
                        </div>
                        <div className="task-listing-bid">
                            <div className="task-listing-bid-inner">
                                <div className="task-offers">
                                    <strong>$1,000 - $2,500</strong>
                                    <span>Fixed Price</span>
                                </div>
                                <span className="button button-sliding-icon ripple-effect">Bid Now <i className="icon-material-outline-arrow-right-alt" /></span>
                            </div>
                        </div>
                    </a>
                    {/* Task */}
                    <a href="single-task-page.html" className="task-listing">
                        {/* Job Listing Details */}
                        <div className="task-listing-details">
                            {/* Details */}
                            <div className="task-listing-description">
                                <h3 className="task-listing-title">2000 Words English to German</h3>
                                <ul className="task-icons">
                                    <li><i className="icon-material-outline-location-off" /> Online Job</li>
                                    <li><i className="icon-material-outline-access-time" /> 5 minutes ago</li>
                                </ul>
                                <p className="task-listing-text">Bring to the table win-win strategies to ensure domination and user generated content in real-time will have multiple touchpoints.</p>
                                <div className="task-tags">
                                    <span>copywriting</span>
                                    <span>translating</span>
                                    <span>editing</span>
                                </div>
                            </div>
                        </div>
                        <div className="task-listing-bid">
                            <div className="task-listing-bid-inner">
                                <div className="task-offers">
                                    <strong>$75</strong>
                                    <span>Fixed Price</span>
                                </div>
                                <span className="button button-sliding-icon ripple-effect">Bid Now <i className="icon-material-outline-arrow-right-alt" /></span>
                            </div>
                        </div>
                    </a>
                    {/* Task */}
                    <a href="single-task-page.html" className="task-listing">
                        {/* Job Listing Details */}
                        <div className="task-listing-details">
                            {/* Details */}
                            <div className="task-listing-description">
                                <h3 className="task-listing-title">Fix Python Selenium Code</h3>
                                <ul className="task-icons">
                                    <li><i className="icon-material-outline-location-off" /> Online Job</li>
                                    <li><i className="icon-material-outline-access-time" /> 30 minutes ago</li>
                                </ul>
                                <p className="task-listing-text">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional.</p>
                                <div className="task-tags">
                                    <span>Python</span>
                                    <span>Flask</span>
                                    <span>API Development</span>
                                </div>
                            </div>
                        </div>
                        <div className="task-listing-bid">
                            <div className="task-listing-bid-inner">
                                <div className="task-offers">
                                    <strong>$100 - $150</strong>
                                    <span>Hourly Rate</span>
                                </div>
                                <span className="button button-sliding-icon ripple-effect">Bid Now <i className="icon-material-outline-arrow-right-alt" /></span>
                            </div>
                        </div>
                    </a>
                    {/* Task */}
                    <a href="single-task-page.html" className="task-listing">
                        {/* Job Listing Details */}
                        <div className="task-listing-details">
                            {/* Details */}
                            <div className="task-listing-description">
                                <h3 className="task-listing-title">WordPress Theme Installation</h3>
                                <ul className="task-icons">
                                    <li><i className="icon-material-outline-location-off" /> Online Job</li>
                                    <li><i className="icon-material-outline-access-time" /> 1 hour ago</li>
                                </ul>
                                <p className="task-listing-text">Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate customer service with robust ideas.</p>
                                <div className="task-tags">
                                    <span>WordPress</span>
                                    <span>Theme Installation</span>
                                </div>
                            </div>
                        </div>
                        <div className="task-listing-bid">
                            <div className="task-listing-bid-inner">
                                <div className="task-offers">
                                    <strong>$100</strong>
                                    <span>Fixed Price</span>
                                </div>
                                <span className="button button-sliding-icon ripple-effect">Bid Now <i className="icon-material-outline-arrow-right-alt" /></span>
                            </div>
                        </div>
                    </a>
                </div>
                {/* Tasks Container / End */}
                {/* Pagination */}                
                <div className="mt-3 d-flex justify-content-center">
                    {/* Pagination */}
                    <div className="pagination-container">
                        <nav className="pagination">
                            <ul>
                                <li className="pagination-arrow"><a href="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-left" /></a></li>
                                <li><a href="#" className="ripple-effect">1</a></li>
                                <li><a href="#" className="current-page ripple-effect">2</a></li>
                                <li><a href="#" className="ripple-effect">3</a></li>
                                <li><a href="#" className="ripple-effect">4</a></li>
                                <li className="pagination-arrow"><a href="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right" /></a></li>
                            </ul>
                        </nav>
                    </div>                    
                </div>
                {/* Pagination / End */}
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

const ApplyingJobs = withRouter(connect(mapStateToProps, mapDispatchToProps)(ApplyingJobsComponent));
export default ApplyingJobs;