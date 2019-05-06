import {
    FETCH_USER_BEGIN,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
  } from '../actions/FollowerUserProfileAction';
  
  const initialState = {
    user : ''
  };
  
  export default function FollowerUserProfileReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_USER_BEGIN:
        console.log('action',action);
        return {
          ...state
        };
  
      case FETCH_USER_SUCCESS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        console.log('action_success', action.payload.user)
        let user = action.payload.user;
        console.log('jobApplicants',user)
        return {
          ...state,
          user
        };
  
      case FETCH_USER_FAILURE:

       console.log(action.type)
        return {
          ...state
        };
  
      default:
        return state;
    }
  }