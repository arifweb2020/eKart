/**
 * Navbar for navigation to other page
 * Author: Arif
 */

import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.scss';
import { useSelector } from 'react-redux';
import SlideModal from '../side-modal/SideModal';



function NavBar(props) {

    const itemCount = useSelector((state)=>state.cart.cartItems.length)
    console.log(itemCount)

    return (
        <div className="navBar">
            <nav className="navbar navbar-expand-md bg-dark navbar-dark navbarBackground">
                <Link className="navbar-brand" to="/">E-KART</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/all-products">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <SlideModal/> <span style={{position:"relative",top:"-8-px",color:"#fff"}}> {itemCount}</span>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;