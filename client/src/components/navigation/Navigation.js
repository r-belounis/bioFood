import React from 'react'
import { NavLink } from 'react-router-dom';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, Button } from 'react-bootstrap';

const Navigation = () => {

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <NavLink className="mr-3" exact to="/">BioFood Shop</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* <Form className="mr-3" inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form> */}
                    <Nav className="ml-auto">
                        <NavLink className="mr-3" to="/products">Shop</NavLink>
                        <NavLink className="mr-3" to="/accountUser">My Account</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation;