import React from 'react';
import Tickets from './Tickets.jsx';

const ticketMaker = (ticket, index, props) => (
  <Tickets
    { ...ticket }
    key={index}
    index={index}
    updateTicket={() => props.updateTicket(index)}
    deleteTicket={() => props.deleteTicket(index)}
  />
)

const ActiveTicketDisplay = props => {
  return (
  <div>
    <h2>Active Tickets</h2>
    <div id='all-markets'>
      {props.activeTicketList.map((ticket, index) => ticketMaker(ticket, index, props))}
    </div>
  </div>
  )
};

export default ActiveTicketDisplay;