import { combineReducers } from 'redux'
import viewJobPostingReducer from './viewJobPostingReducer'
import companyProfileReducer from './companyProfileReducer'
import viewJobPostDetailsReducer from './viewJobPostDetailsReducer'
import addJobPostingReducer from './addJobPostingReducer'
import jobApplicantsRedcuer from './jobApplicantsReducer'
import approveUserForJobReducer from './approveUserForJobReducer'
import userApprovalReducer from './userApprovalReducer'
import jobApprovedWithUserReducer from './jobApprovedWithUserReducer'
import viewCompanyFollowersReducer from './viewCompanyFollowersReducer'
import FollowerUserProfileReducer from './FollowerUserProfileReducer'
import followBlockStatusReducer from './FollowBlockStatusReducer'
import registerCompanyReducer from './registerCompanyReducer'

const rootReducer = combineReducers({
    jobs:viewJobPostingReducer,
    compProfile:companyProfileReducer,
    jobPostDetail : viewJobPostDetailsReducer,
    addJob : addJobPostingReducer,
    jobApplicants : jobApplicantsRedcuer,
    userForJob: approveUserForJobReducer,
    userApproval: userApprovalReducer,
    jobsApproved : jobApprovedWithUserReducer,
    viewCompnayFollowers : viewCompanyFollowersReducer,
    FollowerProfile :FollowerUserProfileReducer,
    FollowBlockStatus:followBlockStatusReducer,
    registerCompany:registerCompanyReducer
})

export default rootReducer;