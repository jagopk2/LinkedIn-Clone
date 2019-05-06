import React, { Component } from 'react';


class JobPostDetails extends Component {

  render() {
      const {jobDetails} = this.props;
			const {skills} = this.props;
			console.log(jobDetails);    
      console.log(skills)
    
    // if(skills)
    // for(i=0; i<skills.length; i++)
    // {
        
    // }

    return (
			      <div className= "container"> 
						{  jobDetails ? 
							<div className="col-lg-6">
								<div className="main-ws-sec">
									<div className="user-tab-sec">
										<h3>Company</h3>
										<div className="star-descp">
											<span>{jobDetails["name"]}</span>
											<ul>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star-half-o"></i></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="posts-section">
											<div className="post-bar">
												<div className="post_topbar">
													<div className="usy-dt">
														<img src="images/resources/us-pic.png"/>
														<div className="usy-name">
															<h3>Job Details</h3>
														</div>
													</div>
												</div>
												<div className="epi-sec">
													<ul className="bk-links">
														<li><a ><i className="la la-bookmark"></i></a></li>
														<li><a ><i className="la la-envelope"></i></a></li>
													</ul>
												</div>
												<div className="job_descp">
													<h3>{ jobDetails["title"]}</h3>
													<ul className="job-dt">
														<li><a href="#" title="">{jobDetails["field"]}</a></li>
													</ul>
													<p>{jobDetails["description"]}</p>
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

export default JobPostDetails;
