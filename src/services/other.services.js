/* Area */
import axios from "../ultis/axios/axios.default";

function getAllAreas() {
    return axios.get('/getAllProvinces');
}


function getStatistic() {
    return axios.get('/getStatistic');
}


export { getAllAreas, getStatistic };