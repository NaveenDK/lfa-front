import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Form,Button,Row,Col, ListGroup,Card} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {getUserDetails} from '../actions/userActions'
import AddStudentSteps from '../components/AddStudentSteps'


 const FinalizeEnrollment= ({location,history}) => {
    //const dispatch=useDispatch()
 

    // const dispatch= useDispatch()
    // const userDetails = useSelector(state=> state.userDetails)

    // const {loading,error,user} = userDetails


    // const userLogin = useSelector(state=> state.userLogin)
    // const {userInfo} = userLogin

    const studentDetails =useSelector(state=>state.studentDetails)
     
    const completeEnrollment=()=>{
      console.log("complete")
    }

   
    // useEffect(()=>{
    //     if(!userInfo){
    //         history.push('/login')
    //     }else{
          
    //     }

      
          
    // }, [dispatch,history,userInfo])

    const submitHandler=(e)=>{
        e.preventDefault()
      ///  dispatch(login(email,password))
        //DispatchLogin
    }



     const allClasses =studentDetails.studentClasses.classes.map((enrolledClass)=>{
         return <li>{enrolledClass}</li>;
     });

  return (
    <>
     <AddStudentSteps  step1 step2 step3/>
     <Row>
      <Col md={8}>
      <h1>Subjects </h1>
        <ListGroup variant='flush'>
        { allClasses}

        </ListGroup>

        </Col>
         <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                  <h2>Enrollment Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                  First Name : {studentDetails.oneStudentDetails.firstname} <br></br>
                  Last Name : {studentDetails.oneStudentDetails.lastname}
                  </Col>
                 
        
                   
                </Row>
                <Row>
                <Col>
                  Student Type: {studentDetails.oneStudentDetails.studentType}   
                </Col>
                </Row>
                <Row>
                <Col>
                 
                  {(studentDetails.oneStudentDetails.admissionFee>0) && (
                   
                   <p>Admission Fee: {studentDetails.oneStudentDetails.admissionFee}
                   </p>                
                  )}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                 <Button  type='button' className='btn-block' onClick={completeEnrollment}>Complete Enrollment</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
         </Col> 
      </Row>
        </>
  )
}

export default  FinalizeEnrollment