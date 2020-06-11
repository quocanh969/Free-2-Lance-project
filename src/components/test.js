import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {S_Selector, S_Tag_Autocomplete} from '../ultis/SHelper/S_Help_Input';

class testComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobTopicValue: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({jobTopicValue: 2});
    }

    render() {
        // let data = [
        //     {
        //         id: 1,
        //         tag: 'America',
        //     },
        //     {
        //         id: 2,
        //         tag: 'Brazil',
        //     },
        //     {
        //         id: 3,
        //         tag: 'Cameroon',
        //     },
        //     {
        //         id: 4,
        //         tag: 'Denmark',
        //     },
        // ]
        let {jobTopic}  =this.props.GeneralReducer;
        return (            
            <div className='m-5'>
                {/* <S_Tag_Autocomplete id='tag' suggestions={data}></S_Tag_Autocomplete> */}
                <S_Selector id='select-category' className='with-border' placeholder='Chọn chủ đề'                             
                    value={2}
                    data={jobTopic} value_tag='id_jobtopic' text_tag='name'>
                </S_Selector>
                <div onClick={()=>{this.handleClick()}}>Click me !!!</div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

const test = withRouter(connect(mapStateToProps, mapDispatchToProps)(testComponent));
export default test;