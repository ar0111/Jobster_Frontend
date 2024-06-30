import React from 'react';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import './Jobs.css'

const Job = ({job, refetch}) => {

    const {_id, position, company, jobLocation, status, jobType} = job;

    return (
        <div className='bg-white shadow-md rounded'>
            <div className='px-6 py-4 border-b-2'>
                <div className='flex justify-start gap-6 items-center'>
                    <div className='bg-blue-500 p-4 rounded w-16'>
                        <h1 className='text-white text-xl font-semibold text-center'>{company.charAt(0)}</h1>
                    </div>

                    <div>
                        <h5 className='text-lg font-semibold'>{position}</h5>
                        <p className='text-sm text-slate-400'>{company}</p>
                    </div>
                </div>
            </div>
            <div className='px-6 py-4 flex justify-start gap-40 items-center'>
                <h4>More Content</h4>
                <div className={`${status}`}>
                    {status}
                </div>
            </div>
        </div>
    );
};

export default Job;