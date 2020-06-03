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
        case 'LOAD_TAGS': 
            return {
                ...state,
                jobTags: action.jobTag,
            }
        default:
            return state
    }
}

export default HomeReducer;