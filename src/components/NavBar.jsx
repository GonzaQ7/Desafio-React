import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <>
      <div className="navbar-container">
        <Navbar collapseOnSelect expand="lg" variant="">
          <Container>
            <div className="navbar-brand">
              <Navbar.Brand as={Link} to="/">
                BOCA SHOP
              </Navbar.Brand>
            </div>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>

              <Nav className="nav-item">
                <Nav.Link className="nav-item" as={Link} to="/">
                  INICIO
                </Nav.Link>
                <Link className="nav-link" to="category/camiseta">
                  CAMISETAS
                </Link>
                <Nav.Link as={Link} to="category/short">
                  SHORTS
                </Nav.Link>
                <Nav.Link as={Link} to="category/conjunto">
                  CONJUNTOS
                </Nav.Link>
                <CartWidget />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
