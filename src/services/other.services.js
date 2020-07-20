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

function getDetailReport(id_user2, type, applicantId, jobId) {
    return axios.post('/getDetailReport', {
        id_user2,
        type,
        applicantId,
        jobId,
    })
}


export { getAllAreas, getStatistic, getAllDistrictsFromArea, getDetailReview, getDetailReport };