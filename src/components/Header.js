import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Link } from "react-router-dom";
function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Memes App</Navbar.Brand>
        <Nav className="me-auto">
          {/* <Link to="/">Home</Link> no refresh */}
          {/* <Link to="/favlist">Fav List</Link> */}
          <Nav.Link href="/">Home</Nav.Link>{/*will do a full page refresh*/}
          <Nav.Link href="/favlist">Fav List</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header;