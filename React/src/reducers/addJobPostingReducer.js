import {
    ADD_JOBPOST_BEGIN,
    ADD_JOBPOST_SUCCESS,
    ADD_JOBPOST_FAILURE
  } from '../actions/addJobPostingAction';
  
  const initialState = {
    jobPosting : ''
  };
  
  export default function addJobPostingReducer(state = initialState, action) {
    switch(action.type) {
      case ADD_JOBPOST_BEGIN:
        console.log('action',action);
        return {
          ...state
        };
  
      case ADD_JOBPOST_SUCCESS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        console.log('action_success', action.payload.jobPosting)
        let jobPosting = action.payload.jobPosting;
        console.log('jobs',jobPosting)
        return {
          ...state,
          jobPosting
        };
  
      case ADD_JOBPOST_FAILURE:

       console.log(action.type)
        return {
          ...state
        };
  
      default:
        return state;
    }
  }