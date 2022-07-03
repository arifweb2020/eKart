import React,{useState} from 'react';
import Footer from '../../components/footer/Footer';
import TopHeader from './../../components/top-header/TopHeader';
import './style.scss'

function Contact(props) {
    const [enterName, setEnterName] = useState("");
    const [enterEmail, setEnterEmail] = useState("");
    const [enterNumber, setEnterNumber] = useState("");




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
            <TopHeader heading="Contact Us" />
            <div className='container topCon mt-5 mb-5'>
                <div className="row mt-5">
                    <div className='col-md-7'>
                        <h3 className="mb-4">Send Message</h3>
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
                                    type="text"
                                    placeholder="Phone number"
                                    required
                                    onChange={(e) => setEnterNumber(e.target.value)}
                                />
                            </div>
                           
                           
                            <button type="submit" style={{background:"black",color:"#fff",border:"none",padding:"10px",width:"200px"}}>
                                Submit
                            </button>
                        </form>
                    </div>

                    <div className="col-md-4 offset-md-1">
                        <div className="checkout__bill shadow-lg">
                            <h6 className="d-flex align-items-center justify-content-between mb-3">
                                Contact Person: <span>Md Arif Hussain</span>
                            </h6>
                            <h6 className="d-flex align-items-center justify-content-between mb-3">
                                Mobile Number: <span>+91-8660790990</span>
                            </h6>
                            <h6 className="d-flex align-items-center justify-content-between mb-3">
                                Address: <span>BTM 1st stage - 560029 <br/>Silicon valley ,Bangalore </span>
                            </h6>

                            
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    );
}

export default Contact;