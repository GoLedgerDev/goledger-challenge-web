import { Navbar, Nav } from 'react-bootstrap';
import React from 'react';
import styles from './Style';

const NavbarComp = () => {
  return (

    <Navbar expand="lg" variant="dark" clickfixed="top" fixed="top" style={styles.navbar}> 
          <Navbar.Collapse id="navbar-challenge">
          <Nav className="ml-auto" style={styles.navbarText}>
              GoLedger Challenge
          </Nav>
            
          </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;
