import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
const LoginNav = () => {

    return (

        <div>
                <li>
                    <a href="/user/login" title>
                        <span><img src="images/icon1.png" alt /></span>
                        User Login
                        </a>
                </li>

                <li>
                    <a href="/company/compLogin" title>
                        <span><img src="images/icon1.png" alt /></span>
                        Company Login
                        </a>
                </li>
                <li>
                    <a href="/user/userRegister" title>
                        <span><img src="images/icon2.png" alt /></span>
                        User Register
                        </a>

                </li>
                <li>
                    <a href="/company/compRegister" title>
                        <span><img src="images/icon2.png" alt /></span>
                        Company Register
                        </a>

                </li>


        </div>
    );
}


export default LoginNav;
