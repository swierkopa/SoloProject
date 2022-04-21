import React from 'react';
import TicketCreator from '../components/TicketCreator.jsx';
import ActiveTicketDisplay from '../components/ActiveTicketDisplay.jsx';
//connect allows us to connect our React component to the Redux store
import { connect } from 'react-redux';
import * as actions from '../actions/ActionCreators';
import { bindActionCreators } from 'redux';


//called everytime the store state changes
//receives entire store state, and should return an object of data this component needs
const mapStateToProps = ({ tickets }) => {
  return {
    activeTicketList: tickets.activeTicketList,
    newName: tickets.newName,
    newProblem: tickets.newProblem,
    newExpect: tickets.newExpect,
    newTried: tickets.newTried,
    newSuspect: tickets.newSuspect,
    newZoom: tickets.newZoom,
  };
};

//allows us to specify which actions your components might need to dispatch
//general form is to name the key the same as the function, and its value to the eval result of calling
//function from actions object imported above.
//alternative way to do this is using bindActionCreators, passing in actions object and dispatch to pair
//each action as a key with a value of the invoked function in dispatch brackets
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);


const MainContainer = props => {
  return (
  <div>
    <div className='container'>
      <h1>MainContainer Header</h1>
      <TicketCreator
        createTicket={props.createTicket}
        updateName={props.updateName}
        updateProblem={props.updateProblem}
        updateExpect={props.updateExpect}
        updateTried={props.updateTried}
        updateSuspect={props.updateSuspect}
        updateZoom={props.updateZoom}
        newName={props.newName}
        newProblem={props.newProblem}
        newExpect={props.newExpect}
        newTried={props.newTried}
        newSuspect={props.newSuspect}
        newZoom={props.newZoom}
      />
      <ActiveTicketDisplay
        updateTicket={props.updateTicket}
        deleteTicket={props.deleteTicket}
        activeTicketList={props.activeTicketList}
      />
    </div>
  </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);