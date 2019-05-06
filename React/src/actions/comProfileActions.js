import axios from 'axios';

export const FETCH_PROFILE_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PROFILE_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProfileBegin = () => ({
  type: FETCH_PROFILE_BEGIN
});

export const fetchProfileSuccess = profile => ({
  type: FETCH_PROFILE_SUCCESS,
  payload: { profile }
});

export const fetchProfileFailure = error => ({
  type: FETCH_PROFILE_FAILURE,
  payload: { error }
});

export function fetchProfile() {
    let user = localStorage.getItem('user');
    console.log('ali',user)
    return dispatch => {
      dispatch(fetchProfileBegin());
      return axios.post("http://localhost:3002/company/viewProfile",{
          data: user
      })
        .then(res => res.data)
        .then(data => {
        console.log(typeof data)
          dispatch(fetchProfileSuccess(data));
          return data;
        })
        .catch(error => dispatch(fetchProfileFailure(error)));
    };
  }
