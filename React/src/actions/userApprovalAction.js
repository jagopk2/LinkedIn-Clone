import axios from 'axios';

export const APPROVE_USER_BEGIN   = 'APPROVE_USER_BEGIN';
export const APPROVE_USER_SUCCESS = 'APPROVE_USER_SUCCESS';
export const APPROVE_USER_FAILURE = 'APPROVE_USER_FAILURE';

export const viewProfileBegin = () => ({
  type: APPROVE_USER_BEGIN
});

export const viewProfileSuccess = approvalStatus => ({
  type: APPROVE_USER_SUCCESS,
  payload: { approvalStatus }
});

export const viewProfileFailure = error => ({
  type: APPROVE_USER_FAILURE,
  payload: { error }
});

export function approveUser(userJob) {

    console.log('user_id_infetch',userJob)
    return dispatch => {
      dispatch(viewProfileBegin());
      return axios.post("http://localhost:3002/company/approveUser",{
          data: userJob
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
