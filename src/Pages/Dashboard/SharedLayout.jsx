import React from 'react';
import SmallSidebar from '../../Components/SmallSidebar';
import BigSidebar from '../../Components/BigSidebar';
import Navbar from '../../Components/Navbar';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
    return (
        <div className='min-h-screen'>
            <div className='flex justify-content-start flex-col lg:flex-row'>
                <SmallSidebar></SmallSidebar>
                <BigSidebar></BigSidebar>
                <div className='w-screen'>
                    <Navbar></Navbar>
                    <div className='bg-slate-200 min-h-screen'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SharedLayout;