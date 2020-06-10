import Axios from "axios";
import { MyStore } from "../..";
import { history } from "../../ultis/history/history";

let token = "";
if (localStorage.getItem("user")) {
  token = "Bearer " + JSON.stringify(JSON.parse(localStorage.getItem("user")).currentToken);
  console.log("token: ", token);
}

let axios = Axios.create({
  baseURL: "http://localhost:8000/",
  headers: { 
    "Content-Type": "application/json", 
    "Authorization": token,
  },
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    if (error.response.status === 401) {
      console.log(error.response);
      // alert(error.response);
      // alert('Đăng nhập đi ba');

      localStorage.setItem("user", null);
      localStorage.setItem("token", null);

      // history.push("/login");
      window.location.href = './login';
      MyStore.dispatch({
        type: "USER_LOG_OUT",
      });
    }
    return Promise.reject(error);
  }
);

export default axios;
