import React,{useState,useEffect} from 'react'
import {Link ,  useHistory} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails } from '../actions/userActions'
import { } from "react-router-dom";





const MainScreen = ({history}) => {
    const dispatch=useDispatch()
    //const history=useHistory()
    const userDetails=useSelector((state)=>state.userDetails)
    const {loading , error, user} = userDetails
    
    const userLogin = useSelector((state)=>state.userLogin )
    const {userInfo} = userLogin


    useEffect(()=>{
        if(!userInfo){
            history.push ('/login')
        }else{
            if(!user.name){
                dispatch(getUserDetails('profile'))
            }else{
    
            }
        }
    },[dispatch,history,userInfo ])
    

  return (
      <>
        <div className="LoginCardWrapper">
            <h2>MAIN SCREEN</h2>
        </div>
      </>
   
  )
}

export default MainScreen