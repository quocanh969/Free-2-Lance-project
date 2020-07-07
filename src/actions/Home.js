import { getAllTopics, getJobsList, getTags } from '../services/job.services';
import { getAllAreas, getStatistic, getAllDistrictsFromArea } from '../services/other.services';
import { getTopUsers } from '../services/user.services';

export const loadTopics = () => {
    return dispatch => {
        dispatch(loading());
        getAllTopics()
            .then(res => {
                dispatch(success(res.data.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(failure());
            })
    }

    function success(jobTopic) {
        return {
            type: 'LOAD_JOB_TOPICS',
            jobTopic,
        }
    }
    function loading() {
        return {
            type: 'LOADING_JOB_TOPICS',
        }
    }
    function failure() {
        return {
            type: 'LOAD_JOB_TOPICS_FAILURE',
        }
    }
}

export const loadTags = () => {
    return dispatch => {
        dispatch(loading());
        getTags()
            .then(res => {
                dispatch(success(res.data.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(failure());
            })
    }

    function success(jobTag) {
        return {
            type: 'LOAD_JOB_TAGS',
            jobTag,
        }
    }
    function loading() {
        return {
            type: 'LOADING_JOB_TAGS',
        }
    }
    function failure() {
        return {
            type: 'LOAD_JOB_TAGS_FAILURE',
        }
    }
}

export const loadAreas = () => {
    return dispatch => {
        dispatch(loading());
        getAllAreas()
            .then(res => {
                dispatch(success(res.data.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(failure());
            })
    }

    function success(areas) {
        return {
            type: 'LOAD_AREAS',
            areas,
        }
    }
    function loading() {
        return {
            type: 'LOADING_AREAS',
        }
    }
    function failure() {
        return {
            type: 'LOAD_AREAS_FAILURE',
        }
    }
}

export const loadDistricts = (id_province) => {
    return dispatch => {
        dispatch(loading());
        getAllDistrictsFromArea(id_province)
            .then(res => {
                dispatch(success(res.data.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(failure());
            })
    }

    function success(districts) {
        return {
            type: 'LOAD_DISTRICTS',
            districts,
        }
    }
    function loading() {
        return {
            type: 'LOADING_DISTRICTS',
        }
    }
    function failure() {
        return {
            type: 'LOAD_DISTRICTS_FAILURE',
        }
    }
}

export const loadProductionJobs = (page, take) => {
    return dispatch => {
        let query = {
            job_type: '1',
        }
        dispatch(loading());
        getJobsList(page, take, 1, query)
            .then(res => {
                dispatch(success(res.data.data.jobList));
            })
            .catch(err => {
                console.log(err);
                dispatch(failure());
            })
    }

    function success(productionJobList) {
        return {
            type: 'LOAD_PRODUCTION_JOBS_LIST',
            productionJobList,
        }
    }
    function loading() {
        return {
            type: 'LOADING_PRODUCTION_JOBS_LIST',
        }
    }
    function failure() {
        return {
            type: 'LOAD_PRODUCTION_JOBS_LIST_FAILURE',
        }
    }
}

export const loadTemporalJobs = (page, take) => {
    return dispatch => {
        let query = {
            job_type: '0',
        }
        dispatch(loading());
        getJobsList(page, take, 1, query)
            .then(res => {
                dispatch(success(res.data.data.jobList));
            })
            .catch(err => {
                console.log(err);
                dispatch(failure());
            })
    }

    function success(temporalJoblist) {
        return {
            type: 'LOAD_TEMPORAL_JOBS_LIST',
            temporalJoblist,
        }
    }
    function loading() {
        return {
            type: 'LOADING_TEMPORAL_JOBS_LIST',
        }
    }
    function failure() {
        return {
            type: 'LOAD_TEMPORAL_JOBS_LIST_FAILURE',
        }
    }
}

export const loadTopUsers = () => {
    return dispatch => {
        dispatch(loading());
        getTopUsers()
            .then(res => {
                dispatch(success(res.data.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(failure());
            })
    }

    function success(topUsers) {
        return {
            type: 'LOAD_TOP_USERS',
            topUsers,
        }
    }
    function loading() {
        return {
            type: 'LOADING_TOP_USERS',
        }
    }
    function failure() {
        return {
            type: 'LOAD_TOP_USERS_FAILURE',
        }
    }
}

export const loadStatistic = () => {
    return dispatch => {
        dispatch(loading());
        getStatistic().then(res => {
            if (res.data.code === 1) {
                // let memberNum = Number.parseInt(res.data.data.memberNum);
                // let finishedJobNum = Number.parseInt(res.data.data.finishedJobNum);
                // let applyingJobNum = Number.parseInt(res.data.data.applyingJobNum);
                // let proccessingJobNum = Number.parseInt(res.data.data.proccessingJobNum);
                dispatch(success(res.data.data.memberNum, res.data.data.finishedJobNum, res.data.data.applyingJobNum, res.data.data.proccessingJobNum));
            }
        }).catch(err => {
            console.log(err);
            dispatch(failure());
        })
    }

    function success(memberNum, finishedJobNum, applyingJobNum, proccessingJobNum) {
        return {
            type: 'LOAD_STATISTIC',
            memberNum,
            finishedJobNum,
            applyingJobNum,
            proccessingJobNum,
        }
    }
    function loading() {
        return {
            type: 'LOADING_STATISTIC',
        }
    }
    function failure() {
        return {
            type: 'LOAD_STATISTIC_FAILURE',
        }
    }
}