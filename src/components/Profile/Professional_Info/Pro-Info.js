import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import HistoryJobs from './HistoryJobs';
import YourJobs from './YourJobs';
import Schedule from './Schedule';

class ProInfoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 1,
        }
    }

    render() {
        return (
            <div>
                {/* General Statistic */}
                <div className='row'>
                    <div className='col-4'>
                        <div className='rounded bg-warning'  style={{height:'150px'}}></div>
                    </div>
                    <div className='col-4'>
                        <div className='rounded bg-warning'  style={{height:'150px'}}></div>
                    </div>
                    <div className='col-4'>
                        <div className='rounded bg-warning' style={{height:'150px'}}></div>
                    </div>
                </div>

                {/* Tab Component */}
                <ul className="nav nav-tabs mt-2">
                    <li className="nav-item">
                        <div className={"nav-link cursor-pointer" + (this.state.tab === 1 ? ' active':'')} 
                        onClick={()=>{this.setState({tab: 1})}}>
                            History
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className={"nav-link cursor-pointer" + (this.state.tab === 2 ? ' active':'')} 
                        onClick={()=>{this.setState({tab: 2})}}>
                            Your Jobs
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className={"nav-link cursor-pointer" + (this.state.tab === 3 ? ' active':'')} 
                        onClick={()=>{this.setState({tab: 3})}}>
                            Shedule
                        </div>
                    </li>
                </ul>
                <div className='tab-component'>
                    {
                        (this.state === 1
                        ? <HistoryJobs></HistoryJobs>
                        : (this.state === 2
                            ? <YourJobs></YourJobs>
                            : <Schedule></Schedule>
                            )
                        )
                    }
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

const ProInfo = withRouter(connect(mapStateToProps, mapDispatchToProps)(ProInfoComponent));
export default ProInfo;
