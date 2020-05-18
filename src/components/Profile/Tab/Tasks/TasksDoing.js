import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class TasksDoingComponent extends Component {
    render() {
        return (
            <div>
                TasksDoingComponent work !!!
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

const TasksDoing = withRouter(connect(mapStateToProps, mapDispatchToProps)(TasksDoingComponent));
export default TasksDoing;