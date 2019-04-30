import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className= "container">  

        <Link to="/login">Login</Link> 
        <Link to="/compRegister">Register Company</Link>
        <Link to="/timeline">Timeline</Link>
        <Link to="/companies">Companies</Link>
      </div>
    );
  }
}

export default Home;
