import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';

const EditJob = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { isEditing, setIsEditing, jobId } = useContext(AuthContext);
    console.log(jobId);

    const handleEditJob = (data)=>{
        const position = data.position;
        const company = data.company;
        const jobLocation = data.joblocation;
        const status = data.status;
        const jobType = data.jobtype;


        const job = {
            position,
            company,
            jobLocation,
            status,
            jobType,
        }

        fetch(`http://localhost:3000/updatejobs/${jobId._id}`,{
            method:"PUT",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(job)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success('Job Edited Successfully')
            }
        })
        .then(data=>{
            console.log(data);
        })
        setIsEditing(!isEditing);
    }

    return (
        <div className='overflow-hidden'>
            <div className='m-10 bg-white py-10 px-6 rounded shadow-xl'>
                <h1 className='text-3xl font-semibold px-8'>Edit Job</h1>

                <form onSubmit={handleSubmit(handleEditJob)} className="card-body">

                    <div className='grid grid-cols-3 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-base">Position</span>
                            </label>
                            <input type="text" {...register("position")} className="input input-bordered bg-gray-100" required defaultValue={jobId.position} />
                            {errors.position &&<p className='text-red-5000'>{errors.position.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-base">Company</span>
                            </label>
                            <input type="text" {...register("company")} className="input input-bordered bg-gray-100" required defaultValue={jobId.company} />
                            {errors.company &&<p className='text-red-5000'>{errors.company.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-base">Job Location</span>
                            </label>
                            <input type="text" {...register("joblocation")} className="input input-bordered bg-gray-100" required defaultValue={jobId.jobLocation} />
                            {errors.joblocation &&<p className='text-red-5000'>{errors.joblocation.message}</p>}
                        </div>
                    </div>

                    <div className='grid grid-cols-3 gap-4 items-end'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-base">Status</span>
                            </label>
                            <select className="w-full border rounded-lg bg-gray-100 p-2.5" {...register("status")} defaultValue={jobId.status}>
                                <option>Interview</option>
                                <option>Declined</option>
                                <option>Pending</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-base">Job Type</span>
                            </label>
                            <select className="w-full border rounded-lg bg-gray-100 p-2.5" {...register("jobtype")} defaultValue={jobId.jobType}>
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

export default EditJob;