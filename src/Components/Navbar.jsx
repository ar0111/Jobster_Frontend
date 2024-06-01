import React from 'react';
import Logo from './Logo';
import { FiAlignLeft } from "react-icons/fi";

const Navbar = () => {
    return (
        <div className='text-center my-8'>
            <button type='button' className='toggle-btn' onClick={()=> console.log('toggle sidebar')}>
                <FiAlignLeft />
            </button>
            
            <div>
                <Logo></Logo>
                <h3>dashboard</h3>
            </div>
        </div>
    );
};

export default Navbar;