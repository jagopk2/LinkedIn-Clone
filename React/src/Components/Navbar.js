import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';    
const NavBar = () =>{

    return (

        <div >
            <ul id="dropdown1" className="dropdown-content">
                <li><NavLink to="/login">login</NavLink></li>
                <li><NavLink to="/compRegister">Register</NavLink></li>
                <li><NavLink to="/timeline">Timeline</NavLink></li>
                <li><NavLink to="/ctimeline">Company Timeline</NavLink></li>
                <li><NavLink to="/companies">Discover Companies</NavLink></li>
                
            </ul>
            <nav>
                <div className="nav-wrapper custom-nav">
                    <a href="#!" className="brand-logo">Logo</a>
                        <ul className="right hide-on-med-and-down">
                            {/* <!-- Dropdown Trigger --> */}
                            <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
                        </ul>
                </div>
            </nav>  
        </div>
      );
}
 

export default NavBar;
