// src/components/Navbar.tsx
import React from 'react';
import {Outlet, Link } from 'react-router-dom';
import './Layout.css';

const Layout: React.FC = () => {
  return (
    <div>
        <nav id="navbar-top" className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
            <div className="container-fluid px-5">
                <a className="navbar-brand fw-bold fs-2" href="#">Portfolio</a>
                <button
                    className="nav-menu d-md-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <i className="bi bi-menu-button-fill"></i>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-center"
                    id="navbarNav"
                >
                    <ul className="navbar-nav gap-4" >

                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#service">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#testimonial">Testimonials</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#blog">Blog</a>
                        </li>
                    </ul>
                </div>
                <Link to="/contact" className="c-btn ms-4 py-2 px-4 rounded-pill d-none d-md-block">Contact</Link>
                <Link to="/contactList" className="c-btn ms-4 py-2 px-4 rounded-pill d-none d-md-block">ContactList</Link>
            </div>
        </nav>

        {/* Display the content of child components */}
        {/* <div className="container"> */}
            <Outlet />
        {/* </div> */}
    </div>
);
};

export default Layout;
