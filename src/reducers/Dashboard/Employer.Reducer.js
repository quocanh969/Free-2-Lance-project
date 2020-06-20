const initState = {
    // =====
    applyingJobsList: [],
    totalApplyingPages: 0,
    currentApplyingPage: 0,
    // =====
    processingJobsList: [],
    totalProcessingPages: 0,
    currentProcessingPage: 0,
    // =====
    finishedJobsList: [],
    totalFinishedPages: 0,
    currentFinishedPage: 0,
}

const EmployerReducer = (state = initState, action) => {
    switch (action.type) {
        case 'EMPLOYER_APPLYING_JOBS_UPDATE':
            return {
                ...state,
                applyingJobsList: action.jobList,
                totalApplyingPages: action.total,
                currentApplyingPage: action.page,
            };
        case 'EMPLOYER_APPLYING_JOBS_RESET':
            return {
                ...state,
                applyingJobsList: [],
                totalApplyingPages: 0,
                currentApplyingPage: 0,
            };
        case 'EMPLOYER_PROCESSING_JOBS_UPDATE':
            return {
                ...state,
                processingJobsList: action.jobList,
                totalProcessingPages: action.total,
                currentProcessingPage: action.page,
            };
        case 'EMPLOYER_PROCESSING_JOBS_RESET':
            return {
                ...state,
                processingJobsList: [],
                totalProcessingPages: 0,
                currentProcessingPage: 0,
            };
        case 'EMPLOYER_FINISHED_JOBS_UPDATE':
            return {
                ...state,
                finishedJobsList: action.jobList,
                totalFinishedPages: action.total,
                currentFinishedPage: action.page,
            };
        case 'EMPLOYER_FINISHED_JOBS_RESET':
            return {
                ...state,
                finishedJobsList: [],
                totalFinishedPages: 0,
                currentFinishedPage: 0,
            };
        default:
            return state
    }
}

export default EmployerReducer;