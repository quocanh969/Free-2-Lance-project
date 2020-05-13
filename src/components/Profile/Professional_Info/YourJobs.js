import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

class YourJobsComponent extends Component {
    render() {
        return (
            <div>
                <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} />
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