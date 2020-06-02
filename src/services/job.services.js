import axios from "../ultis/axios/axios.default";

function postJob(address) {
    return;
}

function getAllTopics() {
    return axios.get('/allJobsTopics');
}

function getJobsList(page, take, isASC, query) {
    return axios.post('/getJobsList',{
        page,
        take,
        isASC,
        query,
    })
}

export { postJob, getAllTopics, getJobsList };