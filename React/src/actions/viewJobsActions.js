import axios from 'axios';

export const VIEW_JOBPOSTING_BEGIN   = 'VIEW_JOBPOSTING_BEGIN';
export const VIEW_JOBPOSTING_SUCCESS = 'VIEW_JOBPOSTING_SUCCESS';
export const VIEW_JOBPOSTING_FAILURE = 'VIEW_JOBPOSTING_FAILURE';

export const viewProfileBegin = () => ({
  type: VIEW_JOBPOSTING_BEGIN
});

export const viewProfileSuccess = jobPosting => ({
  type: VIEW_JOBPOSTING_SUCCESS,
  payload: { jobPosting }
});

export const viewProfileFailure = error => ({
  type: VIEW_JOBPOSTING_FAILURE,
  payload: { error }
});

export function viewJobPosting() {
    let id = localStorage.getItem('id');
    console.log('id',id)
    return dispatch => {
      dispatch(viewProfileBegin());
      return axios.post("http://localhost:3001/company/viewJobs",{
          data: id
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
