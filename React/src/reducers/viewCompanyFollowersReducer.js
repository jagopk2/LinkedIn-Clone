import {
    VIEW_COMPANYFOLLOWERS_BEGIN,
    VIEW_COMPANYFOLLOWERS_SUCCESS,
    VIEW_COMPANYFOLLOWERS_FAILURE
  } from '../actions/viewCompanyFollowersAction';
  
  const initialState = {
    user : ''
  };
  
  export default function viewCompanyFollowersReducer(state = initialState, action) {
    switch(action.type) {
      case VIEW_COMPANYFOLLOWERS_BEGIN:
        console.log('action',action);
        return {
          ...state
        };
  
      case VIEW_COMPANYFOLLOWERS_SUCCESS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        console.log('action_success', action.payload.user)
        let user = action.payload.user;
        console.log('jobApplicants',user)
        return {
          ...state,
          user
        };
  
      case VIEW_COMPANYFOLLOWERS_FAILURE:

       console.log(action.type)
        return {
          ...state
        };
  
      default:
        return state;
    }
  }