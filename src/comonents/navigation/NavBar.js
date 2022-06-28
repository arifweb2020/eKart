/**
 * Navbar for navigation to other page
 * Author: Arif
 */

import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.scss';


function NavBar(props) {

    return (
        <div className="navBar">
            <nav className="navbar navbar-expand-md bg-dark navbar-dark navbarBackground">
                <Link className="navbar-brand" to="/">E-KART</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/products">Products</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;