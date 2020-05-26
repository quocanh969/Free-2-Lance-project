import {getAllTopics} from '../services/job.services';

export const loadTop8Topic = () => {
    return dispatch => {

        getAllTopics()
        .then(res=>{
            console.log(res.data.data);
            dispatch(success(res.data.data.slice(0,8)));
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