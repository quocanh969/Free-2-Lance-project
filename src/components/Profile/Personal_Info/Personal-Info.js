import React, { Component } from 'react';

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class PersonalInfoComponent extends Component {
    render() {
        return (
            <div>
                <div className='rounded bg-danger mb-2' style={{height:'200px'}}>
                    This is personal Info
                </div>
                <div className='rounded bg-danger my-2' style={{height:'200px'}}>
                    This is personal Introduction
                </div>
                <div className='rounded bg-danger my-2' style={{height:'200px'}}>
                    This is personal Skill
                </div>                
                <div className='rounded bg-danger mt-2' style={{height:'200px'}}>
                    This is where you add your CV
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

const PersonalInfo = withRouter(connect(mapStateToProps, mapDispatchToProps)(PersonalInfoComponent));
export default PersonalInfo;