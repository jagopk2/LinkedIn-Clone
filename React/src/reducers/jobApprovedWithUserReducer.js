import {
    VIEW_APPROVE_USER_BEGIN,
    VIEW_APPROVE_USER_SUCCESS,
    VIEW_APPROVE_USER_FAILURE
  } from '../actions/jobApprovedWithUserAction.js';
  
  const initialState = {
    jobWithUser : ''
  };
  
  export default function userApprovalReducer(state = initialState, action) {
    switch(action.type) {
      case VIEW_APPROVE_USER_BEGIN:
        console.log('action',action);
        return {
          ...state
        };
  
      case VIEW_APPROVE_USER_SUCCESS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        console.log('action_success', action.payload.jobWithUser)
        let jobWithUser = action.payload.jobWithUser;
        console.log('jobApplicants',jobWithUser)
        return {
          ...state,
          jobWithUser
        };
  
      case VIEW_APPROVE_USER_FAILURE:

       console.log(action.type)
        return {
          ...state
        };
  
      default:
        return state;
    }
  }