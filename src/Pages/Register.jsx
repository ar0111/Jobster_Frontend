import React, { useContext, useState } from 'react';
import Logo from '../Components/Logo';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');

    const handleSignUp = (data)=>{
        // console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('User Created Successfully');
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(()=>{})
            .catch(err=>console.log(err))
        })
        .catch(error=>{
            console.log(error);
            setSignUpError(error.message);
        })
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='shadow-2xl w-3/4 md:w-1/4 border-t-4 border-indigo-600 rounded'>
            <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
                <div className='flex justify-center text-center'>
                    <div>
                        <Logo></Logo>
                        <h3 className='text-2xl font-semibold my-4'>Register</h3>
                    </div>
                    
                </div>
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-base">Name</span>
                    </label>
                    <input type="text" {...register("name")} className="input input-bordered" required />
                    {errors.name &&<p className='text-red-5000'>{errors.name.message}</p>}
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
                        minLength:{value:6, message:'Password must be six chracters long'}
                    })} className="input input-bordered" required />
                    {errors.password &&<p className='text-red-5000'>{errors.password.message}</p>}
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-info text-xl">Submit</button>
                </div>

                {
                    signUpError && <p className='text-red-600'>{signUpError}</p>
                }

                <div className='flex items-center mt-4'>
                    <h3>Already a member?</h3>
                    <Link to='/login' className="label-text-alt link link-hover ms-2 text-base text-blue-600">Login</Link>
                </div>
            </form>
                
            </div>
        </div>
    );
};

export default Register;