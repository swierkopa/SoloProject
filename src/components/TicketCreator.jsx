import React from 'react';

const TicketCreator = ({ createTicket, 
  updateName,
  updateProblem,
  updateExpect,
  updateTried,
  updateSuspect,
  updateZoom,
  newName,
  newProblem,
  newExpect,
  newTried,
  newSuspect,
  newZoom, 
}) => {
  return (
  <div>
    <form id='newTicket' onSubmit={createTicket}>
      <label>Name:</label><br/>
      <input 
        type='text'
        value={newName}
        onChange={e => updateName(e.target.value)}
      /><br/>
      <label>What is the problem?</label><br/>
      <input 
        type='text'
        value={newProblem}
        onChange={e => updateProblem(e.target.value)}
      /><br/>
      <label>What did I expect to happen?</label><br/>
      <input 
        type='text'
        value={newExpect}
        onChange={e => updateExpect(e.target.value)}
      /><br/>
      <label>What have I tried?</label><br/>
      <input 
        type='text'
        value={newTried}
        onChange={e => updateTried(e.target.value)}
      /><br/>
      <label>Why I suspect it is not working</label><br/>
      <input 
        type='text'
        value={newSuspect}
        onChange={e => updateSuspect(e.target.value)}
      /><br/>
      <label>Zoom link:</label><br/>
      <input 
        type='text'
        value={newZoom}
        onChange={e => updateZoom(e.target.value)}
      /><br/>
      <button type='submit'>Create Request</button>
    </form>
  </div>
  );
}

export default TicketCreator;