import React, {Component} from 'react';
import { connect } from 'react-redux'

class JobPostDetails extends Component{

    render(){
        console.log(this.props);
        const job = this.props.job[0] ? 
        
        <div>
            <h1>{ this.props.job[0].id }</h1>
            <h2>{ this.props.job[0].message }</h2>
        </div>
        :
        <div>
            Loading Job details...
        </div>

        return (
            <div className="container">
                { job }
            </div>
        )   
    }

}

const mapStateToProps=(state, ownProps)=>{
    let id = ownProps.match.params.id;
    let {jobs} = state.jobs
    
    return{
        job:jobs.filter(job=>{
            return job.id === id
        })
    }
}

export default connect(mapStateToProps)(JobPostDetails);