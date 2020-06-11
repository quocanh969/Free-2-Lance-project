const initState = {
    jobList: [],
    page: 1,
    total: 0,
}

const JobsListReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_JOB_LIST':
            return {
                ...state,
                jobList: action.jobList,
                page: action.page,
                total: action.total,
            }
        default:
            return state
    }
}

export default JobsListReducer;