import React from 'react';
import error from './../../assets/images/error.jpg';
import Footer from './../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import './style.scss'

function ErrorPage(props) {
  const navigate = useNavigate()
  return (
    <>

      <div className='container mt-4 mb-4'>
        <div className='col-row'>
          <div className="col-md-12 mt-5 error-img">
            <img src={error} className="img-fluid mx-auto d-block" alt="eror" />
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <button onClick={()=>navigate("/")} style={{background:"black",border:"none",color:"#fff",padding:"12px",marginTop:"20px"}}>GO TO HOME PAGE</button>
            </div> 
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default ErrorPage;