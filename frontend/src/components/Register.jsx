// React //
import React, { useState, useEffect } from 'react';

// React-Redux //
import { useDispatch, useSelector } from 'react-redux';

// React-Router-Dom //
import { useNavigate } from 'react-router';

// Action //
import { register } from '../actions/userActions';

// Componentes //
import Loader from './Loader';
import Messages from './Messages';

// Css //
import './styles/register.css';

function Register() {

  //DISPATCH
  const dispatch = useDispatch()

  //STATE 
  const [user_name, setUser_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  //STATE STORE
  const userRegister = useSelector(state => state.userRegister);

  //OPTIONS
  const { error, loading, userInfo } = userRegister;

  //ROUTER
  const navigate = useNavigate();
  const path = '/';

  //USEEFFECT ROUTER
  useEffect(() => {
    if (userInfo) {
      navigate(path);
    }
  }, [userInfo])

  //HANDLER
  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('¡Las contraseñas deben coincidir!')
    } else {
      dispatch(register(user_name, email, password))
    }

  };

  return (

    <>

      {message && <Messages>{message}</Messages>}

      {error && <Messages>{error}</Messages>}

      {loading ?

        <Loader /> :

        <form onSubmit={submitHandler} action="#" method="POST" className="register">
         
          <input
            value={user_name}
            onChange={(e) => setUser_name(e.target.value)}
            id="username"
            name="username"
            type="text"
            autoComplete="email"
            required
            placeholder="Nombre de usuario"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email-address"
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

          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="current-password"
            required
            placeholder="Confirmar contraseña"
          />

          <a href="/login">
            Iniciar sesión
          </a>

          <button type="submit">
            Regristrarse
          </button>

        </form>

      }
  
    </>
  
  );

};

export default Register;