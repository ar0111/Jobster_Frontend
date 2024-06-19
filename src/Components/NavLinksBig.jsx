import React from 'react';
import links from './Links';
import { NavLink } from 'react-router-dom';
import './NavLinksBig.css';

const NavLinksBig = () => {
    return (
        <div className='mt-10'>
            <div className='w-full'>
                {links.map((link) =>{
                    const {text, path, id, icon} = link;
                    
                    return (
                        <NavLink
                            to={path}
                            className={ ({isActive}) => isActive ? 'nav-link active' : 'nav-link' }
                            key={id}
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

export default NavLinksBig;