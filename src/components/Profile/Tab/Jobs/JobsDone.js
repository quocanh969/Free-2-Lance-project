import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { loadFinishedJobsForEmployer } from '../../../../actions/Job';
import { prettierDate } from '../../../../ultis/SHelper/helperFunctions';
import { history } from '../../../../ultis/history/history';

class JobsDoneComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.loadJobList(1);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    loadJobList(page)
    {
        let {onLoadFinishedJob} = this.props;
        onLoadFinishedJob(page, 4, 0);
    }

    renderJobList() {
        let content = [];
        let { finishedJobsList } = this.props.EmployerReducer;

        if(finishedJobsList.length > 0)
        {
            finishedJobsList.forEach((e, index) => {
                content.push(
                    <li key={index}>
                        {/* Job Listing */}
                        <div className="job-listing">
                            {/* Job Listing Details */}
                            <div className="job-listing-details">
                                {/* Details */}
                                <div className="job-listing-description">
                                    <h3 className="job-listing-title">{e.title}</h3>
                                    {/* Job Listing Footer */}
                                    <div className="job-listing-footer">
                                        <ul>
                                            <li><i className="icon-material-outline-date-range" />Ngày đăng: {prettierDate(e.post_date)}</li>
                                            <li><i className="icon-material-outline-date-range" /> Expiring on 10 August, 2018</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Buttons */}
                        <div>
                            <span className='mx-2 p-2 bg-293FE4 text-white rounded'><i className='icon-material-outline-supervisor-account'></i> Candidates: {e.candidates}</span>
                            <span className='btn mx-2 p-2 bg-silver rounded' onClick={()=>{history.push(`/job-detail/${e.id_job}`)}}><i className="icon-line-awesome-clone" /> Details</span>
                            {/* <span className='btn mx-2 p-2 bg-silver rounded'><i className="icon-feather-edit"/> Edit</span> */}
                            <span className='btn mx-2 p-2 bg-silver rounded'><i className="icon-feather-trash-2"/> Remove</span>
                        </div>
                    </li>
                )
            })
        }
        else
        {
            content.push(
                <div className='font-weight-bold p-5' key={0}>
                    Bạn hiện không có công việc nào đã hoàn thành
                </div>
            )
        }
        
        return content;
    }

    render() {
        return (
            <div className="dashboard-content-inner">
                {/* Dashboard Headline */}
                <div className="dashboard-headline">
                    <h3>Các công việc đã hoàn thành</h3>                    
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
                                    {this.renderJobList()}
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
        onLoadFinishedJob:(page, take, isASC) => {
            dispatch(loadFinishedJobsForEmployer(page, take, isASC));
        }
    }
}

const JobsDone = withRouter(connect(mapStateToProps, mapDispatchToProps)(JobsDoneComponent));
export default JobsDone;