import axios from "axios";

import {

    //GET TASKS
    TASK_LIST_REQUEST,
    TASK_LIST_SUCCESS,
    TASK_LIST_FAIL,

    //DETAILS TASKS
    TASK_DETAILS_REQUEST,
    TASK_DETAILS_SUCCESS,
    TASK_DETAILS_FAIL,

    //DELETE TASKS
    TASK_DELETE_REQUEST,
    TASK_DELETE_SUCCESS,
    TASK_DELETE_FAIL,

    //CREATE TASKS
    TASK_CREATE_REQUEST,
    TASK_CREATE_SUCCESS,
    TASK_CREATE_FAIL,

    //UPDATE TASKS
    TASK_UPDATE_REQUEST,
    TASK_UPDATE_SUCCESS,
    TASK_UPDATE_FAIL

} from '../constants/taskConstants';

//------------------------ GET TASKS ------------------------//

export const getTasks = () => async (dispatch, getState) => {

    try {

        //CARGANDO... 
        dispatch({ type: TASK_LIST_REQUEST });

        //USER INFO 𝐢
        const { userLogin: { userInfo } } = getState();

        //TOKEN + CONFIGURATION ⚙
        const config = {
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` }
        };

        //HTTP ✉ 
        const { data } = await axios.get(`http://127.0.0.1:8000/tasks/get/`, config);

        //SATISFACTORIO ✔
        dispatch({ type: TASK_LIST_SUCCESS, payload: data });

    } catch (error) {

        dispatch({
            //ERROR ✖
            type: TASK_LIST_FAIL,
            //MOSTRAR ERROR 👁
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });

    };

};

//------------------------ DETAILS TASKS ------------------------//

export const getDetailTasks = (id) => async (dispatch, getState) => {

    try {

        //CARGANDO... 
        dispatch({ type: TASK_DETAILS_REQUEST });

        //USER INFO 𝐢
        const { userLogin: { userInfo } } = getState();

        //TOKEN + CONFIGURATION ⚙
        const config = {
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` }
        };

        //HTTP ✉ 
        const { data } = await axios.get(`http://127.0.0.1:8000/tasks/get/${id}/`, config);

        dispatch({ type: TASK_DETAILS_SUCCESS, payload: data });

    } catch (error) {

        dispatch({
            //ERROR ✖
            type: TASK_DETAILS_FAIL,
            //MOSTRAR ERROR 👁
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });

    };


};

//------------------------ DELETE TASKS ------------------------//

export const deleteTasks = (id) => async (dispatch, getState) => {

    try {

        //CARGANDO... 
        dispatch({ type: TASK_DELETE_REQUEST });

        //USER INFO 𝐢
        const { userLogin: { userInfo } } = getState();

        //TOKEN + CONFIGURATION ⚙
        const config = {
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` }
        };

        //HTTP ✉
        const { data } = await axios.delete(`http://127.0.0.1:8000/tasks/delete/${id}/`, config);

        //SATISFACTORIO ✔
        dispatch({ type: TASK_DELETE_SUCCESS });

    } catch (error) {

        dispatch({
            //ERROR ✖
            type: TASK_DELETE_FAIL,
            //MOSTRAR ERROR 👁
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });

    }

};

//------------------------ CREATE TASKS ------------------------//

export const postTasks = (title, description) => async (dispatch, getState) => {

    try {

        //CARGANDO... 
        dispatch({ type: TASK_CREATE_REQUEST });

        //USER INFO 𝐢
        const { userLogin: { userInfo } } = getState();

        //TOKEN + CONFIGURATION ⚙
        const config = {
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` }
        };

        //HTTP ✉
        const { data } = await axios.post(`http://127.0.0.1:8000/tasks/post/`, { 'title': title, 'description': description }, config);

        //SATISFACTORIO ✔
        dispatch({ type: TASK_CREATE_SUCCESS, payload: data });

    } catch (error) {

        dispatch({
            //ERROR ✖
            type: TASK_CREATE_FAIL,
            //MOSTRAR ERROR 👁
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });

    };

};


//------------------------ UPDATE TASKS (FALTA TERMINAR) ------------------------//

export const updateTask = (id, title, description) => async (dispatch, getState) => {

    try {

        //CARGANDO... 
        dispatch({ type: TASK_UPDATE_REQUEST })

        //USER INFO 𝐢
        const { userLogin: { userInfo } } = getState()

        //TOKEN + CONFIGURATION ⚙
        const config = {
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` }
        };

        //HTTP ✉
        const { data } = await axios.put(`http://127.0.0.1:8000/tasks/put/${id}/`, { title, description }, config);

        //SATISFACTORIO ✔
        dispatch({ type: TASK_UPDATE_SUCCESS, payload: data });

        //CARGANDO...
        dispatch({ type: TASK_DETAILS_REQUEST, payload: data });

    } catch (error) {
        
        dispatch({
            //ERROR ✖
            type: TASK_UPDATE_FAIL,
            //MOSTRAR ERROR 👁
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });

    };

};

