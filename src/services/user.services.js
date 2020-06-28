import axios from "../ultis/axios/axios.default";

function getUser() {
  return axios.get("/users/getUser", {
    headers: {
      Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
    },
  });
}

function getTopUsers() {
  return axios.get("/getTopUsers");
}

function loadOtherUserDetail(id) {
  return axios.get("/getUserInfoNotPrivate/" + id);
}

function loadReviewByEmployerId(page, take, employer) {
  return axios.post("/getReviewListByEmployerId", {
    employer,
    take,
    page
  });
}

function loadReviewByEmployeeId(page, take, employee) {
  return axios.post("/getReviewListByEmployeeId", {
    employee,
    take,
    page
  });
}

export { getUser, getTopUsers, loadOtherUserDetail, loadReviewByEmployerId, loadReviewByEmployeeId};
