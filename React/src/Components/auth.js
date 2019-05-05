import axios from 'axios';
import React, { Component } from 'react';
class Auth extends Component {

  
  
    // login(cb) {
    //   this.authenticated = true;
    //   cb();
    // }
  
    // logout(cb) {
    //   this.authenticated = false;
    //   cb();
    // }
  
    
     isAuthenticated() {
        console.log(localStorage)
          if (localStorage.length > 0 && localStorage.sessionID) {
            console.log("authenticated")
            return true;
            
          } else {
            console.log("not authenticated2")
            return false
          }
        //   setTimeout(this.isAuthenticated,100);
    }
  }
  
  export default new Auth();
  