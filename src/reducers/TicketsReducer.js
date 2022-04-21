import * as types from '../actions/ActionTypes';

//Reducers are responsible for providing initial state
const initialState = {
  activeTicketList: [],
  newName: '',
  newProblem: '',
  newExpect: '',
  newTried: '',
  newSuspect: '',
  newZoom: '',
};

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_TICKET:
      return {
        ...state,
        activeTicketList: [
          ...state.activeTicketList,
          action.payload
        ]
      };

    //update in real time as user changes textbox inputs

    case types.UPDATE_NAME:
      return {
        ...state,
        newName: action.payload,
      };

    case types.UPDATE_PROBLEM:
      return {
        ...state,
        newProblem: action.payload,
      };

    case types.UPDATE_EXPECT:
      return {
        ...state,
        newExpect: action.payload,
      };

    case types.UPDATE_TRIED:
      return {
        ...state,
        newTried: action.payload,
      };   
      
    case types.UPDATE_SUSPECT:
      return {
        ...state,
        newSuspect: action.payload,
      };

    case types.UPDATE_ZOOM:
      return {
        ...state,
        newZoom: action.payload,
      };      



    //finish these if you have time  
    case types.DELETE_TICKET:
      return {
        ...state,
        activeTicketList: [
          ...state.activeTicketList.splice(action.payload, 1),
        ]
        //finish this code later
      };

    case types.UPDATE_TICKET:
      return {
        ...state,
        //finish this code later
      }

    default:
      return state;
  }
}

export default ticketsReducer;