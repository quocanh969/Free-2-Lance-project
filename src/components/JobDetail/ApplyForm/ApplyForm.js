import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { applyJob } from "../../../actions/Job";

const maxSize = 52428800;
class ApplyFormConponent extends Component {
  constructor(props) {
    super(props);
    this.applyJob = this.applyJob.bind(this);
  }

  componentDidMount() {
    document.getElementById("upload-cv").onchange = function () {
      console.log(this.files[0]);
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
    };
  }

  applyJob(e) {
    e.preventDefault();
    let selectedFile = document.getElementById("upload-cv").files[0];
    if (selectedFile) {
      //let user = JSON.parse(localStorage.getItem("user"));

      let { jobDetail } = this.props.JobDetailReducer;
      let proposed_price = this.refs.proposed_price.value;
      let { doApplyJob } = this.props;
      doApplyJob(121, jobDetail.id_job, proposed_price, selectedFile);
    } else {
      Swal.fire({
        title: "Vui lòng chọn CV",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }

  render() {
    return (
      <div className="sign-in-form">
        <div className="popup-tabs-container">
          {/* Tab */}
          <div className="popup-tab-content" id="tab">
            {/* Welcome Text */}
            <div className="welcome-text">
              <h3>Chọn mức lương mong muốn và CV</h3>
            </div>
            {/* Form */}
            <form method="post" id="apply-now-form" onSubmit={this.applyJob}>
              <div className="input-with-icon-left">
                <i className="icon-material-outline-account-circle" />
                <input
                  type="number"
                  className="input-text with-border"
                  name="proposed_price"
                  id="proposed_price"
                  placeholder="Mức lương mong muốn (VNĐ)"
                  required
                  ref="proposed_price"
                />
              </div>

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
              Đăng kí <i className="icon-material-outline-arrow-right-alt" />
            </button>
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
      console.log(id_user, id_job, proposed_price, attachment);
      dispatch(applyJob(id_user, id_job, proposed_price, attachment));
    },
  };
};

const ApplyForm = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ApplyFormConponent)
);
export default ApplyForm;
