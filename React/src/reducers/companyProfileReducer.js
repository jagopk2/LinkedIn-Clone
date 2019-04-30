
const iniState = {
    jobs: [
        { message: 'Ryu', id:'1'},
        { message: 'Yoshi', id:'2'},
        { message: 'Crystal', id:'3'}
    ] 
}

const companyProfileReducer=(state = iniState, action)=>{
    if(action.type == "update")
        console.log("companyProfile Reducer")
    return state;
}

export default companyProfileReducer;