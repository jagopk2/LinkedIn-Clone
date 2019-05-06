import React, { Component } from 'react';
import { Redirect } from 'react-router'

import axios from 'axios';

class CompLogin extends Component {

  state = {
    email: '',
    password: '',
    successfull: false
  }

  handleOnChange=(e)=>{
    console.log(e.target.type)
    this.setState({ [e.target.type] : e.target.value })
    console.log(this.state);
  }

  checkLogin=()=>{
    console.log('Aliakber');
  }

  handleSubmit = (e) => { 
    e.preventDefault()
    console.log(this.state)
    console.log('handling submit')

    let redirect = this.props.history;
    let email = this.state.email;
    let url = 'http://localhost:3001/users/compLogin'
    axios.post(url,{
      email:this.state.email,
      password:this.state.password
    })
    .then(res => {
      console.log(res.data.loginState);
      console.log(res.data.loginState === 'successfull')
      if(res.data.loginState === 'successfull')
      {
        console.log('ali')
        window.localStorage.setItem('user', email);
        this.setState({
          successfull :true
        })
      }
    })
  }


  render() {
    console.log(this.state)
  if (this.state.successfull) {
      // redirect to home if signed up
      console.log('jaskdlfj')
      return <Redirect to = '/viewProfile' />;
  }
  console.log("aliakber");

    return (
      <div className="container">
          <form className="col s12" onSubmit={this.handleSubmit}>
              
                <input id="email" type="email" className="validate" onChange={this.handleOnChange} />
                <input id="password" type="password" className="validate" onChange={this.handleOnChange} />
                <button className="btn waves-effect waves-light" type="submit" name="action">
                Submit </button>
          </form>
      </div>
    );
  }
}


export default CompLogin;