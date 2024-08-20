import React, { useContext } from 'react';
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import StatItem from './StatItem';
import { AuthContext } from '../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const StatsContainer = () => {

    const {user} = useContext(AuthContext);

    const { data: jobs = [], refetch, isLoading } = useQuery({
        queryKey: ['alljobs', user?.email],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:3000/alljobs/${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    const intervewApplications = [];
    const pendinApplications = [];
    const declineApplication = [];

    for (let i = 0; i<jobs.length; i++){
        if(jobs[i].status === "Interview") intervewApplications.push(jobs[i]);
        if(jobs[i].status === "Pending") pendinApplications.push(jobs[i]);
        if (jobs[i].status === "Declined") declineApplication.push(jobs[i]);
    }

    const defaultStats = [
        {
            title: 'pending applications',
            count: pendinApplications.length || 0,
            icon: <FaSuitcaseRolling size={30}></FaSuitcaseRolling>,
            color: '#e9b949',
            bcg: '#fcefc7'
        },
        {
            title: 'interviews scheduled',
            count: intervewApplications.length || 0,
            icon: <FaCalendarCheck size={30}></FaCalendarCheck>,
            color: '#647acb',
            bcg: '#e0e8f9'
        },
        {
            title: 'declined applications',
            count: declineApplication.length || 0,
            icon: <FaBug size={30}></FaBug>,
            color: '#d66a6a',
            bcg: '#ffeeee'
        }
    ]

    return (
        <div className='grid grid-cols-3 mb-8 gap-4'>
            {defaultStats.map((item, index)=>{
                return <StatItem key={index} item={item} index={index}></StatItem>
            })}
        </div>
    );
};

export default StatsContainer;