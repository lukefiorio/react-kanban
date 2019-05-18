import React from 'react';
import CardList from '../../containers/CardList/CardList';

const Column = (props) => {
  const { cards, status, status_name } = props;

  return (
    <div className="card-list">
      <h3 className="columnHeader">{status_name}</h3>
      <CardList cards={cards} status={status} />
    </div>
  );
};

export default Column;
