import React,{useState,useEffect} from 'react'
import {Link ,  useHistory} from 'react-router-dom'
import {Row,Col,Button} from 'react-bootstrap'
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

    function handleClick(path){
        history.push(path)
    }



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
        <div className="MainWrapper">
        <Row className="justify-content-center" >
            <Col>
                    <div className="leftFirstRow">
                    <Button variant="primary" size="lg" onClick={() => handleClick("students")}>
                            TAKE STUDENT  FEE
                    </Button>
                    </div>
                    <div className="leftSecondRow">
                    <Button variant="primary" size="lg" >
                           ENROLL STUDENT
                    </Button>
                    </div>
                    <div className="thirdSecondRow">
                    <Button variant="primary" size="lg" >
                            TODAY'S TOTAL
                    </Button>
                    </div>
            </Col>
            <Col>
                <div className="rightFirstRow">
                    <Button variant="primary" size="lg" onClick={() => handleClick("teachers")}>
                            PAY TEACHER
                    </Button>
                    </div>
                    <div className="rightSecondRow">
                    <Button variant="primary" size="lg" >
                            ADD TEACHER
                    </Button>
                    </div>
                    <div className="rightThirdRow">
                    <Button variant="primary" size="lg" >
                           CHECK MONTHS TOTAL
                    </Button>
                    </div>
            </Col>
        </Row>


       
        </div>
      </>
   
  )
}

export default MainScreen