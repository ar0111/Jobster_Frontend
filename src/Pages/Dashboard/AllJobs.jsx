import React from 'react';
import JobsContainer from '../../Components/JobsContainer';
import SearchContainer from '../../Components/SearchContainer';

const AllJobs = () => {
    return (
        <div className='px-10 py-6'>
            <SearchContainer></SearchContainer>
            <JobsContainer></JobsContainer>
        </div>
    );
};

export default AllJobs;