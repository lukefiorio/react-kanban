import React from 'react';
import CardList from '../../containers/CardList/CardList';

const Column = (props) => {
  const { cards, status } = props;

  //
  return (
    <div className="card-list">
      <CardList cards={cards} status={status} />
    </div>
  );
};

export default Column;
