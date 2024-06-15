import React from 'react';
import links from './Links';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = ({sidebarToggle, setSidebarToggle}) => {
    return (
        <div className='mt-10 flex justify-center'>
            <div className='w-full'>
                {links.map((link) =>{
                    const {text, path, id, icon} = link;
                    
                    return (
                        <NavLink
                            to={path}
                            className={ ({isActive}) => isActive ? 'nav-link active' : 'nav-link' }
                            key={id}
                            onClick={()=>setSidebarToggle(!sidebarToggle)}
                        >
                            <span className='icon'>{icon}</span>
                            {text}
                        </NavLink>
                    )
                })}
            </div>
            
        </div>
    );
};

export default NavLinks;