import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class SettingComponent extends Component {
    render() {
        return (
            <div>
                SettingComponent work !!!
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

const Setting = withRouter(connect(mapStateToProps, mapDispatchToProps)(SettingComponent));
export default Setting;