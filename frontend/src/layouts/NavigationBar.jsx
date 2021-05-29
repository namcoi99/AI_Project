import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { AiOutlineHome, AiOutlineDashboard, AiOutlineInfoCircle } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
const NavigationBar = () => {

    const activestyle = {
        fontWeight: "bold",
        textDecoration: "underline"
    }

    return (
        <Navbar bg="light" variant="light" sticky="top" expand="lg" style={{ borderBottom: "1px solid lightgrey" }}>
            <div className="container-xxl">
                <Navbar.Brand>
                    <NavLink to="/" exact={true} className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-dark text-decoration-none" style={{ fontSize: "30px", fontFamily: "Lucida Handwriting" }}>
                        Websites Evaluator
                </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto fs-5">
                    <NavLink to="/" exact={true} className="nav-link text-secondary" activeStyle={activestyle}>
                        {/* <AiOutlineHome className="bi d-block mx-auto mb-1" size={30} /> */}
                        Home
                    </NavLink>
                    <NavLink to="/dashboard" className="nav-link text-secondary" activeStyle={activestyle}>
                        {/* <AiOutlineDashboard className="bi d-block mx-auto mb-1" size={30} /> */}
                        Dashboard
                    </NavLink>
                    <NavLink to="/about" className="nav-link text-secondary" activeStyle={activestyle}>
                        {/* <AiOutlineInfoCircle className="bi d-block mx-auto mb-1" size={30} /> */}
                        About
                    </NavLink>
                </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar >
    );
};

export default NavigationBar;