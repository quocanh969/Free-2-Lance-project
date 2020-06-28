import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { applyJob } from "../../../actions/Job";

const maxSize = 52428800;
class ApplyFormConponent extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false, proposed_price: null };
    this.applyJob = this.applyJob.bind(this);
    this.onChange = this.onChange.bind(this);
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
    let selectedFile = document.getElementById("upload-cv").files[0];
    // get base64 of selectedFile

    if (selectedFile) {
      this.getBase64(selectedFile, (fileInBase64) => {
        let { user } = this.props.HeaderReducer;
        let { jobDetail } = this.props.JobDetailReducer;
        let proposed_price = jobDetail.dealable
          ? this.state.proposed_price
          : jobDetail.salary;
        let { doApplyJob } = this.props;
        fileInBase64 = fileInBase64.split(",")[1];
        doApplyJob(
          user.id_user,
          jobDetail.id_job,
          proposed_price,
          fileInBase64
        );
        document.getElementById("btnCloseApplyForm").click();
      });
    } else {
      Swal.fire({
        title: "Vui lòng chọn CV",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
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

  toCurrency(number) {
    if (number === null) return "Mức lương mong muốn (VNĐ)";
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
                    <input
                      className="uploadButton-input"
                      type="file"
                      accept="image/*, application/pdf"
                      id="upload-cv"
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
                </form>
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
    doApplyJob: (id_user, id_job, proposed_price, attachment) => {
      dispatch(applyJob(id_user, id_job, proposed_price, attachment));
    },
  };
};

const ApplyForm = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ApplyFormConponent)
);
export default ApplyForm;
