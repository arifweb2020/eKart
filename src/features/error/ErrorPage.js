import React from 'react';
import error from './../../assets/images/error.jpg';

function ErrorPage(props) {
    return (
        <div className='container mt-4 mb-4'>
          <img src={error} className="img-fluid mx-auto d-block" alt="eror"/>  
        </div>
    );
}

export default ErrorPage;