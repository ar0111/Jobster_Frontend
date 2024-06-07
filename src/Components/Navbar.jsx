import React, { useContext } from 'react';
import Logo from './Logo';
import { FaAlignLeft } from "react-icons/fa";
import { AuthContext } from '../Context/AuthProvider';
import { FaUserCircle } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";

const Navbar = () => {

    const {user, logout} = useContext(AuthContext);
    console.log(user);

    return (
        <div className='text-center my-8'>
            <div className='flex justify-between items-center px-10'>
                <button type='button' className='toggle-btn' onClick={()=> console.log('toggle sidebar')}>
                    <FaAlignLeft />
                </button>
            
                <div>
                    <div className='block lg:hidden'>
                        <Logo></Logo>
                    </div>
                    <div className='hidden lg:block'>
                        <h3>dashboard</h3>
                    </div>
                    
                    
                </div>

                <div>
                    <button type='button' className='btn' onClick={()=>console.log('toggle logout dropdown')}>
                        <FaUserCircle />
                        {user?.displayName}
                        <FaCaretDown />
                    </button>
                    <div>
                        <button type='button' className='btn' onClick={()=> console.log('logout user')}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;