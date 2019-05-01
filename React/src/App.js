import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Login from './Components/login';
import UserRegister from './Components/userRegister';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import JobPosting from './Components/JobPosting'
import JobPostDetails from './Components/jobPostDetails';
import Timeline from './Components/timeline'
import FollowComp from './Components/followcomp'
import CompanyTimeline from './Components/ctimeline';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Navbar />
            <Route exact path="/" component = {Home}/>
            <Route path="/login" component = {Login}/>
            <Route path="/compRegister" component = {UserRegister}/>
            <Route path="/jobPosting" component = {JobPosting} />
            <Route path="/jobPostDetails/:id" component={JobPostDetails} />
            <Route path="/timeline" component={Timeline} />
            <Route path="/ctimeline" component={CompanyTimeline} />
            <Route path="/companies" component={FollowComp} />
            
        </div>
      </BrowserRouter>
    );  
  }
}

export default App;
