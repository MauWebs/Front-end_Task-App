// React //
import React, { useState } from 'react';

// React-Redux //
import { useDispatch, useSelector } from 'react-redux';

// Action //
import { postTasks } from '../actions/tasksActions';

// React-Router-Dom //
import { useNavigate } from 'react-router';

// Components //
import Loader from './Loader';
import Messages from './Messages';

function AddTasks() {

    //NAVEGATE
    const navigate = useNavigate();
    if (window.location.pathname === '/tasks') {
        navigate('/tasks', { replace: true, state: { forceRefresh: true } });
    };

    //DISPATCH
    const dispatch = useDispatch();

    //STATE STORE
    const postTasksState = useSelector(state => state.postTasks);

    //OPTIONS
    const { loading, error } = postTasksState;

    //STATE
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    //HANDLE (POST)
    const handlePost = (e) => {
        e.preventDefault();
        dispatch(postTasks(title, description));
        navigate('/tasks', { replace: true, state: { forceRefresh: true } });
    }

    return (

        <>

            {loading ?

                <Loader />

                : error

                    ? <Messages>{error}</Messages>

                    : (

                        <form onSubmit={handlePost}>

                            <div>

                                <div>
                                    <textarea
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        type="text"
                                        id="title"
                                        placeholder="¡Escriba un título!" />
                                </div>

                                <div>
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        type="text"
                                        id="title"
                                        placeholder="¡Escriba una descripción!" />
                                </div>

                            </div>

                            <div>
                                <button type='submit'>
                                    POST
                                </button>
                            </div>

                        </form >

                    )

            }

        </>

    );

};

export default AddTasks;