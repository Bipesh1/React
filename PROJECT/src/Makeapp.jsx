import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';

function Makeapp() {
  return (
    <div>
        <div className='bg-dark appointment position-relative z-2'>
        <Container className='mx-auto appcontainer'>
            <div className="row">
                <div className="col-lg-3"><input type="text" className='bg-transparent text-white' placeholder='Your Name' /></div>
                <div className="col-lg-3"><input type="text" className='bg-transparent text-white' placeholder='Phone Number' /></div>
                <div className="col-lg-3"><input type="text" className='bg-transparent text-white' placeholder='Date' /></div>
                <div className="col-lg-3 col-md-3"><button type="button" class="btn btn-light">MAKE AN APPOINTMENT</button></div>
            </div>
        </Container>
        </div>
    </div>
  )
}

export default Makeapp