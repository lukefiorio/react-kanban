import { ADD_CARD, LOAD_CARDS, LOAD_USERS, CHANGE_STATUS, LOAD_PRIORITIES, LOAD_STATUSES } from '../actions';

const initialState = {
  cards: [],
  users: [],
};

function cardReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
      return Object.assign({}, state, { cards: [...state.cards, action.payload] });
    case LOAD_CARDS:
      return Object.assign({}, state, { cards: [...action.payload] });
    case LOAD_USERS:
      return Object.assign({}, state, { users: [...action.payload] });
    case LOAD_STATUSES:
      return Object.assign({}, state, { statuses: [...action.payload] });
    case LOAD_PRIORITIES:
      return Object.assign({}, state, { priorities: [...action.payload] });
    case CHANGE_STATUS:
      // almost certainly needs to be updated
      return Object.assign({}, { cards: [...action.payload] });
    default:
      return state;
  }
}

export default cardReducer;
