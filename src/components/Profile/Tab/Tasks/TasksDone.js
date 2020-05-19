import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class TasksDoneComponent extends Component {
    render() {
        return (
            <div>
                TasksDoneComponent work !!!
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

const TasksDone = withRouter(connect(mapStateToProps, mapDispatchToProps)(TasksDoneComponent));
export default TasksDone;