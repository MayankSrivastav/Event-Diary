
import { combineReducers } from 'redux';
import createEventReducer from '../reducers/createEventReducer';
// import fetchEventsReducer from '../reducers/fetchEventsReducer';

const reducer = combineReducers({
  allEvents: createEventReducer,
  // allEvents: fetchEventsReducer
});
export default reducer;
