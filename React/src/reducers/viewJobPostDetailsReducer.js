import {
    VIEW_JOBPOSTDETAILS_BEGIN,
    VIEW_JOBPOSTDETAILS_SUCCESS,
    VIEW_JOBPOSTDETAILS_FAILURE
  } from '../actions/viewJobPostDetailsAction';
  
  const initialState = {
    jobPostingdetails : ''
  };
  
  export default function viewJobPostDetailsReducer(state = initialState, action) {
    switch(action.type) {
      case VIEW_JOBPOSTDETAILS_BEGIN:
        console.log('action',action);
        return {
          ...state
        };
  
      case VIEW_JOBPOSTDETAILS_SUCCESS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        console.log('action_success', action.payload.jobPostingdetails)
        let jobPostingdetails = action.payload.jobPostingdetails;
        console.log('jobs',jobPostingdetails)
        return {
          ...state,
          jobPostingdetails
        };
  
      case VIEW_JOBPOSTDETAILS_FAILURE:

       console.log(action.type)
        return {
          ...state
        };
  
      default:
        return state;
    }
  }