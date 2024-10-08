import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AreaChartComponent = ({resultSlice}) => {
    
    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={resultSlice} margin={{top:50}}>
                <CartesianGrid strokeDasharray='3 3'></CartesianGrid>
                <XAxis dataKey="date"></XAxis>
                <YAxis allowDecimals={false}></YAxis>
                <Tooltip></Tooltip>
                <Area type="monotone" dataKey= 'count' stroke="#1e3a8a" fill="#3b82f6"></Area>
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default AreaChartComponent;