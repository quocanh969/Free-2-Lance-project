import axios from "../ultis/axios/axios.default";

function getUser() {
  return axios.get("/users/getUser", {
    headers: {
      "Authorization": "Bearer " + JSON.parse(localStorage.getItem("token")),
    }
  })
}

function getTopUsers() {
  return axios.get('/getTopUsers');
}

export { getUser, getTopUsers };
