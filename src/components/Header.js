import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar,Nav,Container, NavDropdown} from 'react-bootstrap'
import {logout} from '../actions/userActions'



const Header = () => {
  const dispatch = useDispatch()

  const userLogin=useSelector(state=>state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler=()=>{
    dispatch(logout())
  }

  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" CollapseOnSelect>
            <Container>
              
                <Navbar.Brand href="#home">LEI FEE MGMENT</Navbar.Brand>
              
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                 
                    <Nav.Link href="/cart">Cart</Nav.Link>
                 {userInfo ?(
                   <NavDropdown title={userInfo.name} id='username'>
                     <NavDropdown.Item><Nav.Link href="/profile">Profile</Nav.Link></NavDropdown.Item>
                     <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                   </NavDropdown>
                 ):<Nav.Link href="/login">Login</Nav.Link>}
                    
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header