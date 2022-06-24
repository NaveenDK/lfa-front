import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userLoginReducer,userDetailsReducer} from './reducers/userReducers'
import { studentReducer} from './reducers/studentReducers'

const reducer = combineReducers({
    userLogin:userLoginReducer,
    userDetails:userDetailsReducer,
    studentDetails:studentReducer,
   
})

const userInfoFromStorage=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')):null

const oneStudentDetailsFromStorage=localStorage.getItem('oneStudentDetails') ? JSON.parse(localStorage.getItem('oneStudentDetails')):null

const studentEnrolledToFromStorage=localStorage.getItem('studentEnrolledTo') ? JSON.parse(localStorage.getItem('studentEnrolledTo')):null

const initialState = {
    userLogin: {userInfo:userInfoFromStorage},
    studentDetails:{oneStudentDetails:oneStudentDetailsFromStorage},
    studentClasses:{studentEnrolledTo:studentEnrolledToFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store



