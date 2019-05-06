import axios from 'axios';

export const FETCH_USER_BEGIN   = 'FETCH_USER_BEGIN';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const viewProfileBegin = () => ({
  type: FETCH_USER_BEGIN
});

export const viewProfileSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  
  payload: { user }
});

export const viewProfileFailure = error => ({
  type: FETCH_USER_FAILURE,
  payload: { error }
});

export function fetchUserProfile(user_id) {

    console.log('user_id_infetch',user_id)
    return dispatch => {
      dispatch(viewProfileBegin());
      return axios.post("http://localhost:3001/company/fetchUserProfile",{
          data: user_id
      })
        .then(res => res.data)
        .then(data => { 
        console.log('aliakber')
          dispatch(viewProfileSuccess(data));
          return data;
        })
        .catch(error => dispatch(viewProfileFailure(error)));
    };
  }
