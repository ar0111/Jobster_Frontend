import React from 'react';
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";

const StatsContainer = () => {
    const defaultStats = [
        {
            title: 'pending applications',
            count: 0,
            icon: <FaSuitcaseRolling></FaSuitcaseRolling>,
            color: '#e9b949',
            bcg: '#fcefc7'
        },
        {
            title: 'interviews scheduled',
            count: 0,
            icon: <FaCalendarCheck></FaCalendarCheck>,
            color: '#647acb',
            bcg: '#e0e8f9'
        },
        {
            title: 'pending applications',
            count: 0,
            icon: <FaSuitcaseRolling></FaSuitcaseRolling>,
            color: '#e9b949',
            bcg: '#fcefc7'
        }
    ]

    return (
        <div>
            StatsContainner
        </div>
    );
};

export default StatsContainer;