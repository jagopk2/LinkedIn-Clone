import React, {Component} from 'react';
import { connect } from 'react-redux'
import { viewJobPostDetails } from '../actions/viewJobPostDetailsAction'
import JobApplication from './jobApplication'
import JobPostDetails from './jobPostDetails'

class JobWithApplication extends Component{
    
    state={
        job_id:''
    }

    componentWillMount(){
        console.log('jobwithApplicants',this.props)
        let {job_id} = this.props.location.state;
        this.state.job_id=job_id;
        this.props.dispatch(viewJobPostDetails(job_id));
    }

    render(){
        const {jobPostingdetails} = this.props;
        console.log(jobPostingdetails)
      //  console.log('asf',jobDetails.j);
        var jobDetails;

        return (
            <div>
                <JobPostDetails {...jobPostingdetails} />
                <JobApplication job_id = {this.state.job_id}/>
            </div>

        )
    }


}

const mapStateToProps=(state, ownProps)=>{
    let id = ownProps.match.params.id;
    let {jobPostingdetails} = state.jobPostDetail
    return{
        jobPostingdetails
    }
}

export default connect(mapStateToProps)(JobWithApplication);