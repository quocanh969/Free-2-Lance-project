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
  return axios.post('/users/editPersonalInfo',
    {
      personal,
    });
}

export { login, register, forgetPassword, activateAccount, resendActivationMail, verify, editPersonalInfo };
