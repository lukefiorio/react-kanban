import { LOAD_CARDS, ADD_CARD, CHANGE_STATUS } from '../actions';

const initialState = {
  cards: [],
};

function cardReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
      return Object.assign({}, state, { cards: [...state.cards, action.payload] });
    case LOAD_CARDS:
      return Object.assign({}, state, { cards: [...action.payload] });
    case CHANGE_STATUS:
      // almost certainly needs to be updated
      return Object.assign({}, { cards: [...action.payload] });
    default:
      return state;
  }
}

export default cardReducer;
