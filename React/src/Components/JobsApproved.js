import React, {Component} from 'react'
import { connect } from 'react-redux'
import { NavLink,Link } from 'react-router-dom'
import { viewJobsApproved } from '../actions/jobApprovedWithUserAction'
const $ = window.$;

class JobsApproved extends Component{

    componentWillMount(){
        this.props.dispatch(viewJobsApproved());
    }

    state = {
    }

    render(){
        const {jobs} = this.props;
        console.log('jobWithUser',this.props);
        return(

             jobs && jobs.map(job => {
                        return(
                            <div className="posty">
											<div className="post-bar no-margin">
												<div className="post_topbar">
													<div className="usy-dt">
														<img src="images/resources/us-pc2.png" alt />
														<div className="usy-name">
															<h3>{job.title}</h3>
															<span><img src="images/clock.png" alt />{job.field}</span>
														</div>
													</div>
												</div>
												<div className="job_descp">
													<h3>Senior Wordpress Developer</h3>
													<ul className="job-dt">
														<li><a href="#" title="">{job.phoneNumber}</a></li>
														<li><span>{job.address}</span></li>
													</ul>
													<p>{job.description}
                                                        <a href="#" title=""><Link to={{ pathname: '/company/jobWithApprovedUser', state: { job_id: `${job.id}`} }}><br/>Show Details</Link></a>
                                                    </p>
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
        jobs:state.jobsApproved.jobWithUser
    }
}

export default connect(mapStateToProps)(JobsApproved);