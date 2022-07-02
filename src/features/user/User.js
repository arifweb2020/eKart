import React, { useState } from 'react';
import Footer from './../../components/footer/Footer';
import TopHeader from './../../components/top-header/TopHeader';
import './style.scss'

function User(props) {
    const [enterName, setEnterName] = useState("");
    const [enterEmail, setEnterEmail] = useState("");
    const [enterNumber, setEnterNumber] = useState("");
    const [login, setLogin] = useState(true)



    const submitHandler = (e) => {
        e.preventDefault();
        const userShippingAddress = {
            name: enterName,
            email: enterEmail,
            phone: enterNumber,

        };


    };
    return (
        <>
            <TopHeader heading={login? "Login" : "Sign Up"} />
            <div className='container topCC mt-5 mb-5'>
                <div className="row mt-5">
                    <div className='col-md-4 offset-md-4 col-12 shadow-lg p-4 arif'>
                        {
                        login ? 
                            <>
                            <form className="checkout__form" onSubmit={submitHandler}>
                                <div className="form__group">
                                    <input
                                        type="text"
                                        placeholder="Enter your email"
                                        required
                                        onChange={(e) => setEnterEmail(e.target.value)}
                                    />
                                </div>

                                <div className="form__group">
                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        required
                                        onChange={(e) => setEnterEmail(e.target.value)}
                                    />
                                </div>


                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <button type="submit" style={{ background: "darkorange", color: "#fff", border: "none", padding: "10px", width: "200px" }}>
                                        LOGIN
                                    </button>

                                </div>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px" }}>
                                    <span onClick={()=>setLogin(false)} style={{cursor:"pointer",textDecoration:"underline",color:"red"}}>Don't have an account ?</span>
                                </div>

                            </form>
                            </>
                        :
                            <>
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
                                        type="text"
                                        placeholder="Enter your email"
                                        required
                                        onChange={(e) => setEnterEmail(e.target.value)}
                                    />
                                </div>

                                <div className="form__group">
                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        required
                                        onChange={(e) => setEnterEmail(e.target.value)}
                                    />
                                </div>


                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <button type="submit" style={{ background: "black", color: "#fff", border: "none", padding: "10px", width: "200px" }}>
                                        SIGNUP
                                    </button>

                                </div>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px" }}>
                                    <span onClick={()=>setLogin(true)} style={{cursor:"pointer",textDecoration:"underline",color:"red"}}>Already have an account ?</span>
                                </div>

                            </form>
                            </>
                            
                        }

                    </div>


                </div>

            </div>
            <Footer />
        </>
    );
}

export default User;