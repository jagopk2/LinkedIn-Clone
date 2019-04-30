export const createJob=(job)=>{
    console.log("in Create Job", job)
    return(dispatch, getState)=>{
    dispatch({type:'CREATE_JOB', job})
    }
};