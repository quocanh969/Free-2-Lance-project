import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Candidates from './Candidates';

class DetailTemplateComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tab: 2,
        }
    }
   
    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    renderContent() {
        switch(this.state.tab)
        {
            case 1:
                return(
                    <div>Thông tin công việc</div>
                );
            case 2:
                return(
                    <Candidates switchTab={this.props.switchTab}></Candidates>
                );
            default: return null;
        }
    }

    render() {
        return (
            <div className="dashboard-content-inner">
                {/* Dashboard Headline */}
                <div className="dashboard-headline">
                    <h3>Nội dung công việc</h3>                                       
                </div>
                {/* Row */}
                <div className="row">
                    {/* Dashboard Box */}
                    <div className="col-xl-12">
                        <div className="dashboard-box margin-top-0">
                            {/* Headline */}
                            {/* <div className="headline">
                                <h3><i className="icon-material-outline-business-center" /> Chi tiết</h3>
                            </div> */}
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <h4 className={"nav-link cursor-pointer " + (this.state.tab === 1 && 'active')}
                                        onClick={()=>{this.setState({tab: 1})}}>
                                        <i className="icon-feather-info text-293FE4"/>&nbsp;&nbsp;Thông tin công việc
                                    </h4>                                    
                                </li>    
                                <li className="nav-item cursor-pointer">
                                    <h4 className={"nav-link cursor-pointer " + (this.state.tab === 2 && 'active')}
                                        onClick={()=>{this.setState({tab: 2})}}>
                                        <i className="icon-material-outline-supervisor-account text-293FE4" />&nbsp;&nbsp;Ứng viên
                                    </h4>                                    
                                </li>                         
                            </ul> 
                            <div className="content">
                                {this.renderContent()}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Row / End */}
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

const DetailTemplate = withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailTemplateComponent));
export default DetailTemplate;