// React //
import React, { useState, useEffect } from 'react';

// React-Redux //
import { useDispatch, useSelector } from 'react-redux';

// React-Router-Dom //
import { useNavigate } from 'react-router';

// Action //
import { login } from '../actions/userActions';

// Componentes //
import Loader from './Loader';
import Messages from './Messages';

// Css //
import './styles/login.css';

function Login() {

  const dispatch = useDispatch()

  //STATE

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  //STATE STORE

  const userLogin = useSelector(state => state.userLogin);

  //OPTIONS

  const { error, loading, userInfo } = userLogin;

  //ROUTER

  const navigate = useNavigate();
  
  const path = '/tasks';

  useEffect(() => {
    if (userInfo) {
      navigate(path)
    }
  }, [userInfo]);

  //HANDLER

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  };

  return (

    <>

      {error && <Messages>{error}</Messages>}

      {loading ? <Loader /> :

        <form onSubmit={submitHandler} action="#" method="POST" className="login">

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Email"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            placeholder="Contraseña"
          />

          <a href="/register">
            Registrarse
          </a>

          <button type="submit">
            Iniciar sesión
          </button>

        </form>

      }

    </>

  );

};


export default Login;