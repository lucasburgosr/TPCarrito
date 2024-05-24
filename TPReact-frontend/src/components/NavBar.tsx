import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = ({ toggleCarrito, carritoVisible }) => {
  return (
    <Navbar className='mb-4' bg="secondary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">La Casa de la Música</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/instrumentos">Instrumentos</Nav.Link>
          <Nav.Link as={Link} to="/DondeEstamos">Donde Estamos</Nav.Link>
        </Nav>
        <div className="nav-right">
          <button onClick={toggleCarrito} className="carrito-button bg-primary">
            {carritoVisible ? 'Cerrar Carrito' : 'Abrir Carrito'}
          </button>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
