import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class JobsDoingComponent extends Component {
    render() {
        return (
            <div>
                JobsDoingComponent work !!!
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

const JobsDoing = withRouter(connect(mapStateToProps, mapDispatchToProps)(JobsDoingComponent));
export default JobsDoing;