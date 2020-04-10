import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar  from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <Navbar className="justify-content-center bg-secondary py-3">
                <Nav.Item className="mx-5">
                    <Link to="/" className="text-white">Function</Link>
                </Nav.Item>
                <Nav.Item className="mx-5">
                    <Link to="/class" className="text-white">Class</Link>
                </Nav.Item>
            </Navbar>
        </div>
    )
}

export default Header;
