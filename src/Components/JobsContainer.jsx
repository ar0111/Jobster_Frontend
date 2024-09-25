import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from './Loading';
import Job from './Job';
import PageBtnContainer from './PageBtnContainer';

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

    function cleanDateString(dateStr) {
        // Remove 'th', 'st', 'nd', 'rd'
        return dateStr.replace(/(\d+)(th|st|nd|rd)/, '$1');
    }

    function sortDataDate (data, property, direction) {
        return data.sort((a, b) =>{
            if(direction === 'asc') {
                const dateA = new Date(cleanDateString(a.date));
                const dateB = new Date(cleanDateString(b.date));
                return dateA - dateB;
            } else {
                const dateA = new Date(cleanDateString(a.date));
                const dateB = new Date(cleanDateString(b.date));
                return dateB - dateA;
            }
        })
    }

    let jobsData = jobs.filter((job)=>{
        return(
            (filters.search.toLowerCase() === '' ? job : job.position.toLowerCase().includes(filters.search.toLowerCase())) &&
            (filters.status.toLowerCase() === 'all' || job.status.toLowerCase().includes(filters.status.toLowerCase())) &&
            (filters.type.toLowerCase() == 'all' ? job : job.jobType.toLowerCase().includes(filters.type.toLowerCase()))
        )
    })

    if(filters.sort.toLowerCase() === 'latest') sortDataDate(jobsData, "date", "desc");
    else if(filters.sort.toLowerCase() === 'oldest') sortDataDate(jobsData, "date", "asc");
    else if(filters.sort.toLowerCase() === 'a-z') sortData(jobsData, "position", "asc");
    else if(filters.sort.toLowerCase() === 'z-a') sortData(jobsData, "position", "desc");

    const [currentPage, SetCurrentPage] = useState(1);
    const recordsPerPage = 10;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = jobsData.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(jobsData.length / recordsPerPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);
    // console.log(numbers);
    

    return (
        <div className='mt-14'>
            <h1 className='text-2xl font-semibold'>{jobsData.length} Job{jobsData.length > 1 && 's'} Found</h1>
            <div className='grid grid-cols-2 gap-4 mt-4'>
                {
                    records.map((job)=>{
                        return <Job key={job._id} job={job} refetch={refetch}></Job>
                    })
                }
            </div>

            {nPage > 1 && <PageBtnContainer numbers = {numbers} lastIndex={lastIndex} firstIndex={firstIndex} currentPage={currentPage} SetCurrentPage={SetCurrentPage}></PageBtnContainer>}
        </div>
    );
};

export default JobsContainer;