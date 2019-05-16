export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const CHANGE_STATUS = 'CHANGE_STATUS';

export const loadCards = () => {
  return (dispatch) => {
    return fetch('/api/cards')
      .then((response) => {
        console.log('fetch:', response);
        return response.json();
      })
      .then((cards) => {
        console.log('dispatch:', cards);
        return dispatch({
          type: LOAD_CARDS,
          payload: cards,
        });
      })
      .catch((err) => {
        console.log('error', err);
      });
  };
};

export function addCard(newCard) {
  return (dispatch) => {
    // call out to server
    return fetch('/api/cards', {
      method: 'POST',
      body: JSON.stringify(newCard),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        return dispatch({
          type: ADD_CARD,
          payload: body,
        });
      });
  };
}

export function changeStatus(editCard) {
  return (dispatch) => {
    // call out to server
    return fetch('/api/cards', {
      method: 'PUT',
      body: JSON.stringify(editCard),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        return dispatch({
          type: CHANGE_STATUS,
          payload: body,
        });
      });
  };
}
