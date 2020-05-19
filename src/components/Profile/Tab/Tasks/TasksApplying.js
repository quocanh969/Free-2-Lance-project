import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class TasksApplyingComponent extends Component {
    render() {
        return (
            <div>
                TasksApplying work !!!
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

const TasksApplying = withRouter(connect(mapStateToProps, mapDispatchToProps)(TasksApplyingComponent));
export default TasksApplying;