import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';    
import { Redirect } from 'react-router'

class AfterLogin extends Component{
    state={
        location : null
    }

    handleOnClick=()=>{
        localStorage.clear();
        this.setState({location:'change'})
    }

    render(){

        if(this.state.location)
        {
            window.location.replace('http://localhost:3000/company/compLogin');
        }

        console.log("aliakber");
        return (
                <div>
                    {/* <!-- Dropdown Trigger --> */}
                           <li>
							    <NavLink to="/company/viewProfile">
									<span><img src="images/icon1.png" alt /></span>
									profile
                                </NavLink>
							</li>
                            <li>
							    <NavLink to="/company/jobPosting">
									<span><img src="images/icon2.png" alt /></span>
									JobPosting
                                </NavLink>
							</li>
                            <li>
							    <NavLink to="/company/followers">
									<span><img src="images/icon3.png" alt /></span>
									Followers
                                </NavLink>
							</li>
                            <li>
							    <NavLink to="/company/chat">
									<span><img src="images/icon3.png" alt /></span>
									chat
                                </NavLink>
							</li>
                            <li>
							    <NavLink to="/company/viewApprovedJobs">
									<span><img src="images/icon4.png" alt /></span>
									Jobs Approved
                                </NavLink>
							</li>
                            <li>
                                <button onClick={this.handleOnClick}>LogOut</button>
                            </li>
                </div>
        );
    }
}
 

export default AfterLogin;
