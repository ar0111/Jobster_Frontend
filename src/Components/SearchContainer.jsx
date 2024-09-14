import React from 'react';
import { useForm } from 'react-hook-form';

const SearchContainer = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleAddJob = ()=>{
        
    }

    return (
        <div>
            <div className='overflow-hidden'>
                <div className=' bg-white py-10 px-6 rounded shadow-xl'>
                    <h1 className='text-3xl font-semibold px-8'>Search Form</h1>

                    <form onSubmit={handleSubmit(handleAddJob)} className="card-body">

                        <div className='grid grid-cols-3 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-base">Search</span>
                                </label>
                                <input type="text" {...register("search")} className="input input-bordered bg-gray-100" required />
                                {errors.search &&<p className='text-red-5000'>{errors.search.message}</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-base">Status</span>
                                </label>
                                <select className="w-full border rounded-lg bg-gray-100 p-2.5" {...register("status")} defaultValue={"All"}>
                                    <option>All</option>
                                    <option>Interview</option>
                                    <option>Declined</option>
                                    <option>Pending</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-base">Type</span>
                                </label>
                                <select className="w-full border rounded-lg bg-gray-100 p-2.5" {...register("type")} defaultValue={"All"}>
                                    <option>All</option>
                                    <option>Full-time</option>
                                    <option>Part-time</option>
                                    <option>Remote</option>
                                    <option>Internship</option>
                                </select>
                            </div>
                        </div>

                        <div className='grid grid-cols-3 gap-4 items-end'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Sort</span>
                                </label>
                                <select className="w-full border rounded-lg bg-gray-100 p-2.5" {...register("sort")} defaultValue={"Smartphones"}>
                                    <option>Latest</option>
                                    <option>Oldest</option>
                                    <option>A-Z</option>
                                    <option>Z-A</option>
                                </select>
                            </div>

                            <div className='flex justify-between items-center gap-4'>
                                <div className="form-control w-full">
                                    <button onClick={()=>clearInput()} className="btn text-xl text-red-700 bg-rose-200">Clear Filters</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SearchContainer;