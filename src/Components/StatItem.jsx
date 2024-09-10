import React from 'react';
import './StatItems.css';

const StatItem = ({item, index}) => {

    const {count, title, icon, color, bcg} = item;
    //  console.log(index);
     
    

    return (
        <div color={color} bcg={bcg}>
            <div className={` bg-white border-b-4 border-color-${index} rounded`}>
                <div className='ps-8 pb-8 pt-10 pe-16'>
                    <header className='flex justify-between items-center'>
                        <span className={`text-5xl font-semibold text-${index}`}>{count}</span>
                        <span className={`icon-${index} p-4 rounded`}>{icon}</span>
                    </header>
                    <h5 className='capitalize mt-6 text-lg font-semibold'>{title}</h5>
                </div>
            </div>
        </div>
        
    );
};

export default StatItem;