import React from 'react';

const Tickets = ({
  name,
  problem,
  expect,
  tried,
  suspect,
  zoom,
  index,
  updateTicket,
  deleteTicket,
}) => {
  return (
  <div className='ticketBox'>
    <p>
      <strong>
        Name:
      </strong>
      {name}
    </p>
    <br/>

    <p>
      <strong>
        Problem:
      </strong>
      {problem}
    </p>
    <br/>

    <p>
      <strong>
        Expectation:
      </strong>
      {expect}
    </p>
    <br/>

    <p>
      <strong>
        Tried:
      </strong>
      {tried}
    </p>
    <br/>    

    <p>
      <strong>
        Suspected reason:
      </strong>
      {suspect}
    </p>
    <br/>

    <p>
      <strong>
        Zoom Link:
      </strong>
      {zoom}
    </p>
    <br/>

    <p>
      <strong>
        Ticket No.:
      </strong>
      {index}
    </p>
    <br/>

    <div className='ticketButtons'>
      <button 
        id='deleteButton'
        onClick={deleteTicket}>
          Delete Ticket
      </button>
    </div>
  </div>
  )
}

export default Tickets;