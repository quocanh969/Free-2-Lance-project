import Swal from "sweetalert2";
import { history } from "../ultis/history/history";
import { getDetailReview } from "../services/other.services";

export const loadDetailReview = (applicantId, isEmployer) => {
    // isEmployer đánh dấu nếu đây là yêu cầu lấy detail review từ người chủ
  return (dispatch) => {
    dispatch(finishLoading(-1, 1, ''));
    getDetailReview(applicantId)
      .then((res) => {
        if (res.data.code === "200") {
            if(res.data.data.code === 1) { // đã tồn tại
                if(isEmployer) {
                    dispatch(finishLoading(1, res.data.data.review.rating_fromEmployer, res.data.data.review.feedback_fromEmployer));
                }
                else {
                    dispatch(finishLoading(1, res.data.data.review.rating_fromEmployee, res.data.data.review.feedback_fromEmployee))
                }
            }
            else { // ko có
                dispatch(finishLoading(0, 1, ''));
            }
        } 
        else {
          dispatch(finishLoading(-2, 1, ''));
          Swal.fire({
            title: "Đã có lỗi trong quá trình kết nói server",
            icon: "error",
          })
        }
      })
      .catch((err) => {
        dispatch(finishLoading(-2, 1, ''));
        console.log(err);
        Swal.fire({
            title: "Đã có lỗi trong quá trình kết nói server",
            icon: "error",
          })
      });
  };

  function finishLoading(code, rating, feedback) {
    return {
      type: "LOAD_DETAIL_REVIEW",
      code,
      rating,
      feedback,
    };
  }
};
