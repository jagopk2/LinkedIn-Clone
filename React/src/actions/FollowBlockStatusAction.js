import axios from 'axios';

export const UPDATE_FOLLOWSTATUS_BEGIN   = 'UPDATE_FOLLOWSTATUS_BEGIN';
export const UPDATE_FOLLOWSTATUS_SUCCESS = 'UPDATE_FOLLOWSTATUS_SUCCESS';
export const UPDATE_FOLLOWSTATUS_FAILURE = 'UPDATE_FOLLOWSTATUS_FAILURE';

export const viewProfileBegin = () => ({
  type: UPDATE_FOLLOWSTATUS_BEGIN
});

export const viewProfileSuccess = jobWithUser => ({
  type: UPDATE_FOLLOWSTATUS_SUCCESS,
  payload: { jobWithUser }
});

export const viewProfileFailure = error => ({
  type: UPDATE_FOLLOWSTATUS_FAILURE,
  payload: { error }
});

export function followBlockStatus(user_id, status) {
    let company_id = localStorage.getItem("id");
    const data = {
        company_id : company_id,
        user_id: user_id,
        status : status
    }
    console.log('followBlockStatus', user_id, status)
    console.log('company_id_infetch',company_id)
    return dispatch => {
      dispatch(viewProfileBegin());
      return axios.post("http://localhost:3001/company/followBlockStatus",{
          data: data
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
