import axios from "../ultis/axios/axios.default";

function postJob(address) {
    return;
}

function getAllTopics() {
    return axios.get('/allJobsTopics');
}

function getAllTags() {
    return axios.get('');
}

export { postJob, getAllTopics };