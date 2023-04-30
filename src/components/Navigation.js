import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';


const Navigation = () => {
  return (
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/home">My Project</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/userdashboard">User Dashboard</Nav.Link>
            <Nav.Link href="/admindashboard">Admin Dashboard</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Navigation