import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class ApplyingJobsComponent extends Component {
    render() {
        return (
            <div>
                
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