import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class DashboardComponent extends Component {
    render() {
        return (
            <div>
                Dashboard work !!!
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

const Dashboard = withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardComponent));
export default Dashboard;