import React from 'react';
import { AreaChart, CartesianGrid, ResponsiveContainer, XAxis } from 'recharts';

const AreaChartComponent = ({jobs}) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={jobs} margin={{top:50}}>
                <CartesianGrid strokeDasharray='3 3'></CartesianGrid>
                <XAxis></XAxis>
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default AreaChartComponent;