import React from 'react';
import main from '../assets/images/main.svg';
import Logo from '../Components/Logo';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <main className='min-h-screen container mx-auto px-4 md:px-0'>
            <nav className='my-8'>
                <Logo></Logo>
            </nav>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center my-52 md:my-0'>
                <div>
                    <h1 className='text-4xl font-bold'>Job <span className='text-blue-600'>Tracking</span> App</h1>
                    <p className='my-4'>Organize your tasks, prioritize effectively, and meet every deadline with confidence.  Track time spent on different projects, collaborate seamlessly with your team, and gain valuable insights into your workflow.  Take control of your workday and achieve peak productivity with our easy-to-use and intuitive job tracking system.</p>
                    <Link to='/register' className='btn btn-info text-lg text-white'>Login/Register</Link>
                </div>
                <img className='hidden md:block' src={main} alt="main-img" />
            </div>
        </main>
    );
};

export default Landing;