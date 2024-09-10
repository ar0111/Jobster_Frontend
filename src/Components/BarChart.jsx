import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const BarChartContainer = ({result}) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={result} margin={{top:50}}>
                <CartesianGrid strokeDasharray='10 10'></CartesianGrid>
                <XAxis dataKey='date'></XAxis>
                <YAxis allowDecimals={false}></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey='count' type="monotone" fill="#3b82f6" barSize={75}></Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartContainer;