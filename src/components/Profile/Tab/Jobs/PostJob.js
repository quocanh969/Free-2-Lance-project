import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import GoogleMapAutocomplete from '../../../Help/GoogleMapAutocomplete';
import { submitAddJobForm } from '../../../../actions/PostJob';

class PostJobComponent extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        console.log(this.props);

    }

    handleChange(fieldKey, fieldValue) {
        let { onUpdate } = this.props;
        onUpdate(fieldKey, fieldValue);
    }

    onSubmit() {
        let { onUpdate } = this.props;
        let jobTitleValue = document.getElementById("inputJobTitle").value;
        onUpdate("jobTitle", jobTitleValue);
        console.log(this.props.AddJobReducer.fields);
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
                                            <input id="inputJobTitle" type="text" className="with-border" required/>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className="submit-field">
                                            <h5>Job Type</h5>
                                            <select className="selectpicker with-border" data-size={7} title="Select Job Type">
                                                <option>Full Time</option>
                                                <option>Freelance</option>
                                                <option>Part Time</option>
                                                <option>Internship</option>
                                                <option>Temporary</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className="submit-field">
                                            <h5>Job Category</h5>
                                            <select className="selectpicker with-border" data-size={7} title="Select Category">
                                                <option>Accounting and Finance</option>
                                                <option>Clerical &amp; Data Entry</option>
                                                <option>Counseling</option>
                                                <option>Court Administration</option>
                                                <option>Human Resources</option>
                                                <option>Investigative</option>
                                                <option>IT and Computers</option>
                                                <option>Law Enforcement</option>
                                                <option>Management</option>
                                                <option>Miscellaneous</option>
                                                <option>Public Relations</option>
                                            </select>
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
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <div className="input-with-icon">
                                                        <input className="with-border" type="text" placeholder="Min" />
                                                        <i className="currency">USD</i>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="input-with-icon">
                                                        <input className="with-border" type="text" placeholder="Max" />
                                                        <i className="currency">USD</i>
                                                    </div>
                                                </div>
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
                                            <h5>Job Description</h5>
                                            <textarea cols={30} rows={5} className="with-border" defaultValue={""} />
                                            <div className="uploadButton margin-top-30">
                                                <input className="uploadButton-input" type="file" accept="image/*, application/pdf" id="upload" multiple />
                                                <label className="uploadButton-button ripple-effect" htmlFor="upload">Upload Files</label>
                                                <span className="uploadButton-file-name">Images or documents that might be helpful in describing your job</span>
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
        onSend: () => {
            dispatch(submitAddJobForm);
        },
        onUpdate: (key, value) => {
            dispatch({
                type: "UPDATE_FIELD",
                key,
                value,
            }
            );
        }
    }
}

const PostJob = withRouter(connect(mapStateToProps, mapDispatchToProps)(PostJobComponent));
export default PostJob;