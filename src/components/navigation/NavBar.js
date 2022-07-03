/**
 * Navbar for navigation to other page
 * Author: Arif
 */

import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.scss';
import { useSelector } from 'react-redux';
import SlideModal from '../side-modal/SideModal';
import { BsGrid3X3GapFill, BsPersonCircle , BsFillXSquareFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';



function NavBar(props) {

    // const itemCount = useSelector((state)=>state.cart.cartItems.length)
    const itemCount = useSelector((state) => state.cart.totalQuantity);
    //console.log(itemCount)
    const navigate = useNavigate()

    const [sidebarOpen , setSidebarOpen] = React.useState(false)
   const arif = ()=>{
    setSidebarOpen(false)
   }
    return (
        <div className="navBarContainer shadow-lg">
          
            <div className='innerNavbar'>
                <div className='logo'>
                    <h1 onClick={()=>navigate("/")}>ARIF E-KART</h1>
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
                    <div className={itemCount ? "arm" : "grm"}>
                        <SlideModal cmd={arif}/><span style={{ position: "relative", top: "-31px",left:"24px", color: "black",fontWeight:"500" }}> {itemCount || ""}</span>
                    </div>
                    <div>
                        <BsPersonCircle style={{ color: "#ff5722", fontSize: "20px", cursor: "pointer" }} onClick={()=> navigate("/user")}/>
                    </div>
                    <div>
                        {
                            sidebarOpen ?  <BsFillXSquareFill className='menuBtn' style={{ fontSize: "20px",color: "red", cursor: "pointer" }} onClick={()=>setSidebarOpen(!sidebarOpen)}/> :  <BsGrid3X3GapFill className='menuBtn' style={{ fontSize: "20px",color: "#ff5722", cursor: "pointer" }} onClick={()=>setSidebarOpen(!sidebarOpen)}/>
                        }
                       
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
    
    );
}

export default NavBar;