import { combineReducers } from 'redux';
import ticketsReducer from './TicketsReducer';

export default combineReducers({
  tickets: ticketsReducer,
});

