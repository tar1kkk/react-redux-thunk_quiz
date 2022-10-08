import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand><Link to='/'>React-Quiz</Link></Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link><Link to='/allwords'>All Words</Link></Nav.Link>
						<Nav.Link><Link to='/createwords'>Create Words</Link></Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;