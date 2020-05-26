import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class JobsApplyingComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobList: [
                {
                    id: 1,
                    title: 'Bilingual Event Support Specialist',
                    post_date: '10/10/2020',
                    expire_date: '10/02/2021',
                    candidates: 10,
                },
                {
                    id: 1,
                    title: 'Bilingual Event Support Specialist',
                    post_date: '10/10/2020',
                    expire_date: '10/02/2021',
                    candidates: 10,
                },
                {
                    id: 1,
                    title: 'Bilingual Event Support Specialist',
                    post_date: '10/10/2020',
                    expire_date: '10/02/2021',
                    candidates: 10,
                },
                {
                    id: 1,
                    title: 'Bilingual Event Support Specialist',
                    post_date: '10/10/2020',
                    expire_date: '10/02/2021',
                    candidates: 10,
                },
                {
                    id: 1,
                    title: 'Bilingual Event Support Specialist',
                    post_date: '10/10/2020',
                    expire_date: '10/02/2021',
                    candidates: 10,
                },
                {
                    id: 1,
                    title: 'Bilingual Event Support Specialist',
                    post_date: '10/10/2020',
                    expire_date: '10/02/2021',
                    candidates: 10,
                },
                {
                    id: 1,
                    title: 'Bilingual Event Support Specialist',
                    post_date: '10/10/2020',
                    expire_date: '10/02/2021',
                    candidates: 10,
                },
            ]
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    generateListJobs() {
        let content = [];
        let count = 0;
        for (let e of this.state.jobList) {
            content.push(
                <li key={count}>
                    {/* Job Listing */}
                    <div className="job-listing">
                        {/* Job Listing Details */}
                        <div className="job-listing-details">
                            {/* Logo */}
                            {/* 											
                            <a href="#" class="job-listing-company-logo">
                                <img src="images/company-logo-05.png" alt="">
                            </a>
                            */}
                            {/* Details */}
                            <div className="job-listing-description">
                                <h3 className="job-listing-title">{e.title}</h3>
                                {/* Job Listing Footer */}
                                <div className="job-listing-footer">
                                    <ul>
                                        <li><i className="icon-material-outline-date-range" /> {e.post_date}</li>
                                        <li><i className="icon-material-outline-date-range" /> {e.expire_date}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Buttons */}
                    <div>
                        <span className='mx-2 p-2 bg-293FE4 text-white rounded'><i className='icon-material-outline-supervisor-account'></i> Candidates: {e.candidates}</span>
                        <span className='btn mx-2 p-2 bg-silver rounded' onClick={()=>{this.props.switchTab(13)}}><i className="icon-line-awesome-clone" /> Details</span>
                        <span className='btn mx-2 p-2 bg-silver rounded'><i className="icon-feather-edit"/> Edit</span>
                        <span className='btn mx-2 p-2 bg-silver rounded'><i className="icon-feather-trash-2"/> Remove</span>
                    </div>
                    {/* <div className="buttons-to-right always-visible">
                        <a className='bg-293FE4 text-white'><i className='icon-material-outline-supervisor-account'></i> Candidates: {e.candidates}</a>
                        <a href="#" className="button gray ripple-effect ico" title="Details"><i className="icon-line-awesome-clone" /> Details</a>
                        <a href="#" className="button gray ripple-effect ico" title="Edit"><i className="icon-feather-edit"/> Edit</a>
                        <a href="#" className="button gray ripple-effect ico" title="Remove"><i className="icon-feather-trash-2"/> Remove</a>
                    </div> */}
                </li>
            );
            count++;
        }

        return content;
    }

    render() {
        return (
            <div className="dashboard-content-inner">
                {/* Dashboard Headline */}
                <div className="dashboard-headline">
                    <h3>Các công việc hiện đang trong quá trình tuyển dụng</h3>                    
                </div>
                {/* Row */}
                <div className="row">
                    {/* Dashboard Box */}
                    <div className="col-xl-12">
                        <div className="dashboard-box margin-top-0">
                            {/* Headline */}
                            <div className="headline">
                                <h3><i className="icon-material-outline-business-center" /> Danh sách công việc</h3>
                            </div>
                            <div className="content">
                                <ul className="dashboard-box-list">
                                    {this.generateListJobs()}
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

const JobsApplying = withRouter(connect(mapStateToProps, mapDispatchToProps)(JobsApplyingComponent));
export default JobsApplying;