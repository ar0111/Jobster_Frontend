import React from 'react';
import Logo from './Logo';
import NavLinksBig from './NavLinksBig';

const BigSidebar = ({sidebarToggle}) => {
    return (
        <div className='hidden lg:block'>
            <div className={`${sidebarToggle ? "hidden" : "block"} bg-white h-full`}>
                <div>
                    <header className='px-12 pt-5'>
                        <Logo></Logo>
                    </header>
                    <NavLinksBig></NavLinksBig>
                </div>
            </div>
        </div>
        
    );
};

export default BigSidebar;