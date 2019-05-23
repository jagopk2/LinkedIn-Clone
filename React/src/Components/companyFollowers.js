import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { viewCompanyFollowers } from '../actions/viewCompanyFollowersAction'
import { followBlockStatus } from '../actions/FollowBlockStatusAction'


const $ = window.$;

class CompanyFollowers extends Component{

    componentWillMount(){
        this.props.dispatch(viewCompanyFollowers());
    }


    state = {
        location:null
    }

    handleOnSubmit=(e)=>{
        e.preventDefault();
        console.log('target',e.target);
        let id = e.target.id
        let status = e.target.value
        
        status !== "pending" ?
                this.props.dispatch(followBlockStatus(id, status))
            :
                this.props.dispatch(followBlockStatus(id, status));
        this.setState({location:'change'})

    }
    
    render(){

        if(this.state.location)
        {
            window.location.replace('/company/followers');
        }


        console.log(this.props);
        const {users} = this.props;
         return(
              users && users.map(user => {
                return (
			      <div className= "container"> 
							<div className="col-lg-6">
								<div className="posts-section">
											<div className="post-bar">
												<div className="post_topbar">
													<div className="usy-dt">
														<img src="images/resources/us-pic.png"/>
														<div className="usy-name">
															<h3>Approved User</h3>
														</div>
                                                        <h3>{ user["firstname"] }</h3>
                                                        <h3>{ user["lastname"] }</h3>
													</div>
												</div>
												<div className="epi-sec">
													<ul className="bk-links">
														<li>                                    
                                                            <button className="btn waves-effect waves-light" id={user.id} value={user.status} onClick={this.handleOnSubmit}>
                                                                { user && user.status==='approved' ? "Following" : "Blocked" }
                                                            </button><i className="la la-envelope"></i></li>
													</ul>
												</div>
												<div className="job_descp">
													<ul className="job-dt">
														<li><a href="#" title="">{user["field"]}</a></li>
													</ul>
                                                    <h3>Contact Details</h3>
                                                    <h4>{ user["email"] }</h4>
                                                    <h4>{ user["address"] }</h4>
                                                    <h4>{ user["phoneNumber"] }</h4>
												</div>
                                                <Link to={{ pathname: `/company/followerUserProfile`, state: { user_id : `${user.id}`, status: `${user.status}`} }}>
                                                    show Details
                                                </Link>
											</div>
										</div>
									</div>
								</div>			 	
                    )
            }) 
        );
    }
}

const mapStateToProps=(state)=>{
    console.log(state);
    return{
        users:state.viewCompnayFollowers.user
    }
}

export default connect(mapStateToProps)(CompanyFollowers);