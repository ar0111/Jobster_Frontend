import React, { useContext, useState } from 'react';
import Logo from './Logo';
import { FaAlignLeft } from "react-icons/fa";
import { AuthContext } from '../Context/AuthProvider';
import { FaUserCircle } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import SmallSidebar from './SmallSidebar';
import { useQuery } from '@tanstack/react-query';
import Loading from './Loading';

const Navbar = ({sidebarToggle, setSidebarToggle}) => {
    const [showLogout, setShowLogout] = useState(false);
    const {user, logOut} = useContext(AuthContext);
    // console.log(user);
    const handleSignOut = ()=>{
        logOut()
        .then(()=>{})
        .catch(err=>console.log(err))
    }

    const {data: users = [], refetch, isLoading} = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:3000/users/${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    // console.log(users);

    if(isLoading) return <Loading></Loading>

    refetch();

    return (
        <div className='text-center my-6'>
            <div className='flex justify-between items-center px-10'>
                <button type='button' className='toggle-btn' onClick={()=> setSidebarToggle(!sidebarToggle)}>
                    <FaAlignLeft size="24px" color="rgb(0, 102, 255)"/>
                </button>
            
                <div className='mx-4 md:mx-0'>
                    <div className='block lg:hidden'>
                        <Logo></Logo>
                    </div>
                    <div className='hidden lg:block'>
                        <h3 className='capitalize text-2xl font-semibold'>dashboard</h3>
                    </div>
                </div>

                <div  className='w-auto relative'>
                    <button type='button' className='btn btn-info btn-sm text-white text-xs' onClick={()=> setShowLogout(!showLogout)}>
                        <div className='hidden md:block'>
                            <FaUserCircle />
                        </div>
                        {users.name}
                        <div className='hidden md:block'>
                            <FaCaretDown/>
                        </div>
                        
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