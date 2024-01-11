import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  const [color,setColor]=useState(false)
  const changecolor=()=>{
    if(window.scrollY>=90){
      setColor(true);
    }
    else{
      setColor(false)
    }
  }
  window.addEventListener("scroll",changecolor)
  return (
    <div>
    <Navbar expand="lg" className={color?'bg-dark z-3 fixed-top navbar':'bg-transparent z-3 fixed-top'}>
  <Container>
    <Navbar.Brand href="#home" className='text-white'><img src="./images/logo-no-background.png" alt="" width={200} height={100}  /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="justify-content-between nav mx-auto">
        <Nav.Link href="#home" className='text-white fs-5'>HOME</Nav.Link>
        <Nav.Link href="#link" className='text-white fs-5'>ABOUT</Nav.Link>
        <Nav.Link href="#link" className='text-white fs-5'>PRICING</Nav.Link>
        <Nav.Link href="#link" className='text-white fs-5'>CONTACTS</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
       
    </div>
  )
}

export default Navigation
