import {
  ADD_CARD,
  LOAD_CARDS,
  LOAD_USERS,
  CHANGE_STATUS,
  LOAD_PRIORITIES,
  LOAD_STATUSES,
  DELETE_CARD,
} from '../actions';

const initialState = {
  cards: [],
  users: [],
  statuses: [],
  priorities: [],
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
    case DELETE_CARD:
      return Object.assign({}, state, { cards: [...action.payload] });
    case CHANGE_STATUS:
      // almost certainly needs to be updated
      return Object.assign({}, state, { cards: [...action.payload] });
    default:
      return state;
  }
}

export default cardReducer;
