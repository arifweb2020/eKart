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

    // const itemCount = useSelector((state)=>state.cart.cartItems.length)
    const itemCount = useSelector((state) => state.cart.totalQuantity);
    console.log(itemCount)

    return (
        <div className="navBarContainer">
            <div className='innerNavbar'>
                <div className='logo'>
                    <Link to="/">ARIF E-KART</Link>
                </div>
                <div className='navList'>
                    <ul>
                        <li>
                            <NavLink activeClassName="active" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/all-products">Products</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/cart">Cart</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='cartIcons'>
                    <div>
                        <SlideModal /><span style={{position:"relative",top:"-8px",color:"green"}}> {itemCount || ""}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;