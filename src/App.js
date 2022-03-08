import * as ReactBootStrap from "react-bootstrap";
import './App.css';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar bg="light">
<ReactBootStrap.Container>
  <Navbar.Brand href="#home">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZS3xj6EjxoWmanhoQI-nG2p21A3KhILrbQEHurEgMwlXAdRgP734hqbOWjisgjR7PV5g&usqp=CAU"
      width="30"
      height="30"
      className="d-inline-block align-top"
      alt="React Bootstrap logo"
    />
  </Navbar.Brand>
</ReactBootStrap.Container>
<ReactBootStrap.Container>
  <ReactBootStrap.Navbar.Brand href="#home">AUTOMANIA CROSA</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
    <ReactBootStrap.Nav className="me-auto">
      <ReactBootStrap.Nav.Link href="#home">INICIO</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#link">AUTOS</ReactBootStrap.Nav.Link>
      <ReactBootStrap.NavDropdown title="Mas Opciones" id="basic-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Opcion 1</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Opcion 2</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Opcion 3</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Instagram</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Container>
</Navbar>
  </div>
  );
}
export default App;
