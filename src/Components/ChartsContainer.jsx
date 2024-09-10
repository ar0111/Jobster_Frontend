import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import AreaChartComponent from './AreaChart';
import BarChartContainer from './BarChart';

const ChartsContainer = () => {
    const {user} = useContext(AuthContext);
    const [barChart, setBarChart] = useState(true);
    const { data: jobs = [], refetch, isLoading } = useQuery({
        queryKey: ['alljobs', user?.email],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:3000/alljobs/${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    // console.log(jobs);

    const monthYearCounts = jobs.reduce((counts, job) => {
        const monthYear = job.date.split(' ')[0] + " " + job.date.split(' ')[2]; // Extract month and year
        counts[monthYear] = (counts[monthYear] || 0) + 1;
        return counts;
    }, {});
    
    // Convert counts to an array of objects
    const result = Object.entries(monthYearCounts).map(([monthYear, count]) => ({
        date: monthYear,
        count
    }));
    
    // Sort the result by month and year
    result.sort((a, b) => {
        const [aMonth, aYear] = a.date.split(' ');
        const [bMonth, bYear] = b.date.split(' ');
        if (aYear !== bYear) {
            return aYear - bYear; // Sort by year first
        }
        return new Date(`${aYear}-${aMonth}-01`) - new Date(`${bYear}-${bMonth}-01`); // Sort by month within the same year
    });
    
    // console.log(result);

    // let dateArr = {};

    // {
    //     jobs.map((item) => {
    //         const dateData = item.date.split(" ");
    //         console.log(dateData);
    //         const dateItem = dateData[0] + " " + dateData[2];
    //         // dateArr.push({date:dateItem})
    //         // console.log(dateArr);
            
    //     })
    // }

    // console.log(jobs);
    

    return (
        <div className='pt-10'>
            <div className='text-center'>
                <h4 className='text-2xl font-semibold'>Monthly Application</h4>
                <button className='mt-4 text-lg text-sky-600 font-semibold' onClick={()=>setBarChart(!barChart)}>{barChart ? 'Area Chart' : 'Bar Chart'}</button>
            </div>
            <div className='text-center'>
                {barChart ? <BarChartContainer result={result}></BarChartContainer> : <AreaChartComponent result={result}></AreaChartComponent>}
            </div>
        </div>
    );
};

export default ChartsContainer;