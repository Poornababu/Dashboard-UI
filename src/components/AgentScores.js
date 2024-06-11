import React, { useEffect, useState } from 'react';

const AgentScores = () => {
    const [ticketsolve, setTicketssolve] = useState([]);

    useEffect(() => {
        fetch('/agentscore.json')
            .then(response => response.json())
            .then(data => {console.log(data);setTicketssolve(data); })
            .catch(error => console.error('Error fetching tickets:', error));
    }, []);

    return (
        <div>
           <h3 className='ui-sub-title'>Agent scores</h3>
            {ticketsolve.map((ticket, index) => (
                <a href='#' key={index} className='ui-tickets-list'>
                    <span>{ticket.name}</span> 
                    <span> {ticket.percentage}%</span>
                </a>
            ))}

        </div>
    );
};

export default AgentScores;
