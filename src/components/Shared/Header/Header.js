import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import './Header.css';
import useFirebase from '../../../Hooks/useFirebase';

const Header = () => {
    const { user, handleSignout } = useFirebase();
    return (
        <div className="bg-custom border-bottom">
            <Navbar className="container" collapseOnSelect expand="lg">
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
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                    {user?.email && <Nav.Link as={Link} to="/manageOrders">Manage Orders</Nav.Link>}
                    {user?.email && <Nav.Link as={Link} to="/myOrders">My Orders</Nav.Link>}
                    {user?.email && <Nav.Link as={Link} to="/"><h6>{user.displayName}</h6></Nav.Link>}
                    {
                        user?.email ?
                            <Button onClick={handleSignout} className="btn-regular rounded-pill">SignOut</Button> :
                            <Nav.Link as={HashLink} to="/login"><Button className="btn-regular rounded-pill">SignIn</Button></Nav.Link>
                    }

                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;