import {
    VIEW_JOBPOSTING_BEGIN,
    VIEW_JOBPOSTING_SUCCESS,
    VIEW_JOBPOSTING_FAILURE
  } from '../actions/viewJobsActions';
  
  const initialState = {
    jobPosting : ''
  };
  
  export default function viewJobPostingReducer(state = initialState, action) {
    switch(action.type) {
      case VIEW_JOBPOSTING_BEGIN:
        console.log('action',action);
        return {
          ...state
        };
  
      case VIEW_JOBPOSTING_SUCCESS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        console.log('action_success', action.payload.jobPosting)
        let jobPosting = action.payload.jobPosting;
        console.log('jobs',jobPosting)
        return {
          ...state,
          jobPosting
        };
  
      case VIEW_JOBPOSTING_FAILURE:

       console.log(action.type)
        return {
          ...state
        };
  
      default:
        return state;
    }
  }