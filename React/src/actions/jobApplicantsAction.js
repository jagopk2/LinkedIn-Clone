import axios from 'axios';

export const VIEW_JOBAPPLICANTS_BEGIN   = 'VIEW_JOBAPPLICANTS_BEGIN';
export const VIEW_JOBAPPLICANTS_SUCCESS = 'VIEW_JOBAPPLICANTS_SUCCESS';
export const VIEW_JOBAPPLICANTS_FAILURE = 'VIEW_JOBAPPLICANTS_FAILURE';

export const viewProfileBegin = () => ({
  type: VIEW_JOBAPPLICANTS_BEGIN
});

export const viewProfileSuccess = jobApplicants => ({
  type: VIEW_JOBAPPLICANTS_SUCCESS,
  payload: { jobApplicants }
});

export const viewProfileFailure = error => ({
  type: VIEW_JOBAPPLICANTS_FAILURE,
  payload: { error }
});

export function fetchJobApplicants(job_id) {

    console.log('job_id_infetch',job_id)
    return dispatch => {
      dispatch(viewProfileBegin());
      return axios.post("http://localhost:3001/company/fetchJobApplicants",{
          data: job_id
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
