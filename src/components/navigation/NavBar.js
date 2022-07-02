/**
 * Navbar for navigation to other page
 * Author: Arif
 */

import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.scss';
import { useSelector } from 'react-redux';
import SlideModal from '../side-modal/SideModal';
import { BsGrid3X3GapFill, BsPersonLinesFill } from "react-icons/bs";



function NavBar(props) {

    // const itemCount = useSelector((state)=>state.cart.cartItems.length)
    const itemCount = useSelector((state) => state.cart.totalQuantity);
    console.log(itemCount)

    const [sidebarOpen , setSidebarOpen] = React.useState(false)

    return (
        <div className="navBarContainer">
            <div style={{boxShadow:"0px 15px 10px -15px #111",borderBottom:"2px solid #ff5722"}}>
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
                        <SlideModal /><span style={{ position: "relative", top: "-8px", color: "black",fontWeight:"500" }}> {itemCount || ""}</span>
                    </div>
                    <div>
                        <BsPersonLinesFill style={{ color: "#ff5722", fontSize: "20px", cursor: "pointer" }}/>
                    </div>
                    <div>
                        <BsGrid3X3GapFill className='menuBtn' style={{ fontSize: "20px", cursor: "pointer" }} onClick={()=>setSidebarOpen(!sidebarOpen)}/>
                    </div>
                </div>
            </div>

            {/* mobile nav */}
           { sidebarOpen ?
            <div className="mob-nav">
                <ul class="mob-items">
                    <ul>
                        <li>
                            <NavLink activeClassName="active" to="/" onClick={()=>setSidebarOpen(false)}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/all-products" onClick={()=>setSidebarOpen(false)}>Products</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/cart" onClick={()=>setSidebarOpen(false)}>Cart</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/contact" onClick={()=>setSidebarOpen(false)}>Contact</NavLink>
                        </li>
                    </ul>
                </ul>
            </div> : null }
        </div>
        </div >
    );
}

export default NavBar;