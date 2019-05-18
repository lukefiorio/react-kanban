import React from 'react';
import CardList from '../../containers/CardList/CardList';

const Column = (props) => {
  console.log(props.key);
  const { cards, status, status_name } = props;

  return (
    <div className="card-list">
      <h3>{status_name}</h3>
      <CardList cards={cards} status={status} />
    </div>
  );
};

export default Column;
