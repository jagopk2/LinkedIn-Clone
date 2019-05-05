import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect ,withRouter} from 'react-router-dom';
import axios from 'axios';


import Login from './Components/login';
import UserRegister from './Components/userRegister';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import JobPosting from './Components/JobPosting'
import JobPostDetails from './Components/jobPostDetails';
import Timeline from './Components/timeline'
import FollowComp from './Components/followcomp'
// import FollowComp from './Components/followcomp'
import CompanyTimeline from './Components/ctimeline';
import ProtectedRoute from './Components/protectedroute';
import UserProfile from './Components/userprofile';
import Navbar2 from './Components/navbar2';
import FollowUser from './Components/usersfollow'
class App extends Component {


  render() {

    return (
      <BrowserRouter>
        <div className="App">
        <Navbar2 />
          <div className="wrapper">

            {/* <Navbar /> */}
            <Route exact path="/" component={Home} />
            <ProtectedRoute exact path="/timeline" component={Timeline} />
            <Route path="/login" component={Login} />
            <Route path="/userRegister" component={UserRegister} />
            <Route path="/jobPosting" component={JobPosting} />
            <Route path="/jobPostDetails/:id" component={JobPostDetails} />
            {/* <Route path="/timeline" component={Timeline} /> */}
            <Route path="/ctimeline" component={CompanyTimeline} />
            <Route path="/companies" component={FollowComp} />
            <Route path="/uprofile/:id" component={UserProfile} />
            <Route path="/followusers" component={FollowUser} />
            
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
