import {
    FETCH_PROFILE_BEGIN,
    FETCH_PROFILE_SUCCESS,
    FETCH_PROFILE_FAILURE
  } from '../actions/comProfileActions';
  
  const initialState = {
    profile : ''
  };
  
  export default function companyProfileReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_PROFILE_BEGIN:
        console.log('action',action);
        return {
          ...state
        };
  
      case FETCH_PROFILE_SUCCESS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        console.log('action_success', action.payload.profile)
        let profile = action.payload.profile;
        console.log('profile',profile)
        return {
          ...state,
          profile
        };
  
      case FETCH_PROFILE_FAILURE:

       console.log(action.type)
        return {
          ...state
        };
  
      default:
        return state;
    }
  }