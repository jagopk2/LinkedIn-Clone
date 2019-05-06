import {
    UPDATE_FOLLOWSTATUS_BEGIN,
    UPDATE_FOLLOWSTATUS_SUCCESS,
    UPDATE_FOLLOWSTATUS_FAILURE
  } from '../actions/FollowBlockStatusAction';
  
  const initialState = {
    jobWithUser : ''
  };
  
  export default function followBlockStatusReducer(state = initialState, action) {
    switch(action.type) {
      case UPDATE_FOLLOWSTATUS_BEGIN:
        console.log('action',action);
        return {
          ...state
        };
  
      case UPDATE_FOLLOWSTATUS_SUCCESS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        console.log('action_success', action.payload.jobWithUser)
        let jobWithUser = action.payload.jobWithUser;
        console.log('jobApplicants',jobWithUser)
        return {
          ...state,
          jobWithUser
        };
  
      case UPDATE_FOLLOWSTATUS_FAILURE:

       console.log(action.type)
        return {
          ...state
        };
  
      default:
        return state;
    }
  }