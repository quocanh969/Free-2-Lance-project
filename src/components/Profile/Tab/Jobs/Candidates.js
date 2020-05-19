import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class CandidatesComponent extends Component {
    render() {
        return (
            <div>
                CandidatesComponent work !!!
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

const Candidates = withRouter(connect(mapStateToProps, mapDispatchToProps)(CandidatesComponent));
export default Candidates;