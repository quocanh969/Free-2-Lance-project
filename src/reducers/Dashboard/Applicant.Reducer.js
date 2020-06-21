const initState = {
    // =====
    applyingTasksList: [],
    totalApplyingTasks: 0,
    currentApplyingPage: 0,
    // =====
    processingTasksList: [],
    totalProcessingTasks: 0,
    currentProcessingPage: 0,
    // =====
    finishedTasksList: [],
    totalFinishedTasks: 0,
    currentFinishedPage: 0,
}

const ApplicantReducer = (state = initState, action) => {
    switch (action.type) {
        case 'APPLICANT_APPLYING_TASK_UPDATE':
            return {
                ...state,
                applyingTasksList: action.jobList,
                totalApplyingTasks: action.total,
                currentApplyingPage: action.page,
            };
        case 'APPLICANT_APPLYING_TASK_RESET':
            return {
                ...state,
                applyingTasksList: [],
                totalApplyingTasks: 0,
                currentApplyingPage: 0,
            };
        case 'APPLICANT_PROCESSING_TASK_UPDATE':
            return {
                ...state,
                processingTasksList: action.jobList,
                totalProcessingTasks: action.total,
                currentProcessingPage: action.page,
            };
        case 'APPLICANT_PROCESSING_TASK_RESET':
            return {
                ...state,
                processingTasksList: [],
                totalProcessingTasks: 0,
                currentProcessingPage: 0,
            };
        case 'APPLICANT_FINISHED_TASK_UPDATE':
            return {
                ...state,
                finishedTasksList: action.jobList,
                totalFinishedTasks: action.total,
                currentFinishedPage: action.page,
            };
        case 'APPLICANT_FINISHED_TASK_RESET':
            return {
                ...state,
                finishedTasksList: [],
                totalFinishedTasks: 0,
                currentFinishedPage: 0,
            };
        default:
            return state
    }
}

export default ApplicantReducer;