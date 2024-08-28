import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import BarChart from './BarChart';
import AreaChartComponent from './AreaChart';

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

    return (
        <div className='pt-10'>
            <div className='text-center'>
                <h4 className='text-2xl font-semibold'>Monthly Application</h4>
                <button className='mt-4 text-lg text-sky-600 font-semibold' onClick={()=>setBarChart(!barChart)}>{barChart ? 'Area Chart' : 'Bar Chart'}</button>
            </div>
            <div className='text-center'>
                {barChart ? <BarChart data={jobs}></BarChart> : <AreaChartComponent data={jobs}></AreaChartComponent>}
            </div>
        </div>
    );
};

export default ChartsContainer;