import React from 'react'
import { Col, Row } from 'react-bootstrap'
function Header() {
  return (
    <Row>
        <Col className='w-100 text-center'> 
            <h1 className=''>قائمة الطعام</h1>
            <div className="d-flex justify-content-center">
                 <p className='undeLine'></p>
            </div>
    </Col>
    </Row>
  )
}

export default Header