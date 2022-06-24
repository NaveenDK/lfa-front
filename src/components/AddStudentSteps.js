import React from 'react'
import {Nav} from 'react-bootstrap'
//import { LinkContainer } from 'react-router-bootstrap'
import {Link} from 'react-router-dom'

const AddStudentSteps = ({step1,step2,step3,step4}) => {
  return (
    <Nav className='justify-content-center mb-4'>
         
        <Nav.Item>
            {
                step1?(
                     
                        <Nav.Link as={Link} to='/onestudentform'>Student Details</Nav.Link>
                   
                ): <Nav.Link disabled> Student Details</Nav.Link>
            }
        </Nav.Item>
        <Nav.Item>
            {
                step2?(
                     
                        <Nav.Link as={Link} to='/enrollstudent'>Enroll Student</Nav.Link>
                   
                ): <Nav.Link disabled>Enroll Student</Nav.Link>
            }
        </Nav.Item>
        <Nav.Item>
            {
                step3?(
                     
                        <Nav.Link as={Link} to='/finalize_enrollment'>Summary</Nav.Link>
                   
                ): <Nav.Link disabled>Finalize Enrollment</Nav.Link>
            }
        </Nav.Item>
       
    </Nav>
  )
}

export default AddStudentSteps