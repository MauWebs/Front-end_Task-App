// React //
import React, { useState } from 'react';

// React-Redux //
import { useDispatch } from 'react-redux';

// Action //
import { updateTask } from '../actions/tasksActions';

// React-Router-Dom //
import { useParams, useNavigate } from 'react-router-dom';

function EditTask() {

  //PARAMS
  const { id } = useParams();

  //DISPATCH
  const dispatch = useDispatch();

  //USE STATE
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  //ROUTER
  const navigate = useNavigate();

  //HANDLE (SUBMIT)
  const handleSubmit = (e) => {
    e.preventDefault(); // 
    dispatch(updateTask(id, title, description));
    navigate('/tasks');
  };


  return (

    <div>

      <form onSubmit={handleSubmit}>

        <label>
          Título:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>

        <label>
          Descripción:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </label>

        <button type="submit">Actualizar</button>

      </form>

    </div>

  );

};

export default EditTask;
