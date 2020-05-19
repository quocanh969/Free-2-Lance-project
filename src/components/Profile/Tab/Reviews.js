import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class ReviewsComponent extends Component {
    render() {
        return (
            <div>
                ReviewsComponent work !!!
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

const Reviews = withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewsComponent));
export default Reviews;