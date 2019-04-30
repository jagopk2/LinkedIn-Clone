import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
const $ = window.$;



class UserRegister extends Component {
  componentDidMount() {
    var element = ReactDOM.findDOMNode(this.refs.dropdown)

    $(element).ready(function () {
      $('select').formSelect();
    });
  }

  handleSubmit = (e) => {
    var firstname = e.target.first_name.value 
    var lastname = e.target.last_name.value
    var phonenumber = e.target.phoneNumber.value
    var address =  e.target.address.value
    var field = e.target.field.value
    var email = e.target.email.value
    var password =e.target.password.value
    e.preventDefault()
    console.log(firstname)
    console.log(lastname)
    console.log(phonenumber)
    console.log(address)
    console.log(field)
    console.log(email)
    console.log(password)
    console.log('handling submit')

    let url = 'http://localhost:3002/users/signup'
    axios.post(url, {
      firstname,
      lastname,
      phonenumber,
      address,
      field,
      email,
      password,
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
                <label for="first_name">First Name</label>
                <input id="first_name" type="text" className="validate" />
              </div>
              <div className="input-field col s12">
                <label for="last_name">Last Name</label>
                <input id="last_name" type="text" className="validate" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <label for="email">Email</label>
                <input id="email" type="email" className="validate" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <label for="password">Password</label>
                <input id="password" type="password" className="validate" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <label for="phoneNumber">Phone Number</label>
                <input id="phoneNumber" type="number" min="1" max="11" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <label for="address">Address</label>
                <input id="address" type="text" className="validate" />
              </div>
            </div>
            <div className="input-field col s12">
              <select ref="dropdown" name="field">
                <option value="" disabled selected>Choose your Field</option>
                <option value="engineering">Engineering</option>
                <option value="computerScience">Computer Science</option>
                <option value="medical">Medical</option>
              </select>
              <label>Field of Intrest</label>
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

export default UserRegister;
