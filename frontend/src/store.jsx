// Redux //
import { createStore, combineReducers, applyMiddleware } from 'redux';

// redux-thunk //
import thunk from 'redux-thunk';

// Redux-Devtools-Extension //
import { composeWithDevTools } from 'redux-devtools-extension';

// Import Reducers //

import {

    //USER
    userLoginReducer,
    userRegisterReducer,

} from './reducers/userReducers';

import {

    //TASKS
    getTasksReducer,
    deleteTasksReducer,
    updateTasksReducer,
    postTaskReducer,
    getDetailTasksReducer

} from './reducers/tasksReducers';

//--------------------- Combine Reducers ---------------------//

const reducer = combineReducers({

    //USER
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,

    //TASKS
    getTasks: getTasksReducer,
    deleteTasks: deleteTasksReducer,
    updateTasks: updateTasksReducer,
    postTasks: postTaskReducer,
    getDetailTasks : getDetailTasksReducer
    
});

//--------------------- User Info (Local Storage) ---------------------//

const userInfoStoage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null;

//--------------------- Initial State ---------------------//

const initialState = {
    userLogin: { userInfo: userInfoStoage }
};

//--------------------- Store ---------------------//

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;