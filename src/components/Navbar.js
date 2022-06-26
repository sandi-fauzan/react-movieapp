import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigasi() {
  return (
    <>
      <Navbar className='nav' variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Pilem.</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home" className="me-3">Home</Nav.Link>
            <Nav.Link href="#features" className="me-3">Top rated</Nav.Link>
            <Nav.Link href="#pricing" className="me-3">Search</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Navigasi;