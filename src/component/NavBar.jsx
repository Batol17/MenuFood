import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'
function NavBar() {
  return (
    <Navbar expand="lg"  variant='dark' style={{backgroundColor:'#b45b35'}}>
      <Container>
        <div className='my-2'>
        <Navbar.Brand href="#">
          <img src={logo} alt="" className='logo'/>
        </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
          <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="ابحث هنا..."
              aria-label="Search"
            />
            <button className=' btn-search mx-1 '>بحث</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;