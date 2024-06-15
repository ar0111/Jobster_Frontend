import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';

const BigSidebar = ({sidebarToggle}) => {
    return (
        <div className='hidden lg:block'>
            <div className={`${sidebarToggle ? "hidden" : "block"} bg-slate-200 h-full`}>
                <div>
                    <header>
                        <Logo></Logo>
                    </header>
                    <NavLinks></NavLinks>
                </div>
            </div>
        </div>
        
    );
};

export default BigSidebar;