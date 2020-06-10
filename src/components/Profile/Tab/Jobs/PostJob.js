import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import GoogleMapAutocomplete from '../../../Help/GoogleMapAutocomplete';
import MultipleImageUploadComponent from '../../../Help/UploadImages';
import { submitAddJobForm, loadResources } from '../../../../actions/PostJob';
import { S_Selector } from '../../../../ultis/SHelper/S_Help_Input';
import { loadTopics } from '../../../../actions/Home';
import Calendar from 'react-calendar';
import DatePicker from 'react-date-picker'

// let initField = [];

class PostJobComponent extends Component {
    constructor(props) {
        super(props);

        this.runUploadFile = this.runUploadFile.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.pushTopics = this.pushTopics.bind(this);
        this.getDate = this.getDate.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    runUploadFile() {
        document.getElementById('uploadImgMultiple').click();
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    onInputChange(e) {
        let number = e.target.value;
        if (Number(number) || number == "") {
            let { onUpdate } = this.props;
            onUpdate('salary', number);
        } else {
            return;
        }
    }

    componentDidUpdate() {
    }

    pushTopics() {
        let content = [];
        let { jobTopic } = this.props.GeneralReducer;
        for (let i = 0; i < jobTopic.length; i++) {
            content.push(
                <option value={jobTopic[i].id_jobtopic}>{jobTopic[i].name}</option>
            )
        }
        return content;
    }

    handleChange(fieldKey, fieldValue) {
        let { onUpdate } = this.props;
        onUpdate(fieldKey, fieldValue);
    }

    onSubmit() {
        let { onUpdate, onSend } = this.props;
        let jobTitleValue = document.getElementById("inputJobTitle").value;
        onUpdate("jobTitle", jobTitleValue);
        let jobTopicValue = document.getElementById("jobTopicsSelector").value;
        onUpdate("jobTopic", jobTopicValue);
        let jobDescriptionValue = document.getElementById("description").value;
        onUpdate("description", jobDescriptionValue);
        let jobRequirementsValue = document.getElementById("requirements").value;
        onUpdate("requirements", jobRequirementsValue);
        let exprValue = document.getElementById("exprDateSelector").value;
        onUpdate("exprDate", exprValue);

        let employer = this.props.HeaderReducer.user;
        let fields = this.props.AddJobReducer.fields;
        
        let header = {
            employer: employer.id_user,
            title: fields.jobTitle,
            salary: fields.salary,
            job_topic: fields.jobTopic,
            // address: fields.addressString.formatted_address,
            // area_province: fields.addressString.address_components[3].long_name,
            // area_district: fields.addressString.address_components[2].long_name,
            // lat: fields.addressString.geometry.location.lat(),
            // lng: fields.addressString.geometry.location.lng(),
            description: fields.description,
            expire_date: fields.exprDate,
            dealable: 0,
            job_type: fields.jobType,
            vacancy: 2,
            isOnline: 0,
            isCompany: (employer.isBusinessUser ? 1 : 0),
            requirement: fields.requirements,
            tag: [],
            images: fields.relatedImg, 
        }
        console.log(header.images);
        // onSend(header);
    }

    getDate() {
        let today = new Date();
        let maxExprDate = new Date();
        maxExprDate.setDate(maxExprDate.getDate() + 30);

        var td_dd = today.getDate();
        var td_mm = today.getMonth() + 1;
        var td_yyyy = today.getFullYear();
        if (td_dd < 10) {
            td_dd = '0' + td_dd
        }
        if (td_mm < 10) {
            td_mm = '0' + td_mm
        }

        var ft_dd = maxExprDate.getDate();
        var ft_mm = maxExprDate.getMonth() + 1;
        var ft_yyyy = maxExprDate.getFullYear();
        if (ft_dd < 10) {
            ft_dd = '0' + ft_dd
        }
        if (ft_mm < 10) {
            ft_mm = '0' + ft_mm
        }

        today = td_yyyy + '-' + td_mm + '-' + td_dd
        maxExprDate = ft_yyyy + '-' + ft_mm + '-' + ft_dd
        return { today, maxExprDate };
    }

    render() {
        return (
            <div className="dashboard-content-inner">
                {/* Dashboard Headline */}
                <div className="dashboard-headline">
                    <h3>Post a Job</h3>
                </div>
                {/* Row */}
                <div className="row">
                    {/* Dashboard Box */}
                    <div className="col-xl-12">
                        <div className="dashboard-box margin-top-0">
                            {/* Headline */}
                            <div className="headline">
                                <h3><i className="icon-feather-folder-plus" /> Job Submission Form</h3>
                            </div>
                            <div className="dashboard-content with-padding padding-bottom-10">
                                <div className="row">
                                    <div className="col-xl-4">
                                        <div className="submit-field">
                                            <h5>Job Title</h5>
                                            <input id="inputJobTitle" type="text" className="with-border" required />
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className="submit-field">
                                            <h5>Job Type</h5>
                                            <select className="selectpicker with-border" defaultValue={0} title="Select Job Type">
                                                <option value={0}>Thời vụ</option>
                                                <option value={1}>Sản phẩm</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className="submit-field">
                                            <h5>Job Category</h5>
                                            {/* <select id="jobTopicsSelector" className="selectpicker with-border" onMouseDown="if(this.options.length>5){this.size=5}" title="Select Category"> */}
                                            <S_Selector className="with-border" id="jobTopicsSelector" data={this.props.GeneralReducer.jobTopic} value_tag={"id_jobtopic"} text_tag={"name"} placeholder={"Chọn chủ đề"}></S_Selector>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className="submit-field">
                                            <h5>Location</h5>
                                            <div className="input-with-icon">
                                                <div id="autocomplete-container">
                                                    {/* <input id="autocomplete-input" className="with-border" type="text" placeholder="Type Address" /> */}
                                                    <GoogleMapAutocomplete value={this.props.AddJobReducer.fields.addressString} onChange={this.handleChange}></GoogleMapAutocomplete>
                                                </div>
                                                <i className="icon-material-outline-location-on" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className="submit-field">
                                            <h5>Salary</h5>
                                            <div className="input-with-icon">
                                                <input className="with-border" type="text" value={this.props.AddJobReducer.fields.salary} onChange={this.onInputChange} placeholder={"Nhập thù lao"} />
                                                <i className="currency">VND</i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className="submit-field">
                                            <h5>Tags <span>(optional)</span>  <i className="help-icon" data-tippy-placement="right" title="Maximum of 10 tags" /></h5>
                                            <div className="keywords-container">
                                                <div className="keyword-input-container">
                                                    <input type="text" className="keyword-input with-border" placeholder="e.g. job title, responsibilites" />
                                                    <button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add" /></button>
                                                </div>
                                                <div className="keywords-list">{/* keywords go here */}</div>
                                                <div className="clearfix" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="submit-field">

                                            {/* <div className="input-with-icon"> */}
                                            <h5>Expired date</h5>
                                            <input id="exprDateSelector" type="date" min={this.getDate().today} max={this.getDate().maxExprDate} defaultValue={this.getDate().today}></input>
                                            {/* </div> */}
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="submit-field">
                                            <h5>Job Description</h5>
                                            <textarea id="description" cols={30} rows={5} className="with-border" defaultValue={""} placeholder="Description (required)" />
                                            <h5>Job Requirements</h5>
                                            <textarea id="requirements" cols={30} rows={3} className="with-border" defaultValue={""} placeholder="Your requirements (optional)" />
                                            <div className="margin-top-30">
                                                {/* <input className="uploadButton-input" type="button" id="upload" onClick={this.runUploadFile} /> */}
                                                <div>
                                                    <MultipleImageUploadComponent value={this.props.AddJobReducer.fields.relatedImg} onChange={this.handleChange} ></MultipleImageUploadComponent>
                                                </div>
                                                <div className='uploadButton mt-3'>
                                                    <div>
                                                        <label className="uploadButton-button ripple-effect" onClick={this.runUploadFile}>Upload Files</label>
                                                    </div>
                                                    <div>
                                                        <span className="uploadButton-file-name">Images or documents that might be helpful in describing your job</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <a href="#" className="button ripple-effect big margin-top-30" onClick={this.onSubmit}><i className="icon-feather-plus" /> Post a Job</a>
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
        onSend: (header) => {
            dispatch(submitAddJobForm(header));
        },
        onUpdate: (key, value) => {
            dispatch({
                type: "UPDATE_FIELD",
                key,
                value,
            }
            );
        },
    }
}

const PostJob = withRouter(connect(mapStateToProps, mapDispatchToProps)(PostJobComponent));
export default PostJob;