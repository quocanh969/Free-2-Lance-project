import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class YourJobsComponent extends Component {
    render() {
        return (
            <div>
                YourJobs work !
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

const YourJobs = withRouter(connect(mapStateToProps, mapDispatchToProps)(YourJobsComponent));
export default YourJobs;