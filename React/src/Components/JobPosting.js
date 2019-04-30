import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createJob } from '../actions/createJob'

class JobPosting extends Component{

    state = {
        description: " "
    }

    handleOnChange=(e)=>{
        this.setState({ [e.target.name] : e.target.value })
        console.log(this.state);
    }

    onSubmit=(e)=>{
        e.preventDefault();
        this.props.createJob(this.state);
    }

    handleShowDetails=(e)=>{
        console.log(e)
    }

    render(){
        console.log(this.props);
        const {jobs} = this.props;
        return(
                <div className="container">
                    <div className="col m12">
                        <form onSubmit={this.onSubmit}>
                            <div className="card horizontal">
                                <div className="card-stacked">
                                    <div className="card-title">
                                        <p>Enter New Message</p>
                                    </div>
                                    <div className="card-content">
                                        <input type="text" name="description" onChange={this.handleOnChange}width="150" />
                                    </div>
                                    <div className="card-action">
                                        <button className="btn waves-effect waves-light" type="submit" name="action">
                                        Submit
                                            <i className="material-icons right">send</i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>    
                    </div> 


                    { jobs.map(job => {
                        return (
                                <div className="col m12">
                                    <div className="card horizontal">
                                        <div className="card-stacked">
                                            <div className="card-content">
                                                <p>{ job.message }</p>
                                            </div>
                                            <div className="card-action">
                                                <Link to={`/jobPostDetails/${job.id}`}  >Show Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                    }) }
                
                </div>
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        createJob:(job)=>dispatch(createJob(job))
    }
}

const mapStateToProps=(state)=>{
    console.log(state);
    return{
        jobs:state.jobs.jobs
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobPosting);