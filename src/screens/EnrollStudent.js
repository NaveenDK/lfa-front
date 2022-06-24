import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Form,Button,Row,Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {getUserDetails} from '../actions/userActions'
import {saveStudentClasses} from '../actions/studentActions'
import AddStudentSteps from '../components/AddStudentSteps'



 const EnrollStudent= ({location,history}) => {
    //const dispatch=useDispatch()
    const studentDetails =useSelector(state=>state.studentDetails)
    const {oneStudentDetails}=studentDetails


    const [classes,setClasses]=useState([])

    const dispatch= useDispatch()
    const userDetails = useSelector(state=> state.userDetails)

    const {loading,error,user} = userDetails


    const userLogin = useSelector(state=> state.userLogin)
    const {userInfo} = userLogin


    useEffect(()=>{
        if(!userInfo){
            history.push('/login')
        }else{
          
        }
    }, [dispatch,history,userInfo])

    const submitHandler=(e)=>{
        e.preventDefault()
      ///  dispatch(login(email,password))
        //DispatchLogin
        dispatch(saveStudentClasses({classes}))
        history.push('/finalize_enrollment')
    }

  return (
    <FormContainer>
         <AddStudentSteps  step1 step2/>
        <h1>Enroll  {oneStudentDetails.firstname}</h1>
        <br></br>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader/> }
        
        <Form onSubmit={submitHandler}>
              
        <Form.Group value={classes}   onChange={(e)=>{setClasses([...classes,e.target.value])}} className="mb-3" id="Classes">
            <Form.Check value="English" type="checkbox" label="English" />
            <Form.Check value="Science" type="checkbox" label="Science" />
            <Form.Check value="Physics" type="checkbox" label="Physics" />
        </Form.Group>

          
         <div className='buttons-form'>
            <Button className="leftButton" type='submit' variant='primary' >Save & Close </Button>
             
        </div>
        </Form>
        
   
        
        </FormContainer>
  )
}

export default EnrollStudent