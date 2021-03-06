import Axios from "axios";
import { MyStore } from "../..";
import Swal from 'sweetalert2';
import { history } from "../../ultis/history/history";

let axios = Axios.create({
  baseURL: "https://f2l-client.herokuapp.com/",
  // baseURL: "http://localhost:8000/",
  headers: { "Content-Type": "application/json" },
});

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  //get token  
  let token = JSON.parse(localStorage.getItem("client_token"));
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    if(!error.response) {
      localStorage.clear();
      // history.push("/login");
      history.push('/login');
      MyStore.dispatch({
        type: "USER_LOG_OUT",
      });
    }
    else if (error.response.status === 401) {
      console.log(error.response);
      // alert(error.response);
      Swal.fire({
        text: 'Tài khoản của bạn đã hết hạn đăng nhập hoặc là có ai khác đã đăng nhập vào',
        title: 'Vui lòng đăng nhập lại',
        icon: "warning",
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.value) {
          localStorage.clear();
          history.push("/login");
          MyStore.dispatch({
            type: "USER_LOG_OUT",
          });
        }
      });;
    }
    return Promise.reject(error);
  }
);

export default axios;
