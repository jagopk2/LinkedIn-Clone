import { combineReducers } from 'redux'
import jobsReducer from './jobsReducer'
import companyProfileReducer from './companyProfileReducer'

const rootReducer = combineReducers({
    jobs:jobsReducer,
    compProfile:companyProfileReducer
})

export default rootReducer;