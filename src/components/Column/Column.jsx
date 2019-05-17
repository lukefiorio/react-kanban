import React from 'react';
import CardList from '../../containers/CardList/CardList';

const Column = (props) => {
  const { status_id, cards } = props;

  //
  return (
    <div className="card-list">
      <CardList key={idx} title={card.title} body={card.body} status={card.status_id} />
    </div>
  );
};

export default Column;
