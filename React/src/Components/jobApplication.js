import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {fetchJobApplicants} from '../actions/jobApplicantsAction'

class JobApplication extends Component {

  componentWillMount(){
    console.log(this.props.job_id);
    let job_id = this.props.job_id;
    console.log('will',job_id);
    this.props.dispatch(fetchJobApplicants(job_id));
  }

  render() {

      const {user} = this.props;
      console.log('jobApplicants comp',user)
      let user_collection = user && user.map(singleuser => {
          return (
                  <div className="col m12">
                      <div className="card horizontal">
                          <div className="card-stacked">
                              <div className="card-content">
                                  <p>{ singleuser.firstname }</p>
                                  <h6>{ singleuser.lastname }</h6>
                                  <h6>{ singleuser.email }</h6>                                  
                              </div>
                              <div className="card-action">
                                  <Link to={{ pathname: '/company/userProfileApproval', state: { user_id: `${singleuser.user_id}`, job_id: `${this.props.job_id}`} }}>Show Details</Link>
                              </div>
                          </div>
                      </div>
                  </div>
              )
          }) ;
    console.log('In render jobApplicants',this.props);
    return (
      
      <div>
          {user_collection}
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  console.log('jobApplicants',state);
  return{
      user:state.jobApplicants.jobApplicants
  }
}
export default connect(mapStateToProps)(JobApplication);