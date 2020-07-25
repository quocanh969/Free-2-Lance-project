import axios from "../ultis/axios/axios.default";

function getUserStatistic() {
  return axios.get("/users/getUserStatistic");
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

function loadTransactionByUserId(page, take) {
  return axios.post("/users/getTransactionsByIdUser", {
    take,
    page
  });
}

export { getUserStatistic, getTopUsers, loadOtherUserDetail, loadReviewByEmployerId, loadReviewByEmployeeId, loadTransactionByUserId};
