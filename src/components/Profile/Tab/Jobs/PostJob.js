import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import GoogleMapAutocomplete from "../../../Help/GoogleMapAutocomplete";
import MultipleImageUploadComponent from "../../../Help/UploadImages";
import { submitAddJobForm, loadResources } from "../../../../actions/PostJob";
import {
  S_Selector,
  S_Tag_Autocomplete,
} from "../../../../ultis/SHelper/S_Help_Input";
import { history } from "../../../../ultis/history/history";

class PostJobComponent extends Component {
  constructor(props) {
    super(props);

    this.runUploadFile = this.runUploadFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.pushTopics = this.pushTopics.bind(this);
    this.getDate = this.getDate.bind(this);
    this.onHandleTextChange = this.onHandleTextChange.bind(this);

    this.state = {
      vacancy: "",
      salary: "",

      regex: /^[0-9\b]+$/,

      isValid: true,
    };

    this.addrRef = React.createRef();
  }

  runUploadFile() {
    document.getElementById("uploadImgMultiple").click();
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    window.history.scrollRestoration = "manual";
    console.log(window.history.scrollRestoration);
  }

  componentDidUpdate() {
    if (
      this.state.isValid === false &&
      this.props.AddJobReducer.fields.addressString === ""
    ) {
      console.log("FLAG");
      document
        .getElementsByClassName("MuiPaper-root")[0]
        .setAttribute("style", "border-color: #DC3545 !important");
    }
    // if (this.props.AddJobReducer.status === 1 && this.props.AddJobReducer.sending === false) {
    //     // window.location.replace("./dashboard/2")
    //     history.push('./dashboard/tab=4');
    // }
  }

  onHandleTextChange(e) {
    let text = e.target.value;

    // if value is not blank, then test the regex
    if (text === "" || this.state.regex.test(text)) {
      this.setState({ [e.target.id]: text });
    }
  }

  pushTopics() {
    let content = [];
    let { jobTopic } = this.props.GeneralReducer;
    for (let i = 0; i < jobTopic.length; i++) {
      content.push(
        <option value={jobTopic[i].id_jobtopic}>{jobTopic[i].name}</option>
      );
    }
    return content;
  }

  handleChange(fieldKey, fieldValue) {
    let { onUpdate } = this.props;
    onUpdate(fieldKey, fieldValue);
  }

  onSubmit(e) {
    e.preventDefault();
    let { onUpdate, onSend } = this.props;
    let isValid = 1;
    let dateViolation = 1;
    let jobTitleValue = document.getElementById("inputJobTitle").value;
    if (jobTitleValue !== "") {
      onUpdate("jobTitle", jobTitleValue);
    } else {
      isValid = 0;
    }
    let jobTopicValue = document.getElementById("jobTopicsSelector").value;
    if (jobTopicValue !== 0) {
      onUpdate("jobTopic", jobTopicValue);
    } else {
      isValid = 0;
    }
    let jobTypeValue = document.getElementById("jobTypeSelector").value;
    if (jobTypeValue !== 0) {
      onUpdate("jobType", jobTypeValue);
    } else {
      isValid = 0;
    }
    let jobDescriptionValue = document.getElementById("description").value;
    if (jobDescriptionValue !== "") {
      onUpdate("description", jobDescriptionValue);
    } else {
      isValid = 0;
    }
    let jobRequirementsValue = document.getElementById("requirements").value;
    onUpdate("requirements", jobRequirementsValue);
    let benefitValue = document.getElementById("benefit").value;
    onUpdate("benefit", benefitValue);
    let exprValue = document.getElementById("exprDateSelector").value;
    onUpdate("exprDate", exprValue);
    let isOnline = document.getElementById("isOnlineCheck").checked;
    onUpdate("isOnline", isOnline ? 1 : 0);
    let isDealable = document.getElementById("isDealableCheck").checked;
    onUpdate("isDealable", isDealable ? 1 : 0);
    let salary = this.state.salary;

    if (salary != 0) {
      onUpdate("salary", salary);
    } else {
      isValid = 0;
    }
    let vacancy = this.state.vacancy;
    if (vacancy != 0) {
      onUpdate("vacancy", vacancy);
    } else {
      isValid = 0;
    }

    let employer = this.props.HeaderReducer.user;
    let fields = this.props.AddJobReducer.fields;
    console.log(this.props.AddJobReducer.fields.tags);

    if (!fields.addressString) {
      isValid = 0;
    }

    let startDate = document.getElementById("startDateSelector").value;
    let endDate = document.getElementById("endDateSelector").value;

    if (
      (jobTypeValue == 1 && (startDate >= endDate || startDate <= exprValue)) ||
      (jobTypeValue == 2 && endDate <= exprValue)
    ) {
      dateViolation = 0;
    }

    if (isValid === 1 && dateViolation === 1) {
      let header = {
        employer: employer.id_user,
        title: fields.jobTitle,
        salary: fields.salary,
        job_topic: fields.jobTopic,
        address: fields.addressString.formatted_address,
        area_province: fields.addressString.address_components[3].long_name,
        area_district: fields.addressString.address_components[2].long_name,
        lat: fields.addressString.geometry.location.lat(),
        lng: fields.addressString.geometry.location.lng(),
        description: fields.description,
        expire_date: fields.exprDate,
        dealable: fields.isDealable,
        job_type: (Number.parseInt(fields.jobType) - 1).toString(),
        vacancy: fields.vacancy,
        isOnline: fields.isOnline,
        isDealable: fields.isDealable,
        isCompany: employer.isBusinessUser ? 1 : 0,
        requirement: fields.requirements,
        tag: fields.tags,
        images: fields.relatedImg,
        start_date: document.getElementById("startDateSelector").value,
        end_date: document.getElementById("endDateSelector").value,
        benefit: fields.benefit,
      };
      console.log(header);
      onSend(header);
    } else {
      let alertString = "";
      if (isValid === 0) {
        alertString += "Vui lòng nhập đủ các thông tin cần thiết!\n";
      }
      if (dateViolation === 0) {
        if (jobTypeValue == 1 && startDate >= endDate) {
          alertString +=
            "Ngày kết thúc phải cách ngày bắt đầu 1 ngày. Vui lòng sửa lại!\n";
        }
        if (jobTypeValue == 1 && exprValue >= startDate) {
          alertString +=
            "Công việc bắt đầu trước khi hết đợt tuyểt, vui lòng sửa lại!\n";
        }
        if (jobTypeValue == 2 && exprValue >= endDate) {
          alertString +=
            "Công việc kết trước khi hết đợt tuyểt, vui lòng sửa lại!\n";
        }
      }
      alert(alertString);
      window.scrollTo(0, 0);
      this.setState({ isValid: false });
    }
  }

  getDate() {
    let today = new Date();
    let maxExprDate = new Date();
    maxExprDate.setDate(maxExprDate.getDate() + 30);

    var td_dd = today.getDate();
    var td_mm = today.getMonth() + 1;
    var td_yyyy = today.getFullYear();
    if (td_dd < 10) {
      td_dd = "0" + td_dd;
    }
    if (td_mm < 10) {
      td_mm = "0" + td_mm;
    }

    var ft_dd = maxExprDate.getDate();
    var ft_mm = maxExprDate.getMonth() + 1;
    var ft_yyyy = maxExprDate.getFullYear();
    if (ft_dd < 10) {
      ft_dd = "0" + ft_dd;
    }
    if (ft_mm < 10) {
      ft_mm = "0" + ft_mm;
    }

    today = td_yyyy + "-" + td_mm + "-" + td_dd;
    maxExprDate = ft_yyyy + "-" + ft_mm + "-" + ft_dd;
    return { today, maxExprDate };
  }

  render() {
    return (
      <div className="dashboard-content-inner">
        {/* Dashboard Headline */}
        <div className="dashboard-headline">
          <h3>ĐĂNG CÔNG VIỆC</h3>
        </div>
        {/* Row */}
        <div className="row">
          {/* Dashboard Box */}
          <div className="col-xl-12">
            <div className="dashboard-box margin-top-0">
              {/* Headline */}
              <div className="headline">
                <h3>
                  <i className="icon-feather-folder-plus" />
                  Đơn đăng công việc
                </h3>
              </div>
              <div className="dashboard-content with-padding padding-bottom-10">
                <div className="row">
                  <div className="col-xl-8">
                    <div className="submit-field">
                      <h5>Tiêu đề</h5>
                      <input
                        autoComplete="off"
                        id="inputJobTitle"
                        type="text"
                        className={
                          "with-border " +
                          (this.state.isValid === false &&
                            this.props.AddJobReducer.fields.jobTitle === ""
                            ? "border-danger mb-0"
                            : "")
                        }
                      />
                      {this.state.isValid === false &&
                        this.props.AddJobReducer.fields.jobTitle === "" ? (
                          <span className={"text-danger pb-0 mb-0"}>
                            *Vui lòng nhập tiêu đề
                          </span>
                        ) : (
                          ""
                        )}
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="submit-field">
                      <h5>Lương cơ bản</h5>
                      <div className="input-with-icon">
                        <input
                          className={
                            "with-border " +
                            (this.state.isValid === false &&
                              this.state.salary == 0
                              ? "border-danger mb-0"
                              : "")
                          }
                          id="salary"
                          type="text"
                          value={this.state.salary}
                          onChange={this.onHandleTextChange}
                          placeholder={"Nhập thù lao"}
                        />
                        <i className="currency">VND</i>
                        {/* {(this.state.isValid === false && this.state.salary == 0 ? <span className={"text-danger pb-0 mb-0"} >*Số lượng tuyển tối thiểu 1</span> : ''
                                                        )} */}
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-8">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="submit-field">
                          <h5>Địa chỉ</h5>
                          <GoogleMapAutocomplete
                            className="border-danger"
                            id={"autocomplete"}
                            ref={this.addrRef}
                            value={
                              this.props.AddJobReducer.fields.addressString
                            }
                            onChange={this.handleChange}
                          ></GoogleMapAutocomplete>
                          {this.state.isValid === false &&
                            this.props.AddJobReducer.fields.addressString ===
                            "" ? (
                              <span className={"text-danger pb-0 mb-0"}>
                                *Vui lòng chọn địa chỉ gợi ý
                              </span>
                            ) : (
                              ""
                            )}
                        </div>
                      </div>

                      <div className="col-xl-6 mt-3">
                        <div className="submit-field">
                          <h5>Loại công việc</h5>
                          <S_Selector
                            className={
                              "with-border " +
                              (this.state.isValid === false &&
                                this.props.AddJobReducer.fields.jobType == 0
                                ? "border-danger"
                                : "")
                            }
                            id="jobTypeSelector"
                            data={this.props.AddJobReducer.jobTypes}
                            value_tag={"value"}
                            text_tag={"name"}
                            placeholder={"Phân loại công việc"}
                            handleChange={() => {
                              this.handleChange(
                                "jobType",
                                document.getElementById("jobTypeSelector").value
                              );
                            }}
                          ></S_Selector>
                          {this.state.isValid === false &&
                            this.props.AddJobReducer.fields.jobType == 0 ? (
                              <span className={"text-danger pb-0 mb-0"}>
                                *Vui lòng chọn phân loại
                              </span>
                            ) : (
                              ""
                            )}
                        </div>
                      </div>

                      <div className="col-xl-6 mt-3">
                        <div className="submit-field">
                          <h5>Chủ đề công việc</h5>
                          {/* <select id="jobTopicsSelector" className="selectpicker with-border" onMouseDown="if(this.options.length>5){this.size=5}" title="Select Category"> */}
                          <S_Selector
                            className={
                              "with-border " +
                              (this.state.isValid === false &&
                                this.props.AddJobReducer.fields.jobTopic == 0
                                ? "border-danger"
                                : "")
                            }
                            id="jobTopicsSelector"
                            data={this.props.GeneralReducer.jobTopic}
                            value_tag={"id_jobtopic"}
                            text_tag={"name"}
                            placeholder={"Chọn chủ đề"}
                            handleChange={() => {
                              this.handleChange(
                                "jobTopic",
                                document.getElementById("jobTopicsSelector").value
                              );
                            }}
                          ></S_Selector>
                          {this.state.isValid === false &&
                            this.props.AddJobReducer.fields.jobTopic == 0 ? (
                              <span className={"text-danger pb-0 mb-0"}>
                                *Vui lòng chọn chủ đề
                              </span>
                            ) : (
                              ""
                            )}
                        </div>

                      </div>

                      <div className="col-xl-6 mt-3">
                        <div className="submit-field">
                          {/* <div className="input-with-icon"> */}
                          <h5>Hạn chót xét tuyển</h5>
                          <input
                            id="exprDateSelector"
                            type="date"
                            min={this.getDate().today}
                            max={this.getDate().maxExprDate}
                            defaultValue={this.getDate().today}
                          ></input>
                          {/* </div> */}
                        </div>
                      </div>
                      <div className="col-xl-6 mt-3">
                        <div className="submit-field">
                          <h5>Số lượng vị trí</h5>
                          <div className="input-with-icon">
                            <input
                              id="vacancy"
                              className={
                                "with-border " +
                                (this.state.isValid === false &&
                                  this.state.vacancy == 0
                                  ? "border-danger mb-0"
                                  : "")
                              }
                              type="text"
                              placeholder={"Nhập số lượng cần tuyển"}
                              value={this.state.vacancy}
                              onChange={this.onHandleTextChange}
                            />
                            {this.state.isValid === false &&
                              this.state.vacancy == 0 ? (
                                <span className={"text-danger pb-0 mb-0"}>
                                  *Số lượng tuyển tối thiểu 1
                                </span>
                              ) : (
                                ""
                              )}
                          </div>
                        </div>
                      </div>

                      <div
                        className="col-xl-6 mt-3"
                        style={{
                          visibility:
                            this.props.AddJobReducer.fields.jobType == 2
                              ? "hidden"
                              : "visible",
                        }}
                      >
                        <div className="submit-field">
                          <h5>Ngày bắt đầu</h5>
                          <div className="input-with-icon">
                            <input
                              id="startDateSelector"
                              type="date"
                              min={this.getDate().maxExprDate}
                              defaultValue={this.getDate().maxExprDate}
                            ></input>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-6 mt-3">
                        <div className="submit-field">
                          <h5>Ngày kết thúc</h5>
                          <div className="input-with-icon">
                            <input
                              id="endDateSelector"
                              type="date"
                              min={this.getDate().maxExprDate}
                              defaultValue={this.getDate().maxExprDate}
                            ></input>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-6 mt-3">
                        <div className="submit-field">
                          <h5>Tính chất công việc</h5>
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="isOnlineCheck"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="isOnlineCheck"
                            >
                              Việc làm online
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 mt-3">
                        <div className="submit-field">
                          <h5 style={{ visibility: "hidden" }}>
                            Tính chất công việc
                          </h5>
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="isDealableCheck"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="isDealableCheck"
                            >
                              Cho phép thỏa thuận
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="submit-field">
                      <h5>
                        Tags <span>(optional)</span>{" "}
                        <i
                          className="help-icon"
                          data-tippy-placement="right"
                          title="Maximum of 10 tags"
                        />
                      </h5>
                      <div className="keywords-container">
                        {/* <div className="keyword-input-container">
                                                    <input type="text" className="keyword-input with-border" placeholder="e.g. job title, responsibilites" />
                                                    <button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add" /></button>
                                                </div> */}
                        <S_Tag_Autocomplete
                          id="tagAutocomplete"
                          handleChange={this.handleChange}
                          suggestions={this.props.GeneralReducer.jobTags}
                        ></S_Tag_Autocomplete>
                        {/* <div className="keywords-list">{}</div>                                                
                                                <div className="clearfix" /> */}
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-12">
                    <div className="submit-field">
                      <h5>Mô tả công việc</h5>
                      <textarea
                        id="description"
                        cols={30}
                        rows={5}
                        className={
                          "with-border " +
                          (this.state.isValid === false &&
                            this.props.AddJobReducer.fields.description === ""
                            ? "border-danger mb-0"
                            : "")
                        }
                        defaultValue={""}
                        placeholder="Mô tả công việc (bắt buộc)"
                      />
                      {this.state.isValid === false &&
                        this.props.AddJobReducer.fields.description === "" ? (
                          <span className={"text-danger pb-0 mb-0"}>
                            *Vui lòng nhập mô tả công việc
                          </span>
                        ) : (
                          ""
                        )}
                      <h5>Yêu cầu</h5>
                      <textarea
                        id="requirements"
                        cols={30}
                        rows={3}
                        className="with-border"
                        defaultValue={""}
                        placeholder="Yêu cầu chi tiết (nếu có)"
                      />
                      <h5>Phúc lợi</h5>
                      <textarea
                        id="benefit"
                        cols={30}
                        rows={3}
                        className="with-border"
                        defaultValue={""}
                        placeholder="Phúc lợi (nếu có)"
                      />
                      <div className="margin-top-30">
                        {/* <input className="uploadButton-input" type="button" id="upload" onClick={this.runUploadFile} /> */}
                        <div>
                          <MultipleImageUploadComponent
                            value={this.props.AddJobReducer.fields.relatedImg}
                            onChange={this.handleChange}
                          ></MultipleImageUploadComponent>
                        </div>
                        <div className="uploadButton mt-3">
                          <div>
                            <label
                              className="uploadButton-button ripple-effect"
                              onClick={this.runUploadFile}
                            >
                              Upload Files
                            </label>
                          </div>
                          <div>
                            <span className="uploadButton-file-name">
                              Images or documents that might be helpful in
                              describing your job
                            </span>
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
            {/* <a href="#" className="button ripple-effect big margin-top-30" onClick={this.onSubmit}><i className="icon-feather-plus" /> Post a Job</a> */}
            <button
              className="button ripple-effect big margin-top-30"
              onClick={this.onSubmit}
            >
              Post a Job
            </button>
          </div>
        </div>
        {/* Row / End */}
      </div>
    );
  }
}
// === Container

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSend: (header) => {
      dispatch(submitAddJobForm(header));
    },
    onUpdate: (key, value) => {
      dispatch({
        type: "UPDATE_FIELD",
        key,
        value,
      });
    },
  };
};

const PostJob = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostJobComponent)
);
export default PostJob;
