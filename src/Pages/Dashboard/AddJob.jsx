import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddJob = () => {

    const [isEditing, setIsEditing] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleAddJob = (data)=>{
        const job = data;

        fetch('http://localhost:3000/alljobs',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(job)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                toast.success('Job Created Successfully')
            }
        })
        .then(data=>{
            console.log(data);
        })
    }

    const clearInput = ()=>{
        reset();
    }

    return (
        <div className='overflow-hidden'>
            <div className='m-10 bg-white py-10 px-6 rounded shadow-xl'>
                <h1 className='text-3xl font-semibold px-8'>{isEditing? 'Edit Job' : 'Add Job'}</h1>

                <form onSubmit={handleSubmit(handleAddJob)} className="card-body">

                    <div className='grid grid-cols-3 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-base">Position</span>
                            </label>
                            <input type="text" {...register("position")} className="input input-bordered bg-gray-100" required />
                            {errors.position &&<p className='text-red-5000'>{errors.position.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-base">Company</span>
                            </label>
                            <input type="text" {...register("company")} className="input input-bordered bg-gray-100" required />
                            {errors.company &&<p className='text-red-5000'>{errors.company.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-base">Job Location</span>
                            </label>
                            <input type="text" {...register("joblocation")} className="input input-bordered bg-gray-100" required  />
                            {errors.joblocation &&<p className='text-red-5000'>{errors.joblocation.message}</p>}
                        </div>
                    </div>

                    <div className='grid grid-cols-3 gap-4 items-end'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-base">Status</span>
                            </label>
                            <select className="w-full border rounded-lg bg-gray-100 p-2.5" {...register("status")} defaultValue={"Smartphones"}>
                                <option>Interview</option>
                                <option>Declined</option>
                                <option>Pending</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-base">Job Type</span>
                            </label>
                            <select className="w-full border rounded-lg bg-gray-100 p-2.5" {...register("jobtype")} defaultValue={"Smartphones"}>
                                <option>Full-Time</option>
                                <option>Part-Time</option>
                                <option>Remote</option>
                                <option>Internship</option>
                            </select>
                        </div>

                        <div className='flex justify-between items-center gap-4'>
                            <div className="form-control w-1/2">
                                <button onClick={()=>clearInput()} className="btn btn-neutral text-xl text-white">Clear</button>
                            </div>

                            <div className="form-control w-1/2">
                                <button className="btn btn-info text-xl text-white">Submit</button>
                            </div>
                        </div>

                        
                    </div>

                </form>

            </div>
        </div>
    );
};

export default AddJob;