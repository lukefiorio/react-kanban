export const LOAD_CARDS = 'LOAD_CARDS';

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
