import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class TasksApplyingComponent extends Component {
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
                    <h3>Các công việc bạn đang tham gia</h3>
                </div>
                {/* Row */}
                <div className="row">
                    {/* Dashboard Box */}
                    <div className="col-xl-12">
                        <div className="dashboard-box margin-top-0">
                            {/* Headline */}
                            <div className="headline">
                                <h3><i className="icon-material-outline-supervisor-account" />Danh sách các công việc bạn đang tham gia</h3>
                            </div>
                            <div className="content">
                                <ul className="dashboard-box-list">
                                    <li>
                                        {/* Overview */}
                                        <div className="freelancer-overview manage-candidates">
                                            <div className="freelancer-overview-inner">
                                                {/* Avatar */}
                                                <div className="freelancer-avatar">
                                                    <div className="verified-badge" />
                                                    <a href="#"><img src="images/user-avatar-big-02.jpg" alt="" /></a>
                                                </div>
                                                {/* Name */}
                                                <div className="freelancer-name">
                                                    <h4><a href="#">David Peterson <img className="flag" src="images/flags/de.svg" alt="" title="Germany" data-tippy-placement="top" /></a></h4>
                                                    {/* Details */}
                                                    <span className="freelancer-detail-item"><a href="#"><i className="icon-feather-mail" /> david@example.com</a></span>
                                                    {/* Rating */}
                                                    <div className="freelancer-rating">
                                                        <div className="star-rating" data-rating={5.0} />
                                                    </div>
                                                    {/* Bid Details */}
                                                    <ul className="dashboard-task-info bid-info">
                                                        <li><strong>$3,200</strong><span>Fixed Price</span></li>
                                                        <li><strong>14 Days</strong><span>Delivery Time</span></li>
                                                    </ul>
                                                    {/* Buttons */}
                                                    <div className="buttons-to-right always-visible margin-top-25 margin-bottom-0">                                                    
                                                        {/* <span className='btn mx-2 py-2 px-4 bg-silver rounded' onClick={() => { history.push(`/job-detail/${e.id_job}`) }}><i className="icon-line-awesome-clone" /> Details</span>                                                    
                                                        <span className='btn mx-2 py-2 px-4 bg-silver rounded'><i className="icon-feather-trash-2" /> Remove</span> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        {/* Overview */}
                                        <div className="freelancer-overview manage-candidates">
                                            <div className="freelancer-overview-inner">
                                                {/* Avatar */}
                                                <div className="freelancer-avatar">
                                                    <a href="#"><img src="images/user-avatar-placeholder.png" alt="" /></a>
                                                </div>
                                                {/* Name */}
                                                <div className="freelancer-name">
                                                    <h4><a href="#">Oldrich Ćuk <img className="flag" src="images/flags/sk.svg" alt="" title="Slovakia" data-tippy-placement="top" /></a></h4>
                                                    {/* Details */}
                                                    <span className="freelancer-detail-item"><a href="#"><i className="icon-feather-mail" /> oldrich@example.com</a></span>
                                                    <span className="freelancer-detail-item"><i className="icon-feather-phone" /> (+421) 123-456-789</span>
                                                    {/* Rating */}
                                                    <br />
                                                    <span className="company-not-rated">Minimum of 3 votes required</span>
                                                    {/* Bid Details */}
                                                    <ul className="dashboard-task-info bid-info">
                                                        <li><strong>$3,000</strong><span>Fixed Price</span></li>
                                                        <li><strong>14 Days</strong><span>Delivery Time</span></li>
                                                    </ul>
                                                    {/* Buttons */}
                                                    <div className="buttons-to-right always-visible margin-top-25 margin-bottom-0">
                                                        <a href="#small-dialog-1" className="popup-with-zoom-anim button ripple-effect"><i className="icon-material-outline-check" /> Accept Offer</a>
                                                        <a href="#small-dialog-2" className="popup-with-zoom-anim button dark ripple-effect"><i className="icon-feather-mail" /> Send Message</a>
                                                        <a href="#" className="button gray ripple-effect ico" title="Remove Bid" data-tippy-placement="top"><i className="icon-feather-trash-2" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        {/* Overview */}
                                        <div className="freelancer-overview manage-candidates">
                                            <div className="freelancer-overview-inner">
                                                {/* Avatar */}
                                                <div className="freelancer-avatar">
                                                    <div className="verified-badge" />
                                                    <a href="#"><img src="images/user-avatar-placeholder.png" alt="" /></a>
                                                </div>
                                                {/* Name */}
                                                <div className="freelancer-name">
                                                    <h4><a href="#">Kuba Adamczyk <img className="flag" src="images/flags/pl.svg" alt="" title="Poland" data-tippy-placement="top" /></a></h4>
                                                    {/* Details */}
                                                    <span className="freelancer-detail-item"><a href="#"><i className="icon-feather-mail" /> kuba@example.com</a></span>
                                                    <span className="freelancer-detail-item"><i className="icon-feather-phone" /> (+48) 123-456-789</span>
                                                    {/* Rating */}
                                                    <div className="freelancer-rating">
                                                        <div className="star-rating" data-rating={5.0} />
                                                    </div>
                                                    {/* Bid Details */}
                                                    <ul className="dashboard-task-info bid-info">
                                                        <li><strong>$2,700</strong><span>Fixed Price</span></li>
                                                        <li><strong>30 Days</strong><span>Delivery Time</span></li>
                                                    </ul>
                                                    {/* Buttons */}
                                                    <div className="buttons-to-right always-visible margin-top-25 margin-bottom-0">
                                                        <a href="#small-dialog-1" className="popup-with-zoom-anim button ripple-effect"><i className="icon-material-outline-check" /> Accept Offer</a>
                                                        <a href="#small-dialog-2" className="popup-with-zoom-anim button dark ripple-effect"><i className="icon-feather-mail" /> Send Message</a>
                                                        <a href="#" className="button gray ripple-effect ico" title="Remove Bid" data-tippy-placement="top"><i className="icon-feather-trash-2" /></a>
                                                    </div>
                                                </div>
                                            </div>
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

const TasksApplying = withRouter(connect(mapStateToProps, mapDispatchToProps)(TasksApplyingComponent));
export default TasksApplying;