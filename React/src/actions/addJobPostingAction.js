import axios from 'axios';

export const ADD_JOBPOST_BEGIN   = 'ADD_JOBPOST_BEGIN';
export const ADD_JOBPOST_SUCCESS = 'ADD_JOBPOST_SUCCESS';
export const ADD_JOBPOST_FAILURE = 'ADD_JOBPOST_FAILURE';

export const viewProfileBegin = () => ({
  type: ADD_JOBPOST_BEGIN
});

export const viewProfileSuccess = jobPosting => ({
  type: ADD_JOBPOST_SUCCESS,
  payload: { jobPosting }
});

export const viewProfileFailure = error => ({
  type: ADD_JOBPOST_FAILURE,
  payload: { error }
});

export function addJob(job_object) {

    console.log('job_id',job_object)
    return dispatch => {
      dispatch(viewProfileBegin());
      return axios.post("http://localhost:3002/company/createJob",{
          data: job_object
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
