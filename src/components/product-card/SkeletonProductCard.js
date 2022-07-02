import React from 'react';
import SkeletonLoader from '../skeleton/SkeletonLoader';

function SkeletonProductCard(props) {
    return (
        <>
            <div className="card h-100 text-center p-4">
                        <SkeletonLoader height="250px" />
                        <div className="card-body">
                            <h4 className="card-title"><SkeletonLoader /></h4>
                            <p className="card-text"><SkeletonLoader width="100px" height="20px"/></p>
                            <SkeletonLoader width="120px" height="30px"/>
                           

                        </div>
                    </div>
              
        </>
    );
}

export default SkeletonProductCard;