import React from 'react';

const JobInfo = ({icon, text}) => {
    return (
        <div className='flex justify-start items-center gap-2'>
            <span className=''>{icon}</span>
            <span>{text}</span>
        </div>
    );
};

export default JobInfo;