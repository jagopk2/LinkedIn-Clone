import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect ,withRouter} from 'react-router-dom';
import axios from 'axios';
import Logincomp from './Components/clogin';
import compRegister from './Components/compRegister';
import Navbarcomp from './Components/Navbar_/Navbar';
import CompProfile from './Components/compProfile'
import JobPosting from './Components/JobPosting'
import JobWithApplicants from './Components/jobWithApplicants';
import UserProfileApproval from './Components/userProfileApproval'
import JobsApproved from './Components/JobsApproved'
import JobWithApprovedUser from './Components/jobWithApprovedUser'
import CompanyFollowers from './Components/companyFollowers'
import FollowerUserProfile from './Components/FollowerUserProfile'
import Chat from './Components/chat'


import Login from './Components/login';
import UserRegister from './Components/userRegister';
import Home from './Components/Home';
import Timeline from './Components/timeline'
import FollowComp from './Components/followcomp'
// import FollowComp from './Components/followcomp'
import CompanyTimeline from './Components/ctimeline';
import ProtectedRoute from './Components/protectedroute';
import UserProfile from './Components/userprofile';
import Navbar2 from './Components/navbar2';
import FollowUser from './Components/usersfollow'
import AccountSetting from './Components/accountsetting';
import ForgetPassword from './Components/forgetpassword'
//

import Clogin from './Components/clogin'

class App extends Component {


  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <div className="wrapper">

            {/* <Navbar /> */}
            <Route  path="/user/" component={Navbar2} />
            <ProtectedRoute exact path="/home" component={Home} />
            <Route path="/user/login" component={Login} />
            <Route path="/user/userRegister" component={UserRegister} />
            <Route path="/user/forgetPassword" component={ForgetPassword} />
            <ProtectedRoute exact path="/user/" component={Timeline} />
            <ProtectedRoute path="/user/ctimeline" component={CompanyTimeline} />
            <ProtectedRoute path="/user/companies" component={FollowComp} />
            <ProtectedRoute path="/user/uprofile/:id" component={UserProfile} />
            <ProtectedRoute path="/user/followusers" component={FollowUser} />
            <ProtectedRoute path="/user/accountsettings" component={AccountSetting} />
            <ProtectedRoute path="/user/chat" component= {Chat} />



            <Route path="/company/" component = {Navbarcomp}/>
            <Route path="/company/compLogin" component = {Logincomp}/>
            <Route path="/company/compRegister" component = {compRegister}/>
            <Route path="/company/jobPosting" component = {JobPosting} />
            <Route path="/company/jobWithApplicants" component={JobWithApplicants} />
            <Route path="/company/viewProfile" component={CompProfile} />
            <Route path="/company/userProfileApproval" component={UserProfileApproval} />
            <Route path="/company/viewApprovedJobs" component={JobsApproved} />
            <Route path="/company/jobWithApprovedUser" component={JobWithApprovedUser} />
            <Route path="/company/followers" component={CompanyFollowers} />
            <Route path="/company/followerUserProfile" component= {FollowerUserProfile} />
            <Route path="/company/chat" component= {Chat} />
                        


            {/* <Route path="/clogin" component= {Clogin} /> */}
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
