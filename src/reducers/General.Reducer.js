const initState = {
    jobTopic: [],
    isLoadingJobTopic: false,
    areas: [],
    isLoadingAreas: false,
    jobTags: [],
    isLoadingJobTags: false,
    districts: [],
    isLoadingDistricts: false,
}

const GeneralReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_JOB_TOPICS':
            return {
                ...state,
                jobTopic: action.jobTopic,
                isLoadingJobTopic: false,
            }
        case 'LOADING_JOB_TOPICS':
            return {
                ...state,
                isLoadingJobTopic: true,
            }
        case 'LOAD_JOB_TOPICS_FAILURE':
            return {
                ...state,
                isLoadingJobTopic: false,
            }
        case 'LOAD_AREAS':
            return {
                ...state,
                areas: action.areas,
                isLoadingAreas: false,
            }
        case 'LOADING_AREAS':
            return {
                ...state,
                isLoadingAreas: true,
            }
        case 'LOAD_AREAS_FAILURE':
            return {
                ...state,
                isLoadingAreas: false,
            }
        case 'LOAD_DISTRICTS':
            return {
                ...state,
                districts: action.districts,
                isLoadingDistricts: false,
            }
        case 'LOADING_DISTRICTS':
            return {
                ...state,
                isLoadingDistricts: true,
            }
        case 'LOAD_DISTRICTS_FAILURE':
            return {
                ...state,
                isLoadingDistricts: false,
            }
        case 'LOAD_JOB_TAGS':
            return {
                ...state,
                jobTags: action.jobTag,
                isLoadingJobTags: false,
            }
        case 'LOADING_JOB_TAGS':
            return {
                ...state,
                isLoadingJobTags: true,
            }
        case 'LOAD_JOB_TAGS_FAILURE':
            return {
                ...state,
                isLoadingJobTags: false,
            }
        default:
            return state
    }
}

export default GeneralReducer;