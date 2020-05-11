import React, { Component } from 'react';

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import PersonalInfo from './Personal_Info/Personal-Info';
import ProInfo from './Professional_Info/Pro-Info';

class ProfileComponent extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    {/* Personal Info */}
                    <div className='col-4 pl-5 pr-2 py-5'>
                        <PersonalInfo></PersonalInfo>
                    </div>

                    {/* Job - Shedule - History Info */}
                    <div className='col-8 pr-5 pl-2 py-5'>
                        <ProInfo></ProInfo>
                    </div>
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

const Profile = withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileComponent));
export default Profile;