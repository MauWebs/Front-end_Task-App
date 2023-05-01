import axios from 'axios';

import {

    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL

} from '../constants/userConstants';

//--------------------------- Register Action ---------------------------//

export const register = (user_name, email, password) => async (dispatch) => {

    try {

        //CARGANDO... 
        dispatch({ type: USER_REGISTER_REQUEST });

        //CONFIGURATION ⚙
        const config = { headers: { 'Content-Type': 'application/json' } };

        //HTTP ✉
        const { data } = await axios.post(
            'http://127.0.0.1:8000/user/register/',
            { 'user_name': user_name, 'email': email, 'password': password }, config
        );

        //SATISFACTORIO ✔
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

        //STORAGE ⌂
        localStorage.setItem('userInfo', JSON.stringify(data));

    } catch (error) {

        dispatch({
            //ERROR ✖
            type: USER_REGISTER_FAIL,
            //MOSTRAR ERROR 👁
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });

    };

};

//--------------------------- Login Action ---------------------------//

export const login = (email, password) => async (dispatch) => {

    try {

        //CARGANDO... 
        dispatch({ type: USER_LOGIN_REQUEST })

        //CONFIGURATION ⚙
        const config = { headers: { 'Content-Type': 'application/json' } };

        //HTTP ✉
        const { data } = await axios.post(
            'http://127.0.0.1:8000/user/login/',
            { 'email': email, 'password': password }, config
        );

        //SATISFACTORIO ✔
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

        //STORAGE ⌂
        localStorage.setItem('userInfo', JSON.stringify(data));

    } catch (error) {

        dispatch({
            //ERROR ✖
            type: USER_LOGIN_FAIL,
            //MOSTRAR ERROR 👁
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });

    };

};

//--------------------------- Logout Action ---------------------------//

export const logout = () => (disptach) => {

    //STORAGE DELETE ⌂
    localStorage.removeItem('userInfo')

    //BACK TO LANDING
    disptach({ type: USER_LOGOUT })

};