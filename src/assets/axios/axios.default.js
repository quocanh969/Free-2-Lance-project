import Axios from "axios";
import { MyStore } from "../..";
import { history } from "../history/history";

let token = "";
if (localStorage.getItem("user") && localStorage.getItem("user").token) {
  token = "Bearer " + JSON.stringify(localStorage.getItem("user").token);
  console.log("token");
}

let axios = Axios.create({
  baseURL: "http://localhost:8000/",
  headers: { "Content-Type": "application/json" },
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    if (error.response.status === 401) {
      console.log(error.response.data);
      alert(error.response.data.message);

      localStorage.setItem("user", null);
      localStorage.setItem("token", null);

      history.push("/login");
      MyStore.dispatch({
        type: "USER_LOG_OUT",
      });
    }
    return Promise.reject(error);
  }
);

export default axios;
