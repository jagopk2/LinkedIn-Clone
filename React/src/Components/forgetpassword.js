import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from 'react-router'
toast.configure({
  autoClose: 5000,
  position: toast.POSITION.TOP_CENTER,

  //etc you get the idea
});
// const $ = window.$;
class Login extends Component {

  state = {
    successfull: false
  }

  // componentDidMount() {
  //   var element = ReactDOM.findDOMNode(this.refs.dropdown)

  //   $(element).ready(function() {
  //     $('select').formSelect();
  //   });
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.email.value)
    console.log('handling submit')

    let url = 'http://localhost:3002/users/getuserbymail'
    axios.post(url, {
      email: e.target.email.value
    })
      .then((response) => {
        console.log(response.data.loginState);
        if (response.data.loginState === "true") {
          toast("Password is sent to your email", {
            
            onClose: () => {
              this.setState({
                successfull: true
              })
              url = 'http://localhost:3002/sendmail'
              axios.post(url, {
                id: 3,
                to : 'jagopk2@gmail.com'
              })
            }
          });
        } else {
          var errormsg = "No User with this Email is found"
          console.log(errormsg)
          toast(errormsg, {

            onClose: () => { }
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  render() {
    if (this.state.successfull) {
      // redirect to home if signed up
      console.log('jaskdlfj')
      return <Redirect to='/user/' />;
    }
    return (

      <div className="container login-container junaid">
        <form className="text-center border border-light p-5" onSubmit={this.handleSubmit}>
          <p className="h4 mb-4">Forget Password</p>
          {/* Email */}
          <input type="email" id="email" className="form-control mb-4" placeholder="Enter your Account's E-mail" required />
          {/* Password */}

          {/* Sign in button */}
          <button className="btn btn-danger btn-block my-4" type="submit">Reset</button>

          {/* Register */}



        </form>
      </div>
    );
  }
}

export default Login;