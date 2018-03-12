
import { initialState } from '../store/configureStore';

const createEventReducer = (state = [], action) => {  
  switch (action.type) {
    case 'CREATE_EVENT':
      return (
        [action.event, ...state]
      );
    default:
      return state;
  }
};

export default createEventReducer;
