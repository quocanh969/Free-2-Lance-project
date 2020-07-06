const initState = {
    jobList: [],
    page: 1,
    total: 0,
    isSending: false,
}

const JobsListReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_JOB_LIST':
            return {
                ...state,
                jobList: action.jobList,
                page: action.page,
                total: action.total,
                isSending: false,
            }
        case 'LOADING_JOB_LIST':
            return {
                ...state,
                isSending: true,
            }
        case 'LOAD_JOB_LIST_FAILURE':
            return {
                ...state,
                isSending: false,
            }
        default:
            return state
    }
}

export default JobsListReducer;