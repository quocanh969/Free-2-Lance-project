import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class ReviewsComponent extends Component {
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
                    <h3>Reviews</h3>
                    {/* Breadcrumbs */}
                    <nav id="breadcrumbs" className="dark">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Dashboard</a></li>
                            <li>Reviews</li>
                        </ul>
                    </nav>
                </div>
                {/* Row */}
                <div className="row">
                    {/* Dashboard Box */}
                    <div className="col-xl-6">
                        <div className="dashboard-box margin-top-0">
                            {/* Headline */}
                            <div className="headline">
                                <h3><i className="icon-material-outline-business" /> Rate Employers</h3>
                            </div>
                            <div className="content">
                                <ul className="dashboard-box-list">
                                    <li>
                                        <div className="boxed-list-item">
                                            {/* Content */}
                                            <div className="item-content">
                                                <h4>Simple Chrome Extension</h4>
                                                <span className="company-not-rated margin-bottom-5">Not Rated</span>
                                            </div>
                                        </div>
                                        <a href="#small-dialog-2" className="popup-with-zoom-anim button ripple-effect margin-top-5 margin-bottom-10"><i className="icon-material-outline-thumb-up" /> Leave a Review</a>
                                    </li>
                                    <li>
                                        <div className="boxed-list-item">
                                            {/* Content */}
                                            <div className="item-content">
                                                <h4>Adsense Expert</h4>
                                                <span className="company-not-rated margin-bottom-5">Not Rated</span>
                                            </div>
                                        </div>
                                        <a href="#small-dialog-2" className="popup-with-zoom-anim button ripple-effect margin-top-5 margin-bottom-10"><i className="icon-material-outline-thumb-up" /> Leave a Review</a>
                                    </li>
                                    <li>
                                        <div className="boxed-list-item">
                                            {/* Content */}
                                            <div className="item-content">
                                                <h4>Fix Python Selenium Code</h4>
                                                <div className="item-details margin-top-10">
                                                    <div className="star-rating" data-rating={5.0} />
                                                    <div className="detail-item"><i className="icon-material-outline-date-range" /> May 2018</div>
                                                </div>
                                                <div className="item-description">
                                                    <p>Great clarity in specification and communication. I got payment really fast. Really recommend this employer for his professionalism. I will work for him again with pleasure.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#small-dialog-1" className="popup-with-zoom-anim button gray ripple-effect margin-top-5 margin-bottom-10"><i className="icon-feather-edit" /> Edit Review</a>
                                    </li>
                                    <li>
                                        <div className="boxed-list-item">
                                            {/* Content */}
                                            <div className="item-content">
                                                <h4>PHP Core Website Fixes</h4>
                                                <div className="item-details margin-top-10">
                                                    <div className="star-rating" data-rating={5.0} />
                                                    <div className="detail-item"><i className="icon-material-outline-date-range" /> May 2018</div>
                                                </div>
                                                <div className="item-description">
                                                    <p>Great clarity in specification and communication. I got payment really fast. Really recommend this employer for his professionalism. I will work for him again with pleasure.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#small-dialog-1" className="popup-with-zoom-anim button gray ripple-effect margin-top-5 margin-bottom-10"><i className="icon-feather-edit" /> Edit Review</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Pagination */}
                        <div className="clearfix" />
                        <div className="pagination-container margin-top-40 margin-bottom-0">
                            <nav className="pagination">
                                <ul>
                                    <li><a href="#" className="ripple-effect current-page">1</a></li>
                                    <li><a href="#" className="ripple-effect">2</a></li>
                                    <li><a href="#" className="ripple-effect">3</a></li>
                                    <li className="pagination-arrow"><a href="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right" /></a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="clearfix" />
                        {/* Pagination / End */}
                    </div>
                    {/* Dashboard Box */}
                    <div className="col-xl-6">
                        <div className="dashboard-box margin-top-0">
                            {/* Headline */}
                            <div className="headline">
                                <h3><i className="icon-material-outline-face" /> Rate Freelancers</h3>
                            </div>
                            <div className="content">
                                <ul className="dashboard-box-list">
                                    <li>
                                        <div className="boxed-list-item">
                                            {/* Content */}
                                            <div className="item-content">
                                                <h4>Simple Chrome Extension</h4>
                                                <span className="company-not-rated margin-bottom-5">Not Rated</span>
                                            </div>
                                        </div>
                                        <a href="#small-dialog-2" className="popup-with-zoom-anim button ripple-effect margin-top-5 margin-bottom-10"><i className="icon-material-outline-thumb-up" /> Leave a Review</a>
                                    </li>
                                    <li>
                                        <div className="boxed-list-item">
                                            {/* Content */}
                                            <div className="item-content">
                                                <h4>Help Fix Laravel PHP issue</h4>
                                                <div className="item-details margin-top-10">
                                                    <div className="star-rating" data-rating={5.0} />
                                                    <div className="detail-item"><i className="icon-material-outline-date-range" /> August 2018</div>
                                                </div>
                                                <div className="item-description">
                                                    <p>Excellent programmer - helped me fixing small issue.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#small-dialog-1" className="popup-with-zoom-anim button gray ripple-effect margin-top-5 margin-bottom-10"><i className="icon-feather-edit" /> Edit Review</a>
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

const Reviews = withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewsComponent));
export default Reviews;