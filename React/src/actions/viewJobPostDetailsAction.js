import axios from 'axios';

export const VIEW_JOBPOSTDETAILS_BEGIN   = 'VIEW_JOBPOSTDETAILS_BEGIN';
export const VIEW_JOBPOSTDETAILS_SUCCESS = 'VIEW_JOBPOSTDETAILS_SUCCESS';
export const VIEW_JOBPOSTDETAILS_FAILURE = 'VIEW_JOBPOSTDETAILS_FAILURE';

export const viewProfileBegin = () => ({
  type: VIEW_JOBPOSTDETAILS_BEGIN
});

export const viewProfileSuccess = jobPostingdetails => ({
  type: VIEW_JOBPOSTDETAILS_SUCCESS,
  payload: { jobPostingdetails }
});

export const viewProfileFailure = error => ({
  type: VIEW_JOBPOSTDETAILS_FAILURE,
  payload: { error }
});

export function viewJobPostDetails(job_id) {

    console.log('job_id',job_id)
    return dispatch => {
      dispatch(viewProfileBegin());
      return axios.post("http://localhost:3001/company/viewJobPostDetails",{
          data: job_id
      })
        .then(res => 
          res.data
          )
        .then(data => { 
        console.log(data)
          dispatch(viewProfileSuccess(data));
          return data;
        })
        .catch(error => dispatch(viewProfileFailure(error)));
    };
  }
