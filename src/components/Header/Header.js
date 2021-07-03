import './header.scss'
import React from 'react';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Link} from "react-router-dom";
import Login from '../../context/auth/signIn';
import './header.scss'


function Header() {
    return (
        <>
            <Router>
                <Navbar bg="primary" width='100%' variant="dark">
                    <Link to="/">
                        <Navbar.Brand>Todo List Manger</Navbar.Brand>
                    </Link>
                    <Login />
                </Navbar>
            </Router>
        </>
    );
};

export default Header;