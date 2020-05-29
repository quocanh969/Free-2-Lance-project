import axios from "../ultis/axios/axios.default";

function postJob(address) {
    return;
}

function getAllTopics() {
    return axios.get('/allJobsTopics');
}

export { postJob, getAllTopics };