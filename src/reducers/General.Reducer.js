const initState = {
    jobTopic: [],
}

const HomeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_TOP_JOB_TOPICS':
            return {
                ...state,
                jobTopic: action.jobTopic,
            }
        default:
            return state
    }
}

export default HomeReducer;