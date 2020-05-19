import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class MessagesComponent extends Component {
    render() {
        return (
            <div>
                MessagesComponent work !!!
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

const Messages = withRouter(connect(mapStateToProps, mapDispatchToProps)(MessagesComponent));
export default Messages;