import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg'

const Header = () => {
    return (
        <div className="bg-light border-bottom">
            <Navbar className="container">
                <Navbar.Brand href="/home">
                    <img
                        src={logo}
                        width="200"
                        height="65"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="home#home">Home</Nav.Link>
                    <Nav.Link as={Link} to="home#features">Features</Nav.Link>
                    <Nav.Link as={Link} to="home#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;