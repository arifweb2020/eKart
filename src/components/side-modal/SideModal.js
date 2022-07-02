import React, { useState } from 'react';
import { BsFillCartFill, BsFillXCircleFill } from "react-icons/bs";
import ListGroup from 'react-bootstrap/ListGroup';
import './style.scss';
import { useSelector } from 'react-redux';
import CartItem from '../cart-item/CartItem';
import { useNavigate } from 'react-router-dom';
import { BsFillCartXFill } from "react-icons/bs";


function SlideModal() {
    const cartProducts = useSelector((state) => state.cart.cartItems);
    let navigate = useNavigate();
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const checkoutPage = ()=>{
        navigate("/checkout")
        setShow(false)
    }

    return (
        <>

            <BsFillCartFill style={{ color: "black", fontSize: "23px", cursor: "pointer" }} onClick={handleShow} />
            {show ? <div className="cart__container">
                <ListGroup className="cart">
                    <div className="cart__close">
                        <span onClick={handleClose}>
                            <BsFillXCircleFill className="cartClose" style={{ fontSize: "26px", cursor: "pointer" }} />
                        </span>

                    </div>

                    <div className="cart__item-list">
                        {cartProducts.length === 0 ? (
                            <h4 className="text-center mt-5">
                                <BsFillCartXFill style={{fontSize:"40px",color:"#ff0000b8"}}/><br/>
                                Your cart is empty.</h4>
                        ) : (
                            cartProducts.map((item, index) => (
                                <CartItem item={item} key={index} />
                            ))

                        )

                        }
                    </div>

                    <div className="cart__bottom d-flex align-items-center justify-content-between">
                        <h6>
                            Subtotal : <span>${totalAmount.toFixed(2)}</span>
                        </h6>
                        <button className='btn btn-md btn-secondry' onClick={checkoutPage}>
                            Checkout
                        </button>
                    </div>
                </ListGroup>
            </div> : null}

        </>
    );
}

export default SlideModal