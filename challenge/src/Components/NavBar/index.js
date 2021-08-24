import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';
import styles from './Style';

const NavbarComp = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={styles.navbar}>
      <Navbar.Brand>
        <h1 style={styles.navbarText}>GoLedger Challenge</h1>
      </Navbar.Brand>
        <Navbar.Collapse id="navbar-challenge">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" style={styles.navbarLink}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/album" style={styles.navbarLink}>
              Album
            </Nav.Link>
            <Nav.Link as={Link} to="/artist" style={styles.navbarLink}>
              Artist
            </Nav.Link>
            <Nav.Link as={Link} to="/streaming" style={styles.navbarLink}>
              Streaming
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default NavbarComp;
