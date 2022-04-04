import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" CollapseOnSelect>
            <Container>
                <Navbar.Brand href="#home">LEI FEE MGMENT</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/cart">Cart</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header