const initState = {
    productionJobList: [],
    temporalJoblist: [],
    topUsers: [],
}

const HomeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_PRODUCTION_JOBS_LIST':
            return {
                ...state,
                productionJobList: action.productionJobList,
            }
        case 'LOAD_TEMPORAL_JOBS_LIST':
            return {
                ...state,
                temporalJoblist: action.temporalJoblist,
            }
        case 'LOAD_TOP_USERS':
            return {
                ...state,
                topUsers: action.topUsers,
            }
        default:
            return state
    }
}

export default HomeReducer;