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

          <input id="name" name="name" type="text" className="form-control" placeholder="Company Name" onChange={this.handleOnChange} required/>
          <br />
              {/* email */}
          <input id="email" type="email" name="email" className="form-control validate" placeholder="email" onChange={this.handleOnChange}/>
          <br />
          {/* Password */}
          <input id="password" name="password" type="password" className="form-control validate" placeholder="password" onChange={this.handleOnChange}/>
          {/* Phone number */}
          <br />
          <input id="phoneNumber" name="phoneNumber" type="number" className="form-control validate" placeholder="phonenumber" onChange={this.handleOnChange}/>
          <br />

          <input id="website" name="website" type="text" className="form-control validate" placeholder="Website" onChange={this.handleOnChange}/>
          <br />
          <br />
          <textarea id="address" name="address" rows="5" cols="20" className="form-control validate" placeholder="address" onChange={this.handleOnChange}/>
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
