import React, { useEffect, useState } from 'react';

const TicketsSolve = () => {
    const [ticketsolve, setTicketssolve] = useState([]);

    useEffect(() => {
        fetch('/ticketssolve.json')
            .then(response => response.json())
            .then(data => {console.log(data);setTicketssolve(data); })
            .catch(error => console.error('Error fetching tickets:', error));
    }, []);

    return (
        <div>
           <h2 className='ui-title'>Top ticket solvers this week</h2>
            {ticketsolve.map((ticket, index) => (
                <a href='#' key={index} className='ui-tickets-list'>
                    <span>{ticket.name}</span> 
                    <span> {ticket.ticketssolve} </span>
                </a>
            ))}

        </div>
    );
};

export default TicketsSolve;
