import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class ScheduleComponent extends Component {
    render() {
        return (
            <div>
                Schedule work !
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

const Schedule = withRouter(connect(mapStateToProps, mapDispatchToProps)(ScheduleComponent));
export default Schedule;