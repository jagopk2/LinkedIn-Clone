import {
    REGISTER_COMPANY_BEGIN,
    REGISTER_COMPANY_SUCCESS,
    REGISTER_COMPANY_FAILURE
  } from '../actions/registerCompanyAction';
  
  const initialState = {
    status : ''
  };
  
  export default function registerCompanyReducer(state = initialState, action) {
    switch(action.type) {
      case REGISTER_COMPANY_BEGIN:
        console.log('action',action);
        return {
          ...state
        };
  
      case REGISTER_COMPANY_SUCCESS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        console.log('action_success', action.payload.status)
        let status = action.payload.status;
        console.log('jobApplicants',status)
        return {
          ...state,
          status
        };
  
      case REGISTER_COMPANY_FAILURE:

       console.log(action.type)
        return {
          ...state
        };
  
      default:
        return state;
    }
  }