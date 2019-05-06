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
      <div className= "container">  
        <div className="row">
                  <div className="row">
                      <div className="input-field col s12">
                         <h3>{this.props.status ? this.props.status.code : ''}</h3>
                      </div>
                  </div>              
                <form className="col s12" onSubmit={this.handleSubmit}>
                  <div className="row">
                      <div className="input-field col s12">
                        <label for="name">First Name</label>
                        <input id="name" name="name" type="text" className="validate" onChange={this.handleOnChange} required/>
                      </div>
                  </div>
                  <div className="row">
                      <div className="input-field col s12">
                        <label for="email">Email</label>
                        <input id="email" type="email" name="email" className="validate" onChange={this.handleOnChange}/>
                      </div>
                  </div>  
                  <div className="row">
                      <div className="input-field col s12">
                        <label for="password">Password</label>
                        <input id="password" name="password" type="password" className="validate" onChange={this.handleOnChange}/>
                      </div>
                  </div>
                  <div className="row">
                      <div className="input-field col s12">
                        <label for="address">address</label>
                        <textarea id="address" name="address" rows="5" cols="20" className="validate" onChange={this.handleOnChange}/>
                      </div>
                  </div>
                  <div className="row">
                      <div className="input-field col s12">
                        <label for="phoneNumber">phoneNumber</label>
                        <input id="phoneNumber" name="phoneNumber" type="number" className="validate" onChange={this.handleOnChange}/>
                      </div>
                  </div>
                  <div className="row">
                      <div className="input-field col s12">
                        <label for="website">website</label>
                        <input id="website" name="website" type="text" className="validate" onChange={this.handleOnChange}/>
                      </div>
                  </div>
                  <button className="btn waves-effect waves-light" type="submit" name="action" >
                    Submit
                    <i className="material-icons right">send</i>
                  </button>
                </form>
            </div>
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
