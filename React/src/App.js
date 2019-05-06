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
import AccountSetting from './Components/accountsetting';

class App extends Component {


  render() {

    return (
      <BrowserRouter>
        <div className="App">
        <Navbar2 />
          <div className="wrapper">

            {/* <Navbar /> */}
            <ProtectedRoute exact path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/userRegister" component={UserRegister} />
            <ProtectedRoute exact path="/" component={Timeline} />
            <ProtectedRoute path="/jobPosting" component={JobPosting} />
            <ProtectedRoute path="/jobPostDetails/:id" component={JobPostDetails} />
            <ProtectedRoute path="/ctimeline" component={CompanyTimeline} />
            <ProtectedRoute path="/companies" component={FollowComp} />
            <ProtectedRoute path="/uprofile/:id" component={UserProfile} />
            <ProtectedRoute path="/followusers" component={FollowUser} />
            <ProtectedRoute path="/accountsettings" component={AccountSetting} />
            
            {/* <Route path="/jobPosting" component={JobPosting} />
            <Route path="/jobPostDetails/:id" component={JobPostDetails} />
            <Route path="/ctimeline" component={CompanyTimeline} />
            <Route path="/companies" component={FollowComp} />
            <Route path="/uprofile/:id" component={UserProfile} />
            <Route path="/followusers" component={FollowUser} />
             */}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
