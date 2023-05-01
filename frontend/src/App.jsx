// React //
import React from 'react';

// React-Router-Dom //
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes //
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import Tasks from './components/Tasks';
import AddTasks from './components/AddTasks';
import EditTask from './components/EditTask';

function App() {

  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route element={<PrivateRoute />}>

            <Route path='/tasks' exact element={<Tasks />} />

            <Route path='/tasks/:id/edit' exact element={<EditTask />} />

            <Route path='/add' exact element={<AddTasks />} />

          </Route>

          <Route path='/landing' element={<Landing />} />

          <Route path='/register' element={<Register />} />

          <Route path='/login' element={<Login />} />

        </Routes>

      </BrowserRouter >
    </>
  );

};

export default App;