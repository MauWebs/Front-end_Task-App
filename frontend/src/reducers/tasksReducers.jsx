import {

    TASK_LIST_REQUEST,
    TASK_LIST_SUCCESS,
    TASK_LIST_FAIL,

    TASK_DETAILS_REQUEST,
    TASK_DETAILS_SUCCESS,
    TASK_DETAILS_FAIL,

    TASK_DELETE_REQUEST,
    TASK_DELETE_SUCCESS,
    TASK_DELETE_FAIL,

    TASK_CREATE_REQUEST,
    TASK_CREATE_SUCCESS,
    TASK_CREATE_FAIL,

    TASK_UPDATE_REQUEST,
    TASK_UPDATE_SUCCESS,
    TASK_UPDATE_FAIL,

} from '../constants/taskConstants';

//------------------------ GET TASKS ------------------------//

export const getTasksReducer = (state = { tasks: [] }, action) => {

    switch (action.type) {

        case TASK_LIST_REQUEST:
            return { loading: true, tasks: [] }

        case TASK_LIST_SUCCESS:
            return { loading: false, tasks: action.payload }

        case TASK_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state

    };
};

//------------------------ DETAILS TASKS ------------------------//

export const getDetailTasksReducer = (state = { task: [] }, action) => {
   
    switch (action.type) {

        case TASK_DETAILS_REQUEST:
            return { loading: true, ...state }

        case TASK_DETAILS_SUCCESS:
            return { loading: false, task: action.payload }

        case TASK_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state

    };

};

//------------------------ DELETE TASKS ------------------------//

export const deleteTasksReducer = (state = {}, action) => {

    switch (action.type) {

        case TASK_DELETE_REQUEST:
            return { loading: true }

        case TASK_DELETE_SUCCESS:
            return { loading: false, success: true }

        case TASK_DELETE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state

    };

};

//------------------------ CREATE TASKS ------------------------//

export const postTaskReducer = (state = {}, action) => {

    switch (action.payload) {

        case TASK_CREATE_REQUEST:
            return { loading: true }

        case TASK_CREATE_SUCCESS:
            return { loading: false, success: true, task: action.payload }

        case TASK_CREATE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state

    };

};

//------------------------ UPDATE TASKS ------------------------//

export const updateTasksReducer = (state = { tasks: {} }, action) => {

    switch (action.payload) {

        case TASK_UPDATE_REQUEST:
            return { loading: true }

        case TASK_UPDATE_SUCCESS:
            return { loading: false, success: true, task: action.payload }

        case TASK_UPDATE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state

    };

};