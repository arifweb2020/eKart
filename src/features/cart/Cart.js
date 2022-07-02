import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsFillCartXFill, BsFillTrashFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cartActions } from '../../app/extraReducer/cartSlice';
import TopHeader from '../../components/top-header/TopHeader';
import Footer from './../../components/footer/Footer';

function Cart(props) {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const deleteItem = (id) => {
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

    return (<>
        <TopHeader heading="Your Cart"/>
        <div className="container mt-5 mb-5">
           
            <div className='col-row'>
                <div className='col-md-12'>
                    {cartItems.length === 0 ? (
                        <h5 className="text-center">
                            <BsFillCartXFill style={{ fontSize: "40px", color: "#ff0000b8" }} /><br />
                            Your cart is empty</h5>
                    ) : (
                        <div class="container table-responsive py-5">
                        <table className="table table-bordered ">
                            <thead style={{textAlign:"center"}}>
                                <tr>
                                    <th>Image</th>
                                    <th>Product Title</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody style={{textAlign:"center"}}>

                                {
                                    cartItems.map((item) => {
                                        return <tr key={item.id}>
                                            <td><img src={item.image} alt="img" width="50" height="50" /></td>
                                            <td>{item.title.slice(0, 30)}</td>
                                            <td>{"$"}{item.price}</td>
                                            <td>{item.quantity}{"x"}</td>
                                            <td><BsFillTrashFill style={{cursor:"pointer"}} onClick={() => deleteItem(item.id)} /></td>
                                        </tr>


                                    }

                                    )}
                            </tbody>
                        </table>
                        </div>
                    )}
                </div>
            </div>


            <div className='col-row'>
                <div className='col-md-12 mt-3'>
                    <h6>
                        Subtotal: $
                        <span className="cart__subtotal">{totalAmount.toFixed(2)}</span>
                    </h6>
                    <p>Taxes and shipping will calculate at checkout</p>
                    <div className="cart__page-btn">
                        <button className="btn btn-sm " style={{background:"darkorange",color:"#fff"}} onClick={() => navigate("/all-products")}>
                            Continue Shopping
                        </button>
                        <button className="btn btn-sm"  onClick={() => navigate("/checkout")} style={{ marginLeft: "10px",background:"black",color:"#fff" }}>
                            Proceed to checkout
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick={true}
                rtl={false}
                style={{ zIndex: 99999 }}
            />
        </div>
        <Footer/>
        </>
    );
}

export default Cart;