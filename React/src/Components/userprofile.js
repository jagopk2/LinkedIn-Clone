import React, { Component } from 'react'
import axios from 'axios';

var user_id =3;

 class Profile extends Component {

    state = {
        user_data: []
    }
    componentWillMount() {
        
        let url = `http://localhost:3002/users/uprofile`
        axios.post(url,{
            user_id  
        })
            .then((response) => {
                // console.log(response.data);
                this.setState({ user_data: response.data });
                console.log('dsfdsf')
                console.log(this.state.user_data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
  render() {
      
    return (
      <div>
        
      </div>
    )
  }
}

export default Profile
