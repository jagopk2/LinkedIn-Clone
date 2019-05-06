import axios from 'axios';

export const VIEW_APPROVE_USER_BEGIN   = 'VIEW_APPROVE_USER_BEGIN';
export const VIEW_APPROVE_USER_SUCCESS = 'VIEW_APPROVE_USER_SUCCESS';
export const VIEW_APPROVE_USER_FAILURE = 'VIEW_APPROVE_USER_FAILURE';

export const viewProfileBegin = () => ({
  type: VIEW_APPROVE_USER_BEGIN
});

export const viewProfileSuccess = jobWithUser => ({
  type: VIEW_APPROVE_USER_SUCCESS,
  payload: { jobWithUser }
});

export const viewProfileFailure = error => ({
  type: VIEW_APPROVE_USER_FAILURE,
  payload: { error }
});

export function viewJobsApproved() {
    let company_id = localStorage.getItem("id");
    console.log('company_id_infetch',company_id)
    return dispatch => {
      dispatch(viewProfileBegin());
      return axios.post("http://localhost:3001/company/viewJobsApproved",{
          data: company_id
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
