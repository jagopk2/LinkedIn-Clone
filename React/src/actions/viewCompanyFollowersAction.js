import axios from 'axios';

export const VIEW_COMPANYFOLLOWERS_BEGIN   = 'VIEW_COMPANYFOLLOWERS_BEGIN';
export const VIEW_COMPANYFOLLOWERS_SUCCESS = 'VIEW_COMPANYFOLLOWERS_SUCCESS';
export const VIEW_COMPANYFOLLOWERS_FAILURE = 'VIEW_COMPANYFOLLOWERS_FAILURE';

export const viewProfileBegin = () => ({
  type: VIEW_COMPANYFOLLOWERS_BEGIN
});

export const viewProfileSuccess = user => ({
  type: VIEW_COMPANYFOLLOWERS_SUCCESS,
  payload: { user }
});

export const viewProfileFailure = error => ({
  type: VIEW_COMPANYFOLLOWERS_FAILURE,
  payload: { error }
});

export function viewCompanyFollowers() {
    let company_id = localStorage.getItem("id");
    console.log('company_id_infetch',company_id)
    return dispatch => {
      dispatch(viewProfileBegin());
      return axios.post("http://localhost:3002/company/viewCompanyFollowers",{
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
