import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Form,Button,Row,Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {getUserDetails} from '../actions/userActions'


 const TwoAddTeacher= ({location,history}) => {
    //const dispatch=useDispatch()
    const [firstname,setFirstName]=useState('')
    const [subject,setSubject]=useState('')
    const [fee,setFee] = useState('')
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
        <h1>Add Classes</h1>
        
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader/> }
        
        <Form onSubmit={submitHandler}>
         <Row>
            <Col>  <Form.Group controlId='Subject'>
                <Form.Label>Subject</Form.Label>
                <Form.Control
                type='subject'
                placeholder="Subject"
                 value={subject}
                onChange={(e)=>{setSubject(e.target.value)}}
                ></Form.Control>
            </Form.Group></Col>
            <Col>  <Form.Group controlId='Fee'>
                <Form.Label>Fee</Form.Label>
                <Form.Control
                type='fee'
                placeholder="Fee"
                 value={fee}
                onChange={(e)=>{setFee(e.target.value)}}
                ></Form.Control>
            </Form.Group></Col>
            <Col>         <Form.Group as={Col} controlId="Grade">
                <Form.Label>Grade</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Grade 1</option>
                    <option>Grade 2</option>
                    <option>Grade 3</option>
                    <option>Grade 4</option>
                    
                </Form.Select>
            </Form.Group>

            </Col>
         </Row>


  
  
         <div className='buttons-form'>
            <Button className="leftButton" type='submit' variant='primary' >Save & Close </Button>
            <Button  className="rightButton" type='submit' variant='primary' >Add Classes </Button>
        </div>
        </Form>
        
   
        
        </FormContainer>
  )
}

export default TwoAddTeacher