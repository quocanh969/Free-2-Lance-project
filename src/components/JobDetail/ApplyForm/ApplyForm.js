import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { applyJob } from "../../../actions/Job";

const maxSize = 52428800;
class ApplyFormConponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      proposed_price: null,
      isCVReceive: false,
    };
    this.applyJob = this.applyJob.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleChangeCV = this.handleChangeCV.bind(this);
  }

  componentDidMount() {
    document.getElementById("upload-cv").onchange = function () {
      if (this.files[0]) {
        if (this.files[0].size > maxSize) {
          Swal.fire({
            title: "CV bạn chọn quá lớn",
            icon: "error",
            confirmButtonText: "OK",
          });
          this.value = "";
        } else {
          Swal.fire({
            title: "Chọn CV thành công",
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      }
    };
  }

  getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  applyJob(e) {
    e.preventDefault();

    let introductionText = document.getElementById('introduction-text').value;
    let selectedFile = document.getElementById("upload-cv").files[0];    
    // get base64 of selectedFile

    if (selectedFile) {
      this.getBase64(selectedFile, (fileInBase64) => {
        let { user } = this.props.HeaderReducer;
        let { jobDetail } = this.props.JobDetailReducer;

        //check proposed price (valid from 50% to 100% of salary)
        let proposed_price = jobDetail.dealable
          ? this.state.proposed_price
          : jobDetail.salary;
        
        // if (proposed_price < jobDetail.salary / 2) {
        //   Swal.fire({
        //     title: "Lương mong muốn không được nhỏ hơn " + this.toCurrency(jobDetail.salary / 2),
        //     icon: "error",
        //     confirmButtonText: "OK",
        //   });
        // }
        // else 
        if (proposed_price > jobDetail.salary) {
          Swal.fire({
            title: "Lương mong muốn không được lớn hơn " + this.toCurrency(jobDetail.salary),
            icon: "error",
            confirmButtonText: "OK",
          });
        }
        else {//send apply job
          let { doApplyJob } = this.props;
          fileInBase64 = fileInBase64.split(",")[1];
          doApplyJob(
            user.id_user,
            jobDetail.id_job,
            proposed_price,
            fileInBase64,
            introductionText
          );
        }
      });
    } else {
      // Swal.fire({
      //   title: "Vui lòng chọn CV",
      //   icon: "error",
      //   confirmButtonText: "OK",
      // });
      let { user } = this.props.HeaderReducer;
      let { jobDetail } = this.props.JobDetailReducer;

      //check proposed price (valid from 50% to 100% of salary)
      let proposed_price = jobDetail.dealable
        ? this.state.proposed_price
        : jobDetail.salary;
      if (proposed_price < jobDetail.salary / 2) {
        Swal.fire({
          title: "Lương mong muốn không được nhỏ hơn " + this.toCurrency(jobDetail.salary / 2),
          icon: "error",
          confirmButtonText: "OK",
        });
      }
      else if (proposed_price > jobDetail.salary) {
        Swal.fire({
          title: "Lương mong muốn không được lớn hơn " + this.toCurrency(jobDetail.salary),
          icon: "error",
          confirmButtonText: "OK",
        });
      }
      else {//send apply job
        let { doApplyJob } = this.props;
        doApplyJob(
          user.id_user,
          jobDetail.id_job,
          proposed_price,
          '',
          introductionText,
        );
      }
    }
  }

  spinnerLoadingNotification() {
    let content = [];
    let { isApplying, appliedStatus } = this.props.JobDetailReducer;
    if (isApplying) {
      // sending ...
      content.push(
        <div className="loading" key={1}>
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    } else {
      content = [];
    }
    if (appliedStatus === 1) {//success -> close form
      document.getElementById("btnCloseApplyForm").click();
    }
    return content;
  }

  renderProposedPrice() {
    let { jobDetail } = this.props.JobDetailReducer;
    if (jobDetail.dealable) {
      return (
        <div className="input-with-icon-left">
          <i className="icon-material-outline-account-circle" />
          {/* <input
            type="number"
            className="input-text with-border"
            name="proposed_price"
            id="proposed_price"
            placeholder="Mức lương mong muốn (VNĐ)"
            required
            ref="proposed_price"
          /> */}
          {this.state.isEditing ? (
            <input
              type="number"
              className="input-text with-border"
              name="proposed_price"
              value={this.state.proposed_price}
              onChange={this.onChange.bind(this)}
              onBlur={this.toggleEditing.bind(this)}
              min={10}
              max={100}
              required
            />
          ) : (
              <input
                type="text"
                className="input-text with-border"
                name="proposed_price"
                value={this.toCurrency(this.state.proposed_price)}
                onFocus={this.toggleEditing.bind(this)}
                readOnly
              />
            )}
        </div>
      );
    } else return [];
  }

  onChange(event) {
    this.setState({ proposed_price: event.target.value });
  }

  handleChangeCV(e) {
    if (this.state.isCVReceive === false) {
      this.setState({ isCVReceive: true });
    }
  }

  toCurrency(number) {
    if (number === null) return "Mức lương (từ 50% đến 100% giá gốc)";
    const formatter = new Intl.NumberFormat("sv-SE", {
      style: "decimal",
      currency: "SEK",
    });

    return formatter.format(number) + " VND";
  }

  toggleEditing() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    let { jobDetail } = this.props.JobDetailReducer;
    return (
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Đăng kí ứng cử</h4>
          <button
            id="btnCloseApplyForm"
            type="button"
            className="close"
            data-dismiss="modal"
          >
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div className="sign-in-form">
            <div className="popup-tabs-container">
              {/* Tab */}
              <div className="popup-tab-content" id="tab">
                {/* Welcome Text */}
                <div className="welcome-text">
                  <h3>
                    {jobDetail.dealable
                      ? "Chọn mức lương mong muốn và CV"
                      : "Chọn CV của bạn"}
                  </h3>
                </div>
                {/* Form */}
                <form
                  method="post"
                  id="apply-now-form"
                  onSubmit={this.applyJob}
                >
                  {this.renderProposedPrice()}
                  <div className="uploadButton">
                    <input style={{ display: 'none' }}
                      type="file"
                      accept="image/*, application/pdf"
                      id="upload-cv"
                      onChange={this.handleChangeCV}
                    />
                    <label
                      className="uploadButton-button ripple-effect"
                      htmlFor="upload-cv"
                    >
                      Chọn CV
                    </label>
                    <span className="uploadButton-file-name">
                      Chỉ được chọn 1 <br /> Dung lượng tốc đa: 50 MB.
                    </span>
                  </div>
                  <div>
                    <label className='font-weight-bold'
                      htmlFor="introduction-text"
                    >
                      Tự giới thiệu:
                    </label>
                    <textarea class="form-control" id="introduction-text" placeholder="Tự giới thiệu bản thân .." required></textarea>
                  </div>

                  {(
                    this.state.isCVReceive
                      ?
                      <div className='text-center text-success'>
                        Đã nhận 1 CV
                    </div>
                      :
                      ''
                  )}
                </form>
                {this.spinnerLoadingNotification()}
                {/* Button */}
                <button
                  className="button margin-top-35 w-100 button-sliding-icon ripple-effect"
                  type="submit"
                  form="apply-now-form"
                >
                  Đăng kí{" "}
                  <i className="icon-material-outline-arrow-right-alt" />
                </button>
              </div>
            </div>
          </div>
        </div>
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
    doApplyJob: (id_user, id_job, proposed_price, attachment, introductionText) => {
      dispatch(applyJob(id_user, id_job, proposed_price, attachment, introductionText));
    },
  };
};

const ApplyForm = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ApplyFormConponent)
);
export default ApplyForm;
