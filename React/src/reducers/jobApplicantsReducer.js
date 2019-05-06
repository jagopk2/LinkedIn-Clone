import {
    VIEW_JOBAPPLICANTS_BEGIN,
    VIEW_JOBAPPLICANTS_SUCCESS,
    VIEW_JOBAPPLICANTS_FAILURE
  } from '../actions/jobApplicantsAction';
  
  const initialState = {
    jobApplicants : ''
  };
  
  export default function jobApplicantsRedcuer(state = initialState, action) {
    switch(action.type) {
      case VIEW_JOBAPPLICANTS_BEGIN:
        console.log('action',action);
        return {
          ...state
        };
  
      case VIEW_JOBAPPLICANTS_SUCCESS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        console.log('action_success', action.payload.jobApplicants)
        let jobApplicants = action.payload.jobApplicants;
        console.log('jobApplicants',jobApplicants)
        return {
          ...state,
          jobApplicants
        };
  
      case VIEW_JOBAPPLICANTS_FAILURE:

       console.log(action.type)
        return {
          ...state
        };
  
      default:
        return state;
    }
  }