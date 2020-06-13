import axios from "../ultis/axios/axios.default";

function login(email, password) {
  // const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({username, password})
  // };

  // console.log('flag 1');
  // return fetch(`http://localhost:8000/login`, requestOptions)
  //     .then(handleResponse);

  return axios.post("/login", {
    email,
    password,
  });
}

function getUserInfo() {
  return axios.get('/users/me');
}

function verify() {
  return axios.get("/users/")  
}

function register(account) {
  return axios.post("/signup", {
    ...account,
  });
}

function forgetPassword(email) {
  return axios.post("/forgetPassword", {
    email,
  });
}

function activateAccount(token) {
  return axios.put(`/activation/${token}`, {
    token,
  });
}

function resendActivationMail(email) {
  return axios.post("/resendActivation", {
    email,
  });
}

function editPersonalInfo(personal) {
  return axios.put('/users/editPersonalInfo',personal);
}

function editCompanyInfo(company) {
  return axios.put('/users/editCompanyInfo',company);
}

export { login, getUserInfo, register, forgetPassword, activateAccount, resendActivationMail, verify, editPersonalInfo, editCompanyInfo};
