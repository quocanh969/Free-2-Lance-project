const initState = {
    productionJobList: [],
    temporalJoblist: [],
    topUsers: [],
    memberNum: 0,
    finishedJobNum: 0,
    applyingJobNum: 0,
    proccessingJobNum: 0,
}

const HomeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_PRODUCTION_JOBS_LIST':
            return {
                ...state,
                productionJobList: action.productionJobList || [],
            }
        case 'LOAD_TEMPORAL_JOBS_LIST':
            return {
                ...state,
                temporalJoblist: action.temporalJoblist || [],
            }
        case 'LOAD_TOP_USERS':
            return {
                ...state,
                topUsers: action.topUsers || [],
            }
        case 'LOAD_STATISTIC':
            return {
                ...state,
                memberNum: action.memberNum,
                finishedJobNum: action.finishedJobNum,
                applyingJobNum: action.applyingJobNum,
                proccessingJobNum: action.proccessingJobNum,
            }        
        default:
            return state
    }
}

export default HomeReducer;