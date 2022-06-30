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
            position: "bottom-right",
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
                                {quantity}x <span>${totalPrice}</span>
                            </p>
                            {/* <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
              <span className="increase__btn" onClick={incrementItem}>
                <i class="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease__btn" onClick={decreaseItem}>
                <i class="ri-subtract-line"></i>
              </span>
            </div> */}
                        </div>

                        {/* <span className="delete__btn" onClick={deleteItem}>
            <i class="ri-close-line"></i>
          </span> */}
                        <BsFillXCircleFill className="delete__btn" onClick={deleteItem} />
                    </div>
                </div>
            </ListGroupItem>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick={true}
                rtl={false}
            />
        </>
    );
}

export default CartItem;