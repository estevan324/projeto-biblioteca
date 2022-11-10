import "./App.css";
import Home from "./views/Home";
import Books from "./views/Books";

import { Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

import BookIcon from "./assets/book-icon.png";

function App() {
  return (
    <div className="App">
      <Navbar style={{ backgroundColor: "#14213d" }} className="navbar">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navlink">
              <img src={BookIcon} alt="book-icon" />
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="navlink">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/books" className="navlink">
                Livros
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<Books />}></Route>
      </Routes>
    </div>
  );
}

export default App;
