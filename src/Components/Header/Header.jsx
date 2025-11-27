import"./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img from "/src/assets/img.jpg";
import { Link } from "react-router-dom";


function Header(){
    return (
    <div>
   <Navbar expand="lg" className="bg-primary">
      <Container className="navtag bg-primary justify-content-around m-2">
        <div className="brand">
        <Navbar.Brand href="#home">
          <Link to ="/reactweb2"><img src={img} className="img" class='rounded-circle' ></img></Link>
          </Navbar.Brand></div>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-5">
            <Nav.Link ><Link className="text-white"   to="/reactweb2">Home</Link></Nav.Link>
            <Nav.Link ><Link className="text-white"  to="Aboutus">About</Link></Nav.Link>
            <Nav.Link ><Link className="text-white"  to="services">services</Link></Nav.Link>
            <Nav.Link ><Link className="text-white"  to="Contactus">Contact us</Link></Nav.Link>
            <Nav.Link ><Link className="text-white"  to="Products">Products</Link></Nav.Link>
            <Nav.Link ><Link className="text-white"  to="Portofolio">Portofolio</Link></Nav.Link>
            <Nav.Link ><Link className="text-white"  to="">FaQ</Link></Nav.Link>
            
            <Nav.Link ><Link className="text-white" to="/" >Link</Link></Nav.Link>
            <NavDropdown className="text-white" title="More" id="basic-nav-dropdown cl">
              <NavDropdown.Item href="#action/3.1">Sign up</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                LOgin
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
             </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      
      </Container>
    </Navbar>



   </div>
    );
}

export default Header;