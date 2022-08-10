import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AnimatedText from 'react-animated-text-content';
import { Row ,Col, Carousel} from 'react-bootstrap';
import 'holderjs';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Contact from './Contact';
import About from './About'

function App() {
  return (
    
    <div className="App">
        <Router>
        <div className='Navbar'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">John's Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">About me</Nav.Link>
            <Nav.Link as={Link} to="/contact">Resume</Nav.Link>
            <NavDropdown title="Project" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Coustum Linux distro</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                React Project
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Some Project</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Some other Project
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div >
    <Routes>
                        <Route path="/about" element={<About/>}>
                        </Route>
                        <Route path="/contact" element={<Contact/>}>
                        </Route>
                        
                        </Routes>
    </Router>

    &nbsp;
    <Row>
      <Col>
        <img 
          src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          alt="new"
        />
        &nbsp;
        </Col>
        <Col>
        <AnimatedText
  type="words" // animate words or chars
  animation={{
    x: '200px',
    y: '-30px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="float"
  interval={0.06}
  duration={0.8}
  tag="p"
  className="animated-paragraph"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="30%"
>
Designer, Frontend Developer & Mentor
I design and code beautifully simple things, and I love what I do.
</AnimatedText>
</Col>
      </Row>
     
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
    </div>
  );
}

export default App;
