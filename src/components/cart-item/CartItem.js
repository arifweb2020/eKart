import React from 'react';
import './style.scss';
import ListGroupItem from 'react-bootstrap/ListGroup';
import { BsFillXCircleFill } from "react-icons/bs";
import { cartActions } from '../../app/extraReducer/cartSlice';
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CartItem({ item }) {
    const { id, title, price, image, quantity, totalPrice } = item;

    const dispatch = useDispatch();

    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id));

        toast.error("your item removed successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
            pauseOnHover: false,
        })
    };

    const incrementItem = () => {
        dispatch(
            cartActions.addItem({
                id,
                title,
                price,
                image,
            })
        );
        toast.success("your item added successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
            pauseOnHover: false,
        })
    };

    const decreaseItem = () => {
        dispatch(cartActions.removeItem(id));
        toast.error("your item removed successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
            pauseOnHover: false,
        })
    };



    return (
        <>
            <ListGroupItem className="border-0 cart__item">
                <div className="cart__item-info d-flex gap-2" style={{ padding: "0px 0px 0px 20px" }}>
                    <img src={image} alt="product-img" />

                    <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
                        <div>
                            <h6 className="cart__product-title">{title.slice(0, 30)}</h6>
                            <p className=" d-flex align-items-center gap-5 cart__product-price">
                                {quantity}x <span>${totalPrice.toFixed(2)}</span>
                            </p>

                            <div className='addItem'>
                                <span onClick={incrementItem} style={{ cursor: "pointer",fontSize:"23px",position:"relative",top:"-5px" }}>+</span>
                                <span onClick={incrementItem} style={{position:"relative",top:"2px"}}>{quantity}</span>
                                <span onClick={decreaseItem} style={{ cursor: "pointer",fontSize:"35px",position:"relative",top:"-15px" }}>-</span>
                            </div>
                        </div>

                        <BsFillXCircleFill className="delete__btn" onClick={deleteItem} />
                    </div>
                </div>
            </ListGroupItem>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick={true}
                rtl={false}
                style={{ zIndex: 99999 }}
            />
        </>
    );
}

export default CartItem;