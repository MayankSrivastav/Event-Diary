
import { createStore } from 'redux';
import indexReducer from '../reducers/indexReducer';

export let initialState = {
  allEvents: []
};

export function configureStore() {
  return createStore(indexReducer, initialState);
}
