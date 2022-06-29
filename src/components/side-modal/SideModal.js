import React, { useState } from 'react';
import { BsFillCartFill, BsFillXCircleFill } from "react-icons/bs";
import ListGroup from 'react-bootstrap/ListGroup';
import './style.scss';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import CartItem from '../cart-item/CartItem';


function SlideModal() {
    const cartProducts = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <BsFillCartFill style={{ color: "#fff", fontSize: "23px", cursor: "pointer" }} onClick={handleShow} />
            {show ? <div className="cart__container">
                <ListGroup className="cart">
                    <div className="cart__close">
                        <span onClick={handleClose}>
                            <BsFillXCircleFill style={{fontSize:"26px",cursor:"pointer"}}/>
                        </span>

                    </div>

                    <div className="cart__item-list">
                        {cartProducts.length === 0 ? (
                            <h6 className="text-center mt-5">No item added to the cart</h6>
                        ) : (
                            cartProducts.map((item, index) => (
                              <CartItem item={item} key={index} />
                            ))
                           
                        )

                        }
                    </div>

                    <div className="cart__bottom d-flex align-items-center justify-content-between">
                        <h6>
                            Subtotal : <span>${totalAmount}</span>
                        </h6>
                        <button>
                            <Link to="/checkout">Checkout</Link>
                        </button>
                    </div>
                </ListGroup>
            </div> : null}

        </>
    );
}

export default SlideModal