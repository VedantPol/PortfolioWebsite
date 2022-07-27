import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AnimatedText from 'react-animated-text-content';
import { Row ,Col} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
        <div className='Navbar'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">John's Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">About me</Nav.Link>
            <Nav.Link href="#pricing">Resume</Nav.Link>
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
  Content to animate
</AnimatedText>

</Col>
      </Row>
      </div >
    </div>
  );
}

export default App;
