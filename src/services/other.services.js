/* Area */
import axios from "../ultis/axios/axios.default";

function getAllAreas() {
    return axios.get('/getAllProvinces');
}

function getAllDistrictsFromArea(id) {
    return axios.get(`/getDistricts/${id}`)
}

function getStatistic() {
    return axios.get('/getStatistic');
}

function getDetailReview(id_applicant) {
    return axios.post('/getDetailReview', {
        id_applicant,
    })
}


export { getAllAreas, getStatistic, getAllDistrictsFromArea, getDetailReview };