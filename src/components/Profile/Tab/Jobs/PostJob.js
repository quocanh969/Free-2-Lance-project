import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class PostJobComponent extends Component {
    render() {
        return (
            <div>
                PostJobComponent work !!!
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

const PostJob = withRouter(connect(mapStateToProps, mapDispatchToProps)(PostJobComponent));
export default PostJob;