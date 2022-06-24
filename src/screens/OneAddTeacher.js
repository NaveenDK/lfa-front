import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Form,Button,Row,Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {getUserDetails} from '../actions/userActions'


 const OneAddTeacher= ({location,history}) => {
    //const dispatch=useDispatch()
    const [firstname,setFirstName]=useState('')
    const [lastname,setLastName]=useState('')
    const [grade,setGrade] = useState('')
    const [id,setId]=useState('')

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
    }

  return (
    <FormContainer>
        <h1>Add Teacher</h1>
        
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader/> }
        
        <Form onSubmit={submitHandler}>
             <Form.Group controlId='TeacherId'>
                <Form.Label>Teacher Id</Form.Label>
                <Form.Control
                type='id'
                placeholder="Teacher ID"
                 value={"1000001"}
                
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
            

            <Form.Group as={Col} controlId="Percentage">
                <Form.Label>Percentage</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>30%</option>
                    <option>40%</option>
                    <option>50%</option>
                    <option>other</option>
                     
                    
                </Form.Select>
            </Form.Group>

        <Form.Group controlId='dob'>
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="date" name='date_of_birth' />
        </Form.Group>
          
         <div className='buttons-form'>
            <Button className="leftButton" type='submit' variant='primary' >Save & Close </Button>
            <Button  className="rightButton" type='submit' variant='primary' >Add Classes </Button>
        </div>
        </Form>
        
   
        
        </FormContainer>
  )
}

export default OneAddTeacher