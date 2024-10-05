import { Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from '../images/1.png'



function ItemList({dataFood}) {
  console.log(dataFood);
  
  return (
   <Row >
    <Col className='mt-3'>
    {
    dataFood.map((item,index) => 
    <Card key={index} sm='8' lg='5' className='d-flex flex-row w-100  my-2' >
      <img  className='img-card ' src={item.img}/>
      <Card.Body>
        <Card.Title>
          <div className='d-flex justify-content-between'>
            <p>{item.title}</p>
            <p className='text-danger fs-6'>{item.price}</p>
          </div>
        </Card.Title>

        <Card.Text>
            <div className="paragraph">
          {item.disc}
            </div>
        </Card.Text>
      </Card.Body>
    </Card>

    )
   }
    
    </Col>
   </Row>
  );
}

export default ItemList;