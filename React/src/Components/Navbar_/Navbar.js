import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';    
import LoginNav from './loginNav';
import AfterLogin from './AfterLogin'
const NavBar = () =>{

    return (
	<header>
			<div class="container">
				<div class="header-data">
                    <div className="logo">
                        <a href="index.html" title><img src="images/logo.png" alt /></a>
                    </div>
                    {/*logo end*/}
                    <div className="search-bar">
                        <form>
                            <input type="text" name="search" placeholder="Search..." />
                            <button type="submit"><i className="la la-search" /></button>
                        </form>
                    </div>
                    {/*search-bar end */} 
                    <nav>
						<ul>       
                        {
                            localStorage.length > 0 ? 
                            <AfterLogin />
                            :
                            <LoginNav />
                        }
                        </ul>
                    </nav>
                </div>
            </div>  
            </header>
      );
}
 

export default NavBar;
