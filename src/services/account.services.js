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
  console.log("hahahahhasdjashdkj");
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

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        //logout();
        //window.location.reload(true);
        alert("code: 401");
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

export { login, register, forgetPassword, activateAccount, resendActivationMail, verify };
