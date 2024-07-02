import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faChevronRight, faPhone } from "@fortawesome/free-solid-svg-icons"; 
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";

function MyNav() {
  return (
    <Navbar expand="lg" className="container-fluid">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Link to='/Meditro'>
            <img src={logo} alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link><Link className="nav-link" to='/Meditro'>Home</Link></Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item className="internal-link" href="#"><Link to='about'>About Us</Link></NavDropdown.Item>
              <NavDropdown.Item className="internal-link" href="#"><Link to='team'>Our Team</Link></NavDropdown.Item>
              <NavDropdown.Item className="internal-link" href="#"><Link to='faq'>FAQ's</Link></NavDropdown.Item>
              <NavDropdown.Item className="internal-link" href="#"><Link to='booking'>Booking</Link></NavDropdown.Item>
              <NavDropdown.Item className="internal-link" href="#"><Link to='error'>Error 404</Link></NavDropdown.Item>
              <NavDropdown.Item className="internal-link" href="#"><Link to='login'>Login / Register</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item className="internal-link" href="#">Servise</NavDropdown.Item>
              <NavDropdown.Item className="internal-link" href="#">Servise Detail</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item className="internal-link" href="#">Blogs</NavDropdown.Item>
              <NavDropdown.Item className="internal-link" href="#">Blogs Detail</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <Nav.Link href="#link"><FontAwesomeIcon icon={faMagnifyingGlass} /></Nav.Link>
            <FontAwesomeIcon icon={faPhone} className="svg-phone" />
            {/* <Nav.Link href="#link" className="number">(+01) 999 888 777</Nav.Link> */}
            <Nav.Link href="#link">
              <button>Contact Us<FontAwesomeIcon icon={faChevronRight} className="svg-btn" />  
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
    
    // <nav className="navbar">
    //     <div className="logo">MyLogo</div>
    //     <ul className="nav-links">
    //         <li className="nav-item">
    //             <a href="#">Link 1</a>
    //             <ul className="dropdown">
    //                 <li><a href="#">Dropdown 1-1</a></li>
    //                 <li><a href="#">Dropdown 1-2</a></li>
    //                 <li><a href="#">Dropdown 1-3</a></li>
    //             </ul>
    //         </li>
    //         <li className="nav-item">
    //             <a href="#">Link 2</a>
    //             <ul className="dropdown">
    //                 <li><a href="#">Dropdown 2-1</a></li>
    //                 <li><a href="#">Dropdown 2-2</a></li>
    //                 <li><a href="#">Dropdown 2-3</a></li>
    //             </ul>
    //         </li>
    //     </ul>
    // </nav>
  );
}

export default MyNav;