import {getAllTopics} from '../services/job.services';

export const loadTopics = () => {
    return dispatch => {

        getAllTopics()
        .then(res=>{
            console.log(res.data.data);
            dispatch(success(res.data.data));
        })
        .catch(err=>{
            console.log(err);
        })
    }

    function success(jobTopic) {
        return {
            type: 'LOAD_TOP_JOB_TOPICS',
            jobTopic,
        }
    }
}