import React, { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import LineChart from './LineChart';
import TicketsSolve from './TicketsSolve';
import { resolve } from 'chart.js/helpers';

const MiddleSide = () => {

    const [status, setStatus] = useState([]);

    useEffect(() => {
        fetch('/ticketsstatus.json')
            .then(response => response.json())
            .then(data => { console.log(data); setStatus(data) })
            .catch(error => console.error('Error fetching status:', error));

    }, []);

    console.log(status)

    return (
        <aside className='ui-middle'>
            <div className='ui-tickets ui-box mb-12'>
                <div className='ui-bg ui-tickets-solve'>
                    <TicketsSolve />
                </div>
                <div className='ui-bg ui-tickets-status'>
                    <h2 className='ui-title'>Tickets by status this week</h2>
                    {status.map((st, index) => (
                        <ProgressBar key={index} minValue={st.minValue} maxValue={st.maxValue} value={st.Value} label={st.Status} />
                    ))}
                </div>
            </div>

            <div className='ui-bg ui-tickets-volume'>
                <h2 className='ui-title'>Top ticket solvers this week</h2>
                <LineChart />
            </div>
        </aside>
    );
};

export default MiddleSide;
