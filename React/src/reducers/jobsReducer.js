const iniState = {
    jobs: [
        { message: 'Ryu', id:'1'},
        { message: 'Yoshi', id:'2'},
        { message: 'Crystal', id:'3'}
    ] 
}

const jobsReducer=(state = iniState, action)=>{
    switch (action.type) {
        case "CREATE_JOB" :
            console.log(action.job)
            console.log(state.jobs)
            let job = {'message':action.job.description, 'id':'4'};
            let jobs = [...state.jobs, job];
            return{
              ...state,
                jobs:jobs
            }
         //   this.setState(...{message:action.job.message,id:action.job.id})
         //   console.log("Successfully job added")
        case "CREATE_JOB_ERROR":
            console.log("Error on creating job");
            break;
    }    
    return state;
}

export default jobsReducer;