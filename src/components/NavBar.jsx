import '../styles/NavBar.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import Logo from '../assets/Puzzlooza-icon.png';

const NavBar = () => {
    return (

      <Navbar expand="lg" fixed='top' >
        <Container>
            <Navbar.Brand>
                <Nav.Link>
                <Link
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""}>
                    <img src={Logo} /> PuzzLooza
                </Link>
                </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle className="toggler" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link>
                        <Link
                            to="/about"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""}>
                            About
                        </Link>
                        </Nav.Link>
                        <Nav.Link>
                    <Link
                        to="/calendar"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""}>
                        Calendar
                    </Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    )
}

export default NavBar