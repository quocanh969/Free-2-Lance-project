import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import avatarPlaceholder from '../../../../../assets/images/user-avatar-placeholder.png';

class CandidatesComponent extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            candidates: [
                {
                    id: 1,
                    fullname: 'Katarina',
                    avatarImg: avatarPlaceholder,
                    email: 'kata@gmail.com',
                    dial: '0121234567',
                    dob: '10-10-2020',
                    rate: 4,
                },
                {
                    id: 1,
                    fullname: 'Katarina',
                    avatarImg: avatarPlaceholder,
                    email: 'kata@gmail.com',
                    dial: '0121234567',
                    dob: '10-10-2020',
                    rate: 4,
                },
                {
                    id: 1,
                    fullname: 'Katarina',
                    avatarImg: avatarPlaceholder,
                    email: 'kata@gmail.com',
                    dial: '0121234567',
                    dob: '10-10-2020',
                    rate: 4,
                },
            ]
        }
    }

    renderCandidates() {
        let content = [], count = 0;

        for (let e of this.state.candidates) {
            content.push(
                <li key={count}>                    
                    <div className="freelancer-overview manage-candidates">
                        <div className="freelancer-overview-inner">
                           
                            <div className="freelancer-avatar">
                                <img src={e.avatarImg} alt="avater candidate" />
                            </div>
                            
                            <div className="freelancer-name">
                                <h4>{e.fullname}</h4>
                                {/* Details */}
                                <span className="freelancer-detail-item"><i className="icon-feather-mail" /> {e.email}</span>
                                &#10074;&nbsp;&nbsp;
                                <span className="freelancer-detail-item"><i className="icon-feather-phone" /> {e.dial}</span>
                                &#10074;&nbsp;&nbsp;
                                <span className="freelancer-detail-item"><i className="icon-line-awesome-birthday-cake" /> {e.dob}</span>
                                {/* Rating */}
                                <div className="freelancer-rating pt-0 mt-1">
                                    Rating:&nbsp;&nbsp;{e.rate}<i className='icon-material-outline-star text-warning mb-0'></i>
                                </div>
                                {/* Buttons */}
                                <div className="buttons-to-right always-visible margin-top-25 margin-bottom-5">
                                    <span className="cursor-pointer rounded bg-293FE4 text-white my-0 mx-1 px-3 py-2"><i className="icon-feather-file-text"/> See detail info</span>
                                    <span className="cursor-pointer rounded bg-dark text-white my-0 mx-1 px-3 py-2" onClick={()=>{this.props.switchTab(2)}}><i className="icon-feather-mail" /> Send Message</span>
                                    <span className="cursor-pointer rounded bg-silver text-dark my-0 mx-1 px-3 py-2"><i className="icon-feather-trash-2" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            );
            count++;
        }

        return content;
    }

    render() {
        return (
            <div className="dashboard-box margin-top-0">
                {/* Headline */}
                <div className="headline">
                    <h3>3 Candidates</h3>
                </div>
                <div className="content">
                    <ul className="dashboard-box-list">
                        {this.renderCandidates()}
                    </ul>
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

const Candidates = withRouter(connect(mapStateToProps, mapDispatchToProps)(CandidatesComponent));
export default Candidates;