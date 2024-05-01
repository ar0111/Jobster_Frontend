import React from 'react';
import Logo from '../Components/Logo';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='shadow-2xl w-3/4 md:w-1/4 border-t-4 border-indigo-600 rounded'>
            <form className="card-body">
                <div className='flex justify-center text-center'>
                    <div>
                        <Logo></Logo>
                        <h3 className='text-2xl font-semibold my-4'>Login</h3>
                    </div>
                    
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-base">Email</span>
                    </label>
                    <input type="email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-base">Password</span>
                    </label>
                    <input type="password" className="input input-bordered" required />
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-info text-xl">Submit</button>
                </div>

                <div className='flex items-center mt-4'>
                    <h3>Not a member yet?</h3>
                    <Link to='/register' className="label-text-alt link link-hover ms-2 text-base text-blue-600">Register</Link>
                </div>
            </form>
                
            </div>
        </div>
    );
};

export default Login;