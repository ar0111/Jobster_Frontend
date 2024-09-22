import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from './Loading';
import Job from './Job';

const JobsContainer = ({filters}) => {
    const {user} = useContext(AuthContext);

    const { data: jobs = [], refetch, isLoading } = useQuery({
        queryKey: ['alljobs', user?.email],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:3000/alljobs/${user?.email}`);
            const data = await res.json();
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

    function sortData (data, property, direction) {
        return data.sort((a, b) =>{
            if(direction === 'asc') {
                return a[property].localeCompare(b[property])
            } else {
                return b[property].localeCompare(a[property])
            }
        })
    }

    // function sortDataA (data, property, direction) {
    //     return data.sort((a, b) =>{
    //         console.log(a[property].split('')[0], b[property].split('')[0]);
            
    //         if(direction === 'asc') {
    //             return a[property].split('')[0].toLowerCase().localeCompare(b[property].split('')[0])
    //         } else {
    //             return b[property].split('')[0].toLowerCase().localeCompare(a[property].split('')[0])
    //         }
    //     })
    // }

    let jobsData = jobs.filter((job)=>{
        return(
            (filters.search.toLowerCase() === '' ? job : job.position.toLowerCase().includes(filters.search.toLowerCase())) &&
            (filters.status.toLowerCase() === 'all' || job.status.toLowerCase().includes(filters.status.toLowerCase())) &&
            (filters.type.toLowerCase() == 'all' ? job : job.jobType.toLowerCase().includes(filters.type.toLowerCase()))
        )
    })

    if(filters.sort.toLowerCase() === 'latest') sortData(jobsData, "date", "desc");
    else if(filters.sort.toLowerCase() === 'oldest') sortData(jobsData, "date", "asc");
    else if(filters.sort.toLowerCase() === 'a-z') sortData(jobsData, "position", "asc");
    else if(filters.sort.toLowerCase() === 'z-a') sortData(jobsData, "position", "desc");

    return (
        <div className='mt-14'>
            <h1 className='text-3xl font-semibold'>Jobs Info</h1>
            <div className='grid grid-cols-2 gap-4 mt-4'>
                {
                    jobsData.map((job)=>{
                        return <Job key={job._id} job={job} refetch={refetch}></Job>
                    })
                }
            </div>
        </div>
    );
};

export default JobsContainer;