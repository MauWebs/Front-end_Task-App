// React //
import { useEffect, useState } from 'react';

// React-Redux //
import { useSelector, useDispatch } from 'react-redux';

// Action //
import { getTasks, deleteTasks } from '../actions/tasksActions';

// React-Router-Dom //
import { Link } from 'react-router-dom';

// Components //
import Loader from './Loader';
import Messages from './Messages';

// Css //
import './styles/tasks.css';

function Tasks() {

    //DISPATCH
    const dispatch = useDispatch();

    //USE STATE
    const [refresh, setRefresh] = useState(false);

    //STATE STORE
    const taskList = useSelector((state) => state.getTasks);
    const userLogin = useSelector(state => state.userLogin);

    //USER INFO
    const { userInfo } = userLogin;

    //OPTIONS
    const { loading, error, tasks } = taskList;

    //DISPATCH STATE
    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch, refresh]);

    //HANDLE (DELETE)
    const handleDelete = (taskId) => {
        dispatch(deleteTasks(taskId));
        setRefresh(!refresh);
    };

    return (

        <>

            {error && <Messages>{error}</Messages>}

            {loading ? <Loader /> :

                (

                    <ul className='tasks'>

                        {tasks.map((task) => userInfo && userInfo.user_name === task.user && (

                            <li key={task.id} className='tasks_list'>

                                <p>{task.title}</p>

                                <p>{task.description}</p>

                                <button>

                                    <Link

                                        style={{ color: 'white', textDecoration: 'none' }}

                                        to={`/tasks/${task.id}/edit`}>

                                        Editar

                                    </Link>

                                </button>

                                <button onClick={() => handleDelete(task.id)}>Eliminar</button>

                            </li>

                        )

                        )}

                    </ul>

                )}

        </>

    );

};

export default Tasks;
