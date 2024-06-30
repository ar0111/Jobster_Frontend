import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from './Loading';
import Job from './Job';

const JobsContainer = () => {
    const {user} = useContext(AuthContext);
    // console.log(user);

    const { data: jobs = [], refetch, isLoading } = useQuery({
        queryKey: ['alljobs', user?.email],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:3000/alljobs/${user?.email}`);
            const data = await res.json();
            // console.log(data);
            // const finalData = JSON.stringify(data);
            return data;
        }
    })

    if(isLoading) return <Loading></Loading>
    
    if(jobs.length === 0) {
        return (
            <div className='mt-6'>
                <h1 className='text-3xl font-semibold'>No Jobs to Display...</h1>
            </div>
            
        )
    }

    return (
        <div className='mt-6'>
            <h1 className='text-3xl font-semibold'>Jobs Info</h1>
            <div className='grid grid-cols-2 gap-4 mt-4'>
                {
                    jobs.map((job)=>{
                        return <Job key={job._id} job={job} refetch={refetch}></Job>
                    })
                }
            </div>
        </div>
    );
};

export default JobsContainer;