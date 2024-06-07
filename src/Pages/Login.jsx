import React, { useContext, useState } from 'react';
import Logo from '../Components/Logo';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {signIn} = useContext(AuthContext);
    const [loginError, setLogInError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from.pathname || '/dashboard';

    const handleLogIn = (data)=>{
        console.log(data);
        setLogInError('');
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('User Login Successfully');
            navigate(from, {replace:true});
        })
        .catch(error=>{
            console.log(error);
            setLogInError(error.message);
        })
        
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='shadow-2xl w-3/4 md:w-1/4 border-t-4 border-indigo-600 rounded'>
            <form onSubmit={handleSubmit(handleLogIn)} className="card-body">
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
                    <input type="email" {...register("email")} className="input input-bordered" required />
                    {errors.email &&<p className='text-red-5000'>{errors.email.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-base">Password</span>
                    </label>
                    <input type="password" {...register("password",{
                        required:"Password is Required",
                    })} className="input input-bordered" required />
                    {errors.password &&<p className='text-red-5000'>{errors.password.message}</p>}
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-info text-xl" type='submit'>Submit</button>
                </div>

                {
                    loginError && <p className='text-red-600'>{loginError}</p>
                }

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