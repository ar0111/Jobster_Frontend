import React, { useState } from 'react';
import JobsContainer from '../../Components/JobsContainer';
import SearchContainer from '../../Components/SearchContainer';

const AllJobs = () => {

    const [filters, setFilters] = useState({
        search: '',
        status: 'all',
        type: 'all',
        sort: 'latest'
    });

    return (
        <div className='px-10 py-6 h-fit'>
            <SearchContainer filters={filters} setFilters={setFilters}></SearchContainer>
            <JobsContainer filters={filters}></JobsContainer>
        </div>
    );
};

export default AllJobs;