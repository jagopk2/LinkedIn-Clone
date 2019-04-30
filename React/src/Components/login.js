import React, { Component } from 'react';
import axios from 'axios';

// const $ = window.$;
class Login extends Component {
  // componentDidMount() {
  //   var element = ReactDOM.findDOMNode(this.refs.dropdown)
  
  //   $(element).ready(function() {
  //     $('select').formSelect();
  //   });
  // }

  state = {
    email: 'email@12222',
    password: '123'
  }


  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.email.value)
    console.log(e.target.password.value)
    console.log('handling submit')

    let url = 'http://localhost:3002/users/login'
    axios.post(url,{
      email:e.target.email.value,
      password:e.target.password.value
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <label for="email">Email </label>
                <input id="email" type="email" className="validate" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <label for="password">Password</label>
                <input id="password" type="password" className="validate" />
              </div>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action">
              Submit
                        <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;