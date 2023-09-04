import React, {Component} from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import logo from '../img/iconkc.ico';
import {Link} from "react-router-dom";
import '../App.css';

class Header extends Component {
    render() {
        return (
            <>
            <Navbar collapseOnSelect expand="md" bg="#FBFFE4" >
                <Container className="header">
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="50"
                            width="50"
                            className="d-inline-block align-top"
                            alt="top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsitive-navbar-nav"/>
                    <Navbar.Collapse id="responsitive-navbar-nav" className="justify-content-end">
                        <Nav className="mr-auto">
                            <Nav.Link ><Link to="/">Главная</Link></Nav.Link>
                            <Nav.Link><Link to="/catalog">Каталог</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
          </>
        );
    }
}

export default Header;