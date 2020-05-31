import {getAllTopics, getJobsList} from '../services/job.services';
import { getAllAreas } from '../services/other.services';

export const loadTopics = () => {
    return dispatch => {
        getAllTopics()
        .then(res=>{
            dispatch(success(res.data.data));
        })
        .catch(err=>{
            console.log(err);
        })
    }

    function success(jobTopic) {
        return {
            type: 'LOAD_JOB_TOPICS',
            jobTopic,
        }
    }
}

export const loadAreas = () => {
    return dispatch => {
        getAllAreas()
        .then(res=>{
            dispatch(success(res.data.data));
        })
        .catch(err=>{
            console.log(err);
        })
    }

    function success(areas) {
        return {
            type: 'LOAD_AREAS',
            areas,
        }
    }
}

export const loadProductionJobs = (page, take) => {
    return dispatch => {
        let query = {
            job_type: '1',
        }

        getJobsList(page, take, query)
        .then(res=>{
            dispatch(success(res.data.data.jobList));
        })
        .catch(err=>{
            console.log(err);
        })
    }

    function success(productionJobList) {
        return {
            type: 'LOAD_PRODUCTION_JOBS_LIST',
            productionJobList,
        }
    }
}

export const loadTemporalJobs = (page, take) => {
    return dispatch => {
        let query = {
            job_type: '0',
        }

        getJobsList(page, take, query)
        .then(res=>{
            dispatch(success(res.data.data.jobList));
        })
        .catch(err=>{
            console.log(err);
        })
    }

    function success(temporalJoblist) {
        return {
            type: 'LOAD_TEMPORAL_JOBS_LIST',
            temporalJoblist,
        }
    }
}