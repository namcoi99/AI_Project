import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineDashboard, AiOutlineInfoCircle, AiOutlineHtml5 } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="px-3 py-2 bg-dark text-white">
            <div className="container-xxl">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <NavLink to="/" exact={true} className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none" style={{ fontSize: "25px",fontFamily:"Lucida Handwriting" }}>
                        Websites Evaluator
                    </NavLink>
                    <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                        <li>
                            <NavLink to="/" exact={true} className="nav-link text-secondary" activeStyle={{
                                fontWeight: "bold",
                                background: "white"
                            }}>
                                <AiOutlineHome className="bi d-block mx-auto mb-1" size={30} />
                  Home
                </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard" className="nav-link text-secondary" activeStyle={{
                                fontWeight: "bold",
                                background: "white"
                            }}>
                                <AiOutlineDashboard className="bi d-block mx-auto mb-1" size={30} />
                  Dashboard
                </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="nav-link text-secondary" activeStyle={{
                                fontWeight: "bold",
                                background: "white"
                            }}>
                                <AiOutlineInfoCircle className="bi d-block mx-auto mb-1" size={30} />
                  About Us
                </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;