import React, { useEffect, useState } from 'react';
import DoughnutCom from './Doughnut';


const LeftSide = () => {

    const [res, setRes] = useState({});

    useEffect(() => {
        fetch('/ticketsresponse.json')
            .then((response) => response.json())
            .then((res) => setRes(res));
    }, []);


    return (
        <aside className='ui-left'>
            <div className='ui-bg ui-csat mb-12'>
                <h2 className='ui-title'>CSAT this month</h2>
                <DoughnutCom />
            </div>

            <div className='ui-bg ui-csat'>
                <h2 className='ui-title'>Today</h2>
                <div className='ui-today-box'>
                    <h4>{res.firstResponseTime}<span>m</span></h4>
                    <p>First response time</p>
                </div>
                <div className='ui-today-box'>
                    <h4>{res.firstResolutionTime}<span>h</span></h4>
                    <p>First resolution time</p>
                </div>
                <div className='ui-today-box'>
                    <h4>{res.unassignedTickets}</h4>
                    <p>Unassigned tickets</p>
                </div>
            </div>
        </aside>
    );
};

export default LeftSide;
