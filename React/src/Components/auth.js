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
          if (localStorage.length > 0) {
            axios.post('http://localhost:3002/users/isauthenticated', {
              sessionID: localStorage.getItem('sessionID')
            }).then((response) => {
              if (response.data.status === true) {
                console.log(response.data.status)
                console.log('authenticated')
                return true;
              } else {
                console.log("not authenticated1")
                return false
              }
            });
          } else {
            console.log("not authenticated2")
            return false
          }
        //   setTimeout(this.isAuthenticated,100);
    }
  }
  
  export default new Auth();
  