/* Area */
import axios from "../ultis/axios/axios.default";

function getAllAreas() {
    return axios.get('/getAllProvinces');
}


export { getAllAreas };