import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AreaChartComponent = ({result}) => {
    // console.log(jobs);
    // const dateArr = [];

    // {
    //     jobs.map((item) => {
    //         const dateData = item.date.split(" ");
    //         console.log(dateData);
    //         const date = dateData[0] + " " + dateData[2];
    //         dateArr.push(date);
    //         console.log(dateArr);
            
    //     })
    // }
    
    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={result} margin={{top:50}}>
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