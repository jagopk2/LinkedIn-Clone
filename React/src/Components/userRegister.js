import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
  autoClose: 5000, 
  position: toast.POSITION.TOP_CENTER,
  
  //etc you get the idea
});
const $ = window.$;



class UserRegister extends Component {
  componentDidMount() {
    var element = ReactDOM.findDOMNode(this.refs.dropdown)

  }
  state = {
    image: null,
    cv: null
  }

  imageChange = (event) => {
    console.log(event.target.files[0])
    this.setState({
      ...this.state,
      image: event.target.files[0]
    })
  }
  cvChange = (event) => {
    console.log(event.target.files[0])
    this.setState({
      ...this.state,
      cv: event.target.files[0]
    })
  }


  handleSubmit = (e) => {
    var firstname = e.target.first_name.value
    var lastname = e.target.last_name.value
    var phonenumber = e.target.phoneNumber.value
    var address = e.target.address.value
    var field = e.target.field.value
    var email = e.target.email.value
    var password = e.target.password.value
    e.preventDefault()
    console.log(firstname)
    console.log(lastname)
    console.log(phonenumber)
    console.log(address)
    console.log(field)
    console.log(email)
    console.log(password)
    console.log('handling submit')



    /// Image Upload Logic
    var image = this.state.image;
    const data = new FormData();
    data.append("image", image, image.name);
    // console.log(image.name)
    // console.log(data)
    axios.post(`http://localhost:3002/` + 'upload', data)
      .then(response1 => {
        // console.log(response.data.imageUrl);
        var image = this.state.cv;
        const data = new FormData();
       data.append("image", image, image.name);
        // console.log(cv.name)
        // console.log(data)
        axios.post(`http://localhost:3002/` + 'upload', data)
          .then(response2 => {
            // console.log(response.data.imageUrl);
            let url = 'http://localhost:3002/users/signup'
            axios.post(url, {
              firstname,
              lastname,
              phonenumber,
              address,
              field,
              email,
              password,
              picture: response1.data.imageUrl,
              cv:response2.data.imageUrl
            })
              .then(function (response) {
                console.log(response.data);
                if (response.data.loginState === "true") {
                  toast("Succesfully Signup in", {
                  
                    onClose: () => {}
                  });
                  localStorage.setItem('user_id', response.data.user_id);
                  localStorage.setItem('sessionID', response.data.sessionID);
                }else{
                  var errormsg = "Cannot Sign you Up";
                  console.log(errormsg) 
                  toast(errormsg, {
                  
                    onClose: () => {}
                  });
                }
              })
              .catch(function (error) {
                console.log(error);
              });

          }).catch((err) => {
            console.log(err);
          });

      }).catch((err) => {
        console.log(err);
      });

  }
  render() {
    return (
      <div className="container junaid">
        <form className="text-center border border-light p-5" onSubmit={this.handleSubmit} >
          <p className="h4 mb-4">Sign up</p>
          <div className="form-row mb-4">
            <div className="col">
              {/* First name */}
              {/* <label for="first_name">First Name</label> */}
              <input type="text" id="first_name" className="form-control" placeholder="First name" required/>
            </div>
            <div className="col">
              {/* Last name */}
              {/* <label for="last_name">Last Name</label> */}
              <input type="text" id="last_name" className="form-control" placeholder="Last name" required/>
            </div>
          </div>
          {/* E-mail */}
          <input type="email" id="email" className="form-control mb-4" placeholder="E-mail" required/>
          {/* Password */}
          <input type="password" id="password" className="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" required />
          {/* Phone number */}
          <br />
          <input type="number" id="phoneNumber" className="form-control" placeholder="Phone number" required/>
          <br />
          <input type="text" id="address" className="form-control" placeholder="Address" required/>
          <br />

          <select className="form-control" id="field" required>
            <option value="" disabled selected>Choose your Field</option>
            <option value="engineering">Engineering</option>
            <option value="computerScience">Computer Science</option>
            <option value="medical">Medical</option>
          </select>
          <br />
          <h3>Upload Profile Picture</h3>
          <input type="file" name="" id="" onChange={this.imageChange} required/>

          {/* Newsletter */}
          <h3>Upload CV</h3>
          <input type="file" name="" id="" onChange={this.cvChange} required/>

          {/* Sign up button */}
          <button className="btn btn-danger my-4 btn-block" type="submit">Sign up</button>
          {/* Social register */}
          <p>or sign up with:</p>
          <hr />
          {/* Terms of service */}
          <p>By clicking
          <em>Sign up</em> you agree to our
          <a href target="">terms of service</a>
          </p></form>
        {/* Default form register */}
      </div>

    );
  }
}

export default UserRegister;
