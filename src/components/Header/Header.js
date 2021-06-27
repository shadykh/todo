import './header.scss'
import React from 'react';
import { Navbar, Nav} from "react-bootstrap"

function Header() {
    return (
        <>
            <header>
                <h1>Todo List Manger</h1>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">CodeFellows</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#home">Detailed Task</Nav.Link>
                        <Nav.Link href="#home">Help</Nav.Link>
                    </Nav>
                </Navbar>
            </header>
        </>
    );
};

export default Header;