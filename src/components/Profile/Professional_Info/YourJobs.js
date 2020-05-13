import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

class YourJobsComponent extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-5' style={{minHeight:'500px'}}>
                    <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} />
                </div>
                <div className='col-7'>
                    
                </div>
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