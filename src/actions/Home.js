import { getAllTopics, getJobsList, getTags } from '../services/job.services';
import { getAllAreas, getStatistic, getAllDistrictsFromArea } from '../services/other.services';
import { getTopUsers } from '../services/user.services';

export const loadTopics = () => {
    return dispatch => {
        getAllTopics()
            .then(res => {
                dispatch(success(res.data.data));
            })
            .catch(err => {
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

export const loadTags = () => {
    return dispatch => {
        getTags()
            .then(res => {
                dispatch(success(res.data.data));
            })
            .catch(err => {
                console.log(err);
            })
    }

    function success(jobTag) {
        return {
            type: 'LOAD_JOB_TAGS',
            jobTag,
        }
    }
}

export const loadAreas = () => {
    return dispatch => {
        getAllAreas()
            .then(res => {
                dispatch(success(res.data.data));
            })
            .catch(err => {
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

export const loadDistricts = (id_province) => {
    return dispatch => {
        getAllDistrictsFromArea(id_province)
            .then(res => {
                dispatch(success(res.data.data));
            })
            .catch(err => {
                console.log(err);
            })
    }

    function success(districts) {
        return {
            type: 'LOAD_DISTRICTS',
            districts,
        }
    }
}

export const loadProductionJobs = (page, take) => {
    return dispatch => {
        let query = {
            job_type: '1',
        }

        getJobsList(page, take, 1, query)
            .then(res => {
                dispatch(success(res.data.data.jobList));
            })
            .catch(err => {
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

        getJobsList(page, take, 1, query)
            .then(res => {
                dispatch(success(res.data.data.jobList));
            })
            .catch(err => {
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

export const loadTopUsers = () => {
    return dispatch => {
        getTopUsers()
            .then(res => {
                dispatch(success(res.data.data));
            })
            .catch(err => {
                console.log(err);
            })
    }

    function success(topUsers) {
        return {
            type: 'LOAD_TOP_USERS',
            topUsers,
        }
    }
}

export const loadStatistic = () => {
    return dispatch => {
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
}