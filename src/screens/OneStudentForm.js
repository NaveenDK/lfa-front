import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Form,Button,Row,Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {getUserDetails} from '../actions/userActions'
import { saveStudentOneDetails} from '../actions/studentActions'
import AddStudentSteps from '../components/AddStudentSteps'


 const OneStudentForm= ({location,history}) => {

    const studentDetails =useSelector(state=>state.studentDetails)
    const {oneStudentDetails}=studentDetails


    //const dispatch=useDispatch()
    const [firstname,setFirstName]=useState(studentDetails.firstname)
    const [lastname,setLastName]=useState(studentDetails.lastname)
    const [grade,setGrade] = useState(studentDetails.grade)
    const [id,setId]=useState(studentDetails.id)
    const [dob,setDob] = useState(studentDetails.dob)
    const [admissionFee,setAdmissionFee] = useState(studentDetails.admissionFee)
    const [studentType,setStudentType]=useState("Existing")

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

    const handleChange=()=>{

        if(studentType=="Existing")
            setStudentType("New")

        else if(studentType=="New")
            setStudentType("Existing")

    }

    const submitHandler=(e)=>{
        e.preventDefault()
       dispatch(saveStudentOneDetails(  {firstname,lastname,grade,id,dob,studentType,admissionFee}))
       history.push('/enrollstudent')
        //DispatchLogin
    }

  return (
    <FormContainer>
        <AddStudentSteps  step1/>
        <h1>Add Student</h1>
        
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader/> }
        
        <Form onSubmit={submitHandler}>
             <Form.Group controlId='StudentId'>
                <Form.Label>Student Id</Form.Label>
                <Form.Control
                type='id'
                placeholder="Student ID"
                 value={id}
                onChange={(e)=>{setId(e.target.value)}}
                ></Form.Control>
            </Form.Group>
            <Form.Group controlId='FName'>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                type='name'
                placeholder="First Name"
                 value={firstname}
                onChange={(e)=>{setFirstName(e.target.value)}}
                ></Form.Control>
            </Form.Group>
            <Form.Group controlId='LName'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                type='name'
                placeholder="Last Name"
                 value={lastname}
                onChange={(e)=>{setLastName(e.target.value)}}
                ></Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="Grade">
                <Form.Label>Grade</Form.Label>
                <Form.Select value={grade} onChange={(e)=>{setGrade(e.target.value)}} defaultValue="Choose...">
                    <option value ="1">Grade 1</option>
                    <option value ="2">Grade 2</option>
                    <option value ="3">Grade 3</option>
                    <option value ="4">Grade 4</option>
                    
                </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="StudentType">
                <Form.Label>Select Student Type</Form.Label>
                 
                <Form.Check 
                    type="switch"
                    id="student-type-switch"
                    label={studentType}
                    onChange={handleChange}
                    
                />
            </Form.Group>
            {(studentType=="New") && (
                <Form.Group as={Col} controlId="AdmissionFee">
                    <Form.Label>Admission Fee</Form.Label>
                        <Form.Control
                        type='number'
                        placeholder="Admission Fee"
                        value={admissionFee}
                        onChange={(e)=>{setAdmissionFee(e.target.value)}}
                        ></Form.Control>
                    </Form.Group>

            )}
           


        <Form.Group controlId='dob'>
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control value={dob}  onChange={(e)=>{setDob(e.target.value)}} type="date" name='date_of_birth' />
        </Form.Group>
          
         <div className='buttons-form'>
            <Button className="leftButton" type='submit' variant='primary' >Save & Close </Button>
            <Button  className="rightButton" type='submit' variant='primary' >Enroll Classes </Button>
        </div>
        </Form>
        
   
        
        </FormContainer>
  )
}

export default OneStudentForm