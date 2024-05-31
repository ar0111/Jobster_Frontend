import React from 'react';
import SmallSidebar from '../../Components/SmallSidebar';
import BigSidebar from '../../Components/BigSidebar';
import Navbar from '../../Components/Navbar';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
    return (
        <div>
            <div>
                <SmallSidebar></SmallSidebar>
                <BigSidebar></BigSidebar>
                <div>
                    <Navbar></Navbar>
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SharedLayout;