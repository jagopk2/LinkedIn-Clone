import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link,NavLink} from 'react-router-dom';    
import ReactDOM from 'react-dom'; 
import { viewJobPosting } from '../actions/viewJobsActions'
import { addJob } from '../actions/addJobPostingAction'
const $ = window.$;

class JobPosting extends Component{

    componentWillMount(){
        this.props.dispatch(viewJobPosting());
    }

    // componentDidMount(){
    //     var element = ReactDOM.findDOMNode(this.refs.dropdown)
    //     $(element).ready(function(){
    //         $('select').formSelect();
    //     });
    // }

    state = {
        comp_id: '',
        title: '',
        description: '',
        skills: [],
        field: '',
    }

    handleOnChange=(e)=>{
        if(e.target.name === 'skills')
        {
            if(e.target.checked)
            {
                this.state.skills.push(e.target.value);
                let skills = new Set([...this.state.skills])
            }
            else
            {
                var skills = this.state.skills.filter(function(val) {
                    return val !== e.target.value;
                  });
                this.state.skills = skills;
            }
            
        }
        else
        this.setState({ [e.target.name] : e.target.value })
        console.log(this.state);
    }

    handleOnSubmit=(e)=>{
        e.preventDefault();
        // let temp = this.state.skills;
        // let skills = [...new Set(temp.map(x => x))]
        // this.setState({...this.state, skills: skills})
        let comp_id = localStorage.getItem('id');
        this.state.comp_id = comp_id;
        console.log('ali' ,this.state);
        
        this.props.dispatch(addJob(this.state));
        this.setState({...this.state});
        window.location.reload();
    }

    handleShowDetails=(e)=>{

        console.log(e)
    }

    render(){
        console.log(this.props);
        const {jobs} = this.props;
        return(
        <div className="container">
             <div class="main-ws-sec">

        <div className="job_post active">
			<div className="post-project">
				<h3>Post a job</h3>
				<div className="post-project-fields">
					<form onSubmit={this.handleOnSubmit}>
						<div className="row">
							<div className="col-lg-12">
                            <input type="text" name="title" onChange={this.handleOnChange} width="150"/> <br />
							</div>
							<div className="col-lg-12">
								<div className="inp-field">
                                    <select name="field" onChange={this.handleOnChange}>
                                        <option value="" disabled selected>Select Field</option>
                                        <option value="Computer Science">Computer Science</option>
                                        <option value="Mangment">Mangment</option>
                                        <option value="Electrical Engineering">Electrical Engineering</option>
                                    </select>
								</div>
							</div>
							<div className="col-lg-12">
                                <input type="checkbox"  name="skills" value="html" onChange={this.handleOnChange}></input>
                                <input type="checkbox"  name="skills" value="css" onChange={this.handleOnChange} />
                                <input type="checkbox"  name="skills" value="javascript" onChange={this.handleOnChange} />
							</div>
							<div className="col-lg-12">
                            <textarea name="description" onChange={this.handleOnChange} width="150" ></textarea>
							</div>
							<div className="col-lg-12">
								<ul>
									<li><button className="active" type="submit" name="action">Post</button></li>
								</ul>
							</div>
						</div>
					</form>
				</div>
			</div>
            </div>
		</div>




                    { jobs && jobs.map(job => {
                        return (
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
                                                        <a href="#" title=""><Link to={{ pathname: '/company/jobWithApplicants', state: { job_id: `${job.id}`} }}><br/>Show Details</Link></a>
                                                    </p>
                                                </div>
											</div>
                                        </div>
                            )
                    }) }
                
                </div>
        );
    }
}

const mapStateToProps=(state)=>{
    console.log(state);
    return{
        jobs:state.jobs.jobPosting
    }
}

export default connect(mapStateToProps)(JobPosting);