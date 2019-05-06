import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className= "container">  

        <Link to="/login">Login</Link> 
        <Link to="/userRegister">Register Company</Link>
        <Link to="/timeline">Timeline</Link>
        <Link to="/companies">Companies</Link>
        <Link to="/uprofile">UserProfile</Link>
        <Link to="/followusers">Follow User</Link>
        <Link to="/accountsettings">Account Settings</Link>
      </div>
    );
  }
}

export default Home;
