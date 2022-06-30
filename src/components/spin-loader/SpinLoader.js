/**
 * Spin Loader
 * Author: Arif
 */
import React from 'react';
import './style.scss'

function SpinLoader(props) {
    return (
        <div className='spinLoader'>
            <div class="spinner-border text-primary"></div>
        </div>
    );
}

export default SpinLoader;