import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class JobsDoneComponent extends Component {
    render() {
        return (
            <div>
                JobsDoneComponent work !!!
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