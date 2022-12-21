import React from 'react';
import { Bars } from 'react-loader-spinner';

const LoaderSpinner = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div>
                <Bars
                    height="80"
                    width="80"
                    color="#F49D1A"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        </div>
    );
};

export default LoaderSpinner;