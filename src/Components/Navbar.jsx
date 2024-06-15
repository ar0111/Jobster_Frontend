import React, { useContext, useState } from 'react';
import Logo from './Logo';
import { FaAlignLeft } from "react-icons/fa";
import { AuthContext } from '../Context/AuthProvider';
import { FaUserCircle } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import SmallSidebar from './SmallSidebar';

const Navbar = ({sidebarToggle, setSidebarToggle}) => {
    const [showLogout, setShowLogout] = useState(false);
    const {user, logOut} = useContext(AuthContext);
    // console.log(user);
    const handleSignOut = ()=>{
        logOut()
        .then(()=>{})
        .catch(err=>console.log(err))
    }

    return (
        <div className='text-center my-6'>
            <div className='flex justify-between items-center px-10'>
                <button type='button' className='toggle-btn' onClick={()=> setSidebarToggle(!sidebarToggle)}>
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

                <div  className='w-auto relative'>
                    <button type='button' className='btn btn-info btn-sm text-white' onClick={()=> setShowLogout(!showLogout)}>
                        <FaUserCircle />
                        {user?.displayName}
                        <FaCaretDown />
                    </button>
                    {
                        showLogout && <div className="mt-2 w-full absolute">
                            <button type='button' className='btn w-full bg-sky-100 text-blue-400 font-bold' onClick={handleSignOut}>
                                Logout
                            </button>
                        </div>
                    }
                    
                </div>
            </div>
            <SmallSidebar sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
            ></SmallSidebar>
        </div>
    );
};

export default Navbar;