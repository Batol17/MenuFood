import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
function Categories({filterCategories,filterByCat}) {
  const [categories,setCategories]=useState(filterCategories)
  return (
    <Row>
        <Col className='d-flex justify-content-center'>
            {
                categories.map((item,index)=> 
                <button key={index} onClick={()=>filterByCat(item)} className='p-2 mx-1  btn-search'>{item}</button>
                )
            }
            
        
        </Col>
    </Row>
  )
}

export default Categories