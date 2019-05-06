import React, { Component } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export class AccountSetting extends Component {
 user_data = JSON.parse(localStorage.getItem('myuser'));
user_id = localStorage.getItem('user_id');
 componentWillMount(){
        
        this.setState({
            wallet:this.user_data.wallet
        })
    }
    state = {
        wallet : 1000
    }
    var 
  handleSubmit = (e) => {
    e.preventDefault()
    var old_password = e.target.old.value;
    var new_password = e.target.p1.value; 
    console.log(e.target.old.value)
    console.log(e.target.p1.value)
    console.log(e.target.p2.value)
    console.log('handling submit')
    if(e.target.p1.value !== e.target.p2.value){
        toast("Password Does not Match");
    }else if (old_password !== this.user_data.password) {
        toast("Wrong Old Password Entered");
    }else{
    let url = 'http://localhost:3002/users/changepassword'
    axios.post(url, {
      user_id: this.user_id,
      password: new_password

    })
      .then(function (response) {
        if (response.data === "true") {
          toast("Succesfully Changed Password");
        }else{
          toast("Error in changing the Password");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    

  }
    render() {
        return (
            <div>
                <section className="profile-account-setting">
                    <div className="container">
                        <div className="account-tabs-setting">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="acc-leftbar">
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <a className="nav-item nav-link active" id="nav-status-tab" data-toggle="tab" href="#nav-status" role="tab" aria-controls="nav-status" aria-selected="false"><i className="fa fa-line-chart" />Status</a>
                                            <a className="nav-item nav-link" id="nav-password-tab" data-toggle="tab" href="#nav-password" role="tab" aria-controls="nav-password" aria-selected="false"><i className="fa fa-lock" />Change Password</a>
                                            <a className="nav-item nav-link" id="nav-notification-tab" data-toggle="tab" href="#nav-notification" role="tab" aria-controls="nav-notification" aria-selected="false"><i className="fa fa-flash" />Notifications</a>
                                        </div>
                                    </div>{/*acc-leftbar end*/}
                                </div>
                                <div className="col-lg-9">
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="nav-status" role="tabpanel" aria-labelledby="nav-status-tab">
                                            <div className="acc-setting">
                                                <h3>Profile Status</h3>
                                                <div className="profile-bx-details">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                                            <div className="profile-bx-info">
                                                                <div className="pro-bx">
                                                                    <img src="images/pro-icon1.png" alt />
                                                                    <div className="bx-info">
                                                                        <h3>${this.state.wallet}</h3>
                                                                        <h5>Total Income</h5>
                                                                    </div>{/*bx-info end*/}
                                                                </div>{/*pro-bx end*/}
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                                            </div>{/*profile-bx-info end*/}
                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                                            <div className="profile-bx-info">
                                                                <div className="pro-bx">
                                                                    <img src="images/pro-icon2.png" alt />
                                                                    <div className="bx-info">
                                                                        <h3>$0</h3>
                                                                        <h5>Widthraw</h5>
                                                                    </div>{/*bx-info end*/}
                                                                </div>{/*pro-bx end*/}
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                                            </div>{/*profile-bx-info end*/}
                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                                            <div className="profile-bx-info">
                                                                <div className="pro-bx">
                                                                    <img src="images/pro-icon3.png" alt />
                                                                    <div className="bx-info">
                                                                        <h3>$0</h3>
                                                                        <h5>Sent</h5>
                                                                    </div>{/*bx-info end*/}
                                                                </div>{/*pro-bx end*/}
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                                            </div>{/*profile-bx-info end*/}
                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                                            <div className="profile-bx-info">
                                                                <div className="pro-bx">
                                                                    <img src="images/pro-icon4.png" alt />
                                                                    <div className="bx-info">
                                                                        <h3>130</h3>
                                                                        <h5>Total Projects</h5>
                                                                    </div>{/*bx-info end*/}
                                                                </div>{/*pro-bx end*/}
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                                            </div>{/*profile-bx-info end*/}
                                                        </div>
                                                    </div>
                                                </div>{/*profile-bx-details end*/}
                                                <div className="pro-work-status">
                                                    {/* <h4>Work Status  -  Last Months Working Status</h4> */}
                                                </div>{/*pro-work-status end*/}
                                            </div>{/*acc-setting end*/}
                                        </div>
                                        <div className="tab-pane fade" id="nav-password" role="tabpanel" aria-labelledby="nav-password-tab">
                                            <div className="acc-setting">
                                                <h3>Account Setting</h3>
                                                <form onSubmit = {this.handleSubmit}>
                                                    <div className="cp-field">
                                                        <h5>Old Password</h5>
                                                        <div className="cpp-fiel">
                                                            <input type="text" name="old" placeholder="Old Password" />
                                                            <i className="fa fa-lock" />
                                                        </div>
                                                    </div>
                                                    <div className="cp-field">
                                                        <h5>New Password</h5>
                                                        <div className="cpp-fiel">
                                                            <input type="text" name="p1" placeholder="New Password" />
                                                            <i className="fa fa-lock" />
                                                        </div>
                                                    </div>
                                                    <div className="cp-field">
                                                        <h5>Repeat Password</h5>
                                                        <div className="cpp-fiel">
                                                            <input type="text" name="p2" placeholder="Repeat Password" />
                                                            <i className="fa fa-lock" />
                                                        </div>
                                                    </div>
                                                    <div className="cp-field">
                                                        <h5><a href="#" title>Forgot Password?</a></h5>
                                                    </div>
                                                    <div className="save-stngs pd2">
                                                        <ul>
                                                            <li><button type="submit">Save Setting</button></li>
                                                        </ul>
                                                    </div>{/*save-stngs end*/}
                                                </form>
                                            </div>{/*acc-setting end*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/*account-tabs-setting end*/}
                    </div>
                </section>
            </div>
        )
    }
}

export default AccountSetting
