// React //
import React from 'react';

// React-Redux //
import { useSelector } from 'react-redux';

// React-Router-Dom //
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {

    //STATE STORE
    const userLogin = useSelector(state => state.userLogin)

    //STORE USER
    const { userInfo } = userLogin

    //ROUTER
    return (
        userInfo ? <Outlet /> : <Navigate to='/landing' />
    );

};

export default PrivateRoute;