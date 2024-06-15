import React, { useState } from 'react';
import BigSidebar from '../../Components/BigSidebar';
import Navbar from '../../Components/Navbar';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {

    const [sidebarToggle, setSidebarToggle] = useState(false);

    return (
        <div className='flex h-screen'>
            <BigSidebar sidebarToggle={sidebarToggle}></BigSidebar>
            <div className='w-screen'>
                <Navbar sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
                ></Navbar>
                <div className='bg-slate-200 h-screen'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default SharedLayout;