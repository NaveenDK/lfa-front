import {STUDENT_SAVE_ONE_DETAILS, STUDENT_SAVE_CLASSES} from '../constants/studentConstants'

export const studentReducer=(state={
  oneStudentDetails:{},
  studentClasses:{}
}, action)=>{
    switch(action.type){

        case STUDENT_SAVE_ONE_DETAILS:
            return{
                
                oneStudentDetails:action.payload
            }
        case STUDENT_SAVE_CLASSES:
            return {
                ...state,
                studentClasses: action.payload

            }
      
        default:
            return state

    }
}