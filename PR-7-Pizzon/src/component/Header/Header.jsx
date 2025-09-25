import { useEffect, useState } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Header.css";

function HoverDropdown({ title, id, children }) {
  const [show, setShow] = useState(false);

  return (
    <NavDropdown
      title={title}
      id={id}
      show={show}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className={`no-caret ${show ? "active-dropdown" : ""}`}>
      {children}
    </NavDropdown>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="m-0 navbarsticky">
      <Navbar expand="lg" className={`py-3 ${scrolled ? "scrolled" : ""}`} variant="light">
        {!scrolled && (
          <div className="headerImage">
            <img src="./src/image/header-img.png" alt="header background" />
          </div>
        )}

        <Container
          fluid
          className="d-flex justify-content-between align-items-center m-0 pt-0"
        >

          <Navbar.Brand href="#home">
            <img src="/src/image/logo.png" alt="logo"  className="brand-logo"/>
          </Navbar.Brand>

          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />


          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">

              <Nav.Link className="home" href="#home">
                Home
              </Nav.Link>


              <HoverDropdown title="Shop" id="shop-dropdown">
                <NavDropdown.Item href="#shop/men">Shop List</NavDropdown.Item>
                <NavDropdown.Item href="#shop/women">Shop Details</NavDropdown.Item>
                <NavDropdown.Item href="#shop/kids">Cart</NavDropdown.Item>
                <NavDropdown.Item href="#shop/sale">Checkout</NavDropdown.Item>
              </HoverDropdown>

              <HoverDropdown title="Page" id="page-dropdown">
                <NavDropdown.Item href="#page/about">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#page/services">Our Menu</NavDropdown.Item>
                <NavDropdown.Item href="#page/services">Our Team</NavDropdown.Item>
                <NavDropdown.Item href="#page/services">Book Now</NavDropdown.Item>
                <NavDropdown.Item href="#page/services">404 error</NavDropdown.Item>
              </HoverDropdown>

              <HoverDropdown title="Blog" id="blog-dropdown">
                <NavDropdown.Item href="#blog/news">Blog Right</NavDropdown.Item>
                <NavDropdown.Item href="#blog/articles">Blog Left</NavDropdown.Item>
                <NavDropdown.Item href="#blog/articles">Blog Details</NavDropdown.Item>
              </HoverDropdown>

              <Nav.Link className="contact" href="#contact">
                Contact
              </Nav.Link>
              {/* <HoverDropdown title="Contact" id="contact-dropdown">
              </HoverDropdown> */}

              {/* Icons */}
              <Nav.Link href="#search">
                <CiSearch size={20} />
              </Nav.Link>
              <Nav.Link href="#cart">
                <AiOutlineShoppingCart size={22} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
