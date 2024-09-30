import React, { useContext } from 'react';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import './Jobs.css'
import { Link } from 'react-router-dom';
import JobInfo from './JobInfo';
import toast from 'react-hot-toast';
import { AuthContext } from '../Context/AuthProvider';

const Job = ({job, refetch}) => {

    const {_id, position, company, jobLocation, status, jobType, date} = job;
    const {isEditing, setIsEditing, jobId, setJobId} = useContext(AuthContext);

    const deleteJob = () =>{
        const agree = window.confirm('Are you want to delete this job');
        if(agree){
            // console.log("Yes Agree");
            fetch(`http://localhost:3000/deletejob/${_id}`, {
                method: "DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.acknowledged){
                    toast.success("Job Removed")
                    refetch();
                }
            })
        }
    }

    const editJob = () =>{
        setIsEditing(!isEditing);
        setJobId(job);
    }

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
            <div className='px-6 py-4'>
                <div className='grid grid-cols-2 gap-10 lg:gap-80 items-center'>
                    <div className='pb-4'>
                        <JobInfo icon={<FaLocationArrow style={{ color: 'rgb(148 163 184)'}}/>} text={jobLocation}></JobInfo>
                        <div className='pt-3'>
                            <JobInfo icon={<FaBriefcase style={{ color: 'rgb(148 163 184)'}}/>} text={jobType}></JobInfo>
                        </div>
                        
                    </div>
                    
                    <div>
                        <div className='pb-2'>
                            <JobInfo icon={<FaCalendarAlt style={{ color: 'rgb(148 163 184)'}}/>} text={date}></JobInfo>
                        </div>
                        
                        <div className={`${status}`}>
                            {status}
                        </div>
                    </div>
                    
                </div>
                <div>
                    <div className='flex justify-start items-center gap-2'>
                        <Link to='/add-job' className='edit-btn' onClick={()=> editJob()}>Edit</Link>
                        
                        <button className='delete-btn' onClick={()=> deleteJob()}>Delete</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Job;