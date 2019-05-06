import React, { Component } from 'react';
import { connect } from 'react-redux'
import {registerCompany} from '../actions/registerCompanyAction'

class compRegister extends Component {
  state = {
    name : '',
    email : '',
    password : '',
    address : '',
    phoneNumber : '',
    website : ''
}

  handleOnChange=(e)=>{
    console.log(e.target.type)
    this.setState({ [e.target.name] : e.target.value })
    console.log(this.state);
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    console.log('handle submit',this.state);
    this.props.dispatch(registerCompany(this.state));
  }

  render() {
    console.log('im  register')
    return (
      <div className="container junaid">
        <form className="text-center border border-light p-5" onSubmit={this.handleSubmit} >
          <div className="input-field col s12">
              <h3>{this.props.status ? this.props.status.code : ''}</h3>
          </div>
          <p className="h4 mb-4">Sign up</p>
          <div className="form-row mb-4">
            <div className="col">
              {/* name */}
              {/* <label for="first_name">First Name</label> */}
              <input id="name" name="name" type="text" className="validate" onChange={this.handleOnChange} required/>
            </div>
            <div className="col">
              {/* email */}
              {/* <label for="last_name">Last Name</label> */}
              <input id="email" type="email" name="email" className="validate" onChange={this.handleOnChange}/>
            </div>
          </div>
          {/* Password */}
          <input id="password" name="password" type="password" className="validate" onChange={this.handleOnChange}/>
          {/* Phone number */}
          <br />
          <textarea id="address" name="address" rows="5" cols="20" className="validate" onChange={this.handleOnChange}/>
          <br />
          <input id="phoneNumber" name="phoneNumber" type="number" className="validate" onChange={this.handleOnChange}/>
          <br />

          <input id="website" name="website" type="text" className="validate" onChange={this.handleOnChange}/>
          <br />

          {/* Sign up button */}
          <button className="btn btn-danger my-4 btn-block" type="submit">Sign up</button>
          {/* Social register */}
          </form>
        {/* Default form register */}
      </div>
    );
  }
}

const mapStateToProps=(state, ownProps)=>{
  let id = ownProps.match.params.id;
  console.log(state)
  let {status} = state.registerCompany
  console.log('status', status)
  return{
      status
      }
  }

export default connect(mapStateToProps)(compRegister);
