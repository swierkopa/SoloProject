import * as types from './ActionTypes';


//action for submitting completed NEW REQUEST form
export const createTicket = event => (dispatch, getState) => {
  // event.preventDefault();
  const name = getState().tickets.newName;
  const problem = getState().tickets.newProblem;
  const expect = getState().tickets.newExpect;
  const tried = getState().tickets.newTried;
  const suspect = getState().tickets.newSuspect;
  const zoom = getState().tickets.newZoom;

  const ticket = {
    name: name,
    problem: problem,
    expect: expect,
    tried: tried,
    suspect: suspect,
    zoom: zoom,
  };

  if (name && problem && expect && tried && suspect && zoom) {
    dispatch({
      type: types.CREATE_TICKET,
      payload: ticket,
    });
  };
};
  


//update NEW REQUEST form inputs in real time
export const updateName = data => ({
  type: types.UPDATE_NAME,
  payload: data,
});

export const updateProblem = data => ({
  type: types.UPDATE_PROBLEM,
  payload: data,
});

export const updateExpect = data => ({
  type: types.UPDATE_EXPECT,
  payload: data,
});

export const updateTried = data => ({
  type: types.UPDATE_TRIED,
  payload: data,
});

export const updateSuspect = data => ({
  type: types.UPDATE_SUSPECT,
  payload: data,
});

export const updateZoom = data => ({
  type: types.UPDATE_ZOOM,
  payload: data,
});


//delete a ticket from active tickets
export const deleteTicket = index => (dispatch, getState) => {
  const deletedTicket = getState().tickets.activeTicketList.find(ticket => ticket.index === index);
  const indexOfDeleted = getState().tickets.activeTicketList.indexOf(deletedTicket);

  dispatch({
    type: types.DELETE_TICKET,
    payload: indexOfDeleted,
  });
};

//update an existing ticket
export const updateTicket = data => ({
  type: types.UPDATE_TICKET,
  payload: data,
});
