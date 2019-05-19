export const LOAD_PRIORITIES = 'LOAD_PRIORITIES';
export const LOAD_STATUSES = 'LOAD_STATUSES';
export const ADD_CARD = 'ADD_CARD';
export const LOAD_CARDS = 'LOAD_CARDS';
export const CHANGE_STATUS = 'CHANGE_STATUS';
export const LOAD_USERS = 'LOAD_USERS';
export const DELETE_CARD = 'DELETE_CARD';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const EDIT_CARD = 'EDIT_CARD';

export const loadPriorities = () => {
  return (dispatch) => {
    return fetch('/api/priorities')
      .then((response) => {
        return response.json();
      })
      .then((priorities) => {
        return dispatch({
          type: LOAD_PRIORITIES,
          payload: priorities,
        });
      })
      .catch((err) => {
        console.log('error', err);
      });
  };
};

export const loadStatuses = () => {
  return (dispatch) => {
    return fetch('/api/statuses')
      .then((response) => {
        return response.json();
      })
      .then((statuses) => {
        return dispatch({
          type: LOAD_STATUSES,
          payload: statuses,
        });
      })
      .catch((err) => {
        console.log('error', err);
      });
  };
};

export const loadUsers = () => {
  return (dispatch) => {
    return fetch('/api/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        return dispatch({
          type: LOAD_USERS,
          payload: users,
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
      })
      .catch((err) => {
        console.log('error:', err);
      });
  };
}

export function showModal(id) {
  return (dispatch) => {
    return fetch(`/api/cards/${id}`, {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        // console.log(body);
        return dispatch({
          type: SHOW_MODAL,
          payload: body,
        });
      });
  };
}

export function hideModal() {
  return (dispatch) => {
    return dispatch({
      type: HIDE_MODAL,
    });
  };
}

export function editCard(id) {
  return (dispatch) => {
    return fetch(`/api/cards/${id}`, {
      method: 'PUT',
    })
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        return dispatch({
          type: EDIT_CARD,
          payload: body,
        });
      })
      .catch((err) => {
        console.log('error:', err);
      });
  };
}

export function deleteCard(id) {
  return (dispatch) => {
    return fetch(`/api/cards/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        return dispatch({
          type: DELETE_CARD,
          payload: body,
        });
      })
      .catch((err) => {
        console.log('error:', err);
      });
  };
}

export const loadCards = () => {
  return (dispatch) => {
    return fetch('/api/cards')
      .then((response) => {
        return response.json();
      })
      .then((cards) => {
        // console.log('dispatch:', cards);
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

export function changeStatus(editedCard) {
  return (dispatch) => {
    // call out to server
    return fetch('/api/cards', {
      method: 'PUT',
      body: JSON.stringify(editedCard),
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
