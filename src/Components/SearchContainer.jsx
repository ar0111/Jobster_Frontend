import React from 'react';
import { useForm } from 'react-hook-form';

const SearchContainer = ({filters, setFilters}) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleFilterChange = (e) =>{
        const {name, value} = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }))
    }    

    const clearInput = ()=>{
        setFilters.search('');
        setFilters.status('all');
        setFilters.type('all');
        setFilters.sort('latest');
    }
    
    return (
        <div>
            <div className='overflow-hidden'>
                <div className=' bg-white py-10 px-6 rounded shadow-xl'>
                    <h1 className='text-3xl font-semibold px-8'>Search Form</h1>

                    <form className="card-body">

                        <div className='grid grid-cols-3 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-base">Search</span>
                                </label>
                                <input type="text" {...register("search", {
                                    onChange:handleFilterChange
                                })} value={filters.search} className="input input-bordered bg-gray-100"/>
                                {errors.search &&<p className='text-red-5000'>{errors.search.message}</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-base">Status</span>
                                </label>
                                <select className="w-full border rounded-lg bg-gray-100 p-2.5" {...register("status", {
                                    onChange:handleFilterChange
                                })} defaultValue={"All"} value={filters.status}>
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
                                <select className="w-full border rounded-lg bg-gray-100 p-2.5" {...register("type", {
                                    onChange:handleFilterChange
                                })} defaultValue={"All"} value={filters.type}>
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
                                <select className="w-full border rounded-lg bg-gray-100 p-2.5" {...register("sort", {
                                    onChange:handleFilterChange
                                })} defaultValue={"Latest"} value={filters.sort}>
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