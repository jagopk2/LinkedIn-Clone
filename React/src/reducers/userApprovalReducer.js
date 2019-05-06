import {
    APPROVE_USER_BEGIN,
    APPROVE_USER_SUCCESS,
    APPROVE_USER_FAILURE
  } from '../actions/userApprovalAction';
  
  const initialState = {
    approvalStatus : ''
  };
  
  export default function userApprovalReducer(state = initialState, action) {
    switch(action.type) {
      case APPROVE_USER_BEGIN:
        console.log('action',action);
        return {
          ...state
        };
  
      case APPROVE_USER_SUCCESS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        console.log('action_success', action.payload.approvalStatus)
        let approvalStatus = action.payload.approvalStatus;
        console.log('jobApplicants',approvalStatus)
        return {
          ...state,
          approvalStatus
        };
  
      case APPROVE_USER_FAILURE:

       console.log(action.type)
        return {
          ...state
        };
  
      default:
        return state;
    }
  }