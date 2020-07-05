const initState = {
    productionJobList: [],
    isLoadingProductionJobList: false,
    temporalJoblist: [],
    isLoadingTemporalJoblist: false,
    topUsers: [],
    isLoadingTopUsers: false,
    memberNum: 0,
    finishedJobNum: 0,
    applyingJobNum: 0,
    proccessingJobNum: 0,
    isLoadingStatistic: false,
}

const HomeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_PRODUCTION_JOBS_LIST':
            return {
                ...state,
                productionJobList: action.productionJobList || [],
                isLoadingProductionJobList: false,
            }
        case 'LOADING_PRODUCTION_JOBS_LIST':
            return {
                ...state,
                isLoadingProductionJobList: true,
            }
        case 'LOAD_PRODUCTION_JOBS_LIST_FAILURE':
            return {
                ...state,
                isLoadingProductionJobList: false,
            }
        case 'LOAD_TEMPORAL_JOBS_LIST':
            return {
                ...state,
                temporalJoblist: action.temporalJoblist || [],
                isLoadingTemporalJoblist: false,
            }
        case 'LOADING_TEMPORAL_JOBS_LIST':
            return {
                ...state,
                isLoadingTemporalJoblist: true,
            }
        case 'LOAD_TEMPORAL_JOBS_LIST_FAILURE':
            return {
                ...state,
                isLoadingTemporalJoblist: false,
            }
        case 'LOAD_TOP_USERS':
            return {
                ...state,
                topUsers: action.topUsers || [],
                isLoadingTopUsers: false,
            }
        case 'LOADING_TOP_USERS':
            return {
                ...state,
                isLoadingTopUsers: true,
            }
        case 'LOAD_TOP_USERS_FAILURE':
            return {
                ...state,
                isLoadingTopUsers: false,
            }
        case 'LOAD_STATISTIC':
            return {
                ...state,
                memberNum: action.memberNum,
                finishedJobNum: action.finishedJobNum,
                applyingJobNum: action.applyingJobNum,
                proccessingJobNum: action.proccessingJobNum,
                isLoadingStatistic: false,
            }
        case 'LOADING_STATISTIC':
            return {
                ...state,
                isLoadingStatistic: true,
            }
        case 'LOAD_STATISTIC_FAILURE':
            return {
                ...state,
                isLoadingStatistic: false,
            }
        default:
            return state
    }
}

export default HomeReducer;