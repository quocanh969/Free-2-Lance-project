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

export { getUser, getTopUsers, loadOtherUserDetail };
