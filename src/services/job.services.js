import axios from "../ultis/axios/axios.default";

function postJob(address) {
    return;
}

function getAllTopics() {
    return axios.get('/allJobsTopics');
}

function getJobsList(page, take, query) {
    return axios.post('/getJobsList',{
        page,
        take,
        query,
    })
}

export { postJob, getAllTopics, getJobsList };