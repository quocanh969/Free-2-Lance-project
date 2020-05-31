const initState = {
    jobTopic: [],
    areas: [],
}

const GeneralReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_JOB_TOPICS':
            return {
                ...state,
                jobTopic: action.jobTopic,
            }
        case 'LOAD_AREAS':
            return {
                ...state,
                areas: action.areas,
            }
        default:
            return state
    }
}

export default GeneralReducer;