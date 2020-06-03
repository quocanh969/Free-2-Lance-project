import axios from "../ultis/axios/axios.default";

function changePassword(old_password, new_password) {
  return axios.put("/users/changePassword", {
    old_password,
    new_password,
  });
}

export { changePassword };
