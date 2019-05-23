import React, {Component} from 'react';
import { connect } from 'react-redux'
import { fetchProfile } from '../actions/comProfileActions';

class ComProfile extends Component{

    componentWillMount() {
        
        this.props.dispatch(fetchProfile());
    }


    render(){
        console.log('ali',this.props);
    
        let {profile} = this.props;
        var value;
        Object.entries(profile).forEach(entry => {
            value = entry[1];
            localStorage.setItem('id', value['id']);
            localStorage.setItem('chatName', value['name']);
        });
        return (
        <div className="container">
        {       
           value ? 
            <div class="main-ws-sec">
              <div className="col-lg-6">
                  <div className="posts-section">
                              <div className="post-bar">
                                  <div className="post_topbar">
                                      <div className="usy-dt">
                                          <img src="images/resources/us-pic.png"/>
                                          <div className="usy-name">
                                              <h3>Company profile</h3>
                                          </div>
                                          <h3>{ value["name"] }</h3>
                                          <h3>{ value["email"] }</h3>
                                      </div>
                                  </div>
                                  <div className="epi-sec">
                                      <ul className="bk-links">
                                          <li><a ><i className="la la-bookmark"></i></a></li>
                                          <li><a ><i className="la la-envelope"></i></a></li>
                                      </ul>
                                  </div>
                                  <div className="job_descp">
                                      <ul className="job-dt">
                                          <li><a href="#" title="">{value["website"]}</a></li>
                                      </ul>
                                      <h3>Contact Details</h3>
                                      <h4>{ value["email"] }</h4>
                                      <h4>{ value["address"] }</h4>
                                      <h4>{ value["phoneNumber"] }</h4>
                                      <ul className="skill-tags">
                                        <li><a>HTML</a></li>
                                        <li><a>css</a></li>
                                        <li><a>Javascript</a></li>
                                        <li><a>Node JS</a></li>
                                        <li><a>React</a></li>
                                        <li><a>MySql</a></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
              </div>
              :
              <div>Loading Page Content !</div>							 	
          }  
            </div>
        )   
    }

}

const mapStateToProps=(state, ownProps)=>{
    let id = ownProps.match.params.id;
    console.log(state)
    let {profile} = state.compProfile
    console.log('profile', profile)
    return{
        profile
        }
    }

export default connect(mapStateToProps)(ComProfile);