// React //
import React from 'react';

// React-Redux //
import { useDispatch, useSelector } from 'react-redux';

// Action //
import { logout } from '../actions/userActions/';

// Iconos //
import { FaUserPlus, FaSignInAlt } from 'react-icons/fa';
import { AiFillHome } from "react-icons/ai";
import { IoIosListBox } from 'react-icons/io';
import { BsFillBackspaceFill, BsPlusCircleFill } from "react-icons/bs";

// Css //
import './styles/navbar.css';

function Navbar() {

    //DISPATCH
    const dispatch = useDispatch();

    //HANDLER
    const logoutHandler = () => {
        dispatch(logout());
    };

    const userLogin = useSelector(state => state.userLogin);

    const { userInfo } = userLogin;

    return (

        <header>

            <nav>

                <ul>

                    {userInfo ?

                        (
                            <>
                                <li>

                                    <a href="/tasks">
                                        <IoIosListBox size={40} />
                                    </a>

                                </li>

                                <li>

                                    <a href="/add">
                                        <BsPlusCircleFill size={40} />
                                    </a>

                                </li>

                                <li>

                                    <a href="/landing" onClick={logoutHandler}>
                                        <BsFillBackspaceFill size={40} />
                                    </a>

                                </li>
                            </>
                        )

                        :

                        (
                            <>
                                <li>

                                    <a href="/landing">
                                        <AiFillHome size={40} />
                                    </a>

                                </li>

                                <li>

                                    <a href="/register">
                                        <FaUserPlus size={40} />
                                    </a>

                                </li>

                                <li>

                                    <a href="/login">
                                        <FaSignInAlt size={40} />
                                    </a>

                                </li>
                            </>
                        )

                    }

                </ul>

            </nav>

        </header>

    );

};

export default Navbar;
