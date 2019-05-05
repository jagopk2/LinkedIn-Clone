import React, { Component } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
  autoClose: 5000, 
  position: toast.POSITION.TOP_CENTER,
  
  //etc you get the idea
});
var user_id =3 ;
 class Navbar extends Component{
  componentWillMount(){
     let url = `http://localhost:3002/users/getuser`;
     axios.post(url,{
      user_id
     }).then((response)=>{
      console.log(response.data) 
      this.setState({
        user:response.data
       })
     }).catch((err)=>{
       if(err){
         console.log(err)
       }
     }) ;

   }
   state={
     user:null
     
   }
   logout(){
     localStorage.clear();
     toast("Succesfully Logged out..!", {
                  
      onClose: () => {}
    });

   }
    render() {
      if(this.state.user){
        return (
          <div>
            <header>
              <div className="container">
                <div className="header-data">
                  <div className="logo">
                    <a href="index.html" title><img src="images/logo.png" alt /></a>
                  </div>{/*logo end*/}
                  <div className="search-bar">
                    <form>
                      <input type="text" name="search" placeholder="Search..." />
                      <button type="submit"><i className="la la-search" /></button>
                    </form>
                  </div>{/*search-bar end*/}
                  <nav>
                    <ul>
                      <li>
                        <a href="/" title>
                          <span><img src="images/icon1.png" alt /></span>
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="/companies" title>
                          <span><img src="images/icon2.png" alt /></span>
                          Companies
                        </a>
                      </li>
                      
                      <li>
                        <a href="/followusers" title>
                          <span><img src="images/icon4.png" alt /></span>
                          Profiles
                        </a>
                        
                      </li>
                      <li>
                        <a href="/ctimeline" title>
                          <span><img src="images/icon5.png" alt /></span>
                          Jobs
                        </a>
                      </li>
                      
                    </ul>
                  </nav>{/*nav end*/}
                  <div className="menu-btn">
                    <a href="#" title><i className="fa fa-bars" /></a>
                  </div>{/*menu-btn end*/}
                  <div className="user-account">
                    <div className="user-info">
                    <img src={'http://localhost:3002/download/' + this.state.user.picture} alt="Image" height={30} width={30} margin={0} />
                      <a href="#" title>{this.state.user.firstname} </a>
                      <i className="la la-sort-down" />
                    </div>
                    <div className="user-account-settingss">
                      <h3>Setting</h3>
                      <ul className="us-links">
                        <li><a href={"/uprofile/"+user_id} title>Profile</a></li>
                        <li><a href="profile-account-setting.html" title>Account Setting</a></li>
                        <li><a href="#" title>Privacy</a></li>
                        <li><a href="#" title>Faqs</a></li>
                        <li><a href="#" title>Terms &amp; Conditions</a></li>
                      </ul>
                      <h3 className="tc"><a href="/login" title onClick= {this.logout}>Logout</a></h3>
                    </div>{/*user-account-settingss end*/}
                  </div>
                </div>{/*header-data end*/}
              </div>
            </header>{/*header end*/}	
          </div>
        )
      }else{
        return(
          <div>Loading Page Content!</div>
        )
      }
      
    }
  };

  export default Navbar;