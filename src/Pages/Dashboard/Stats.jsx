import React from 'react';
import StatsContainer from '../../Components/StatsContainer';
import ChartsContainer from '../../Components/ChartsContainer';

const Stats = () => {
    return (
        <div className='container mx-auto pt-10'>
            <StatsContainer></StatsContainer>
            <ChartsContainer></ChartsContainer>
        </div>
    );
};

export default Stats;