import React from 'react';
import img from '../assets/images/not-found.svg';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='min-h-screen container mx-auto'>
            <div className='my-52 md:my-0 px-6 md:px-0'>
                <div className='flex justify-center'>
                    <div>
                        <img src={img} alt="Not Found" />
                        <div className='text-center my-10'>
                            <h3 className='text-3xl font-semibold'>Ohh! Page Not Found</h3>
                            <p className='my-4'>We can't seem to find the page you're looking for</p>
                            <Link className='text-blue-700 underline' to='/'>Back Home</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Error;