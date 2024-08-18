import React from 'react';
import './StatItems.css';

const StatItem = ({item}) => {

    const {count, title, icon, color, bcg} = item;
    

    return (
        <div color={color} bcg={bcg}>
            <div className='shadow-2xl bg-white border-b-4 border-color rounded'>
                <div className='ps-8 pb-8 pt-10 pe-16'>
                    <header className='flex justify-between items-center'>
                        <span className='text-5xl font-semibold'>{count}</span>
                        <span className='icon'>{icon}</span>
                    </header>
                    <h5 className='capitalize mt-6 text-lg font-semibold'>{title}</h5>
                </div>
            </div>
        </div>
        
    );
};

export default StatItem;