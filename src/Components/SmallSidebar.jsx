import React from 'react';
import { FaTimes } from "react-icons/fa";
import Logo from './Logo';
import './SmallSidebar.css';
import NavLinks from './NavLinks';

const SmallSidebar = ({sidebarToggle, setSidebarToggle}) => {
    return (
        <div className=''>
            {
                sidebarToggle === true && <div className='lg:hidden fixed inset-0 bg-slate-800 flex justify-center items-center '>
                    <div className='bg-white w-11/12 height relative overscroll-y-none'>
                        <button className='absolute top-2.5 left-2.5' onClick={()=>setSidebarToggle(!sidebarToggle)}>
                            <FaTimes size={25} color='brown'/>
                        </button>
                        <div className='flex justify-center mt-10'>
                            <div>
                                <header>
                                    <Logo></Logo>
                                </header>
                                <NavLinks sidebarToggle={sidebarToggle}
                                    setSidebarToggle={setSidebarToggle}
                                ></NavLinks>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
            }
            
        </div>
    );
};

export default SmallSidebar;