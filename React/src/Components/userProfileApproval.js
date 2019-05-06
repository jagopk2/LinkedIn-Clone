import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchUserProfile} from '../actions/approveUserForJobAction'
import {approveUser} from '../actions/userApprovalAction'
import { Redirect } from 'react-router'


class UserProfileApproval extends Component {

    state={
        location : false
    }

    handleSubmit=(e)=>{
        console.log(this.state);
        this.props.dispatch(approveUser(this.state));
        alert("Successfully Job Approved");
        console.log(this.props)
        this.setState({...this.state, location:'change'})
    }

    componentWillMount(){
        console.log(this.props.location.state);
        this.state = this.props.location.state;
        this.props.dispatch(fetchUserProfile(this.state.user_id));
    }

    render() {

        if(this.state.location)
        {
            return <Redirect to = '/jobPosting' />;
        }

        let { userDetails } = this.props.user;
        let { skills } = this.props.user;
        
    let user = <div>
                {userDetails ? 
                <div>
                    <h3>{ userDetails["firstname"] }</h3>
                    <h3>{ userDetails["lastname"] }</h3>
                    <h3>{ userDetails["email"] }</h3>
                    <h3>{ userDetails["address"] }</h3>
                    <h3>{ userDetails["phoneNumber"] }</h3>
                    <h3>{ userDetails["field"] }</h3>                     
                </div>
                :
                <h3>Loading Page Content !</h3>
                }
            </div>;

    
    // // if(skills)
    // // for(i=0; i<skills.length; i++)
    // // {
        
    // // }

    let skill = skills && skills.map((key)=>
    {
        console.log(key["skill"])
        return(
            <div>
                <h3>{key["skill"]}</h3>
            </div>
        )
    });

    return (
			      <div className= "container"> 
						{  userDetails ? 
                          <div class="main-ws-sec">
							<div className="col-lg-6">
								<div className="posts-section">
											<div className="post-bar">
												<div className="post_topbar">
													<div className="usy-dt">
														<img src="images/resources/us-pic.png"/>
														<div className="usy-name">
															<h3>Approved User</h3>
														</div>
                                                        <h3>{ userDetails["firstname"] }</h3>
                                                        <h3>{ userDetails["lastname"] }</h3>
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
														<li><a href="#" title="">{userDetails["field"]}</a></li>
													</ul>
                                                    <h3>Contact Details</h3>
                                                    <h4>{ userDetails["email"] }</h4>
                                                    <h4>{ userDetails["address"] }</h4>
                                                    <h4>{ userDetails["phoneNumber"] }</h4>
													<ul className="skill-tags">
													   {skills && skills.map((key)=>
																		{
																				console.log(key["skill"])
																				return(
																						<li><a href="#" title="">{key["skill"]}</a></li>
																				)
																		})
														 }
													</ul>
                                                    <h4>---</h4>
                                                    <div className="post-project-fields">
                                                    <button className="btn active" type="submit" name="action" onClick={this.handleSubmit}>
                                                        Approve
                                                    </button>
                                                    </div>
												</div>
                                                
											</div>
										</div>
									</div>
                                </div>
                                :
                            <div>Loading Page Content !</div>
                        }
        </div>
    );
  }
}

const mapStateToProps=(state)=>{
    console.log('userProfile',state);
    return{
        user:state.userForJob.user,
        status : state.userApproval.approvalStatus
    }
}

export default connect(mapStateToProps)(UserProfileApproval);
