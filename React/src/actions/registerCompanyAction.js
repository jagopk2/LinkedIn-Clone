import axios from 'axios';

export const REGISTER_COMPANY_BEGIN   = 'REGISTER_COMPANY_BEGIN';
export const REGISTER_COMPANY_SUCCESS = 'REGISTER_COMPANY_SUCCESS';
export const REGISTER_COMPANY_FAILURE = 'REGISTER_COMPANY_FAILURE';

export const viewProfileBegin = () => ({
  type: REGISTER_COMPANY_BEGIN
});

export const viewProfileSuccess = status => ({
  type: REGISTER_COMPANY_SUCCESS,
  payload: { status }
});

export const viewProfileFailure = error => ({
  type: REGISTER_COMPANY_FAILURE,
  payload: { error }
});

export function registerCompany(company_data) {

    console.log('user_id_infetch',company_data)
    return dispatch => {
      dispatch(viewProfileBegin());
      return axios.post("http://localhost:3002/company/registerCompany",{
          data: company_data
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
