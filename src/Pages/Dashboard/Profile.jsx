import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Profile = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useContext(AuthContext);
    const name = user?.displayName.split(" ");
    // console.log(name[0]);

    const handleUpdateInfo = (data)=>{
        console.log(data);
        const name = data.firstname.concat(" ", data.lastname);
        // console.log(name);
        const formData = new FormData();

        formData.append('name', name);
        formData.append('location', data.location);

        console.log(formData);

        fetch(`http://localhost:3000/updateUser/${user?.email}`, {
            method: 'PUT',
            body: formData
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount > 0){
                toast.success("Profile Updated Successfully")
            }
        })
        .then(err=>console.log(err))

    }

    return (
        <div className='overflow-hidden h-screen'>
            <div className='m-10 bg-white py-10 px-6 rounded shadow-xl'>
                <h1 className='text-3xl font-semibold px-8'>Profile</h1>

                <form onSubmit={handleSubmit(handleUpdateInfo)} className="card-body">

                    <div className='flex flex-col md:grid md:grid-cols-3 md:gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-base">First Name</span>
                            </label>
                            <input type="text" {...register("firstname")} className="input input-bordered bg-gray-100" required defaultValue={name[0]} />
                            {errors.firstname &&<p className='text-red-5000'>{errors.firstname.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-base">Last Name</span>
                            </label>
                            <input type="text" {...register("lastname")} className="input input-bordered bg-gray-100" required defaultValue={name[1]} />
                            {errors.lastname &&<p className='text-red-5000'>{errors.lastname.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-base">Email</span>
                            </label>
                            <input type="email" {...register("email")} className="input input-bordered bg-gray-100" required defaultValue={user?.email} disabled />
                            {errors.email &&<p className='text-red-5000'>{errors.email.message}</p>}
                        </div>
                    </div>

                    <div className='flex flex-col md:grid md:grid-cols-3 md:gap-4 md:items-end'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-base">Location</span>
                            </label>
                            <input type="text" {...register("location")} className="input input-bordered bg-gray-100 mb-4 md:mb-0" required defaultValue={"something"} />
                            {errors.location &&<p className='text-red-5000'>{errors.location.message}</p>}
                        </div>

                        <div className="form-control">
                            <button className="btn btn-info text-xl text-white">Save Changes</button>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default Profile;