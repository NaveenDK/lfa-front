import axios from 'axios'
import {STUDENT_SAVE_ONE_DETAILS,STUDENT_SAVE_CLASSES}  from "../constants/studentConstants"
 
export const saveStudentOneDetails=(data)=>(dispatch,getState)=>{
    dispatch({
        type:STUDENT_SAVE_ONE_DETAILS,
        payload:data
    })

    localStorage.setItem('oneStudentDetails',JSON.stringify(data))
}


export const saveStudentClasses=(data)=>(dispatch,getState)=>{
    dispatch({
        type:STUDENT_SAVE_CLASSES,
        payload:data
    })

 
}

