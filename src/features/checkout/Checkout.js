import React, { useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";
import TopHeader from "../../components/top-header/TopHeader";
import './style.scss'

function Checkout(props) {
    const [enterName, setEnterName] = useState("");
    const [enterEmail, setEnterEmail] = useState("");
    const [enterNumber, setEnterNumber] = useState("");
    const [enterCountry, setEnterCountry] = useState("");
    const [enterCity, setEnterCity] = useState("");
    const [postalCode, setPostalCode] = useState("");

    const shippingInfo = [];
    const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
    const shippingCost = 30;

    const totalAmount = cartTotalAmount + Number(shippingCost);

    const submitHandler = (e) => {
        e.preventDefault();
        const userShippingAddress = {
            name: enterName,
            email: enterEmail,
            phone: enterNumber,
            country: enterCountry,
            city: enterCity,
            postalCode: postalCode,
        };

        shippingInfo.push(userShippingAddress);
        console.log(shippingInfo);
    };
    return (
        <>
            <TopHeader heading="Checkout" />
            <div className='container mt-5 mb-5'>
                <div className="row mt-5">
                    <div className='col-md-7 shipp'>
                        <h3 className="mb-4">Shipping Address</h3>
                        <form className="checkout__form" onSubmit={submitHandler}>
                            <div className="form__group">
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    required
                                    onChange={(e) => setEnterName(e.target.value)}
                                />
                            </div>

                            <div className="form__group">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    onChange={(e) => setEnterEmail(e.target.value)}
                                />
                            </div>
                            <div className="form__group">
                                <input
                                    type="number"
                                    placeholder="Phone number"
                                    required
                                    onChange={(e) => setEnterNumber(e.target.value)}
                                />
                            </div>
                            <div className="form__group">
                                <input
                                    type="text"
                                    placeholder="Country"
                                    required
                                    onChange={(e) => setEnterCountry(e.target.value)}
                                />
                            </div>
                            <div className="form__group">
                                <input
                                    type="text"
                                    placeholder="City"
                                    required
                                    onChange={(e) => setEnterCity(e.target.value)}
                                />
                            </div>
                            <div className="form__group">
                                <input
                                    type="number"
                                    placeholder="Postal code"
                                    required
                                    onChange={(e) => setPostalCode(e.target.value)}
                                />
                            </div>
                            <button type="submit" style={{background:"black",color:"#fff",border:"none",padding:"10px",width:"200px"}}>
                                Payment
                            </button>
                        </form>
                    </div>

                    <div className="col-md-4 offset-md-1">
                        <div className="checkout__bill shadow-lg">
                            <h6 className="d-flex align-items-center justify-content-between mb-3">
                                Subtotal: <span>${cartTotalAmount.toFixed(2)}</span>
                            </h6>
                            <h6 className="d-flex align-items-center justify-content-between mb-3">
                                Shipping: <span>${cartTotalAmount ? shippingCost : "0.00"}</span>
                            </h6>
                            <div className="checkout__total">
                                <h5 className="d-flex align-items-center justify-content-between">
                                    Total: <span>${cartTotalAmount ? totalAmount : "0.00"}</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    );
}

export default Checkout;