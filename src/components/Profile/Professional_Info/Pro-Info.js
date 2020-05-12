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
                        <div className='rounded'  style={{height:'150px'}}>
                            Số công việc đã làm
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='rounded'  style={{height:'150px'}}>
                            Số công việc đăng ký
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='rounded' style={{height:'150px'}}>
                            Thông báo có việc làm
                        </div>
                    </div>
                </div>

                {/* Tab Component */}
                <ul className="nav nav-tabs mt-4">
                    <li className="nav-item">
                        <div className={"nav-link cursor-pointer" + (this.state.tab === 1 ? ' active':'')} 
                        onClick={()=>{this.setState({tab: 1})}}>
                            Lịch sử công việc
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className={"nav-link cursor-pointer" + (this.state.tab === 2 ? ' active':'')} 
                        onClick={()=>{this.setState({tab: 2})}}>
                            Công việc hiện tại
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className={"nav-link cursor-pointer" + (this.state.tab === 3 ? ' active':'')} 
                        onClick={()=>{this.setState({tab: 3})}}>
                            Lịch biểu
                        </div>
                    </li>
                </ul>
                <div className='tab-component px-3 py-4'>
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
